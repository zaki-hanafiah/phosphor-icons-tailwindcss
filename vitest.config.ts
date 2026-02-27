import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		coverage: {
			provider: 'istanbul',
			reporter: ['text', 'html', 'lcov'],
		},
	},
});
// __bfill_20260103_1828__
// __bfill_20260227_1529__
