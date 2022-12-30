module.exports = {
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["/node_modules/", "/.next/", "<rootDir>/cypress/"],
  collectCoverage: true,
  collectCoverageFrom: [
    "<rootDir>/src/(components|pages)/**/*.ts(x)",
    "!**/*.stories.ts(x)",
    "!**/_app.tsx",
    "!**/_document.tsx",
  ],
  coverageReporters: ["lcov", "text"],
  setupFilesAfterEnv: ["./__tests__/setup.ts"],
  moduleNameMapper: {
    "\\.(scss|css|sass)$": "identity-obj-proxy",
    "^~(.*)$": "<rootDir>/src/$1",
    '@next/font/(.*)': require.resolve('next/dist/build/jest/__mocks__/nextFontMock.js'),
  },
  testMatch: ["<rootDir>/src/**/**/*.(test|spec).ts(x)"],
};
