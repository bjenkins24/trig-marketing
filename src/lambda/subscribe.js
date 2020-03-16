require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});
const Mailchimp = require('mailchimp-api-v3');

const mailchimp = new Mailchimp(process.env.MAILCHIMP_API_KEY);

export async function handler(event) {
  const { email } = JSON.parse(event.body);

  const result = await mailchimp.post('/lists/c60363437c/members/', {
    email_address: email,
    status: 'subscribed',
  });

  return {
    statusCode: result.statusCode,
    body: JSON.stringify({ email }),
  };
}
