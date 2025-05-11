/**
 * @fileoverview Bundles & compresses both ESM and CJS builds into dist/
 *
 * @module build-scripts/compress.mjs
 * @version 1.0.0
 * @license CC BY-NC-ND 4.0
 *
 * @contact Mohammad Montasim -Al- Mamun Shuvo
 * @created 2025-01-28
 * @contactEmail montasimmamun@gmail.com
 * @contactGithub https://github.com/montasim
 */

import { build as esbuild } from 'esbuild';
import { minify } from 'terser';
import { promises as fs } from 'fs';
import path from 'path';

async function bundleAndMinify({ entry, outDir, outfileName, format, ext }) {
    const outFile = path.resolve(outDir, outfileName + ext);
    const minified = path.resolve(outDir, outfileName + `.min${ext}`);

    // 1) bundle with esbuild
    await esbuild({
        entryPoints: [path.resolve(entry)],
        outfile: outFile,
        bundle: true,
        platform: 'node',
        format, // 'esm' or 'cjs'
        sourcemap: true,
        target: ['es2020'],
        minify: false, // let terser do it
    });

    // 2) read, terser-minify, write
    const code = await fs.readFile(outFile, 'utf8');
    const result = await minify(code, {
        compress: true,
        mangle: true,
        output: {
            comments: false,
        },
    });
    await fs.writeFile(minified, result.code, 'utf8');

    console.info(`  → ${format.toUpperCase()} ▶ ${outFile}`);
    console.info(`  → ${format.toUpperCase()} ▶ ${minified}`);
}

(async () => {
    try {
        console.info('📦 Building & compressing ESM → dist/esm');
        await bundleAndMinify({
            entry: 'src/index.ts',
            outDir: 'dist/esm',
            outfileName: 'index',
            format: 'esm',
            ext: '.js',
        });

        console.info('📦 Building & compressing CJS → dist/cjs');
        await bundleAndMinify({
            entry: 'src/index.ts', // ← reuse the same file
            outDir: 'dist/cjs',
            outfileName: 'index', // ← just “index”
            format: 'cjs',
            ext: '.cjs',
        });

        console.info('✅ All done!');
    } catch (err) {
        console.error('Build failed:', err);
        process.exit(1);
    }
})();
