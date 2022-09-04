module.exports = {
  clearMocks: true,
  transform: {
    '^.+\\.js?$': 'babel-jest', // Adding this line solved the issue
    '^.+\\.ts?$': 'ts-jest',
    '^.+\\.(gql|graphql)$': '<rootDir>/node_modules/jest-transform-graphql',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.ts?$',
  testPathIgnorePatterns: ['\\\\node_modules\\\\'],
  coverageDirectory: 'coverage',
  verbose: true,
  testURL: 'http://localhost/',
  testEnvironment: 'node',
  modulePaths: ['./'],
  moduleNameMapper: {
    '/^src/(.*)$/': '<rootDir>/src/$1',
  },
};
