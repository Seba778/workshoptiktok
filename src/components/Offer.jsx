export default function Offer({ onCheckout, checkoutConfigured, loading }) {
  return (
    <section id="inscripcion" className="bio">
      <div className="wrap offer">
        <div>
          <p className="eyebrow">Solo 100 cupos disponibles</p>
          <h2>
            Este workshop es
            <br />
            <em>
              un antes y un después
              <br />
              para tu negocio.
            </em>
          </h2>
          <p className="lead">
            Pasa de las ideas sueltas a una ruta para empezar. Reserva tu lugar por $27 y
            aprende en vivo, en una sola sesión de 3 horas, las bases para construir tu negocio
            en TikTok Shop con Kirk Fewell.
          </p>
          <ul className="ticks stagger">
            <li>3 horas en vivo por Zoom, todos los temas de la agenda.</li>
            <li>Configuración, catálogo, pedidos y envíos.</li>
            <li>Contenido, carrito naranja, subastas y giveaways según elegibilidad.</li>
            <li>Checklist, guía de productos y planificador.</li>
            <li>Grabación disponible después si no llegás a verla en vivo.</li>
          </ul>
        </div>
        <div className="offer-card">
          <p className="eyebrow">Workshop en vivo con Kirk Fewell</p>
          <h3>
            LA FÓRMULA DEL
            <br />
            CARRITO NARANJA
          </h3>
          <p className="was">
            Antes <del>$199 USD</del>
          </p>
          <p className="price">
            $27 <span style={{ fontSize: '1rem' }}>USD</span>
          </p>
          <p className="saving">Ahorras $172.</p>
          <span className="capacity">Solo 100 cupos disponibles</span>
          <p className="micro">Da el siguiente paso: reserva tu lugar.</p>
          <dl>
            <div>
              <dt>Modalidad</dt>
              <dd>En vivo por Zoom (grabada)</dd>
            </div>
            <div>
              <dt>Duración</dt>
              <dd>3 horas</dd>
            </div>
            <div>
              <dt>Fecha y hora</dt>
              <dd>Martes 29 de septiembre</dd>
            </div>
            <div>
              <dt>Acceso a la grabación</dt>
              <dd>Se comparte después del workshop</dd>
            </div>
            <div>
              <dt>Idioma</dt>
              <dd>Español</dd>
            </div>
          </dl>
          <button className="btn" type="button" onClick={onCheckout} disabled={loading}>
            {loading ? 'Un momento…' : 'Quiero mi lugar por $27 ↗'}
          </button>
          <p className="micro">[Agregar política de cambios y reembolsos]</p>
          <p className="micro">
            Extra de $300: ebook gratis si completas la compra dentro de tu plazo de cinco
            minutos. <a href="#bonus">Ver promoción</a>.
          </p>
          <p className="micro">
            Al confirmar tu pago vas a recibir por correo el link de acceso al Zoom y al grupo
            de WhatsApp del workshop. Si no podés asistir en vivo, te compartimos la grabación
            después.
          </p>
          <p id="checkout-status">
            {checkoutConfigured
              ? 'Al confirmar, se te redirige al checkout seguro de Stripe.'
              : 'Boceto: la inscripción todavía no está habilitada.'}
          </p>
        </div>
      </div>
    </section>
  );
}