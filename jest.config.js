module.exports = {
  verbose: true,
  setupFiles: [
    '<rootDir>/src/config/tests/enzymeSetup.js',
  ],
  snapshotSerializers: [
    'enzyme-to-json/serializer',
  ],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff)$': '<rootDir>/src/config/tests/fileTransformer.js',
  },
  transformIgnorePatterns: [
    '<rootDir>/node_modules/',
  ],
  moduleNameMapper: {
    '^components(.*)$': '<rootDir>/src/components$1',
    '^config(.*)$': '<rootDir>/src/config$1',
    '^assets(.*)$': '<rootDir>/src/assets$1',
    '^services(.*)$': '<rootDir>/src/services$1',
    '^store(.*)$': '<rootDir>/src/store$1',
    '^utils(.*)$': '<rootDir>/src/utils$1',
    '^.+\\.(css|less|scss)$': 'identity-obj-proxy',
    '^-!svg-react-loader(.*)$': '<rootDir>/src/config/tests/__mocks__/svgReactLoaderImport.js',
  },
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!src/**/*stories.js',
    '!**/node_modules/**',
  ],
  coverageDirectory: 'build/coverage',
};
