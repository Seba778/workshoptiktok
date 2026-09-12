import { useEffect, useState } from 'react';

const BONUS_KEY = 'bunker-formula-host-offer-v1';
const BONUS_MS = 5 * 60 * 1000;

function readStoredDeadline() {
  try {
    const saved = localStorage.getItem(BONUS_KEY);
    if (saved === null) return { deadline: null, storageReady: true };
    const n = Number(saved);
    return { deadline: Number.isFinite(n) && n > 0 ? n : 1, storageReady: true };
  } catch (_) {
    return { deadline: null, storageReady: false };
  }
}

function secondsLeft(end, now) {
  return Math.max(0, Math.ceil((end - now) / 1000));
}

/**
 * Reproduce el temporizador de 5 minutos del boceto original:
 * - arranca al montar (si no hay uno guardado ya)
 * - persiste en localStorage para no reiniciarse al recargar
 * - se sincroniza entre pestañas vía el evento "storage"
 */
export function useBonusTimer() {
  const [deadline, setDeadline] = useState(null);
  const [storageReady, setStorageReady] = useState(true);
  const [seconds, setSeconds] = useState(null);

  useEffect(() => {
    const initial = readStoredDeadline();
    let currentDeadline = initial.deadline;
    setStorageReady(initial.storageReady);

    if (currentDeadline === null && initial.storageReady) {
      currentDeadline = Date.now() + BONUS_MS;
      try {
        localStorage.setItem(BONUS_KEY, String(currentDeadline));
      } catch (_) {
        setStorageReady(false);
      }
    }
    setDeadline(currentDeadline);

    const tick = () => {
      if (currentDeadline !== null) {
        setSeconds(secondsLeft(currentDeadline, Date.now()));
      }
    };
    tick();
    const interval = setInterval(tick, 1000);

    const onStorage = (event) => {
      if (event.key === BONUS_KEY && event.newValue) {
        const n = Number(event.newValue);
        if (Number.isFinite(n)) {
          currentDeadline = currentDeadline === null ? n : Math.min(currentDeadline, n);
          setDeadline(currentDeadline);
          tick();
        }
      }
    };
    window.addEventListener('storage', onStorage);

    return () => {
      clearInterval(interval);
      window.removeEventListener('storage', onStorage);
    };
  }, []);

  const active = storageReady && seconds !== null && seconds > 0;
  const label =
    seconds === null
      ? '--:--'
      : `${String(Math.floor(seconds / 60)).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}`;

  return { seconds, storageReady, active, label };
}