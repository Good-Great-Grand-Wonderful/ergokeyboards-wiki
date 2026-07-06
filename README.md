# Crosses V2 Docs

Documentation for the [Crosses V2](https://github.com/good-Great-Grand-Wonderful/crosses-v2) split keyboard, built with [Docusaurus](https://docusaurus.io/). Migrated from the GitHub wiki.

## Working on the docs

```sh
npm install
npm start        # live-reload dev server
npm run build    # production build into build/
```

Pages live in `docs/`, images in `static/img/`. Sidebar order comes from `sidebar_position` in each page's frontmatter.

`CONTEXT.md` holds the project glossary — worth a skim before writing so the terms stay consistent (it's "Crosses V2", with Bridges as a variant; the right half is the "primary side"; and so on).

## Deploying

The site deploys to Cloudflare Workers as static assets (`wrangler.jsonc`). With the repo connected in the Cloudflare dashboard, pushes to `main` build with `npm run build` and deploy with `npx wrangler deploy`; branches get preview URLs.

One loose end: the production domain isn't decided yet. When it is, update `url` in `docusaurus.config.js`.
