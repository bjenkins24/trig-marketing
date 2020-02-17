require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const stripe = require('stripe')(process.env.STRIPE_API_KEY);

export async function handler() {
  const result = await stripe.paymentIntents.create({
    amount: 4000,
    currency: 'usd',
    payment_method_types: ['card'],
    description: 'Lifetime Subscription',
  });

  return {
    statusCode: 200,
    body: JSON.stringify({ clientSecret: result.client_secret }),
  };
}
