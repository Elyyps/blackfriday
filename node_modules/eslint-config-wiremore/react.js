module.exports = {
  extends: ['./index.js', 'plugin:react/recommended'],
  plugins: ['react', 'react-hooks'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/no-danger': 1,
    'react/prefer-es6-class': 2,
    'react/require-render-return': 2,
    'react/self-closing-comp': 2,
    'react/no-did-mount-set-state': 1,
    'react/no-unused-prop-types': [2, { skipShapeProps: true }],
    'react/no-string-refs': 2,
    'react/no-typos': 2,
    'react/sort-comp': 2,
    'react/jsx-first-prop-new-line': [1, 'multiline'],
    'react/jsx-wrap-multilines': 2,
    'react/jsx-indent': 2,
    'react/jsx-equals-spacing': 2,
    'react/jsx-pascal-case': 2,
    'react-hooks/rules-of-hooks': 2,
    'react/jsx-no-comment-textnodes': 1,
  },
};
