import adapter from '@sveltejs/adapter-static'
import {vitePreprocess} from '@sveltejs/vite-plugin-svelte'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// Static adapter for GitHub Pages deployment
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: '404.html',
			precompress: false,
			strict: true
		}),
		// Base path for GitHub Pages (repo name)
		// Update this to match your repo name: /ideal-feb
		paths: {
			base: process.argv.includes('dev') ? '' : '/ideal-feb'
		},
		prerender: {
			handleHttpError: ({path, referrer, message}) => {
				// ignore deliberate link to shiny 404 page
				if (path === '/not-found' && referrer === '/blog/how-we-built-our-404-page') {
					return
				}

				// otherwise fail the build
				throw new Error(message)
			}
		}
	},

}

export default config
