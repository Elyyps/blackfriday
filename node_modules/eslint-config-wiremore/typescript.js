module.exports = {
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
        warnOnUnsupportedTypeScriptVersion: true,
      },
      plugins: ['@typescript-eslint/eslint-plugin'],
      settings: {
        'import/parsers': {
          '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
          typescript: {},
        },
      },
      rules: {
        'no-array-constructor': 0,
        'no-useless-constructor': 0,
        'no-unused-vars': 0,
        'no-undef': 0,
        '@typescript-eslint/no-angle-bracket-type-assertion': 1,
        '@typescript-eslint/no-array-constructor': 1,
        '@typescript-eslint/no-namespace': 2,
        '@typescript-eslint/no-unused-vars': [
          1,
          {
            args: 'none',
            ignoreRestSiblings: true,
          },
        ],
        '@typescript-eslint/no-useless-constructor': 1,
        // these two cause trouble with type imports. disable until these are resolved:
        // https://github.com/alexgorbatchev/eslint-import-resolver-typescript/issues/17
        'import/no-unresolved': 0,
        // https://github.com/benmosher/eslint-plugin-import/issues/1341
        'import/named': 0,
      },
    },
    {
      files: ['.d.ts'],
      rules: {
        'import/export': 0,
        'no-redeclare': 0,
      },
    },
  ],
};
