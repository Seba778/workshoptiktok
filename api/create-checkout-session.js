import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const ZOOM_LINK = process.env.ZOOM_LINK || '[Link de Zoom pendiente]';
const WHATSAPP_GROUP_LINK = process.env.WHATSAPP_GROUP_LINK || '[Link de grupo de WhatsApp pendiente]';
const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:5173';

// Función serverless de Vercel (vive en /api, Vercel la publica sola como
// POST https://tu-dominio.vercel.app/api/create-checkout-session).
// Hace exactamente lo mismo que server/server.js, pero sin necesitar un
// servidor propio corriendo 24/7 en otro lado (Railway, etc.) — Vercel la
// ejecuta bajo demanda, gratis en el plan free.
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Método no permitido' });
  }

  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'La Fórmula del Carrito Naranja — Workshop en vivo con Kirk Fewell',
              description: 'Workshop en vivo de 3 horas · Martes 29 de septiembre',
            },
            unit_amount: 2700, // $27.00 USD, en centavos
          },
          quantity: 1,
        },
      ],
      payment_intent_data: {
        description:
          `¡Gracias por inscribirte al workshop "La Fórmula del Carrito Naranja"! ` +
          `Nos vemos el martes 29 de septiembre. ` +
          `Link de Zoom: ${ZOOM_LINK} · ` +
          `Grupo de WhatsApp (para dudas antes del workshop): ${WHATSAPP_GROUP_LINK}`,
      },
      allow_promotion_codes: true,
      success_url: `${FRONTEND_URL}/gracias.html?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${FRONTEND_URL}/#inscripcion`,
    });

    return res.status(200).json({ url: session.url });
  } catch (err) {
    console.error('Error creando la sesión de Stripe:', err.message);
    return res.status(500).json({ error: 'No se pudo iniciar el pago. Intentá de nuevo en unos minutos.' });
  }
}