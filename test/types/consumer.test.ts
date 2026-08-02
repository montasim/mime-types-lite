import mimeTypesLite, {
    MIME,
    fromExtension,
    type MimeType,
    type MimeTypeKey,
    type MimeTypePattern,
} from 'mime-types-lite';

const key: MimeTypeKey = 'PDF';
const value: MimeType = 'application/pdf';
const pattern: MimeTypePattern = 'image/*';
const lookedUp: MimeType | undefined = fromExtension('invoice.pdf');

void [mimeTypesLite[key], MIME.PDF, value, pattern, lookedUp];

// @ts-expect-error A MIME value is not a key.
const invalidKey: MimeTypeKey = 'application/pdf';

// @ts-expect-error An arbitrary value is not part of the curated union.
const invalidValue: MimeType = 'application/not-curated';

void [invalidKey, invalidValue];
