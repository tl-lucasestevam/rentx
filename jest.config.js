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
    " ^~(.*)$": "<rootDir>/$1",
  },
  testMatch: ["<rootDir>/src/**/**/*.(test|spec).ts(x)"],
};
