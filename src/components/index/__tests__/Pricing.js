import React from 'react';
import user from '@testing-library/user-event';
// eslint-disable-next-line import/named
import { render, wait } from '../../../test/utils';
import Pricing from '../Pricing';

describe('<Pricing />', () => {
  it('renders and takes basic props', () => {
    const testId = 'test-id';
    const { getByText, getByTestId, getByTitle } = render(
      <Pricing data-testid={testId} />
    );
    expect(getByText('Starter')).toBeInTheDocument();
    expect(getByText('Plus')).toBeInTheDocument();
    expect(getByText('Enterprise')).toBeInTheDocument();
    expect(getByTestId(testId)).toBeInTheDocument();
    user.click(getByTestId('contact-us-button'));
    expect(getByTestId('send-message')).toBeInTheDocument();
    user.click(getByTitle(/close icon/i));
    user.click(getByTestId('contact-us-link'));
    expect(getByTestId('send-message')).toBeInTheDocument();
    wait();
  });
});
