import { useState } from 'react';

// Si VITE_API_URL está configurada (ej. tu server local en localhost:4000),
// se usa esa. Si no, se llama a la función serverless de Vercel en /api,
// que vive en el mismo dominio de la landing (no necesita Railway ni nada
// corriendo aparte).
const API_URL = import.meta.env.VITE_API_URL || '';
const CHECKOUT_ENDPOINT = API_URL ? `${API_URL}/create-checkout-session` : '/api/create-checkout-session';

export function useCheckout(dialogRef) {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const res = await fetch(CHECKOUT_ENDPOINT, { method: 'POST' });
      if (!res.ok) throw new Error('No se pudo crear la sesión de pago');
      const data = await res.json();
      if (data.url) {
        window.location.assign(data.url);
      } else {
        throw new Error('Respuesta sin URL de checkout');
      }
    } catch (err) {
      console.error(err);
      dialogRef?.current?.showModal();
    } finally {
      setLoading(false);
    }
  };

  return { handleCheckout, checkoutConfigured: true, loading };
}