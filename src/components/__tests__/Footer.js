import React from 'react';
import { render } from '../../test/utils';
import Footer from '../Footer';

describe('<Footer />', () => {
  it('renders and takes basic props', () => {
    const { getByAltText } = render(<Footer />);
    expect(getByAltText(/logo/i)).toBeInTheDocument();
  });
});
