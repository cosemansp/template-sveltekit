module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	extends: [
		'airbnb-base',
		'plugin:eslint-comments/recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier'
	],
	plugins: ['svelte3', '@typescript-eslint'],
	ignorePatterns: ['*.cjs'],
	overrides: [{ files: ['*.svelte'], processor: 'svelte3/svelte3' }],
	settings: {
		'svelte3/typescript': () => require('typescript')
	},
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2019
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	},
	rules: {
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'import/order': 'off',
		'import/no-unresolved': 'off',
		'import/extensions': 'off',
		'import/first': 'off',
		'import/no-extraneous-dependencies': 'off',
		'import/no-mutable-exports': 'off'
	}
};
