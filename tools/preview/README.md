# Local preview

A tiny zero-config dev environment for this Markdown-based tracker. It renders
the repository docs the way GitHub does — GitHub-Flavored Markdown, `> [!NOTE]`
alert callouts, and Mermaid diagrams — so you can preview edits before pushing.

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:4173. Pages:

| Route        | Document       |
|:-------------|:---------------|
| `/`          | `README.md`    |
| `/catalog`   | `CATALOG.md`   |
| `/knowledge` | `KNOWLEDGE.md` |
| `/roadmap`   | `ROADMAP.md`   |

`GET /healthz` returns a small JSON status object for scripts/health checks.

Set `PORT` to change the port (default `4173`), e.g. `PORT=8080 npm run dev`.

## What it does

`server.mjs` uses Node's built-in HTTP server plus `markdown-it`
(`markdown-it-github-alerts`, `markdown-it-anchor`), styles with
`github-markdown-css`, and renders ` ```mermaid ` fences client-side via the
bundled `mermaid` package. Everything is served locally, so no network access
is required to preview.
