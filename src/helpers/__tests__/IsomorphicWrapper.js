import React from 'react';
import styled from 'styled-components';
import theme from '@trig-app/themes';
import { render } from '@testing-library/react';
import IsomorphicWrapper from '../IsomorphicWrapper';

const testId = 'testElement';

const TestElement = styled.div`
  background: ${({ theme: themeTest }) => themeTest.p};
`;

test('add the theme to context correctly', () => {
  const { getByTestId } = render(
    <div id="___gatsby">
      <IsomorphicWrapper>
        <TestElement data-testid={testId} />
      </IsomorphicWrapper>
    </div>
  );
  expect(getByTestId(testId)).toHaveStyleRule('background', theme.p);
});
