import { useEffect, useRef, useState } from 'react';

/**
 * Envuelve cualquier sección para que aparezca con una animación sutil
 * (fade + desplazamiento hacia arriba) cuando entra en el viewport al
 * hacer scroll. Usa IntersectionObserver — no depende de librerías externas.
 * Una vez que se vuelve visible, deja de observar (no se repite al volver
 * a scrollear hacia arriba).
 */
export default function Reveal({ children, className = '' }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal${visible ? ' is-visible' : ''} ${className}`.trim()}>
      {children}
    </div>
  );
}