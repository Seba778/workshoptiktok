const FAQS = [
  {
    q: '¿Necesito tener experiencia en TikTok Shop?',
    a: 'No. El workshop arranca desde cero: preparación de cuenta, verificación y primeros pasos en Seller Center, antes de avanzar a contenido y LIVE.',
  },
  {
    q: '¿Necesito tener productos propios?',
    a: 'No es obligatorio. Si todavía no tenés un producto definido, vas a aprender qué necesitás preparar cuando lo tengas. Si ya vendés, vas a poder aplicar todo directo a tu catálogo actual.',
  },
  {
    q: '¿Puedo participar si estoy empezando desde cero?',
    a: 'Sí, es justamente para eso. No necesitás tienda abierta, seguidores ni experiencia previa en TikTok Shop.',
  },
  {
    q: '¿El workshop queda grabado?',
    a: 'Sí, el workshop se graba. Si no llegás a verla en vivo, te compartimos la grabación después por el mismo medio de contacto.',
  },
  {
    q: '¿Cómo recibiré el acceso?',
    a: 'Al confirmar tu pago con Stripe, recibís por mail el link de Zoom del workshop y el link del grupo de WhatsApp para dudas previas.',
  },
  {
    q: '¿Cuánto cuesta?',
    a: 'De $199 a solo $27 USD por única vez. Hay 100 cupos disponibles para esta fecha.',
  },
  {
    q: '¿Cuándo es el workshop?',
    a: 'Martes 29 de septiembre, en vivo por Zoom. La hora exacta te llega confirmada por mail junto con el link de acceso.',
  },
  {
    q: '¿Las ventas están garantizadas?',
    a: 'No. Vas a salir con fundamentos y herramientas para tomar mejores decisiones. Las ventas dependen del producto, el precio, la ejecución y la demanda de tu negocio.',
  },
];

export default function Faq() {
  return (
    <section className="paper">
      <div className="wrap faq">
        <p className="eyebrow">Resolvamos tus dudas</p>
        <h2>Antes de empezar, resolvamos tus dudas.</h2>
        {FAQS.map((item) => (
          <details key={item.q}>
            <summary>{item.q}</summary>
            <p>{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}