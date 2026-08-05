# mime-types-lite

[![npm version](https://img.shields.io/npm/v/mime-types-lite.svg)](https://www.npmjs.com/package/mime-types-lite)
[![CI](https://github.com/montasim/mime-types-lite/actions/workflows/ci.yml/badge.svg)](https://github.com/montasim/mime-types-lite/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/license-MIT-3157d5.svg)](LICENSE)

A pnpm monorepo for the zero-dependency `mime-types-lite` TypeScript library and its interactive TanStack Start documentation site. The web app consumes the local package on every build, so API, examples, and documentation can be developed and verified together.

**[Open the live documentation](https://mime-types-lite-demo.netlify.app) · [Read the package API](packages/mime-types-lite/README.md) · [Install from npm](https://www.npmjs.com/package/mime-types-lite)**

```ts
import { MIME, fromExtension, matchesMimeType } from "mime-types-lite";

MIME.JSON; // 'application/json'
fromExtension("reports/annual.pdf"); // 'application/pdf'
matchesMimeType("image/png", "image/*"); // true
```

## What is included

| Workspace                  | Purpose                                                                                                | Documentation                                        |
| -------------------------- | ------------------------------------------------------------------------------------------------------ | ---------------------------------------------------- |
| `packages/mime-types-lite` | Published ESM/CommonJS package with constants, lookup, normalization, validation, and matching helpers | [Package README](packages/mime-types-lite/README.md) |
| `apps/web`                 | React 19 and TanStack Start documentation site with interactive examples                               | [Web README](apps/web/README.md)                     |

The dependency direction is one-way: `apps/web` depends on `mime-types-lite` through pnpm's `workspace:*` protocol; the library never depends on the application.

## Quick start

Prerequisites:

- Node.js 20.19 or newer; `.node-version` selects Node.js 24
- pnpm 10.17.1

```sh
git clone https://github.com/montasim/mime-types-lite.git
cd mime-types-lite
pnpm install
pnpm dev
```

The root development command first builds the local package, then starts the web app at [http://localhost:3000](http://localhost:3000). No external services are required. `apps/web/.env.example` documents the optional public canonical-site URL.

## Install and use the package

Consumers can install the published library without the web workspace:

```sh
pnpm add mime-types-lite
```

```ts
import {
    MIME,
    extensionsFor,
    fromExtension,
    isKnownMimeType,
    normalizeMimeType,
} from "mime-types-lite";

fromExtension("avatar.JPEG"); // 'image/jpeg'
extensionsFor(MIME.JPEG); // ['jpg', 'jpeg', 'jpe']
normalizeMimeType("Application/JSON; charset=utf-8"); // 'application/json'
isKnownMimeType("application/json; charset=utf-8"); // true
```

See the [package README](packages/mime-types-lite/README.md) for the complete API, TypeScript types, standards references, compatibility aliases, and security guidance.

## Workspace commands

Run these from the repository root:

| Command              | Purpose                                              |
| -------------------- | ---------------------------------------------------- |
| `pnpm dev`           | Build the package and start the web app on port 3000 |
| `pnpm build`         | Build the package followed by the production web app |
| `pnpm build:package` | Build the package's ESM, CommonJS, and declarations  |
| `pnpm build:web`     | Build the package and production web app             |
| `pnpm test`          | Run package runtime and type tests                   |
| `pnpm test:types`    | Run package declaration and consumer type tests      |
| `pnpm check:package` | Run complete package validation                      |
| `pnpm check:web`     | Build the package, then verify the web app           |
| `pnpm check`         | Verify both workspaces                               |
| `pnpm format`        | Format every workspace that defines a formatter      |
| `pnpm format:check`  | Check formatting across both workspaces              |

## Repository layout

```text
.
├── apps/
│   └── web/                       # TanStack Start site
├── packages/
│   └── mime-types-lite/           # Published npm package, tests, and package docs
├── .github/workflows/             # Workspace CI and npm publishing
├── netlify.toml                   # Monorepo-aware web deployment
└── pnpm-workspace.yaml            # Workspace discovery and dependency overrides
```

## Quality and release workflow

CI installs the frozen pnpm lockfile and runs `pnpm check` on supported Node.js versions. This covers formatting, linting, TypeScript, package runtime and type tests, export and metadata validation, and the production web build. CI also inspects the npm tarball before changes merge.

Package publishing remains separate from ordinary pushes. Publishing a GitHub release tagged `vX.Y.Z` runs the release workflow, validates the package in `packages/mime-types-lite`, and publishes that workspace to npm with provenance. See the [release guide](packages/mime-types-lite/RELEASING.md) and [changelog](packages/mime-types-lite/CHANGELOG.md).

## Deployment

The root [Netlify configuration](netlify.toml) runs `pnpm build:web` and publishes `apps/web/dist/client`. TanStack Start server output is handled by the official Netlify Vite integration. Local Netlify development runs on port 8888 and targets the Vite server on port 3000.

The public canonical URL defaults to `https://mime-types-lite-demo.netlify.app`. Set `VITE_SITE_URL` from [the safe example](apps/web/.env.example) when deploying at another URL.

## Scope and security

`mime-types-lite` intentionally provides a small, curated set of media types rather than an exhaustive MIME database. A filename extension, browser `File.type`, or HTTP `Content-Type` value can be incorrect or attacker-controlled; these helpers do not inspect file bytes and must not be used as proof of file contents.

For untrusted uploads, inspect file signatures, enforce size limits, store files safely, and use hardened processing tools. Report vulnerabilities privately according to the [security policy](packages/mime-types-lite/SECURITY.md).

## Contributing and support

Issues and focused pull requests are welcome in the [GitHub repository](https://github.com/montasim/mime-types-lite). Data changes should cite an authoritative registry or specification, include relevant tests, and pass `pnpm check`. Read the [contribution guide](packages/mime-types-lite/CONTRIBUTING.md) for the package workflow.

## Author and license

Created and maintained by [Mohammad Montasim Al Mamun Shuvo](https://github.com/montasim). Licensed under the [MIT License](LICENSE).
