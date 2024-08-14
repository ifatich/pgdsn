import { defineConfig } from 'tsup';
import { sassPlugin } from 'esbuild-sass-plugin';

export default defineConfig({
    format: ['cjs', 'esm'],
    entry: ['src/index.ts', 'src/styles/globals.css'],
    dts: true,
    shims: true,
    skipNodeModulesBundle: true,
    clean: true,
    plugins: [
        sassPlugin({
            includePaths: ['src/styles/*']
        })
    ]
});