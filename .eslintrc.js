module.exports = {
  extends: [
    'airbnb',
    'plugin:flowtype/recommended',
    'plugin:prettier/recommended',
    'prettier',
    'prettier/flowtype',
    'prettier/prettier',
    'prettier/react',
    'plugin:jest/recommended'
  ],

  parser: 'babel-eslint',

  plugins: ['flowtype', 'prettier', 'react', 'react-native', 'jest'],

  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },

  env: {
    'react-native/react-native': true,
    node: true,
    jest: true
  },

  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ios.js', '.android.js'],
        moduleDirectory: ['node_modules', 'flow']
      }
    }
  },

  rules: {
    'prettier/prettier': 2,

    semi: [2, 'never'],

    'comma-dangle': [2, 'never'],

    'react/jsx-filename-extension': 0,

    'global-require': 0,

    'import/prefer-default-export': 0,

    'no-empty': [2, { allowEmptyCatch: true }],

    'react/jsx-one-expression-per-line': 0,

    'react/prop-types': 0,

    'react/require-default-props': 0,

    'no-underscore-dangle': [0, { allow: ['__data'] }],

    'import/no-extraneous-dependencies': 0,

    'max-len': [
      2,
      {
        tabWidth: 2,
        code: 80,
        ignoreStrings: true,
        ignorePattern: '^\\s*import type.*'
      }
    ],

    'no-param-reassign': 0,

    'react/jsx-props-no-spreading': 0
  },

  globals: {
    fetch: false,
    requestAnimationFrame: true,
    cancelAnimationFrame: true
  }
}
