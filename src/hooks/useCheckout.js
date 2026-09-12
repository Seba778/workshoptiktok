import { useState } from 'react';

const API_URL = import.meta.env.VITE_API_URL || '';

/**
 * Llama al backend para crear una sesión de Stripe Checkout y redirige
 * al usuario ahí. Mientras VITE_API_URL no esté configurada (o el backend
 * no esté desplegado todavía), abre el modal de "boceto" en su lugar.
 */
export function useCheckout(dialogRef) {
  const [loading, setLoading] = useState(false);
  const checkoutConfigured = Boolean(API_URL);

  const handleCheckout = async () => {
    if (!checkoutConfigured) {
      dialogRef?.current?.showModal();
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/create-checkout-session`, { method: 'POST' });
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

  return { handleCheckout, checkoutConfigured, loading };
}