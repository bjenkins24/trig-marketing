import React from 'react';
import styled from 'styled-components';
import theme from '@trig-app/themes';
import { render } from '@testing-library/react';
import wrapRootElement from '../wrapRootElement';

const testId = 'testElement';

const TestElement = styled.div`
  background: ${({ theme: themeTest }) => themeTest.p};
`;

const RootElement = wrapRootElement;

test('add the theme to context correctly', () => {
  const { getByTestId } = render(
    <RootElement element={<TestElement data-testid={testId} />} />
  );
  expect(getByTestId(testId)).toHaveStyleRule('background', theme.p);
});
