// Local live-preview server for this Markdown-based study tracker.
//
// Renders the repository's Markdown documents (README, CATALOG, KNOWLEDGE,
// ROADMAP) the way GitHub does: GitHub-Flavored Markdown, GitHub alert
// callouts (> [!NOTE] ...), and client-side Mermaid diagrams. Static assets
// under /assets are served as-is. Everything is served locally so the preview
// works without a network connection.

import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { createReadStream } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join, extname, normalize } from 'node:path';
import MarkdownIt from 'markdown-it';
import anchor from 'markdown-it-anchor';
import githubAlerts from 'markdown-it-github-alerts';

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = join(__dirname, '..', '..');
const nodeModules = join(repoRoot, 'node_modules');

const HOST = process.env.HOST || '0.0.0.0';
const PORT = Number(process.env.PORT || 4173);

// Markdown documents to expose, in nav order.
const DOCS = [
  { slug: '', file: 'README.md', title: 'Dashboard' },
  { slug: 'catalog', file: 'CATALOG.md', title: 'Catalog' },
  { slug: 'knowledge', file: 'KNOWLEDGE.md', title: 'Knowledge' },
  { slug: 'roadmap', file: 'ROADMAP.md', title: 'Roadmap' },
];

const md = new MarkdownIt({ html: true, linkify: true, typographer: false })
  .use(anchor, { permalink: anchor.permalink.headerLink() })
  .use(githubAlerts);

// Render ```mermaid fences as <pre class="mermaid"> so the browser can draw them.
const defaultFence = md.renderer.rules.fence.bind(md.renderer.rules);
md.renderer.rules.fence = (tokens, idx, options, env, self) => {
  const token = tokens[idx];
  const info = (token.info || '').trim().toLowerCase();
  if (info === 'mermaid') {
    return `<pre class="mermaid">${md.utils.escapeHtml(token.content)}</pre>\n`;
  }
  return defaultFence(tokens, idx, options, env, self);
};

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.json': 'application/json; charset=utf-8',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
};

function pageShell(activeSlug, bodyHtml) {
  const nav = DOCS.map((d) => {
    const href = d.slug ? `/${d.slug}` : '/';
    const active = d.slug === activeSlug ? ' class="active"' : '';
    return `<a href="${href}"${active}>${d.title}</a>`;
  }).join('');

  return `<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>GitHub Skills Tracker — Local Preview</title>
<link rel="stylesheet" href="/vendor/github-markdown-light.css" />
<link rel="stylesheet" href="/vendor/alerts/github-base.css" />
<link rel="stylesheet" href="/vendor/alerts/github-colors-light.css" />
<style>
  body { margin: 0; background: #f6f8fa; color: #1f2328; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif; }
  header.topbar { position: sticky; top: 0; z-index: 10; background: #24292f; color: #fff; padding: 0 20px; display: flex; align-items: center; gap: 18px; height: 56px; box-shadow: 0 1px 0 rgba(0,0,0,.1); }
  header.topbar .brand { font-weight: 600; font-size: 15px; }
  header.topbar nav { display: flex; gap: 4px; }
  header.topbar nav a { color: #d0d7de; text-decoration: none; padding: 6px 12px; border-radius: 6px; font-size: 14px; }
  header.topbar nav a:hover { background: rgba(255,255,255,.1); color: #fff; }
  header.topbar nav a.active { background: #2da44e; color: #fff; }
  header.topbar .env { margin-left: auto; font-size: 12px; color: #7ee787; }
  main { max-width: 1012px; margin: 24px auto; padding: 0 16px; }
  .markdown-body { background: #fff; border: 1px solid #d0d7de; border-radius: 8px; padding: 32px 40px; box-sizing: border-box; }
  .markdown-body pre.mermaid { background: transparent; border: 0; padding: 8px 0; text-align: center; }
</style>
</head>
<body>
<header class="topbar">
  <span class="brand">GitHub Skills Tracker</span>
  <nav>${nav}</nav>
  <span class="env">● local preview</span>
</header>
<main>
  <article class="markdown-body">
${bodyHtml}
  </article>
</main>
<script type="module">
  import mermaid from '/vendor/mermaid/mermaid.esm.min.mjs';
  mermaid.initialize({ startOnLoad: true, theme: 'default', securityLevel: 'loose' });
</script>
</body>
</html>`;
}

async function renderDoc(doc) {
  const source = await readFile(join(repoRoot, doc.file), 'utf8');
  const html = md.render(source);
  return pageShell(doc.slug, html);
}

// Serve a whitelisted file from node_modules under a friendly /vendor path.
const VENDOR = {
  '/vendor/github-markdown-light.css': join(nodeModules, 'github-markdown-css', 'github-markdown-light.css'),
  '/vendor/alerts/github-base.css': join(nodeModules, 'markdown-it-github-alerts', 'styles', 'github-base.css'),
  '/vendor/alerts/github-colors-light.css': join(nodeModules, 'markdown-it-github-alerts', 'styles', 'github-colors-light.css'),
};

async function sendFile(res, filePath, statusCode = 200) {
  try {
    const info = await stat(filePath);
    if (!info.isFile()) throw new Error('not a file');
    res.writeHead(statusCode, { 'Content-Type': MIME[extname(filePath).toLowerCase()] || 'application/octet-stream' });
    createReadStream(filePath).pipe(res);
    return true;
  } catch {
    return false;
  }
}

function send(res, status, type, body) {
  res.writeHead(status, { 'Content-Type': type });
  res.end(body);
}

const server = createServer(async (req, res) => {
  try {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const pathname = decodeURIComponent(url.pathname);

    // Health check for automated verification.
    if (pathname === '/healthz') return send(res, 200, 'application/json; charset=utf-8', JSON.stringify({ ok: true, docs: DOCS.map((d) => d.file) }));

    // Rendered Markdown documents.
    const doc = DOCS.find((d) => (d.slug ? `/${d.slug}` : '/') === pathname);
    if (doc) return send(res, 200, 'text/html; charset=utf-8', await renderDoc(doc));

    // Repository assets (e.g. /assets/progress.svg).
    if (pathname.startsWith('/assets/')) {
      const safe = normalize(pathname).replace(/^(\.\.[/\\])+/, '');
      if (await sendFile(res, join(repoRoot, safe))) return;
    }

    // Vendored CSS.
    if (VENDOR[pathname]) {
      if (await sendFile(res, VENDOR[pathname])) return;
    }

    // Mermaid ESM bundle and its relative chunks.
    if (pathname.startsWith('/vendor/mermaid/')) {
      const rel = pathname.replace('/vendor/mermaid/', '');
      const safe = normalize(rel).replace(/^(\.\.[/\\])+/, '');
      if (await sendFile(res, join(nodeModules, 'mermaid', 'dist', safe))) return;
    }

    send(res, 404, 'text/plain; charset=utf-8', `Not found: ${pathname}`);
  } catch (err) {
    send(res, 500, 'text/plain; charset=utf-8', `Server error: ${err && err.stack ? err.stack : err}`);
  }
});

server.listen(PORT, HOST, () => {
  const shown = HOST === '0.0.0.0' ? 'localhost' : HOST;
  console.log(`Live preview running at http://${shown}:${PORT}`);
  console.log('Documents:');
  for (const d of DOCS) console.log(`  ${d.title.padEnd(10)} http://${shown}:${PORT}${d.slug ? '/' + d.slug : '/'}`);
});
