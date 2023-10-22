module.exports = {
  extends: ["next", "next/core-web-vitals", "prettier", "plugin:jsx-a11y/recommended"],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
  },
  parserOptions: {
    babelOptions: {
      presets: ["next/babel"],
    },
  },
  plugins: ["jsx-a11y"],
};
