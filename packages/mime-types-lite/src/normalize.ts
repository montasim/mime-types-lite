import type { MimeTypeString } from './types.js';

const TOKEN_PATTERN = /^[!#$%&'*+.^_`|~0-9A-Za-z-]+$/;

/** Returns whether a value has valid `type/subtype` media-type syntax. */
export function isMimeType(value: unknown): value is MimeTypeString {
    if (typeof value !== 'string') {
        return false;
    }

    const parts = value.split('/');

    return (
        parts.length === 2 &&
        TOKEN_PATTERN.test(parts[0] ?? '') &&
        TOKEN_PATTERN.test(parts[1] ?? '')
    );
}

/**
 * Removes parameters and normalizes casing from a Content-Type value.
 * Invalid input returns `undefined` instead of guessing.
 */
export function normalizeMimeType(value: unknown): MimeTypeString | undefined {
    if (typeof value !== 'string') {
        return undefined;
    }

    const mediaType = value.split(';', 1)[0]?.trim().toLowerCase();

    return isMimeType(mediaType) ? mediaType : undefined;
}
