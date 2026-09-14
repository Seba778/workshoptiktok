import React, { useRef, useEffect, useState } from 'react';

const STRIPE_LINK = "https://buy.stripe.com/TU_LINK_DE_STRIPE_AQUI";

export default function Hero() {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          video.muted = true;
          setIsMuted(true);
          video.play();
        });
      }
    }
  }, []);

  const handleUnmute = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      setIsMuted(false);
    }
  };

  return (
    <section className="hero">
      <div className="wrap hero-narrow">
        
        {/* Autor */}
        <div className="hero-author">
          <span className="author-name">KIRK FEWELL</span>
          <span className="author-title">CONSULTOR · ASESOR CREATIVO</span>
        </div>

        <hr className="hero-divider" />

        {/* Título Principal */}
        <p className="eyebrow hero-eyebrow">WORKSHOP TIKTOK SHOP</p>
        <h1 className="hero-main-title">
          <span>La Fórmula del Carrito Naranja</span>
        </h1>

        {/* Video Frame */}
        <div className="hero-video-frame hero-video-frame--wide" style={{ position: 'relative' }}>
          <video 
            ref={videoRef}
            className="video" 
            controls 
            playsInline 
            poster="/poster.jpg"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
            Tu navegador no soporta videos.
          </video>

          {isMuted && (
            <button 
              onClick={handleUnmute}
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                color: '#fff',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                padding: '12px 24px',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: '600',
                zIndex: 10,
                backdropFilter: 'blur(4px)',
                letterSpacing: '0.5px'
              }}
            >
              Hacé clic para activar el sonido
            </button>
          )}
        </div>

        {/* Pitch & Placa CTA Principal */}
        <div className="hero-pitch" style={{ marginTop: '36px' }}>
          <h2>
            Estás a <span>$27 dólares</span> de cambiarle la vida a tu negocio.
          </h2>
          <p className="muted">Y si no me crees, te veo en la sesión.</p>

          <a 
            href={STRIPE_LINK} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-placa-wrapper"
          >
            <img 
              src="/IMG_4845.PNG" 
              alt="Quiero Inscribirme: $27 USD" 
              className="btn-placa-img" 
            />
          </a>
        </div>

        {/* Grid de 3 Pilares con Iconos 3D */}
        <div className="hero-learn">
          <p className="eyebrow">¿QUÉ VAS A APRENDER?</p>
          
          <div className="hero-learn-list">
            <div className="hero-learn-item">
              <img 
                src="/IMG_4840.PNG" 
                alt="Abre tu tienda paso a paso" 
                className="hero-learn-icon-img" 
              />
              <div>
                <h3>Abre tu tienda paso a paso</h3>
                <p>Te enseño cómo abrir tu tienda en TikTok Shop, revisar los requisitos y quedar aprobado para vender.</p>
              </div>
            </div>

            <div className="hero-learn-item">
              <img 
                src="/IMG_4843.PNG" 
                alt="Crea listings que vendan" 
                className="hero-learn-icon-img" 
              />
              <div>
                <h3>Crea listings que vendan</h3>
                <p>Vas a aprender cómo subir productos, escribir descripciones y hacer fotos de producto atractivas.</p>
              </div>
            </div>

            <div className="hero-learn-item">
              <img 
                src="/IMG_4844.PNG" 
                alt="Domina la consola de LIVE" 
                className="hero-learn-icon-img" 
              />
              <div>
                <h3>Domina la consola de LIVE</h3>
                <p>Te muestro cómo usar la consola, fijar productos y generar transacciones en tus LIVE.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}