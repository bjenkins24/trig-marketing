import React from 'react';
import { StaticQuery } from 'gatsby';
import { render } from '../../test/utils';
import Layout from '../Layout';

jest.mock('../Head', () => {
  return props => <div data-testid="head" {...props} />;
});

jest.mock('../Header', () => {
  return props => <div data-testid="header" {...props} />;
});

jest.mock('../Footer', () => {
  return props => <div data-testid="footer" {...props} />;
});

jest.mock('../../../global.css', () => {
  return props => <div {...props} />;
});

beforeEach(() => {
  StaticQuery.mockImplementationOnce(({ render: renderStatic }) =>
    renderStatic({
      site: {
        siteMetadata: {
          siteTitle: 'Trig',
        },
      },
    })
  );
});

describe('<Layout />', () => {
  it('renders and takes basic props', () => {
    const content = 'Layout Content';
    const { getByTestId, getByText } = render(
      <Layout>
        <div>{content}</div>
      </Layout>
    );
    expect(getByTestId('head')).toBeInTheDocument();
    expect(getByTestId('header')).toBeInTheDocument();
    expect(getByTestId('footer')).toBeInTheDocument();
    expect(getByText(content)).toBeInTheDocument();
  });
});
