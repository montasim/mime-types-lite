import assert from 'node:assert/strict';
import test from 'node:test';

import {
    isKnownMimeType,
    isMimeType,
    matchesMimeType,
    mimeCategory,
    normalizeMimeType,
} from '../../dist/index.js';

test('validates media-type syntax', () => {
    assert.equal(isMimeType('application/json'), true);
    assert.equal(isMimeType('application/problem+json'), true);
    assert.equal(isMimeType('application/json; charset=utf-8'), false);
    assert.equal(isMimeType('not a mime type'), false);
    assert.equal(isMimeType(null), false);
});

test('normalizes Content-Type values without guessing invalid input', () => {
    assert.equal(
        normalizeMimeType(' Application/JSON; charset=utf-8 '),
        'application/json'
    );
    assert.equal(normalizeMimeType('text/html;charset=UTF-8'), 'text/html');
    assert.equal(normalizeMimeType('invalid'), undefined);
});

test('recognizes curated types and matches exact or wildcard patterns', () => {
    assert.equal(isKnownMimeType('application/json; charset=utf-8'), true);
    assert.equal(isKnownMimeType('application/not-in-the-list'), false);
    assert.equal(matchesMimeType('image/png', 'image/*'), true);
    assert.equal(matchesMimeType('IMAGE/PNG', 'image/png'), true);
    assert.equal(matchesMimeType('text/plain; charset=utf-8', '*/*'), true);
    assert.equal(matchesMimeType('text/plain', 'image/*'), false);
    assert.equal(matchesMimeType('text/plain', 'text/*; q=0.8'), false);
});

test('returns top-level categories for valid values', () => {
    assert.equal(mimeCategory('image/svg+xml'), 'image');
    assert.equal(
        mimeCategory('application/json; charset=utf-8'),
        'application'
    );
    assert.equal(mimeCategory('custom/example'), undefined);
    assert.equal(mimeCategory('invalid'), undefined);
});
