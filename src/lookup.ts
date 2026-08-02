import { EXTENSION_TO_MIME } from './extensions.js';
import { normalizeMimeType } from './normalize.js';
import type { KnownExtension, MimeTypeString } from './types.js';

type ExtensionMimeType = (typeof EXTENSION_TO_MIME)[KnownExtension];

const MIME_TO_EXTENSIONS = createReverseIndex();
const EMPTY_EXTENSIONS = Object.freeze([]) as readonly KnownExtension[];

function createReverseIndex(): ReadonlyMap<
    MimeTypeString,
    readonly KnownExtension[]
> {
    const mutableIndex = new Map<MimeTypeString, KnownExtension[]>();

    for (const [extension, mimeType] of Object.entries(EXTENSION_TO_MIME)) {
        const existing = mutableIndex.get(mimeType) ?? [];
        existing.push(extension as KnownExtension);
        mutableIndex.set(mimeType, existing);
    }

    return new Map(
        [...mutableIndex].map(([mimeType, extensions]) => [
            mimeType,
            Object.freeze(extensions),
        ])
    );
}

function extractExtension(value: string): string | undefined {
    const cleanValue = value.trim().split(/[?#]/, 1)[0]?.replaceAll('\\', '/');
    const basename = cleanValue?.slice(cleanValue.lastIndexOf('/') + 1);

    if (!basename) {
        return undefined;
    }

    const dotIndex = basename.lastIndexOf('.');
    const extension = dotIndex >= 0 ? basename.slice(dotIndex + 1) : basename;

    return extension ? extension.toLowerCase() : undefined;
}

/** Finds a curated media type from a filename, path, URL, or extension. */
export function fromExtension(value: string): ExtensionMimeType | undefined {
    const extension = extractExtension(value);

    if (!extension) {
        return undefined;
    }

    return EXTENSION_TO_MIME[extension as KnownExtension];
}

/** Returns every known extension for a media type, without leading dots. */
export function extensionsFor(value: string): readonly KnownExtension[] {
    const mediaType = normalizeMimeType(value);

    return mediaType
        ? (MIME_TO_EXTENSIONS.get(mediaType) ?? EMPTY_EXTENSIONS)
        : EMPTY_EXTENSIONS;
}
