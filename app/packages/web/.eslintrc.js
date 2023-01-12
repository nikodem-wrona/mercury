module.exports = {
  root: true,
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
  ignorePatterns: ['*.js', 'types.ts'],
  env: {
    node: true,
    jest: true,
  },
  extends: ['next/core-web-vitals', 'plugin:@typescript-eslint/recommended'],
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  rules: {
    '@typescript-eslint/no-unused-vars': [
      'error',
      { ignoreRestSiblings: true },
    ],
  },
  overrides: [
    {
      files: ['*.stories.tsx'],
      rules: {
        '@typescript-eslint/no-magic-numbers': 'off',
      },
    },
    {
      files: ['./types/*.d.ts'],
      rules: {
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-magic-numbers': 'off',
      },
    },
  ],
};
