import React from 'react';
import { render } from '../../../test/utils';
import Pricing from '../Pricing';

describe('<PricingBlock />', () => {
  it('renders and takes basic props', () => {
    const { getByText } = render(<Pricing />);
    expect(getByText('Starter')).toBeInTheDocument();
    expect(getByText('Plus')).toBeInTheDocument();
    expect(getByText('Enterprise')).toBeInTheDocument();
  });
});
