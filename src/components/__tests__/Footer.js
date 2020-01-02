import React from 'react';
import { render } from '../../test/utils';
import Footer from '../Footer';

jest.mock('../../helpers/hooks/useSiteMetadata');

describe('<Footer />', () => {
  it('renders and takes basic props', () => {
    const { getByTitle } = render(<Footer />);
    expect(getByTitle(/trig logo/i)).toBeInTheDocument();
  });
});
