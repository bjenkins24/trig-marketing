import React from 'react';
import user from '@testing-library/user-event';
// eslint-disable-next-line
import { render, wait } from '../../test/utils';
import ContactForm from '../ContactForm';

describe('<ContactForm />', () => {
  it('renders and takes basic props', async () => {
    const handler = jest.fn();

    const initialValues = {
      email: 'hello@hello.com',
      topic: 'My topic',
      message: 'cool message',
    };

    const { getByLabelText, getByTestId, rerender } = render(
      <ContactForm afterSubmit={handler} initialValues={initialValues} />
    );
    expect(getByLabelText(/your email address/i)).toBeInTheDocument();
    expect(getByLabelText(/topic/i)).toBeInTheDocument();
    expect(getByLabelText(/message/i)).toBeInTheDocument();

    const submitButton = getByTestId('send-message');

    user.click(submitButton);

    await wait(() => expect(handler.mock.calls.length).toEqual(1));

    rerender(<ContactForm initialValues={initialValues} />);

    user.click(getByTestId('send-message'));
    fetch.mockResponse(() => Promise.reject(new Error('oops')));
    wait();
  });
});
