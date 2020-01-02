import React from 'react';
import Head from '../Head';
import { render } from '../../test/utils';

jest.spyOn(console, 'error').mockImplementation(() => {});

jest.mock('react-helmet', () => ({
  __esModule: true,
  Helmet: props => <div {...props} />,
}));

jest.mock('../../helpers/hooks/useSiteMetadata');

describe('<Head />', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Head />);
    expect(getByText('Trig')).toBeInTheDocument();
    // Html can't be a child of body
    expect(console.error).toHaveBeenCalledTimes(1);
  });

  it('renders page title', () => {
    const title = 'My Cool Title';
    const { getByText } = render(<Head pageTitle={title} />);
    expect(getByText(`${title} - Trig`)).toBeInTheDocument();
  });
});
