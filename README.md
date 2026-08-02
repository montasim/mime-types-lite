# mime-types-lite

[![npm version](https://img.shields.io/npm/v/mime-types-lite.svg)](https://www.npmjs.com/package/mime-types-lite)
[![CI](https://github.com/montasim/mime-types-lite/actions/workflows/ci.yml/badge.svg)](https://github.com/montasim/mime-types-lite/actions/workflows/ci.yml)
[![license](https://img.shields.io/npm/l/mime-types-lite.svg)](./LICENSE)
[![Support me on SupportKori](https://img.shields.io/badge/Support%20me-SupportKori-FFDD00?style=flat-square)](https://www.supportkori.com/montasim)

Tiny, zero-dependency, type-safe MIME constants and helpers for HTTP APIs, uploads, and file extensions. It gives application code a curated vocabulary without shipping a complete MIME database.

```ts
import { MIME, fromExtension, matchesMimeType } from 'mime-types-lite';

MIME.JSON; // 'application/json'
fromExtension('reports/annual.pdf'); // 'application/pdf'
matchesMimeType('image/png', 'image/*'); // true
```

## Why this package?

- Avoid repeated, typo-prone MIME strings.
- Get literal TypeScript unions for both keys and values.
- Normalize real `Content-Type` headers, including parameters.
- Match exact media types or category wildcards such as `image/*`.
- Look up common file extensions without a runtime dependency.
- Use the same API from ESM, CommonJS, Node.js, or a browser bundle.

Use [`mime`](https://www.npmjs.com/package/mime) or [`mime-types`](https://www.npmjs.com/package/mime-types) if you need an exhaustive database. This package intentionally optimizes for a small, reviewed set of types commonly used by applications.

## Installation

```bash
npm install mime-types-lite
```

## API

### Constants

```ts
import mimeTypesLite, {
    JSON,
    MIME,
    type MimeType,
    type MimeTypeKey,
} from 'mime-types-lite';

JSON; // 'application/json'
MIME.PDF; // 'application/pdf'
mimeTypesLite.PNG; // 'image/png' (backward-compatible default export)

const key: MimeTypeKey = 'PDF';
const value: MimeType = 'application/pdf';
```

Individual named constants are friendly to tree-shaking. `MIME` and the default export provide an immutable object for convenient dynamic lookup.

### Extension lookup

```ts
import { extensionsFor, fromExtension } from 'mime-types-lite';

fromExtension('.json'); // 'application/json'
fromExtension('C:\\files\\photo.JPEG'); // 'image/jpeg'
fromExtension('https://example.com/app.js?v=2'); // 'text/javascript'
fromExtension('unknown.custom'); // undefined

extensionsFor('image/jpeg'); // ['jpg', 'jpeg', 'jpe']
extensionsFor('text/html; charset=utf-8'); // ['html', 'htm']
```

Lookup is based only on the filename or extension. It does not inspect file bytes.

### Validation and normalization

```ts
import {
    isKnownMimeType,
    isMimeType,
    mimeCategory,
    normalizeMimeType,
} from 'mime-types-lite';

isMimeType('application/problem+json'); // true
isKnownMimeType('application/json; charset=utf-8'); // true
normalizeMimeType(' Application/JSON; charset=utf-8 '); // 'application/json'
mimeCategory('image/svg+xml'); // 'image'
```

`isMimeType` validates syntax. `isKnownMimeType` checks the smaller curated collection exported by this package.

### Pattern matching

```ts
import { matchesMimeType } from 'mime-types-lite';

matchesMimeType('image/avif', 'image/*'); // true
matchesMimeType('application/json; charset=utf-8', 'application/json'); // true
matchesMimeType('text/plain', 'image/*'); // false
```

Supported patterns are exact media types, `type/*`, and `*/*`. This helper does not parse weighted HTTP `Accept` headers.

## Standards and compatibility aliases

The preferred constants follow the current IANA registry and relevant specifications. Notable corrections in 1.8 include:

- JavaScript: `text/javascript` rather than obsolete `application/javascript`.
- YAML: `application/yaml` rather than legacy `application/x-yaml`.
- Icons: `image/vnd.microsoft.icon` rather than legacy `image/x-icon`.
- GraphQL-over-HTTP responses: `application/graphql-response+json`.
- Semicolon-delimited CSV remains `text/csv`; a delimiter does not define a subtype.

Historical values needed for interoperability live in `LEGACY_MIME`. The old `MIME.GRAPHQL` and `MIME.CSV_SEMICOLON` keys remain for migration compatibility; new code should use `MIME.GRAPHQL_RESPONSE_JSON` and `MIME.CSV`.

Primary references:

- [IANA Media Types registry](https://www.iana.org/assignments/media-types/media-types.xhtml)
- [RFC 9239: JavaScript media types](https://www.rfc-editor.org/rfc/rfc9239)
- [RFC 9512: YAML media type](https://www.rfc-editor.org/rfc/rfc9512)
- [GraphQL over HTTP](https://graphql.github.io/graphql-over-http/draft/)

## Security

A filename extension, browser `File.type`, or HTTP `Content-Type` header can be incorrect or attacker-controlled. Do not use this package as proof of a file's contents. For untrusted uploads, also inspect file signatures, enforce size limits, store files safely, and process them with hardened tooling.

See [SECURITY.md](./SECURITY.md) for vulnerability reporting.

## Support policy

- Node.js 20 or newer
- Modern browser bundlers
- ESM and CommonJS
- TypeScript declarations included
- No runtime dependencies

## Contributing

Data additions should include an authoritative specification or registry reference and tests for every relevant extension. See [CONTRIBUTING.md](./CONTRIBUTING.md).

## Support

If this project has been useful, you can support its continued maintenance:

[![Support me on SupportKori](https://img.shields.io/badge/Support%20me-SupportKori-FFDD00?style=flat-square)](https://www.supportkori.com/montasim)

## License

[MIT](./LICENSE) © Mohammad Montasim Al Mamun Shuvo
