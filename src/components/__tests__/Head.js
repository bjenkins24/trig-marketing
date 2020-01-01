import React from 'react';
import { StaticQuery } from 'gatsby';
import Head from '../Head';
import { render } from '../../test/utils';

jest.spyOn(console, 'error').mockImplementation(() => {});

jest.mock('react-helmet', () => ({
  __esModule: true,
  Helmet: props => <div {...props} />,
}));

beforeEach(() => {
  StaticQuery.mockImplementationOnce(({ render: renderStatic }) =>
    renderStatic({
      site: {
        siteMetadata: {
          siteTitle: 'Trig',
          siteDescription: 'Knowledge Management for Teams',
          siteUrl: 'https://trytrig.com',
          themeColor: '#2C2929',
          social: {
            twitter: 'gatsbyjs',
            fbAppId: '966242223397117',
          },
        },
      },
    })
  );
});

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

  it('renders canonical correctly with pathname', () => {
    const { getByTestId } = render(<Head location={{ pathname: '/hello' }} />);
    expect(getByTestId('head__canonical')).toHaveAttribute(
      'href',
      'https://trytrig.com/hello'
    );
  });

  it('renders canonical correctly without pathname', () => {
    const { getByTestId } = render(<Head location={{ pathname: false }} />);
    expect(getByTestId('head__canonical')).toHaveAttribute(
      'href',
      'https://trytrig.com'
    );
  });
});
