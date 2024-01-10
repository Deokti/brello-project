// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

export default {
  clearMocks: true,
  rootDir: "../../",
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  coveragePathIgnorePatterns: ["\\\\node_modules\\\\"],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node"],
  moduleDirectories: ["node_modules", "src"],
  testMatch: ["<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)"],
  moduleNameMapper: {
    "\\.(css|scss)$": "identity-obj-proxy",
    "\\.(gif|ttf|eot|svg|png)$": path.resolve(__dirname, "jest.mock.tsx"),
  },
};
