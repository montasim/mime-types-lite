import assert from 'node:assert/strict';
import test from 'node:test';

import {
    EXTENSION_TO_MIME,
    extensionsFor,
    fromExtension,
} from '../../dist/index.js';

test('looks up extensions, filenames, paths, URLs, and case-insensitive input', () => {
    assert.equal(fromExtension('pdf'), 'application/pdf');
    assert.equal(fromExtension('.PDF'), 'application/pdf');
    assert.equal(fromExtension('/reports/annual.final.pdf'), 'application/pdf');
    assert.equal(
        fromExtension('https://example.com/image.PNG?width=100#preview'),
        'image/png'
    );
    assert.equal(fromExtension('C:\\files\\data.YML'), 'application/yaml');
    assert.equal(fromExtension('unknown.extension'), undefined);
    assert.equal(fromExtension('file-without-extension'), undefined);
});

test('returns all known extensions for normalized Content-Type input', () => {
    assert.deepEqual(extensionsFor('image/jpeg'), ['jpg', 'jpeg', 'jpe']);
    assert.deepEqual(extensionsFor('Text/HTML; charset=utf-8'), [
        'html',
        'htm',
    ]);
    assert.deepEqual(extensionsFor('invalid'), []);
    assert.equal(Object.isFrozen(extensionsFor('image/jpeg')), true);
    assert.equal(Object.isFrozen(extensionsFor('invalid')), true);
});

test('exposes an immutable extension index', () => {
    assert.equal(Object.isFrozen(EXTENSION_TO_MIME), true);
    assert.equal(EXTENSION_TO_MIME.webmanifest, 'application/manifest+json');
});
