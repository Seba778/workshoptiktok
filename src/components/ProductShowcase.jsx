import bundleMockup from '../assets/bundle-mockup.jpg';

const LABELS = [
  { num: '01', text: 'WORKSHOP EN VIVO' },
  { num: '02', text: 'CHECKLIST' },
  { num: '03', text: 'GUÍA DE PRODUCTOS' },
  { num: '04', text: 'PLANIFICADOR' },
];

export default function ProductShowcase() {
  return (
    <section className="product-showcase" id="producto">
      <div className="wrap">
        <p className="eyebrow">Te presento el workshop en vivo</p>
        <h2>
          LA FÓRMULA DEL
          <br />
          <span>CARRITO NARANJA</span>
        </h2>
        <p className="product-intro">
          3 horas en vivo con Kirk, más tres recursos para implementar y un ebook extra con la
          promoción de cinco minutos.
        </p>
        <img
          className="bundle-image"
          src={bundleMockup}
          width="1320"
          height="1931"
          alt="La fórmula del carrito naranja: workshop en vivo, tres recursos y ebook de entrenamiento para host"
          loading="lazy"
        />
        <p className="digital-note">
          Representación de recursos digitales; no incluye dispositivos ni materiales físicos.
          El ebook para host es un extra sujeto a la promoción de cinco minutos.
        </p>
        <div className="bundle-labels stagger">
          {LABELS.map((item) => (
            <div key={item.num}>
              <span>{item.num}</span> {item.text}
            </div>
          ))}
        </div>
        <a className="btn" href="#inscripcion">
          Quiero mi lugar por $27 ↗
        </a>
        <p className="product-intro small">
          Antes <del>$199</del> · Ahorras $172 · Solo 100 cupos disponibles
        </p>
      </div>
    </section>
  );
}