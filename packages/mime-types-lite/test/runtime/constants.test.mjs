import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import test from 'node:test';

import mimeTypesLite, {
    CSV,
    GRAPHQL_RESPONSE_JSON,
    ICO,
    JS,
    LEGACY_MIME,
    MIME,
    YAML,
    isMimeType,
} from '../../dist/index.js';

test('exports an immutable, backward-compatible default object', () => {
    assert.equal(mimeTypesLite, MIME);
    assert.equal(Object.isFrozen(MIME), true);
    assert.equal(MIME.JSON, 'application/json');
    assert.equal(MIME.CSV_SEMICOLON, CSV);
});

test('uses current registered values and identifies legacy aliases', () => {
    assert.equal(JS, 'text/javascript');
    assert.equal(YAML, 'application/yaml');
    assert.equal(ICO, 'image/vnd.microsoft.icon');
    assert.equal(GRAPHQL_RESPONSE_JSON, 'application/graphql-response+json');
    assert.equal(LEGACY_MIME.JAVASCRIPT, 'application/javascript');
    assert.equal(LEGACY_MIME.YAML, 'application/x-yaml');
});

test('supports CommonJS consumers through the package entry point', () => {
    const require = createRequire(import.meta.url);
    const commonJs = require('../../dist/index.cjs');

    assert.equal(commonJs.MIME.PDF, 'application/pdf');
    assert.equal(commonJs.default, commonJs.MIME);
});

test('keeps every curated constant and extension mapping syntactically valid', async () => {
    const { EXTENSION_TO_MIME } = await import('../../dist/index.js');

    assert.ok(Object.keys(MIME).length >= 75);

    for (const [key, value] of Object.entries(MIME)) {
        assert.equal(isMimeType(value), true, `${key} has an invalid value`);
    }

    for (const [extension, value] of Object.entries(EXTENSION_TO_MIME)) {
        assert.equal(
            isMimeType(value),
            true,
            `${extension} maps to an invalid value`
        );
    }
});
