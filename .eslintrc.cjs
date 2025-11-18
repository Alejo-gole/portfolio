/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["plugin:astro/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  overrides: [
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
      rules: {
        // Puedes agregar reglas específicas para archivos .astro aquí
      },
    },
    {
      files: ["*.ts", "*.tsx"],
      parser: "@typescript-eslint/parser",
      extends: ["plugin:@typescript-eslint/recommended"],
      rules: {
        // Puedes agregar reglas específicas para TypeScript aquí
      },
    },
  ],
};
