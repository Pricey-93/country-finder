import type {Config} from 'jest';

const config: Config = {
  clearMocks: true,
  coverageProvider: "v8",
  testEnvironment: 'node',
  verbose: true,
  roots: ["<rootDir>/src"],
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"]
};

export default config;
