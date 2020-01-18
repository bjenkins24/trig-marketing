import React from 'react';
import user from '@testing-library/user-event';
import { render } from '../../test/utils';
import ContactForm from '../ContactForm';

describe('<ContactForm />', () => {
  it('renders and takes basic props', () => {
    const mockCallback = jest.fn();
    const { getByLabelText, getByText } = render(
      <ContactForm afterSubmit={mockCallback} />
    );
    expect(getByLabelText(/your email address/i)).toBeInTheDocument();
    expect(getByLabelText(/topic/i)).toBeInTheDocument();
    expect(getByLabelText(/message/i)).toBeInTheDocument();
    const submitButton = getByText(/send message/i);
    user.click(submitButton);
    expect(mockCallback.mock.calls.length).toEqual(1);
  });
});
