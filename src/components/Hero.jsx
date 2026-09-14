import { useRef, useState } from 'react';

const LEARN_ITEMS = [
  {
    icon: '🏪',
    color: 'mint',
    title: 'Abre tu tienda paso a paso',
    body: 'Te enseño cómo abrir tu tienda en TikTok Shop, revisar los requisitos y quedar aprobado para vender.',
  },
  {
    icon: '✏️',
    color: 'pink',
    title: 'Crea listings que vendan',
    body: 'Vas a aprender cómo subir productos, escribir descripciones y hacer fotos de producto atractivas.',
  },
  {
    icon: '▶️',
    color: 'blue',
    title: 'Domina la consola de LIVE',
    body: 'Te muestro cómo usar la consola, fijar productos y generar transacciones en tus LIVE.',
  },
];

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
      <div className="wrap hero-narrow">
        <p className="hero-badge">
          <span aria-hidden="true">🕐</span> En 3 horas, aprende a abrir tu tienda, publicar
          tus productos y vender en vivo.
        </p>

        <div className="hero-video-frame hero-video-frame--wide">
          <video
            ref={videoRef}
            className="video"
            src="/hero-video.mp4"
            autoPlay
            muted={muted}
            loop
            playsInline
            preload="metadata"
            aria-label="Conoce el workshop"
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
        <p className="hero-video-tag">Conoce el workshop</p>

        <h1 className="hero-headline">
          Estás a <em>$27 dólares</em> de cambiarle la vida a tu negocio.
        </h1>
        <p className="hero-subtext">Y no me creas, míralo en acción.</p>

        <a className="btn btn-orange" href="#inscripcion">
          Quiero inscribirme · $27 USD <span aria-hidden="true">↗</span>
        </a>

        <div className="hero-learn">
          <p className="eyebrow" style={{ textAlign: 'center' }}>
            ¿Qué vas a aprender?
          </p>
          <div className="hero-learn-list stagger">
            {LEARN_ITEMS.map((item) => (
              <div className="hero-learn-item" key={item.title}>
                <span className={`hero-learn-icon hero-learn-icon--${item.color}`} aria-hidden="true">
                  {item.icon}
                </span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </div>
            ))}
          </div>
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