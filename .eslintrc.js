module.exports = {
  env: {
    browser: true,
    es2021: true,
    "jest/globals": true,
  },
  extends: [
    "airbnb-base",
    "plugin:jest/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "import/prefer-default-export": "off",
    "no-console": "off",
    "no-restricted-globals": "off",
    "no-restricted-syntax": "off",
    "import/no-unresolved": "off", // https://github.com/typescript-eslint/typescript-eslint/issues/1624
    "import/extensions": ["warn", "never"],
    "@typescript-eslint/no-var-requires": "off",
    "no-void": "off",
    "no-extend-native": ["error", { exceptions: ["Function"] }],
    "one-var": ["error", "consecutive"],
    "no-else-return": "off",
    "no-promise-executor-return": "off",
    "arrow-body-style": "off",
  },
};
