import React from 'react';
import theme from '@trig-app/themes';
// eslint-disable-next-line import/named
import { render, fireEvent } from '../../test/utils';
import Header from '../Header';

jest.mock('../../helpers/hooks/useSiteMetadata');

describe('<Header />', () => {
  it('renders and takes basic props', () => {
    const { getByTitle, getByRole } = render(<Header />);
    expect(getByTitle(/trig logo/i)).toBeInTheDocument();
    expect(getByRole('button')).toHaveTextContent(/try now/i);
  });

  it('changes styles when window is scrolled', () => {
    const { container, rerender } = render(<Header />);

    fireEvent.scroll(window, { target: { pageYOffset: 100 } });
    expect(container.firstChild).toHaveStyleRule('background', theme.bs[200]);

    fireEvent.scroll(window, { target: { pageYOffset: 0 } });
    expect(container.firstChild).toHaveStyleRule('background', theme.bs[200]);

    rerender(<Header isLightTheme={false} />);
    fireEvent.scroll(window, { target: { pageYOffset: 100 } });
    expect(container.firstChild).toHaveStyleRule('background', theme.bs[200]);

    fireEvent.scroll(window, { target: { pageYOffset: 0 } });
    expect(container.firstChild).toHaveStyleRule('background', theme.p);
  });

  it('renders a spacer for height of header', () => {
    const { getByTestId } = render(<Header />);
    expect(getByTestId('header__spacer')).toHaveStyleRule('height', '10.4rem');
  });
});
