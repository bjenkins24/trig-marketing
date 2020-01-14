import React from 'react';
import { render } from '../../../test/utils';
import Pricing from '../Pricing';

describe('<Pricing />', () => {
  it('renders and takes basic props', () => {
    const testId = 'test-id';
    const { getByText, getByTestId } = render(<Pricing data-testid={testId} />);
    expect(getByText('Starter')).toBeInTheDocument();
    expect(getByText('Plus')).toBeInTheDocument();
    expect(getByText('Enterprise')).toBeInTheDocument();
    expect(getByTestId(testId)).toBeInTheDocument();
  });
});
