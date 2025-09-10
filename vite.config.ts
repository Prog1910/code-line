import { resolve } from 'node:path'

import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), svgr({ include: '**/*.svg?react' })],
	resolve: {
		alias: [
			{
				find: '@/',
				replacement: `${resolve('src')}/`
			}
		]
	},
	css: {
		preprocessorOptions: {
			scss: { additionalData: `@use "@/app/styles/helpers" as *;` }
		}
	},
	server: {
		proxy: {
			'/api': {
				target: 'https://api.nytimes.com',
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, '')
			}
		}
	}
})
