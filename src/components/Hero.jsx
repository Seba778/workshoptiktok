import { useRef, useState } from 'react';
import SplitWords from './SplitWords';

export default function Hero({ bonus }) {
  const { active, label } = bonus;
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;
    const next = !muted;
    video.muted = next;
    if (!next) {
      video.play().catch(() => {});
    }
    setMuted(next);
  };

  const reservationCopy = active
    ? 'RESERVA en los próximos 5 minutos y recibe un e-book de entrenamiento de HOST GRATIS.'
    : 'El plazo del e-book gratis terminó. Aún puedes reservar tu lugar en el workshop por $27.';
  const reservationCta = active
    ? 'RESERVAR POR $27 + E-BOOK GRATIS ↗'
    : 'RESERVAR MI LUGAR POR $27 ↗';
  const reservationMicro = active
    ? 'Valor del e-book: $300 USD · Gratis al completar tu compra dentro del plazo.'
    : 'Esta reserva ya no incluye el e-book promocional.';

  return (
    <section className="hero" id="inicio">
      <div className="wrap">
        <div className="hero-flow">
          <p className="eyebrow hero-i-eyebrow">Workshop en vivo con Kirk Fewell · En español</p>
          <h1 className="hero-i-title">
            <SplitWords text="LA FÓRMULA DEL" />
            <br />
            <em>
              <SplitWords text="CARRITO NARANJA" startIndex={3} />
            </em>
          </h1>
          <p className="hero-i-subtext">Antes de inscribirte, mirá este video.</p>

          <aside className="hero-video-col hero-i-video">
            <div className="hero-video-frame">
              <video
                ref={videoRef}
                className="video"
                src="/hero-video.mp4"
                autoPlay
                muted={muted}
                loop
                playsInline
                preload="metadata"
                aria-label="Descubre la fórmula del carrito naranja"
              />
              <button
                type="button"
                className="mute-btn"
                onClick={toggleSound}
                aria-pressed={!muted}
                aria-label={muted ? 'Activar sonido del video' : 'Silenciar el video'}
              >
                {muted ? '🔇' : '🔊'}
              </button>
            </div>
            <p className="hero-video-caption">
              <strong>Antes de seguir, un mensaje de Kirk.</strong>
              <br />
              Contale en 60 segundos por qué armó este workshop y a quién le sirve.
            </p>
          </aside>

          <p className="lead hero-i-lead">
            Tienes un producto. O tienes las ganas de emprender. En un workshop en vivo de
            <span className="hours"> 3 horas</span> vas a aprender la fórmula para preparar tu
            negocio en TikTok Shop, usar el carrito naranja y crear LIVE con intención de
            venta.
          </p>
          <div className="offer-inline hero-i-offer">
            <del>$199 USD</del>
            <strong>Ahora $27 USD</strong>
            <span className="capacity">Solo 100 cupos disponibles</span>
          </div>
          <a className="btn hero-i-cta" href="#inscripcion">
            Quiero mi lugar por $27 <span aria-hidden="true">↗</span>
          </a>
          <p className="time-note hero-i-note">
            Workshop 100% en vivo por Zoom, martes 29 de septiembre · Si no llegás a verla en
            directo, te compartimos la grabación después.
          </p>
        </div>

        <div className={`reservation-promo${active ? '' : ' expired'}`} aria-label="Promoción de reserva">
          <p className="scarcity">QUEDAN POCOS LUGARES</p>
          <p className="reservation-copy">
            {active ? (
              <>
                RESERVA en los próximos 5 minutos y recibe un e-book de entrenamiento de HOST{' '}
                <strong>GRATIS.</strong>
              </>
            ) : (
              reservationCopy
            )}
          </p>
          <div
            className="reservation-clock"
            role="timer"
            aria-label="Tiempo restante para reservar con ebook gratis"
          >
            <span>{label}</span>
          </div>
          <p className="clock-label">MINUTOS : SEGUNDOS</p>
          <a className="btn" href="#inscripcion">
            {reservationCta}
          </a>
          <p className="micro">{reservationMicro}</p>
        </div>

        <p className="micro" style={{ textAlign: 'center' }}>
          Con Kirk Fewell · Fundador de Bunker Creative Agency
        </p>

        <div className="proof-strip">
          <div>
            <strong>7 cifras</strong>
            <span>en ventas en TikTok Shop respaldan mi experiencia</span>
          </div>
          <div>
            <strong>Bunker Creative Agency</strong>
            <span>La agencia partner en español más importante de TikTok USA.</span>
          </div>
          <div>
            <strong>En español</strong>
            <span>Para emprendedores y marcas en Estados Unidos</span>
          </div>
        </div>
      </div>
    </section>
  );
}