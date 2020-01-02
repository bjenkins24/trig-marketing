module.exports = {
  transform: {
    '^.+\\.jsx?$': `<rootDir>/jest.preprocess.js`,
  },
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `<rootDir>/__mocks__/file-mock.js`,
  },
  collectCoverageFrom: [
    '**/src/**/*.js',
    '!**/src/test/**/*.js',
    '!**/src/helpers/hooks/useSiteMetadata.js',
    '!**/src/fonts/**/*.js',
    '!**/src/pages/**/*.js',
  ],
  testPathIgnorePatterns: [`node_modules`, `.cache`, `public`],
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
  globals: {
    __PATH_PREFIX__: ``,
  },
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100,
    },
  },
  setupFiles: [`<rootDir>/loadershim.js`],
  setupFilesAfterEnv: [
    'jest-styled-components',
    '@testing-library/jest-dom/extend-expect',
  ],
};
