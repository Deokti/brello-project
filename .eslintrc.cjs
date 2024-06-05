module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:i18next/recommended",
    "prettier",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  rules: {
    indent: ["error", 2],
    "import/no-unresolved": "off",
    "import/prefer-default-export": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["warn"],
    "react/require-default-props": "off",
    "react/react-in-jsx-scope": "off",
    "react/function-component-definition": "off",
    "no-shadow": "off",
    "import/extensions": "off",
    "import/no-extraneous-dependencies": "off",
    "no-underscore-dangle": "off",
    "i18next/no-literal-string": [
      "error",
      {
        markupOnly: true,
        ignoreAttribute: ["to", "onClick", "name", "alt", "language"],
      },
    ],
    "max-len": ["error", { ignoreComments: true, code: 100 }],
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
    "no-param-reassign": "off",
    "no-undef": "off",
    "no-restricted-syntax": [
      "warn",
      {
        selector: "CallExpression[callee.property.name='map'][arguments.0.params.0.name='item']",
        message: "Iterating by item is a bad practice",
      },
      {
        selector: "CallExpression[callee.property.name='find'][arguments.0.params.0.name='item']",
        message: "Iterating by item is a bad practice",
      },
      {
        selector: "CallExpression[callee.property.name='filter'][arguments.0.params.0.name='item']",
        message: "Iterating by item is a bad practice",
      },
      {
        selector: "CallExpression[callee.property.name='reduce'][arguments.0.params.0.name='acc']",
        message: "Naming an accumulating variable acc is a bad practice",
      },
    ],
    "no-console": [
      "warn",
      {
        allow: ["info", "warn", "error"],
      },
    ],
  },
};
