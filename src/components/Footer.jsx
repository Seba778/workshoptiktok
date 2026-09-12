export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-top">
          <strong>KIRK FEWELL / BUNKER CREATIVE AGENCY</strong>
          <span>Dallas, Texas · Workshop en vivo en español</span>
        </div>
        <p>
          Formación ofrecida por Kirk Fewell / Bunker Creative Agency. La condición de agencia
          partner no implica que este workshop sea una certificación oficial de TikTok.
        </p>
        <span>[Agregar contacto de soporte, términos y aviso de privacidad antes de publicar.]</span>
      </div>
    </footer>
  );
}

export function MobileCta() {
  return (
    <div className="mobile-cta">
      <a className="btn" href="#inscripcion">
        Reservar por $27 ↗
      </a>
    </div>
  );
}