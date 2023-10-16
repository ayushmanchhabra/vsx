module.exports = {
    env: {
        es6: true,
        browser: true
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 2023,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
        },
        project: "./tsconfig.json",
    },
    "rules": {
        "no-unused-vars": "warn"
    }
};