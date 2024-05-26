// eslint.config.js
import { FlatCompat } from '@eslint/eslintrc';
import StylisticPlugin from '@stylistic/eslint-plugin';
import pluginVue from 'eslint-plugin-vue';
import vueparser from 'vue-eslint-parser';
import { fixupConfigRules } from '@eslint/compat';
import tseslint from '@typescript-eslint/eslint-plugin';
import tseslintparser from '@typescript-eslint/parser';

const flatCompat = new FlatCompat({ recommendedConfig: true });

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
  ...pluginVue.configs['flat/recommended'],
  StylisticPlugin.configs['disable-legacy'],
  // Vue eslint
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueparser,
    },
    plugins: {
      vue: pluginVue
    },
    rules: {
      ...pluginVue.configs['flat/recommended'].rules,
      'vue/multi-word-component-names': 'off',
      'vue/no-reserved-component-names': 'off',
    },
  },
  // TS eslint
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tseslintparser,
      parserOptions: {
        project: './tsconfig.json', // Make sure this path is correct
      },
    },
    plugins: {
      ts: tseslint.rules
    },
    rules: {
      // ...tseslint.configs['recommended'],
      '@/explicit-function-return-type': 'off',
      '@/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'vue/multi-word-component-names': 'off',
      'vue/no-reserved-component-names': 'off',
    },
  },
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
