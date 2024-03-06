module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['standard', 'plugin:react/recommended', 'plugin:react/jsx-runtime', 'prettier'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    "import/order": [
      "error",
      {
        "pathGroups": [
          {
            "pattern": "**/*",
            "group": "external"
          }
        ],
        "newlines-between": "always",
        "alphabetize": {
          "order": "asc",
          "caseInsensitive": true
        }
      }
    ],
    "quotes": ["warn", "single"],
    "@typescript-eslint/explicit-member-accessibility": "warn"
  },
  settings: {
    react: {
      version: 'detect', // Automatically includes the React version
    },
  },
};
