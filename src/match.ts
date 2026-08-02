import { MIME } from './constants.js';
import { normalizeMimeType } from './normalize.js';
import type { MimeCategory, MimeTypePattern } from './types.js';

const KNOWN_MIME_TYPES: ReadonlySet<string> = new Set(Object.values(MIME));

/** Returns whether input normalizes to one of this package's curated values. */
export function isKnownMimeType(value: unknown): boolean {
    const normalized = normalizeMimeType(value);

    return normalized !== undefined && KNOWN_MIME_TYPES.has(normalized);
}

/** Matches a Content-Type value against an exact type or `type/*` wildcard. */
export function matchesMimeType(
    value: unknown,
    pattern: MimeTypePattern | string
): boolean {
    const mediaType = normalizeMimeType(value);
    const normalizedPattern = pattern.trim().toLowerCase();

    if (!mediaType || normalizedPattern.includes(';')) {
        return false;
    }

    if (normalizedPattern === '*/*') {
        return true;
    }

    if (normalizedPattern.endsWith('/*')) {
        return mediaType.startsWith(`${normalizedPattern.slice(0, -1)}`);
    }

    return mediaType === normalizeMimeType(normalizedPattern);
}

/** Extracts the top-level category from a valid Content-Type value. */
export function mimeCategory(value: unknown): MimeCategory | undefined {
    const mediaType = normalizeMimeType(value);

    if (!mediaType) {
        return undefined;
    }

    const category = mediaType.slice(0, mediaType.indexOf('/'));

    switch (category) {
        case 'application':
        case 'audio':
        case 'font':
        case 'image':
        case 'message':
        case 'model':
        case 'multipart':
        case 'text':
        case 'video':
            return category;
        default:
            return undefined;
    }
}
