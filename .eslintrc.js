module.exports = {
  extends: [
    '@vinicius-arcanjo/eslint-config',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    project: 'tsconfig.json',
  },
  plugins: ['@typescript-eslint/eslint-plugin', 'eslint-plugin-import-helpers'],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    'no-console': 'warn',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': ['error', {argsIgnorePattern: '^_'}],
    '@typescript-eslint/padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: ['if', 'return', 'interface', 'type', 'multiline-const'],
      },
    ],
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        groups: [
          'module',
          '/^@core/',
          '/^@application/',
          '/^@domain/',
          '/^@infra/',
          '/^@test/',
          ['parent', 'sibling'],
          'index',
        ],
        alphabetize: {order: 'asc', ignoreCase: true},
      },
    ],
  },
};
