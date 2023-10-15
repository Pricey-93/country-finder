import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  verbose: true,
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["./jest.setup.ts"],
};

export default config;
