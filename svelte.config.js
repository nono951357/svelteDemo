import adapter from '@sveltejs/adapter-static';
import { doc } from 'prettier';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		appDir: 'app',
		adapter: adapter({
			pages: "docs"

		})
	}
};

export default config;
