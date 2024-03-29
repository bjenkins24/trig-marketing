import React from 'react';
import theme from '@trig-app/themes';
import { render } from '../../../test/utils';
import Section from '../Section';

describe('<Section />', () => {
  it('renders and takes basic props', () => {
    const children = 'My children';
    const title = 'My title';
    const { getByText, rerender, container } = render(
      <Section>{children}</Section>
    );
    expect(getByText(children)).toBeInTheDocument();
    expect(container.firstChild).toHaveStyleRule('padding', '0');
    expect(container.firstChild).toHaveStyleRule('background', theme.bs[200]);

    rerender(
      <Section fullPadding colored title={title}>
        {children}
      </Section>
    );
    expect(getByText(title)).toBeInTheDocument();
    expect(container.firstChild).toHaveStyleRule('padding', '6.4rem 4rem');
    expect(container.firstChild).toHaveStyleRule('background', theme.bs[300]);
  });
});
