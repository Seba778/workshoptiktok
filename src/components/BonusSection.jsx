export default function BonusSection({ bonus }) {
  const { active, storageReady, label } = bonus;

  let message;
  if (!storageReady) {
    message = 'No se pudo conservar el plazo en este navegador. La promoción deberá validarse en el checkout.';
  } else if (active) {
    message = 'Tu extra está disponible durante este plazo.';
  } else {
    message = 'El plazo del ebook gratis terminó. Puedes comprar tu lugar en el workshop por $27 sin este extra.';
  }

  const ctaText = active ? 'Quiero mi lugar + ebook por $27 ↗' : 'Quiero mi lugar por $27 ↗';

  return (
    <section id="bonus" className="bonus-section">
      <div className="wrap split">
        <div>
          <p className="eyebrow">QUEDAN POCOS LUGARES</p>
          <h2>
            ENTRENA TU VOZ.
            <br />
            <em>PROTEGE TU NEGOCIO.</em>
          </h2>
          <h3>Ebook de entrenamiento para host</h3>
          <p>
            Palabras y afirmaciones prohibidas según el contexto, errores frecuentes y buenas
            prácticas para reducir el riesgo de que suspendan tu tienda.
          </p>
          <ul className="ticks stagger">
            <li>Cómo presentar productos y responder objeciones.</li>
            <li>Qué expresiones y promesas evitar en tus LIVE.</li>
            <li>Cómo prevenir infracciones de contenido y operación.</li>
          </ul>
          <p className="micro">
            Las políticas dependen del contexto y pueden cambiar. El ebook no garantiza evitar
            una suspensión.
          </p>
        </div>
        <div className="offer-card">
          <p className="eyebrow">REGALO EXTRA</p>
          <h3>
            ENTRENAMIENTO
            <br />
            PARA HOST
          </h3>
          <p className="was">Valor declarado: $300 USD</p>
          {storageReady && active && (
            <div>
              <p className="price">GRATIS</p>
              <p>RESERVA en los próximos 5 minutos y recibe un e-book de entrenamiento de HOST GRATIS.</p>
              <p className="timer" role="timer" aria-label="Tiempo restante para recibir el ebook">
                <span>{label}</span>
              </p>
            </div>
          )}
          <p role="status">{message}</p>
          <a className="btn" href="#inscripcion">
            {ctaText}
          </a>
          <p className="micro">
            El plazo empieza al abrir la página y no se reinicia al recargar en este navegador.
            Boceto: la elegibilidad final y la entrega se conectarán al pago.
          </p>
        </div>
      </div>
    </section>
  );
}