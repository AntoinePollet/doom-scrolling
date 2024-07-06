// eslint.config.js
import StylisticPlugin from '@stylistic/eslint-plugin';
import eslintPluginVue from 'eslint-plugin-vue';
import vueparser from 'vue-eslint-parser';
import ts from 'typescript-eslint';

const tsconfig = ts.config(
  ...ts.configs.recommended,
  ...eslintPluginVue.configs['flat/recommended'],
  {
    files: ['*.vue', '**/*.vue'],
    languageOptions: {
      parserOptions: {
        parser: '@typescript-eslint/parser'
      }
    }
  }
);
export default [
  // ...fixupConfigRules(
  //   flatCompat.extends(
  //     'eslint:recommended',
  //   ),
  // ),
  // ...compat({
  //   extends: [
  //     'eslint:recommended',
  //     'plugin:@typescript-eslint/recommended',
  //   ],
  // }),
  ...eslintPluginVue.configs['flat/recommended'],
  ...tsconfig,
  // StylisticPlugin.configs['disable-legacy'],
  // Vue eslint
  {
    files: ['*.vue', '**/*.vue'],
    languageOptions: {
      "parser": vueparser,
    },
    plugins: {
      vue: eslintPluginVue
    },
    rules: {
      ...eslintPluginVue.configs['flat/recommended'].rules,
      'vue/multi-word-component-names': 'off',
      'vue/no-reserved-component-names': 'off',
    },
  },
  // TS eslint
  // {
  //   files: ['**/*.ts', '**/*.tsx'],
  //   languageOptions: {
  //     parser: tseslintparser,
  //     parserOptions: {
  //       project: './tsconfig.json', // Make sure this path is correct
  //     },
  //   },
  //   plugins: {
  //     ts: tseslint.rules
  //   },
  //   rules: {
  //     // ...tseslint.configs['recommended'],
  //     '@/explicit-function-return-type': 'off',
  //     '@/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
  //     'vue/multi-word-component-names': 'off',
  //     'vue/no-reserved-component-names': 'off',
  //   },
  // },
  // Stylistic eslint
  {
    plugins: {
      stylistic: StylisticPlugin,
    },
    files: ['**/*.js', '**/*.ts', '**/*.vue'],
    rules: {
      'stylistic/semi': 'error',
      'stylistic/indent': ['error', 2],
      'stylistic/brace-style': ['error', '1tbs'],
      'stylistic/space-before-function-paren': ['error', 'never'],
    },
  },
];
