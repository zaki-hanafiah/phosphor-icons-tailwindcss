import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	css: {
		transformer: 'postcss',
	},
	build: {
		cssMinify: false,
	},
	plugins: [tailwindcss()],
});
// __bfill_20260509_1117__
// __bfill_20260623_1712__
// __bfill_20260715_1540__
// __bfill_20251215_1121__
// __bfill_20251224_939__
// __bfill_20260225_825__
// __bfill_20260418_1143__
// __bfill_20260224_1428__
