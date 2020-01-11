import React from 'react';

const mock = jest
  .fn()
  .mockImplementation(({ durationFadeIn, ...restProps }) => {
    // eslint-disable-next-line jsx-a11y/alt-text
    return <img {...restProps} />;
  });

export default mock;
