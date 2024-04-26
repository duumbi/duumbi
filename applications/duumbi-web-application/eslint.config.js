import eslint from "@eslint/js";
import tseslint from 'typescript-eslint';
import typescriptParser from '@typescript-eslint/parser';
import stylistic from '@stylistic/eslint-plugin'

export default [
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
  {
    ignores: ['**/node_modules', '**/dist', '**/build', '**/__snapshots__', '**/mocks', '**/coverage'],
  },
  {
    files: ['**/.ts', '**/*.tsx'],
    languageOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        parser: typescriptParser,
        parserOptions: {
            ecmaFeatures: {
                jsx: true
            }
        },
    },
    plugins: {
        '@stylistic': stylistic
    },
    rules: {
        '@stylistic/indent': ['error', 2],
        '@stylistic/spaced-comment': ['error', 'always'],
        '@stylistic/arrow-spacing': ['error'],

        '@stylistic/jsx-indent': ['error', 2],
        '@stylistic/jsx-closing-bracket-location': ['error', 'tag-aligned'],
        '@stylistic/jsx-pascal-case': ['error', { allowAllCaps: true }],
        '@stylistic/jsx-self-closing-comp': ['error', {'component': true, 'html': true}]
    },

  },
]
