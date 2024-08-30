import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import path from 'path'
import del from 'rollup-plugin-delete'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import packageJson from './package.json' assert { type: 'json' }

const outputDirectory = path.parse(packageJson.main).dir

export default {
	input: './src/index.ts',
	output: {
		dir: outputDirectory,
		format: 'esm',
		sourcemap: true,
		preserveModules: true,
	},
	external: ['react'],
	plugins: [
		del({ targets: outputDirectory + '/*' }),
		peerDepsExternal(),
		resolve(),
		commonjs(),
		typescript(),
	],
}
