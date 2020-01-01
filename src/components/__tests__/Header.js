import React from 'react';
import { render } from '../../test/utils';
import Header from '../Header';

describe('<Header />', () => {
  it('renders and takes basic props', () => {
    const { getByTitle, getByRole } = render(<Header />);
    expect(getByTitle(/logo/i)).toBeInTheDocument();
    expect(getByRole('button')).toHaveTextContent(/try now/i);
  });
});
