module.exports = {
  extends: ["expo", "prettier"],
  plugins: ["prettier", "simple-import-sort"],
  rules: {
    "prettier/prettier": "error",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
  },
  parserOptions: {
    sourceType: "module",
    ecmaVersion: "latest",
  },
};
