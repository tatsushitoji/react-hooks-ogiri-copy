module.exports = {
  roots: ['<rootDir>/apps'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '^lodash-es$': 'lodash',
  },
  // "snapshotSerializers": ["enzyme-to-json/serializer"],
  setupFilesAfterEnv: ['<rootDir>setupTests.ts'],
};
