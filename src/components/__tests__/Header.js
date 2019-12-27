import React from 'react';
import { render } from '../../test/utils';
import Header from '../Header';

describe('<Header />', () => {
  it('renders and takes basic props', () => {
      render(<Header />);
  });
});
