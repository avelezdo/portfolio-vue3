import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { copy } from 'vite-plugin-copy'

// https://vitejs.dev/config/
export default defineConfig({
	// input: 'index.js',
	// output: {
	// 	file: 'bundler.js',
	// 	format: 'es',
	// },
	plugins: [vue(), copy([{ src: './src/assets/images/project-images', dest: './public/project-images' }])],
	plugins: [vue()],
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `
                @import "./src/assets/scss/_variables.scss";
                @import "./src/assets/scss/_mixins.scss";
                @import "./src/assets/scss/_media-queries.scss";
        `,
			},
		},
	},
})
