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
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // deprecated
        removeListener: jest.fn(), // deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
    const { getByText } = render(<Head />);
    expect(getByText('Trig')).toBeInTheDocument();
    // Html can't be a child of body
    expect(console.error).toHaveBeenCalledTimes(1);
  });

  it('renders page title', () => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation(query => ({
        matches: true,
        media: query,
        onchange: null,
        addListener: jest.fn(), // deprecated
        removeListener: jest.fn(), // deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
    const title = 'My Cool Title';
    const { getByText } = render(
      <Head socialImageUrl="https://example.com" pageTitle={title} />
    );
    expect(getByText(`${title} | Trig`)).toBeInTheDocument();
  });
});
