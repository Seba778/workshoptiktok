const STEPS = [
  {
    label: '01 / PREPARA',
    title: 'Construye la base.',
    body: 'Cuenta, requisitos, catálogo y operación: conoce lo que debes tener listo.',
  },
  {
    label: '02 / CONECTA',
    title: 'Presenta tu producto.',
    body: 'Contenido y LIVE que explican su valor, responden dudas y facilitan la decisión de compra.',
  },
  {
    label: '03 / ACTIVA',
    title: 'Ordena tus próximos pasos.',
    body: 'Identifica qué preparar, qué publicar y qué revisar para poner tu estrategia en marcha.',
  },
];

export default function Method() {
  return (
    <section>
      <div className="wrap">
        <p className="eyebrow">Una ruta para empezar</p>
        <h2>
          Las ventas en vivo son
          <br />
          <em>
            el presente y el futuro
            <br />
            del e-commerce.
          </em>
        </h2>
        <p className="lead">
          Tu próximo paso es aprender a conectar producto, contenido y operación. Empezá a
          construir las bases de tu negocio en TikTok Shop en un solo workshop en vivo.
        </p>
        <div className="method stagger">
          {STEPS.map((s) => (
            <article key={s.label}>
              <span className="num">{s.label}</span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </article>
          ))}
        </div>
        <a className="btn" href="#inscripcion" style={{ marginTop: 8 }}>
          Quiero mi lugar por $27 ↗
        </a>
      </div>
    </section>
  );
}