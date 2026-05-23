import path from 'path';

import phosphorIcons from 'phosphor-icons-tailwindcss';
import tailwindcss from 'tailwindcssv3';
import { defineConfig } from 'vite';

export default defineConfig({
	css: {
		transformer: 'postcss',
		postcss: {
			plugins: [
				tailwindcss({
					content: [path.resolve(import.meta.dirname, 'index.html')],
					plugins: [phosphorIcons()],
				}),
			],
		},
	},
	build: {
		cssMinify: false,
	},
});
// __bfill_20260523_1657__
