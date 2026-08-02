import type { MIME } from './constants.js';
import type { EXTENSION_TO_MIME } from './extensions.js';

/** A syntactically valid media-type string. */
export type MimeTypeString = `${string}/${string}`;

/** A key from the curated `MIME` object, such as `PDF` or `JSON`. */
export type MimeTypeKey = keyof typeof MIME;

/** A media-type value known to this package, such as `application/pdf`. */
export type MimeType = (typeof MIME)[MimeTypeKey];

/** A file extension known to this package, without a leading dot. */
export type KnownExtension = keyof typeof EXTENSION_TO_MIME;

/** A top-level media-type category. */
export type MimeCategory =
    | 'application'
    | 'audio'
    | 'font'
    | 'image'
    | 'message'
    | 'model'
    | 'multipart'
    | 'text'
    | 'video';

/** A concrete type or wildcard suitable for media-type matching. */
export type MimeTypePattern = MimeTypeString | `${MimeCategory}/*` | '*/*';
