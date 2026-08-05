import assert from 'node:assert/strict';
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const projectDirectory = resolve(fileURLToPath(new URL('..', import.meta.url)));
const temporaryDirectory = mkdtempSync(join(tmpdir(), 'mime-types-lite-'));

try {
    const packOutput = execFileSync(
        'npm',
        ['pack', '--json', '--ignore-scripts'],
        {
            cwd: projectDirectory,
            encoding: 'utf8',
        }
    );
    const [packResult] = JSON.parse(packOutput);
    const filenames = new Set(packResult.files.map((file) => file.path));

    for (const requiredFile of [
        'dist/index.js',
        'dist/index.cjs',
        'dist/index.d.ts',
        'LICENSE',
        'README.md',
    ]) {
        assert.equal(
            filenames.has(requiredFile),
            true,
            `Packed artifact is missing ${requiredFile}`
        );
    }

    const tarball = join(projectDirectory, packResult.filename);

    execFileSync(
        join(projectDirectory, 'node_modules', '.bin', 'publint'),
        [tarball, '--strict'],
        { cwd: projectDirectory, stdio: 'inherit' }
    );
    execFileSync(
        join(projectDirectory, 'node_modules', '.bin', 'attw'),
        [tarball],
        {
            cwd: projectDirectory,
            stdio: 'inherit',
        }
    );

    writeFileSync(
        join(temporaryDirectory, 'package.json'),
        JSON.stringify({
            name: 'package-smoke-test',
            private: true,
            type: 'module',
        })
    );
    execFileSync('npm', ['install', '--ignore-scripts', tarball], {
        cwd: temporaryDirectory,
        stdio: 'pipe',
    });

    writeFileSync(
        join(temporaryDirectory, 'esm.mjs'),
        "import mime, { fromExtension } from 'mime-types-lite';\n" +
            "if (mime.JSON !== 'application/json') throw new Error('ESM default export failed');\n" +
            "if (fromExtension('file.pdf') !== 'application/pdf') throw new Error('ESM named export failed');\n"
    );
    writeFileSync(
        join(temporaryDirectory, 'commonjs.cjs'),
        "const mime = require('mime-types-lite');\n" +
            "if (mime.MIME.JSON !== 'application/json') throw new Error('CommonJS export failed');\n"
    );

    execFileSync(process.execPath, ['esm.mjs'], {
        cwd: temporaryDirectory,
        stdio: 'pipe',
    });
    execFileSync(process.execPath, ['commonjs.cjs'], {
        cwd: temporaryDirectory,
        stdio: 'pipe',
    });

    const packageJson = JSON.parse(
        readFileSync(join(projectDirectory, 'package.json'), 'utf8')
    );
    assert.equal(packageJson.version, '1.9.0');

    rmSync(tarball);
    console.info('Packed ESM and CommonJS consumer smoke tests passed.');
} finally {
    rmSync(temporaryDirectory, { recursive: true, force: true });
}
