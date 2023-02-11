module.exports = {
    env: {
        browser: true,
        node: true,
        es6: true,
        jest: true
    },
    extends: ["plugin:react/recommended", "plugin:react/jsx-runtime", "standard", "eslint:recommended", "prettier"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: { jsx: true }
    },
    globals: {
        JSX: true,
        __IS_DEV__: true
    },
    settings: {
        "import/resolver": {
            typescript: {
                project: "tsconfig.json"
            }
        },
        react: {
            version: "17.x"
        }
    },
    plugins: ["react", "@typescript-eslint", "prettier"],
    rules: {
        "prettier/prettier": [
            1,
            {
                tabWidth: 4,
                semi: true,
                bracketSameLine: true,
                bracketSpacing: true,
                printWidth: 150,
                arrowParens: "avoid",
                endOfLine: "auto",
                trailingComma: "none"
            }
        ],
        quotes: [2, "double", { avoidEscape: true }],
        "space-before-function-paren": [
            "error",
            {
                anonymous: "never",
                named: "never",
                asyncArrow: "always"
            }
        ],
        semi: [2, "always"],
        "comma-dangle": 0,
        "react/jsx-indent": ["error", 4],
        "no-use-before-define": "off",
        "@typescript-eslint/no-use-before-define": ["error", { functions: false, classes: false, variables: false }],
        "@typescript-eslint/no-unused-vars": [2, { args: "none" }],
        "react/jsx-filename-extension": [2, { extensions: [".js", ".jsx", ".ts", ".tsx"] }],
        "no-restricted-imports": [
            "error",
            {
                paths: [
                    {
                        name: "react",
                        importNames: ["default"],
                        message: "React default is automatically imported by webpack."
                    }
                ]
            }
        ],
        "react/display-name": [0, { ignoreTranspilerName: true }]
    },
    ignorePatterns: ["node_modules"]
};
