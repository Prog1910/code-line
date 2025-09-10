import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { globalIgnores } from 'eslint/config'
import jsdoc from 'eslint-plugin-jsdoc'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import eslintPluginPrettier from 'eslint-plugin-prettier'
import eslintConfigPrettier from 'eslint-config-prettier'
import eslintPluginUnicorn from 'eslint-plugin-unicorn'

export default tseslint.config([
	globalIgnores(['dist']),
	{
		files: ['**/*.{ts,tsx}'],
		extends: [
			js.configs.recommended,
			tseslint.configs.recommended,
			reactHooks.configs['recommended-latest'],
			reactRefresh.configs.vite,
			eslintConfigPrettier
		],
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser,
			parser: tseslint.parser,
			parserOptions: {
				projectService: true
			}
		},
		plugins: {
			'simple-import-sort': simpleImportSort,
			'@typescript-eslint': tseslint.plugin,
			jsdoc,
			prettier: eslintPluginPrettier,
			unicorn: eslintPluginUnicorn
		},
		rules: {
			// Code styles
			'prettier/prettier': ['error', {}, { usePrettierrc: true }],
			'unicorn/filename-case': ['error', { case: 'kebabCase' }],

			// -----------------------
			// Import rules
			// -----------------------
			'simple-import-sort/imports': 'warn',
			'simple-import-sort/exports': 'warn',

			// -----------------------
			// TypeScript rules
			// -----------------------
			'@typescript-eslint/no-shadow': 'warn',
			'@typescript-eslint/adjacent-overload-signatures': 'error',
			'@typescript-eslint/prefer-function-type': 'error',
			'@typescript-eslint/restrict-plus-operands': 'error',
			// '@typescript-eslint/consistent-type-definitions': 'off',
			'@typescript-eslint/explicit-member-accessibility': 'error',
			'@typescript-eslint/member-ordering': 'error',
			'@typescript-eslint/no-confusing-non-null-assertion': 'error',
			'@typescript-eslint/no-explicit-any': 'error',
			'@typescript-eslint/no-require-imports': 'error',
			'@typescript-eslint/prefer-includes': 'error',
			'@typescript-eslint/prefer-nullish-coalescing': 'error',
			'@typescript-eslint/prefer-optional-chain': 'error',
			'@typescript-eslint/require-array-sort-compare': 'error',
			'@typescript-eslint/switch-exhaustiveness-check': 'error',
			'@typescript-eslint/no-empty-interface': ['error', { allowSingleExtends: false }],
			'@typescript-eslint/no-inferrable-types': 'error',
			'@typescript-eslint/no-misused-new': 'error',
			'@typescript-eslint/no-non-null-assertion': 'error',
			'@typescript-eslint/no-unused-vars': [
				'warn',
				{
					vars: 'all',
					args: 'after-used',
					ignoreRestSiblings: false,
					argsIgnorePattern: '^_',
					varsIgnorePattern: '^_'
				}
			],
			'@typescript-eslint/unified-signatures': 'error',
			// '@typescript-eslint/comma-dangle': 'error',

			// -----------------------
			// JSDoc rules
			// -----------------------
			'jsdoc/require-description-complete-sentence': ['error', { tags: ['see', 'copyright'] }],
			'jsdoc/require-param': ['error', { checkDestructured: false, enableFixer: false }],
			'jsdoc/require-param-name': 'error',
			'jsdoc/require-param-description': 'error',
			'jsdoc/check-tag-names': 'error',
			'jsdoc/no-types': 'error',
			'jsdoc/check-alignment': 'error',
			'jsdoc/no-bad-blocks': 'error',

			// -----------------------
			// General / JS rules
			// -----------------------
			'no-undef': 'off',
			'no-param-reassign': 'off',
			'arrow-body-style': 'off',
			'no-shadow': 'off',
			'no-restricted-syntax': ['off', 'ForOfStatement'],
			'func-style': ['error', 'declaration', { allowArrowFunctions: true }]
		}
	}
])
