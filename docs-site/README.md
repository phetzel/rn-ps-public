# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Installation

```bash
yarn
```

## Local Development

```bash
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Environment configuration

Copy `.env.example` to `.env.local` **in both the repo root and the `docs-site/` directory** and set:

- `PUBLIC_DOCS_OWNER` – GitHub user/organization that owns the public docs repo.
- `PUBLIC_DOCS_REPO` – Name of that repo.
- `PUBLIC_DOCS_PAT` – Personal Access Token with access to push to the public repo (leave blank locally; only set in GitHub Secrets).
- Optional overrides: `DOCS_GITHUB_URL`, `DOCS_SITE_URL`, `DOCS_BASE_URL`.

> **Note:** If you run Docusaurus commands from within `docs-site/`, you must have a `.env.local` file in the `docs-site/` directory. Environment variables in the root `.env.local` are not automatically loaded by Docusaurus when running from `docs-site/`.

These values are read by `docs-site/docusaurus.config.ts` so local previews match production URLs.

## Deployment

Deployments are handled by `.github/workflows/docs-pages.yml`:

1. On every push to `main`, the workflow installs dependencies in `docs-site/`, runs `npm run build`, and uploads the static `build/` output.
2. A deploy job fetches that artifact and force-pushes it to the public docs repo’s `gh-pages` branch using `PUBLIC_DOCS_PAT`.
3. GitHub Pages (configured to “GitHub Actions”) serves `https://<PUBLIC_DOCS_OWNER>.github.io/<PUBLIC_DOCS_REPO>/`.

To run the same pipeline manually:

```bash
cd docs-site
npm ci
npm run build
```

Then inspect `docs-site/build` locally or trigger `Docs Pages` via the Actions tab.
