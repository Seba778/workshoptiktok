import { forwardRef } from 'react';

const DraftDialog = forwardRef(function DraftDialog(_, ref) {
  return (
    <dialog ref={ref} aria-labelledby="dialog-title">
      <h2 id="dialog-title">Inscripción próximamente</h2>
      <p>
        Estamos terminando de habilitar el pago. La oferta es de $199 a $27 USD, con 100 cupos
        disponibles. Volvé a intentarlo en breve o escribinos si querés que te avisemos apenas
        esté disponible.
      </p>
      <form method="dialog">
        <button className="btn">Volver al workshop</button>
      </form>
    </dialog>
  );
});

export default DraftDialog;