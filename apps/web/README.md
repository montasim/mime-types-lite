# mime-types-lite web

[![CI](https://github.com/montasim/mime-types-lite/actions/workflows/ci.yml/badge.svg)](https://github.com/montasim/mime-types-lite/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/license-MIT-3157d5.svg)](../../LICENSE)

Official documentation and interactive examples for [`mime-types-lite`](https://www.npmjs.com/package/mime-types-lite), a tiny, zero-dependency, type-safe collection of MIME constants and helpers for HTTP APIs, uploads, Content-Type headers, and file extensions.

The site is built with TanStack Start, React 19, shadcn/ui primitives, and Tailwind CSS 4. It is configured for SSR, prerendering, and Netlify deployment.

## Current package coverage

The website documents `mime-types-lite` **1.9.0**, including:

- Named constants, the immutable `MIME` object, and compatibility aliases
- `fromExtension` and `extensionsFor`
- `normalizeMimeType`, `isMimeType`, `isKnownMimeType`, and `mimeCategory`
- Exact, category wildcard, and universal matching with `matchesMimeType`
- Literal TypeScript types for MIME keys, values, extensions, categories, and patterns
- Current standards values and the separate `LEGACY_MIME` object
- Security guidance for untrusted uploads

## Stack

- [TanStack Start](https://tanstack.com/start/latest) with file-based routing and full-document SSR
- [React 19](https://react.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/) through its Vite plugin
- [shadcn/ui](https://ui.shadcn.com/) components using Radix primitives
- [Netlify TanStack Start adapter](https://docs.netlify.com/build/frameworks/framework-setup-guides/tanstack-start/)
- TypeScript, ESLint, and Prettier

## Requirements

- Node.js 20.19 or newer
- pnpm 10.17 or newer

## Local development

```bash
git clone https://github.com/montasim/mime-types-lite.git
cd mime-types-lite
pnpm install
pnpm dev:web
```

Open [http://localhost:3000](http://localhost:3000).

## Commands

| Command             | Purpose                                                      |
| ------------------- | ------------------------------------------------------------ |
| `pnpm dev`          | Start the TanStack Start development server                  |
| `pnpm build`        | Build the client, SSR bundle, prerendered pages, and sitemap |
| `pnpm preview`      | Preview the production build locally                         |
| `pnpm typecheck`    | Run strict TypeScript checks                                 |
| `pnpm lint`         | Run ESLint with zero warnings allowed                        |
| `pnpm format:check` | Check formatting                                             |
| `pnpm check`        | Run formatting, lint, typecheck, and production build checks |

## Architecture

```text
src/
├── components/
│   ├── common/       # Shared application components
│   ├── docs/         # Documentation feature components
│   ├── home/         # Homepage feature components
│   └── ui/           # shadcn/ui primitives
├── config/           # Site and package configuration
├── content/          # Typed API documentation content
├── lib/              # Framework-independent utilities
├── routes/           # TanStack Router file routes
├── styles/           # Tailwind entrypoint and design tokens
└── router.tsx        # Router factory and registration
```

Feature components depend on shared UI and content modules; shared modules do not depend on feature modules. Package metadata and external URLs live in one configuration module so routes and components do not duplicate them.

## SEO

The application includes:

- Server-rendered page titles and descriptions
- Canonical links and index directives
- Open Graph and Twitter card metadata
- SoftwareApplication and TechArticle JSON-LD
- Generated `sitemap.xml` for every static route
- `robots.txt`, web app manifest, branded favicon, and social preview image
- Semantic landmarks, accessible navigation, visible focus states, and reduced-motion support

## Netlify deployment

The repository includes the official Netlify TanStack Start Vite plugin and a root [`netlify.toml`](../../netlify.toml) configuration.

1. Import this GitHub repository into Netlify.
2. Select the `v2` branch if it is not the production branch yet.
3. Netlify will use `pnpm build:web` and publish `apps/web/dist/client`.
4. No framework preset or redirects need to be configured manually.

SSR routes and server functions are emitted through Netlify’s generated server function. Static assets receive immutable cache headers, while security headers apply to every route.

## Related links

- [Live site](https://mime-types-lite.netlify.app)
- [`mime-types-lite` on npm](https://www.npmjs.com/package/mime-types-lite)
- [`mime-types-lite` source](https://github.com/montasim/mime-types-lite)
- [Issue tracker](https://github.com/montasim/mime-types-lite/issues)

## License

[MIT](../../LICENSE) © Mohammad Montasim Al Mamun Shuvo
