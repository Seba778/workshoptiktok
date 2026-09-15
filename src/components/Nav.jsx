export default function Nav() {
  return (
    <header className="nav">
      <div className="wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span className="eyebrow" style={{ margin: 0, fontSize: '0.85rem', letterSpacing: '1px' }}>
          WORKSHOP EN VIVO · EN ESPAÑOL
        </span>
        <a href="#inscripcion" className="btn-nav">Acceder al Programa</a>
      </div>
    </header>
  );
}