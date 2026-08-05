# Changelog

All notable changes are documented here. The project follows [Semantic Versioning](https://semver.org/).

## 1.9.0

### Changed

- Updated the package homepage to the hosted demo at https://mime-types-lite-demo.netlify.app.

## 1.8.0

### Added

- Extension and filename lookup with `fromExtension` and `extensionsFor`.
- MIME syntax validation, normalization, wildcard matching, category extraction, and curated-value checks.
- Named, tree-shakeable constants and accurate key/value TypeScript unions.
- Package-level ESM, CommonJS, declaration, and packed-consumer tests.
- MIT license and contribution guidance.

### Changed

- Reorganized the implementation into small constants, lookup, normalization, matching, and type modules.
- Corrected preferred JavaScript, YAML, icon, CSV, AVI, and GraphQL-over-HTTP values.
- Replaced automatic publishing on every `main` push with validated release publishing.
- Rewrote package metadata and documentation around the focused, curated API.

### Fixed

- Build artifacts are generated during `prepack`, preventing empty npm releases.
- ESM and CommonJS entry points now resolve to their correct file formats.

### Compatibility

- The immutable default constants object remains available.
- Historical values are available from `LEGACY_MIME`.
- `MimeType` now correctly describes MIME values; use `MimeTypeKey` for keys.
