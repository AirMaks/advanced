import path from "path";

export default {
    clearMocks: true,
    testEnvironment: "jsdom",
    moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node"],
    modulePaths: ["src"],
    rootDir: "../../",
    setupFilesAfterEnv: ["<rootDir>/config/jest/setupTests.ts"],
    moduleNameMapper: {
        "\\.s?css$": "identity-obj-proxy",
        "\\.svg$": path.resolve(__dirname, "jestEmptyComponent.tsx").replace(/\\/g, "/"),
        "^entities/(.*)$": "<rootDir>/src/entities/$1"
    },
    globals: {
        __IS_DEV__: true
    }
};
