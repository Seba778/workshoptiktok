export default function Nav() {
  return (
    <header className="nav">
      <div className="wrap">
        <a className="brand" href="#inicio">
          <img 
            src="/CARRITO_NARAJA.PNG" 
            alt="La Fórmula del Carrito Naranja" 
            style={{ height: "56px", width: "auto", display: "block" }} 
          />
        </a>
        <a href="#inscripcion">Reservar por $27 ↗</a>
      </div>
    </header>
  );
}