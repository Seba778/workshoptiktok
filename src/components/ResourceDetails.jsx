const INCLUDES = [
  { icon: '🗓️', text: 'Workshop en vivo de 3 horas, martes 29 de septiembre' },
  { icon: '▶️', text: 'Grabación disponible después si no llegás en vivo' },
  { icon: '📋', text: 'Checklist de preparación' },
  { icon: '📦', text: 'Guía de productos' },
  { icon: '🗂️', text: 'Planificador de contenido' },
  { icon: '💬', text: 'Grupo de WhatsApp para resolver dudas antes del workshop' },
];

export default function ResourceDetails() {
  return (
    <section className="resource-details">
      <div className="wrap">
        <p className="eyebrow">Muy simple</p>
        <h2>TU ACCESO INCLUYE</h2>
        <ul className="access-list stagger">
          {INCLUDES.map((item) => (
            <li key={item.text}>
              <span className="access-icon" aria-hidden="true">
                {item.icon}
              </span>
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}