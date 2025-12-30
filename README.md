# Website

This website is built using Docusaurus (v3) — a modern static site generator focused on documentation and blogs.

## Quickstart (for contributors)

- Requirements
  - Node: >= 20.0 (see `package.json` "engines"). Use nvm/n to manage versions if needed.
  - A package manager: npm (recommended) or yarn. This repo works with the default npm tooling in scripts.

- Install dependencies

```bash
# From the repository root
npm ci
# or, if you prefer yarn:
# yarn
```

- Local development

```bash
npm run start
```

Opens a local dev server with live reload. Edit files in `docs/`, `blog/`, or `src/` to see changes.

- Build (production)

```bash
npm run build
```

This outputs the static site into the `build/` directory.

- Serve the production build locally

```bash
npm run serve
# or
npx docusaurus serve build
```

- Deployment (GitHub Pages)

The project contains a `deploy` script driven by Docusaurus. You can deploy using SSH or by providing a GitHub username.

```bash
# Using SSH (push to gh-pages branch via SSH):
USE_SSH=true npm run deploy

# Not using SSH (provide a GitHub username):
GIT_USER=<YourGitHubUsername> npm run deploy
```

If you host elsewhere (Vercel, Netlify), deploy the contents of the `build/` directory using your platform of choice.

## Where to edit content

- Documentation: `docs/` (sidebars configured by `sidebars.ts`)
- Blog posts: `blog/` (authors/tags in `blog/authors.yml`, `blog/tags.yml`)
- Pages & React components: `src/pages/`, `src/components/` (React + TypeScript)
- Static assets (images, favicon, etc): `static/` (copy files here and reference them at `/` paths)

## Important config files

- `docusaurus.config.ts` — site metadata (title, baseUrl, URL, navbar/footer, theme)
- `sidebars.ts` — documentation sidebar structure
- `package.json` — scripts and dependency versions
- `tsconfig.json` — TypeScript settings

If you change repository name, base URL, or hosting provider, update `docusaurus.config.ts` (fields like `url`, `baseUrl`, `organizationName`, and `projectName`).

## Useful npm scripts (from `package.json`)

- `npm run start` — start dev server
- `npm run build` — create production build
- `npm run serve` — serve the built site locally
- `npm run deploy` — run Docusaurus deploy (configured for GitHub Pages)
- `npm run typecheck` — run TypeScript compiler for type checking

## Troubleshooting

- Node version mismatch: ensure your active Node meets `>=20.0`. Use nvm: `nvm install 20 && nvm use 20`.
- Port in use: the dev server defaults to port 3000; set PORT env var or kill the process using the port.
- WSL file-watch issues: run `npm run start` inside WSL (not from Windows path) to avoid file watching inconsistencies.
- Edit links or "Edit this page" links: update `editUrl` in `docusaurus.config.ts` to your repo to enable correct edit links.

## Next steps / contributor checklist

- Verify CI/CD secrets required for your chosen deployment (for example, GitHub token for automated deploys).
- Add a CONTRIBUTING.md with branch/PR guidelines and preview instructions.
- Optionally add a GitHub Action that builds and deploys to GitHub Pages or a platform-specific workflow (Vercel/Netlify).

---

If you want, I can also:
- Add a short `CONTRIBUTING.md` template,
- Add a GitHub Actions workflow example for automatic deploys,
- Or update `docusaurus.config.ts` with repo-specific `editUrl` information.

If you'd like any of those, tell me which and I'll add them.
