import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['src/index.ts'],
    format: ['esm', 'cjs'],
    dts: true,
    clean: true,
    sourcemap: false,
    minify: true,
    splitting: false,
    target: 'es2020',
    outExtension({ format }) {
        return { js: format === 'cjs' ? '.cjs' : '.js' };
    },
});
