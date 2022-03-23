module.exports = {
  extends: [
    './.eslintrc-auto-import.json',
    '@antfu',
    'plugin:sonarjs/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['prettier', 'sonarjs', 'sort-keys-fix', '@next/next'],
  rules: {
    'import/order': [
      'error',
      {
        alphabetize: {
          caseInsensitive: false,
          order: 'asc',
        },
        groups: [
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling', 'index'],
          'object',
          'unknown',
        ],
        'newlines-between': 'always',
        pathGroups: [
          {
            group: 'internal',
            pattern: '~/**',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin', 'object'],
      },
    ],
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'avoid',
        bracketSameLine: false,
        bracketSpacing: true,
        embeddedLanguageFormatting: 'auto',
        endOfLine: 'lf',
        htmlWhitespaceSensitivity: 'css',
        insertPragma: false,
        jsxSingleQuote: true,
        printWidth: 80,
        proseWrap: 'preserve',
        quoteProps: 'as-needed',
        requirePragma: false,
        semi: false,
        singleAttributePerLine: true,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'es5',
        useTabs: false,
        vueIndentScriptAndStyle: false,
      },
    ],
    'react/jsx-no-undef': [
      'error',
      {
        allowGlobals: true,
      },
    ],
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'sort-keys-fix/sort-keys-fix': [
      'error',
      'asc',
      {
        caseSensitive: true,
        natural: true,
      },
    ],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        asyncArrow: 'always',
        named: 'never',
      },
    ],
  },
}
