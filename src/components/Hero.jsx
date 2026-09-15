export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="wrap hero-narrow">
        
        {/* Imagen Título Principal (Aún más achicada para ver la preview del video) */}
        <h1 className="hero-main-title">
          <img 
            src="/CARRITO_NARAJA.PNG" 
            alt="La Fórmula del Carrito Naranja" 
            style={{ 
              maxWidth: "200px", 
              width: "100%", 
              height: "auto", 
              margin: "0 auto 16px", 
              display: "block" 
            }} 
          />
        </h1>

        {/* Bajada / Copy Principal */}
        <div className="hero-pitch">
          <h2>
            NO ESPERES A QUE ENTREN A TU LOCAL. <br />
            <span>LLEVA TUS PRODUCTOS A SU PANTALLA.</span>
          </h2>
          <p>Abre tu TikTok Shop y dale una nueva forma de vender a tu negocio.</p>
        </div>

        {/* Duración con Icono de Reloj */}
        <div className="hero-badge">
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="var(--gold)" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            style={{ flexShrink: 0 }}
          >
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
          <span>En 3 horas, aprende a abrir tu tienda, publicar tus productos y vender en vivo.</span>
        </div>

        {/* Video Frame */}
        <div className="hero-video-frame hero-video-frame--wide">
          <video 
            className="video" 
            controls 
            autoPlay 
            muted 
            playsInline 
            poster="/thumbnail-hero.png"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
            Tu navegador no soporta el reproductor de video.
          </video>
        </div>

        {/* Sección CTA con Texto y Botón */}
        <div className="hero-cta" style={{ textAlign: "center", marginTop: "40px" }}>
          <h3 style={{ fontSize: "1.5rem", fontWeight: "bold", margin: "0 0 4px 0", color: "#fff" }}>
            Estás a
          </h3>
          <p style={{ fontSize: "1.8rem", fontWeight: "bold", color: "var(--gold)", margin: "0 0 4px 0" }}>
            $27 dólares
          </p>
          <h3 style={{ fontSize: "1.5rem", fontWeight: "bold", margin: "0 0 12px 0", color: "#fff" }}>
            de cambiarle la vida a tu negocio.
          </h3>
          
          <p style={{ fontSize: "0.95rem", color: "rgba(255, 255, 255, 0.7)", marginBottom: "20px" }}>
            Y si no me querés creer, mirá la sesión.
          </p>

          <a href="#inscripcion" style={{ display: "inline-block" }}>
            <img 
              src="/QUIERO_INSCRI.png" 
              alt="Quiero Inscribirme: $27 USD" 
              style={{ maxWidth: "340px", width: "100%", height: "auto", display: "block", margin: "0 auto" }} 
            />
          </a>
        </div>

      </div>
    </section>
  );
}