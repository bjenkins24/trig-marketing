require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const sgMail = require('@sendgrid/mail');

export async function handler(event, context) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const { from, text, subject } = JSON.parse(event.body);

  const msg = {
    to: 'brian@trytrig.com',
    from,
    subject: `Contact Us Form: ${subject}`,
    text,
  };

  const result = await sgMail.send(msg);

  return {
    statusCode: result[0].statusCode,
    body: JSON.stringify({
      event,
      context,
      result,
    }),
  };
}
