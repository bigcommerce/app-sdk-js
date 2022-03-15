module.exports = {
  testRegex: '(<rootDir>/(test|src)/.*|(\\.|/)(test|spec))\\.[jt]sx?$',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  moduleNameMapper: {
    '@src/(.*)': '<rootDir>/src/$1',
  },
  moduleDirectories: ["node_modules", "src"],
  collectCoverageFrom: [
    'src/**/*.{js,ts}',
  ],
  coverageDirectory: '<rootDir>/coverage',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
};
