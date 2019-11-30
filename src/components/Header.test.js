import React from 'react';
import { ThemeProvider } from 'styled-components';
import renderer from 'react-test-renderer';
import theme from '@trig-app/themes';
import Header from './Header';
import 'jest-styled-components';

test('Header renders correctly', () => {
  expect(
    renderer
      .create(
        <ThemeProvider theme={theme}>
          <Header title="Trig" />
        </ThemeProvider>
      )
      .toJSON()
  ).toMatchSnapshot();
});
