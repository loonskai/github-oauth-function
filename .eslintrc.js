module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ["eslint:recommended", "airbnb-base", "prettier"],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    "eslint-disable-next-line": "off",
    "func-names": "off",
    "import/no-import-module-exports": "off",
    indent: ["error", 2],
  },
};
