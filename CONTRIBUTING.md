# Contributing

Thanks for helping improve `mime-types-lite`.

## Development

```bash
npm ci
npm run check
```

`npm run check` verifies formatting, lint rules, TypeScript, runtime tests, type tests, package metadata, ESM/CommonJS exports, and the contents of the npm tarball.

## Adding or changing a media type

1. Link an authoritative source, preferably the IANA registry or the specification that owns the media type.
2. Put preferred constants in `src/constants.ts` and historical aliases in `LEGACY_MIME`.
3. Add extensions to `src/extensions.ts` only when the association is well established.
4. Add runtime and type tests.
5. Update the standards section of the README when behavior changes.

This project is deliberately curated. A type may be valid but still be outside the package's common application-focused scope.

## Pull requests

- Keep changes focused.
- Explain compatibility implications.
- Do not commit `dist`, coverage, or package tarballs.
- Use a conventional commit title such as `feat: add AV1 media types`.
