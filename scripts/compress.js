/**
 * @fileoverview Builds and compresses the project using esbuild and terser.
 * This script bundles TypeScript/JavaScript files, minifies, and obfuscates
 * the output for production-ready builds. It utilizes esbuild for fast bundling
 * and terser for advanced compression and obfuscation.
 *
 * Features:
 * - Bundling source files into a single output file
 * - Minification for smaller file sizes
 * - Obfuscation for code protection
 * - Sourcemap generation for debugging
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

import { build } from 'esbuild';
import { minify } from 'terser';
import { promises as fs } from 'fs';
import path from 'path';

/**
 * Path to the bundled output file (temporary).
 * @type {string}
 */
const inputFile = path.resolve('dist/index.js');

/**
 * Path to the final minified and obfuscated file.
 * @type {string}
 */
const outputFile = path.resolve('build/index.min.js');

/**
 * Bundles, minifies, and obfuscates the source files for production.
 *
 * Steps:
 * 1. Use esbuild to bundle and transpile the source files.
 * 2. Use terser to minify and obfuscate the bundled output.
 * 3. Write the final compressed file to the `build` directory.
 *
 * @async
 * @function bundleAndMinify
 * @throws Will throw an error if bundling, minification, or file writing fails.
 */
async function bundleAndMinify() {
    console.info('Starting the build process...');
    try {
        // Step 1: Bundle the source files with esbuild
        console.info('Bundling files using esbuild...');
        await build({
            entryPoints: [path.resolve('src/index.ts')], // Adjust to your entry file
            outfile: inputFile, // Temporary output file
            bundle: true, // Combine all dependencies into one file
            platform: 'node', // Target Node.js environment
            minify: false, // Disable esbuild's minification (handled by terser)
            sourcemap: true, // Generate sourcemaps for debugging
            format: 'esm', // Use ES module output format
            target: ['es2020'], // Match modern JavaScript standards
        });

        // Step 2: Read the bundled file
        console.info('Reading bundled file...');
        const code = await fs.readFile(inputFile, 'utf8');

        // Step 3: Minify and obfuscate using terser
        console.info('Minifying and obfuscating the code...');
        const result = await minify(code, {
            compress: true, // Enable advanced compression
            mangle: true, // Obfuscate variable and function names
            output: {
                comments: false, // Remove comments for a cleaner output
            },
        });

        // Step 4: Write the minified and obfuscated output
        console.info('Writing the final compressed file...');
        await fs.writeFile(outputFile, result.code, 'utf8');
        console.info(`Build successful! Minified file saved to: ${outputFile}`);
    } catch (error) {
        console.error(`Build failed: ${error}`);
        throw error; // Re-throw the error for proper handling in the caller
    }
}

// Run the bundling and minification process
(async () => {
    try {
        await bundleAndMinify(); // Properly handle the promise returned by the async function
    } catch (error) {
        console.error(`Failed to build: ${error}`);
        process.exit(1); // Exit the process with an error code if the build fails
    }
})();
