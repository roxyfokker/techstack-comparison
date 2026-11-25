/// <reference types="vitest/config" />
import adapter from '@sveltejs/adapter-vercel'
import { enhancedImages } from '@sveltejs/enhanced-img'
import { sveltekit } from '@sveltejs/kit/vite'
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin'
import { playwright } from '@vitest/browser-playwright'
import path from 'node:path'
import { defineConfig } from 'vite'

// More info: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
	plugins: [
		enhancedImages(), // must come before the SvelteKit plugin
		sveltekit({
			compilerOptions: {
				// Force runes mode, except for libraries. Can be removed in Svelte 6.
				runes: ({ filename }) =>
					filename.split(/[/\\]/).includes('node_modules') ? undefined : true,
			},
			// See https://svelte.dev/docs/kit/adapters if your environment is not supported
			adapter: adapter(),
		}),
	],
	test: {
		projects: [
			{
				extends: true,
				plugins: [
					// Runs tests for the stories defined in your Storybook config
					storybookTest({
						configDir: path.join(import.meta.dirname, '.storybook'),
					}),
				],
				test: {
					name: 'storybook',
					browser: {
						enabled: true,
						headless: true,
						provider: playwright({}),
						instances: [{ browser: 'chromium' }],
					},
				},
			},
		],
	},
})