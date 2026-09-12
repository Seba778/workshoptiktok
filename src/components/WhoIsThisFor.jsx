const PAINS = [
  {
    b: 'Tienes una marca o un negocio.',
    p: 'Quieres llevar tus productos a TikTok Shop y aprender a presentarlos con una estrategia de venta.',
  },
  {
    b: 'Quieres emprender tu propio negocio.',
    p: 'Aún no tienes una tienda o un producto definido y quieres entender cómo empezar un negocio en TikTok Shop.',
  },
  {
    b: 'Tu tienda necesita orden.',
    p: 'Ya abriste una cuenta y necesitas conectar la operación con el contenido.',
  },
];

export default function WhoIsThisFor() {
  return (
    <section className="paper">
      <div className="wrap split">
        <div>
          <p className="eyebrow">¿Es para ti?</p>
          <h2>
            Para quienes tienen
            <br />
            un producto. Y para quienes
            <br />
            quieren emprender.
          </h2>
        </div>
        <div>
          {PAINS.map((item) => (
            <div className="pain" key={item.b}>
              <b>{item.b}</b>
              <p>{item.p}</p>
            </div>
          ))}
          <p className="note" style={{ marginTop: 22 }}>
            No necesitas tener una tienda abierta ni un producto definido para tomar el workshop.
            Necesitas disposición para aprender y construir tu negocio paso a paso.
          </p>
          <a className="btn" href="#inscripcion" style={{ marginTop: 24 }}>
            Quiero empezar por $27 ↗
          </a>
        </div>
      </div>
    </section>
  );
}