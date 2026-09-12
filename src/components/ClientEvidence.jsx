import quienHablamos from '../assets/kf-con-quien-hablamos.jpg';
import noTodasLasMarcas from '../assets/kf-no-todas-las-marcas.jpg';

export default function ClientEvidence() {
  return (
    <section className="brand-note" id="clientes">
      <div className="wrap">
        <p className="eyebrow">Antes de la fórmula</p>
        <h2>
          No hay una receta única
          <br />
          <em>para todas las marcas.</em>
        </h2>
        <p className="lead">
          En Bunker Creative Agency partimos de entender primero a quién le hablás y qué
          necesita tu marca puntualmente — recién ahí tiene sentido hablar de estrategia,
          contenido o carrito naranja.
        </p>
        <div className="brand-note-grid stagger">
          <img
            src={quienHablamos}
            alt="Hay una pregunta mucho más importante: ¿con quién estamos hablando?"
            loading="lazy"
          />
          <img
            src={noTodasLasMarcas}
            alt="No todas las marcas necesitan lo mismo."
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}