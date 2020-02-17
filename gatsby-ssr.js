import React from 'react';
import IsomorphicWrapper from './src/helpers/IsomorphicWrapper';

// eslint-disable-next-line
const wrapRootElement = ({ element }) => {
  return <IsomorphicWrapper>{element}</IsomorphicWrapper>;
};

export { wrapRootElement };
