import React from 'react';
import user from '@testing-library/user-event';
// eslint-disable-next-line
import { render, wait } from '../../test/utils';
import ContactForm from '../ContactForm';

fetch.mockResponse(JSON.stringify({ body: '12345' }));

describe('<ContactForm />', () => {
  it('renders and takes basic props', async () => {
    const handler = jest.fn();

    const initialValues = {
      email: 'hello@hello.com',
      topic: 'My topic',
      message: 'cool message',
    };

    const { getByLabelText, getByTestId, rerender } = render(
      <ContactForm
        isOpen
        onRequestClose={handler}
        initialValues={initialValues}
      />
    );
    expect(getByLabelText(/your email address/i)).toBeInTheDocument();
    expect(getByLabelText(/topic/i)).toBeInTheDocument();
    expect(getByLabelText(/message/i)).toBeInTheDocument();

    const submitButton = getByTestId('send-message');

    user.click(submitButton);

    await wait(() => expect(handler.mock.calls.length).toEqual(1));

    rerender(
      <ContactForm
        isOpen
        onRequestClose={handler}
        initialValues={initialValues}
      />
    );

    user.click(getByTestId('send-message'));

    wait();
  });
});
