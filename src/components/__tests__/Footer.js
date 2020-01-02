import React from 'react';
import mockDate from 'mockdate';
import { render } from '../../test/utils';
import Footer from '../Footer';

jest.mock('../../helpers/hooks/useSiteMetadata');
mockDate.set('2000-11-22');

describe('<Footer />', () => {
  it('renders and takes basic props', () => {
    const { getByTitle, getByText } = render(<Footer />);
    expect(getByTitle(/trig logo/i)).toBeInTheDocument();
    expect(getByText('© 2000 Trig')).toBeInTheDocument();
  });
});
