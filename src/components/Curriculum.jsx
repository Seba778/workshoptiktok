const TOPICS = [
  { num: '01', title: 'Prepara tu cuenta.', body: 'Identifica qué necesitas antes de registrarte y cómo organizar la información para comenzar.' },
  { num: '02', title: 'Entiende la verificación.', body: 'Conoce el proceso de documentación y revisión de tu negocio. La aprobación depende de TikTok Shop.' },
  { num: '03', title: 'Muévete en Seller Center.', body: 'Ubica las herramientas para gestionar productos, inventario y pedidos desde un mismo lugar.' },
  { num: '04', title: 'Presenta productos listos para vender.', body: 'Aprende a preparar títulos, fotos y descripciones que ayuden al comprador a entender tu oferta.' },
  { num: '05', title: 'Organiza tu operación.', body: 'Comprende cómo coordinar inventario, almacén, envíos y gestión de órdenes.' },
  { num: '06', title: 'Crea contenido con intención de venta.', body: 'Trabaja el inicio de tus videos, la demostración del producto y la invitación a comprar.' },
  { num: '07', title: 'Prepara tu primer LIVE de venta.', body: 'Conoce las bases para seleccionar productos, ordenar tu presentación y responder las preguntas de tu audiencia.' },
  { num: '08', title: 'Usa el carrito naranja.', body: 'Aprende a presentar los productos de tu LIVE y guiar a tu audiencia hacia la compra dentro de TikTok Shop.' },
  { num: '09', title: 'Conoce cómo funcionan las subastas.', body: 'Aprende a usar LIVE Auction cuando tu cuenta, categoría y productos sean elegibles, siguiendo las reglas de la plataforma.' },
  { num: '10', title: 'Prepara giveaways.', body: 'Conoce las herramientas y dinámicas permitidas para organizar regalos en tus LIVE, explicar sus condiciones y entregar los premios.' },
  { num: '11', title: 'Trabaja hacia miles de dólares en ventas.', body: 'Aprende a plantear metas de venta y conectar producto, precio, contenido y operación para trabajar hacia ellas. Tus ingresos dependerán de la ejecución y la demanda; no están garantizados.' },
];

export default function Curriculum() {
  return (
    <section id="temario">
      <div className="wrap">
        <p className="eyebrow">Qué vas a ver en las 3 horas</p>
        <h2>
          EN UNA SESIÓN,
          <br />
          <em>APRENDE EL CAMINO COMPLETO.</em>
        </h2>
        <p className="lead">
          Deja de publicar por publicar. Empezá a crear contenido con intención de venta.
          Tocá cada tema para ver de qué se trata.
        </p>
        <div className="accordion-list">
          {TOPICS.map((m) => (
            <details key={m.num}>
              <summary>
                <span className="num">{m.num}</span> {m.title}
              </summary>
              <p>{m.body}</p>
            </details>
          ))}
        </div>
        <a className="btn" href="#inscripcion" style={{ marginTop: 28 }}>
          Quiero mi lugar por $27 ↗
        </a>
      </div>
    </section>
  );
}