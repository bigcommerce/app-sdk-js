module.exports = {
  env: {
    browser: true,
  },
  extends: ['eslint:recommended', 'plugin:import/errors', 'plugin:import/warnings', 'plugin:prettier/recommended'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      modules: true,
      jsx: true,
    },
    ecmaVersion: 6,
    sourceType: 'module',
  },
  plugins: ['prettier'],
  ignorePatterns: ['node_modules', 'dist'],
  rules: {
    'array-callback-return': 'error',
    camelcase: ['error', { properties: 'never' }],
    'dot-notation': ['error', { allowKeywords: true }],
    'guard-for-in': 'error',
    'import/no-absolute-path': 'error',
    'import/order': [
      'warn',
      {
        alphabetize: { caseInsensitive: true, order: 'asc' },
        groups: [['builtin', 'external'], 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
      },
    ],
    'max-classes-per-file': ['error', 1],
    'newline-before-return': 'error',
    'no-console': 'warn',
    'no-duplicate-imports': 'error',
    'no-multi-assign': 'error',
    'no-restricted-imports': 'error',
    'no-shadow': ['error', { hoist: 'all' }],
    'no-unneeded-ternary': ['error', { defaultAssignment: false }],
    'no-unused-expressions': 'error',
    'no-unused-vars': ['error', { args: 'after-used', ignoreRestSiblings: true, vars: 'all' }],
    'prefer-const': ['error', { destructuring: 'any', ignoreReadBeforeAssign: true }],
    'prettier/prettier': ['warn', { usePrettierrc: false }],
    'sort-imports': ['error', { ignoreCase: true, ignoreDeclarationSort: true }],
  },
  "overrides": [
    {
      "files": ['**/spec.js', '**/mocks/modules.js'],
      "extends": ["plugin:jest/recommended"],
      plugins: ['jest'],
    },
  ],
};
