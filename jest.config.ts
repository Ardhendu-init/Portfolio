import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^next/image$": "<rootDir>/test/__mocks__/nextImageMock.ts",
    "^.+\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "^.+\\.(jpg|jpeg|png|gif|webp|avif|svg)$":
      "<rootDir>/test/__mocks__/fileMock.ts",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
  testPathIgnorePatterns: ["/node_modules/", "/.next/"],
  transform: {
    "^.+\\.(ts|tsx)$": [
      "ts-jest",
      {
        tsconfig: "<rootDir>/tsconfig.jest.json",
        isolatedModules: true,
      },
    ],
  },
  transformIgnorePatterns: ["/node_modules/(?!(lucide-react)/)"],
  collectCoverageFrom: ["src/**/*.{ts,tsx}"],
  coveragePathIgnorePatterns: ["/node_modules/", "/src/app/globals.css"],
};

export default config;
