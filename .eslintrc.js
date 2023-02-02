module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-base', 'prettier'],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'consistent-return': 0,
    'no-console': 0,
    'import/no-extraneous-dependencies': 0,
    'no-underscore-dangle': 0,
    'global-require': 0,
    'import/extensions': 0
  },
};
