import React, { useRef, useEffect } from 'react';

export default function Bio() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          video.muted = false;
          video.play();
        });
      }
    }
  }, []);

  return (
    <section className="bio" id="kirk">
      <div className="wrap split">
        <div className="photo">
          <video 
            ref={videoRef}
            className="bio-video"
            controls 
            autoPlay
            muted
            loop
            playsInline
            style={{ width: '100%', height: 'auto', borderRadius: '8px', display: 'block' }}
          >
            <source src="/IMG_4754.MP4" type="video/mp4" />
            Tu navegador no soporta videos.
          </video>
          <span className="photo-caption">Kirk Fewell · Bunker Creative Agency</span>
        </div>
        <div>
          <p className="eyebrow">Tu consultor</p>
          <h2>
            Soy Kirk Fewell.
            <br />
            <em>
              Creatividad con
              <br />
              visión de negocio.
            </em>
          </h2>
          <p>
            Soy consultor, asesor y creativo. Fundé Bunker Creative Agency para ayudar a las
            marcas a conectar su estrategia, su contenido y sus ventas.
          </p>
          <p>
            Más de un millón de dólares en ventas en TikTok Shop respaldan mi experiencia. Soy
            fundador de <strong>Bunker Creative Agency, la agencia partner en español más
            importante de TikTok USA.</strong> Trabajo con marcas en su estrategia, contenido y
            operación de venta.
          </p>
          <p>
            En este workshop en vivo voy a compartir contigo las bases para entender la
            plataforma, preparar tu tienda y empezar a tomar decisiones con intención.
          </p>
          <div className="role">
            KIRK FEWELL
            <br />
            Fundador y CEO · Bunker Creative Agency
            <br />
            Dallas, Texas
          </div>
          <a className="btn" href="#inscripcion" style={{ marginTop: 26 }}>
            Quiero aprender con Kirk por $27 ↗
          </a>
        </div>
      </div>
    </section>
  );
}