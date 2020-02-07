import { handler } from '../sendMail';

const statusCode = 200;

jest.mock('@sendgrid/mail', () => ({
  setApiKey: () => null,
  send: () => {
    return new Promise(resolve => {
      resolve([{ statusCode: 200, coolStuff: 'is cool' }]);
    });
  },
}));

describe('sendMail()', () => {
  it('calls send mail', async () => {
    const context = { header: 'cool header' };
    const event = {
      body: JSON.stringify({ from: 123, text: 'hello', subject: 'good day' }),
    };
    const result = await handler(event, context);
    expect(result.statusCode).toEqual(statusCode);
    const body = JSON.parse(result.body);
    expect(body.event).toEqual(event);
    expect(body.context).toEqual(context);
    expect(body.result).toEqual([{ statusCode, coolStuff: 'is cool' }]);
  });
});
