import express from 'express';
import cors from 'cors';
import Stripe from 'stripe';
import 'dotenv/config';

const app = express();
app.use(cors());
app.use(express.json());

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const ZOOM_LINK = process.env.ZOOM_LINK || '[Link de Zoom pendiente]';
const WHATSAPP_GROUP_LINK = process.env.WHATSAPP_GROUP_LINK || '[Link de grupo de WhatsApp pendiente]';
const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:5173';

app.get('/', (_req, res) => {
  res.send('Backend de La Fórmula del Carrito Naranja funcionando.');
});

// Crea la sesión de pago de Stripe y devuelve la URL de checkout.
// El frontend llama a este endpoint y redirige al usuario a esa URL.
app.post('/create-checkout-session', async (_req, res) => {
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
      // Este texto es lo que va a aparecer en el recibo automático que Stripe
      // le manda por mail a quien compra (activar "Recibos por mail" en el
      // Dashboard de Stripe > Configuración > Marca, para que se envíe solo).
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

    res.json({ url: session.url });
  } catch (err) {
    console.error('Error creando la sesión de Stripe:', err.message);
    res.status(500).json({ error: 'No se pudo iniciar el pago. Intentá de nuevo en unos minutos.' });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});