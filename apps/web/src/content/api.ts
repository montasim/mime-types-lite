export interface ApiReference {
  id: string;
  name: string;
  group: 'Constants' | 'Lookup' | 'Validation' | 'Types';
  description: string;
  signature?: string;
  example: string;
  note?: string;
}

export const apiReferences: readonly ApiReference[] = [
  {
    id: 'constants',
    name: 'Constants',
    group: 'Constants',
    description:
      'Import tree-shakeable named constants, use the immutable MIME object, or keep the backward-compatible default export.',
    signature: 'MIME: Readonly<Record<MimeTypeKey, MimeType>>',
    example: `import mimeTypesLite, { JSON, MIME } from 'mime-types-lite';

JSON;              // 'application/json'
MIME.PDF;          // 'application/pdf'
mimeTypesLite.PNG; // 'image/png'`,
  },
  {
    id: 'from-extension',
    name: 'fromExtension',
    group: 'Lookup',
    description:
      'Find a curated media type from an extension, filename, Windows path, or URL. Query strings and fragments are ignored.',
    signature: 'fromExtension(value: string): MimeType | undefined',
    example: `fromExtension('.json');
// 'application/json'

fromExtension('C:\\files\\photo.JPEG');
// 'image/jpeg'

fromExtension('https://example.com/app.js?v=2');
// 'text/javascript'`,
    note: 'Lookup uses the filename only. It does not inspect file bytes.',
  },
  {
    id: 'extensions-for',
    name: 'extensionsFor',
    group: 'Lookup',
    description:
      'Return every known extension for a media type without leading dots. Content-Type parameters are normalized first.',
    signature: 'extensionsFor(value: string): readonly KnownExtension[]',
    example: `extensionsFor('image/jpeg');
// ['jpg', 'jpeg', 'jpe']

extensionsFor('text/html; charset=utf-8');
// ['html', 'htm']`,
  },
  {
    id: 'normalize',
    name: 'normalizeMimeType',
    group: 'Validation',
    description:
      'Remove parameters, trim whitespace, lowercase the value, and validate MIME syntax. Invalid input returns undefined.',
    signature: 'normalizeMimeType(value: unknown): MimeTypeString | undefined',
    example: `normalizeMimeType(' Application/JSON; charset=utf-8 ');
// 'application/json'

normalizeMimeType('not a MIME type');
// undefined`,
  },
  {
    id: 'validation',
    name: 'Validation helpers',
    group: 'Validation',
    description:
      'Validate syntax, check the curated set, or extract a recognized top-level media category.',
    example: `isMimeType('application/problem+json'); // true
isKnownMimeType('application/json; charset=utf-8'); // true
mimeCategory('image/svg+xml'); // 'image'`,
  },
  {
    id: 'matching',
    name: 'matchesMimeType',
    group: 'Validation',
    description:
      'Match a Content-Type value against an exact media type, a category wildcard, or the universal wildcard.',
    signature: 'matchesMimeType(value: unknown, pattern: MimeTypePattern | string): boolean',
    example: `matchesMimeType('image/avif', 'image/*'); // true
matchesMimeType('application/json; charset=utf-8', 'application/json'); // true
matchesMimeType('text/plain', 'image/*'); // false`,
    note: 'This helper does not parse weighted HTTP Accept headers.',
  },
  {
    id: 'types',
    name: 'TypeScript types',
    group: 'Types',
    description:
      'Literal unions provide precise types for keys, known values, extensions, categories, and patterns.',
    example: `import type {
  KnownExtension,
  MimeCategory,
  MimeType,
  MimeTypeKey,
  MimeTypePattern,
  MimeTypeString,
} from 'mime-types-lite';`,
  },
] as const;

export const modernValues = [
  { label: 'JavaScript', preferred: 'text/javascript', legacy: 'application/javascript' },
  { label: 'YAML', preferred: 'application/yaml', legacy: 'application/x-yaml' },
  { label: 'Icon', preferred: 'image/vnd.microsoft.icon', legacy: 'image/x-icon' },
  {
    label: 'GraphQL response',
    preferred: 'application/graphql-response+json',
    legacy: 'application/graphql',
  },
] as const;
