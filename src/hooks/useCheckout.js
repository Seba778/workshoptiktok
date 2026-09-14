import { useState } from 'react';

// Acepta tanto VITE_CHECKOUT_URL (link directo de Stripe) como VITE_API_URL (servidor backend)
const CHECKOUT_URL = import.meta.env.VITE_CHECKOUT_URL || import.meta.env.VITE_API_URL || '';

export function useCheckout(dialogRef) {
  const [loading, setLoading] = useState(false);
  const checkoutConfigured = Boolean(CHECKOUT_URL);

  const handleCheckout = async () => {
    if (!checkoutConfigured) {
      dialogRef?.current?.showModal();
      return;
    }

    setLoading(true);
    try {
      // Si es un link directo de Stripe (https://buy.stripe.com/...) o un link externo
      if (CHECKOUT_URL.startsWith('https://buy.stripe.com') || CHECKOUT_URL.startsWith('https://checkout.stripe.com')) {
        window.location.assign(CHECKOUT_URL);
        return;
      }

      // Si es un servidor backend backend
      const res = await fetch(`${CHECKOUT_URL}/create-checkout-session`, { method: 'POST' });
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