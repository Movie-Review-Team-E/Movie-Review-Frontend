module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-hooks',
    '@typescript-eslint',
    'prettier',
    'styled-components-a11y', // styled-components 관련 규칙
  ],
  rules: {
    'prettier/prettier': 'error',
    'react/react-in-jsx-scope': 'off', // React 17+에서는 React import 불필요
    'react/prop-types': 'off', // TypeScript를 사용하는 경우 PropTypes 비활성화
    '@typescript-eslint/no-unused-vars': ['warn'],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off', // production에서 console.log 경고
    'styled-components-a11y/no-autofocus': 'error', // 접근성 규칙
  },
  settings: {
    react: {
      version: 'detect', // React 버전 자동 감지
    },
  },
};