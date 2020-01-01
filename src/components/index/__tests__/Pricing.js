import React from 'react';
import { render } from '../../../test/utils';
import Pricing from '../Pricing';

describe('<PricingBlock />', () => {
  it('renders and takes basic props', () => {
    const { getByText } = render(<Pricing />);
    expect(getByText('Starter')).toBeInTheDocument();
    getByText('Plus').toBeInTheDocument();
    getByText('Enterprise').toBeInTheDocument();
  });
});
