module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:react/recommended', 'standard'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'indent': ['error', 2, { SwitchCase: 1 }],
    'semi': [2, 'never'],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never'
      }
    ],
    'quotes': ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
    'multiline-ternary': [0, 'always'],
    'operator-linebreak': ['error', 'before'],
    'quote-props': ['error', 'consistent']
  }
}
