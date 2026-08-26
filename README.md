<!-- ╔══════════════════════════════════════════════════════════════╗ -->
<!-- ║                         HEADER                                ║ -->
<!-- ╚══════════════════════════════════════════════════════════════╝ -->

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:2da44e,100:0969da&height=180&section=header&text=GitHub%20Skills%20Progress&fontSize=42&fontColor=ffffff&animation=fadeIn&fontAlignY=40&desc=Personal%20practice%20log%20%E2%80%94%20what%20I%20finished%2C%20what%20is%20left&descSize=16&descAlignY=62" alt="GitHub Skills Progress" width="100%" />

[![Finished](https://img.shields.io/badge/Finished-31%20%2F%2040-2da44e?style=for-the-badge)](CATALOG.md)
[![In progress](https://img.shields.io/badge/In%20progress-1-d4a017?style=for-the-badge)](ROADMAP.md)
[![Not started](https://img.shields.io/badge/Not%20started-8-6e7781?style=for-the-badge)](ROADMAP.md)
[![Catalog](https://img.shields.io/badge/Official%20catalog-GitHub%20Skills-0969da?style=for-the-badge)](https://learn.github.com/skills/)

</div>

## What this repository is

This is my **personal tracker** for [GitHub Skills](https://learn.github.com/skills/) — the interactive courses that run inside a real GitHub repository (issues, pull requests, Actions, and Mona's step-by-step checks).

I use it to answer four questions:

| Question | Where it lives |
|:---------|:---------------|
| Which courses have I finished? | This page · [CATALOG.md](CATALOG.md) |
| Which courses have I not done yet? | [ROADMAP.md](ROADMAP.md) · [CATALOG.md](CATALOG.md) |
| What knowledge did those exercises actually cover? | [KNOWLEDGE.md](KNOWLEDGE.md) |
| What is the next practice I should run? | [ROADMAP.md](ROADMAP.md) |

Each finished row links to the practice copy on my account. Those copies are the working evidence of the exercise — not a grade, badge, or official record.

## What this repository is not

This log is **personal study notes**. It is not:

- an official GitHub record of anything
- a credential, certificate, diploma, or exam result
- a substitute for GitHub's own course pages
- a claim that I am “certified,” “validated,” or endorsed by GitHub

If a number appears here (31 / 40, a track total, a progress bar), it only means **how many Skills exercises I have finished in my own copies**. It does not mean I passed a test.

---

## Snapshot

Last catalog check: **23 August 2026** against the public [`@skills`](https://github.com/skills) organization. Last practice logged: **26 August 2026** (Customize Copilot).

| | Count | Meaning |
|:--|:-----:|:--------|
| **Active Skills exercises** | 40 | Public course templates that are not archived |
| **Finished** | 31 | I completed the exercise in my copy |
| **In progress** | 1 | I created a copy; the exercise is not finished |
| **Not started** | 8 | Still in the catalog; no finished copy |
| **Archived official courses** | 2 | Retired by GitHub; not in the active queue |

```text
Finished     ███████████████████████████████░░░░░░░░░  31 / 40
In progress  ░                                         1
Not started  ░░░░░░░░                                  8
```

| Track | Finished | Still open | Open items |
|:------|:--------:|:----------:|:-----------|
| Git & GitHub basics | 8 | 0 | — |
| Repository management & security | 6 | 0 | — |
| Automation with Actions | 8 | 2 | [Workflow artifacts](https://github.com/skills/workflow-artifacts) · [Ship with quality](https://github.com/skills/ship-with-quality) |
| Dev environments & publishing | 2 | 0 | Codespaces · Pages *(Azure deploy is counted under Actions)* |
| Copilot, agents & AI | 7 | 5 | See [ROADMAP.md](ROADMAP.md) |
| Cloud, migration & Spark | 0 | 2 | Spark · ADO migrate *(started)* |

The track rows are **my grouping** for this log, not an official GitHub curriculum map. Finished rows add up to 31.

---

## How I treat a course

| Status | What I mean |
|:-------|:------------|
| **Finished** | I ran the exercise end-to-end in my copy. |
| **In progress** | A `skills-*` copy exists; steps are still open. |
| **Not started** | I have not created a practice copy (or I have not logged one). |
| **Parked** | I paused it on purpose (quota, product access, or not useful right now). |
| **Archived** | GitHub archived the official course. I am not counting it as leftover practice. |

GitHub Skills does not publish a central “you passed” dashboard. **Finished** here is my own note after the exercise completed — usually Mona's last closed issue, plus the commits in that practice repo.

---

## Finished practices

Grouped the way I actually studied them. Full inventory, including leftovers, is in [CATALOG.md](CATALOG.md).

### Git & GitHub basics · 8 / 8

| Practice | Knowledge I practiced | My copy |
|:---------|:----------------------|:--------|
| Introduction to GitHub | Repositories, branches, commits, pull requests | [`skills-introduction-to-github`](https://github.com/blackhebrewisraeli/skills-introduction-to-github) |
| Introduction to Git | Clone, stage, commit, and push from the command line | [`skills-introduction-to-git`](https://github.com/blackhebrewisraeli/skills-introduction-to-git) |
| Change Commit History | Amend, interactive rebase, squash, reorder | [`skills-change-commit-history`](https://github.com/blackhebrewisraeli/skills-change-commit-history) |
| Communicate using Markdown | Headings, lists, links, tables, code blocks in issues and docs | [`skills-communicate-using-markdown`](https://github.com/blackhebrewisraeli/skills-communicate-using-markdown) |
| Review Pull Requests | Reviewers, comments, suggestions, approve, merge | [`skills-review-pull-requests`](https://github.com/blackhebrewisraeli/skills-review-pull-requests) |
| Connect the Dots | Cross-linking issues, pull requests, and commits | [`skills-connect-the-dots`](https://github.com/blackhebrewisraeli/skills-connect-the-dots) |
| Release-based Workflow | Releases, tags, release workflow | [`skills-release-based-workflow`](https://github.com/blackhebrewisraeli/skills-release-based-workflow) |
| Resolve Merge Conflicts | Reading conflict markers and resolving them safely | [`skills-resolve-merge-conflicts`](https://github.com/blackhebrewisraeli/skills-resolve-merge-conflicts) |

### Repository management & security · 6 / 6

| Practice | Knowledge I practiced | My copy |
|:---------|:----------------------|:--------|
| Introduction to Repository Management | Settings, access, branch protection, healthy-project extras | [`skills-introduction-to-repository-management`](https://github.com/blackhebrewisraeli/skills-introduction-to-repository-management) |
| Secure your Repository Supply Chain | Dependabot, dependency graph, vulnerable dependencies | [`skills-secure-repository-supply-chain`](https://github.com/blackhebrewisraeli/skills-secure-repository-supply-chain) |
| Introduction to Secret Scanning | Finding leaked secrets and responding to them | [`skills-introduction-to-secret-scanning`](https://github.com/blackhebrewisraeli/skills-introduction-to-secret-scanning) |
| Introduction to CodeQL | Turning on CodeQL code scanning | [`skills-introduction-to-codeql`](https://github.com/blackhebrewisraeli/skills-introduction-to-codeql) |
| Configure CodeQL Language Matrix | Language matrices for multi-language scanning | [`skills-configure-codeql-language-matrix`](https://github.com/blackhebrewisraeli/skills-configure-codeql-language-matrix) |
| Secure Code Game | Spotting and fixing common vulnerability patterns | [`skills-secure-code-game`](https://github.com/blackhebrewisraeli/skills-secure-code-game) |

### Automation with GitHub Actions · 8 / 10

| Practice | Knowledge I practiced | My copy |
|:---------|:----------------------|:--------|
| Hello GitHub Actions | First workflow, events, jobs, steps | [`skills-hello-github-actions`](https://github.com/blackhebrewisraeli/skills-hello-github-actions) |
| Write JavaScript Actions | Custom reusable JavaScript actions | [`skills-write-javascript-actions`](https://github.com/blackhebrewisraeli/skills-write-javascript-actions) |
| Create AI Powered Actions | Actions that call GitHub Models | [`skills-create-ai-powered-actions`](https://github.com/blackhebrewisraeli/skills-create-ai-powered-actions) |
| Create and Use Reusable Workflows | Shared workflows called from other workflows | [`skills-reusable-workflows`](https://github.com/blackhebrewisraeli/skills-reusable-workflows) |
| Test with Actions | Tests in CI, status as a merge signal | [`skills-test-with-actions`](https://github.com/blackhebrewisraeli/skills-test-with-actions) |
| Publish Docker Images | Build and publish images from Actions | [`skills-publish-docker-images`](https://github.com/blackhebrewisraeli/skills-publish-docker-images) |
| AI in Actions | Inference / issue analysis inside workflows | [`skills-ai-in-actions`](https://github.com/blackhebrewisraeli/skills-ai-in-actions) |
| Deploy to Azure | Deploy an app from GitHub to Azure | [`skills-deploy-to-azure`](https://github.com/blackhebrewisraeli/skills-deploy-to-azure) |

Still open in this track: **workflow artifacts** and **ship with quality**.

### Dev environments & publishing · 2 / 2

| Practice | Knowledge I practiced | My copy |
|:---------|:----------------------|:--------|
| Code with Codespaces | Cloud editor attached to a repository | [`skills-code-with-codespaces`](https://github.com/blackhebrewisraeli/skills-code-with-codespaces) |
| GitHub Pages | Publish a site from a repository | [`skills-github-pages`](https://github.com/blackhebrewisraeli/skills-github-pages) |

Azure deploy is listed under Actions so it is not counted twice.

### Copilot, agents & AI · 7 finished · 5 still open

| Practice | Knowledge I practiced | My copy |
|:---------|:----------------------|:--------|
| Getting Started with GitHub Copilot | Inline suggestions and chat in the editor | [`skills-getting-started-with-github-copilot`](https://github.com/blackhebrewisraeli/skills-getting-started-with-github-copilot) |
| Integrate MCP with GitHub Copilot | Connecting MCP servers to Copilot | [`skills-integrate-mcp-with-copilot`](https://github.com/blackhebrewisraeli/skills-integrate-mcp-with-copilot) |
| Create Applications with the Copilot CLI | Building from the terminal with Copilot CLI | [`skills-create-applications-with-the-copilot-cli`](https://github.com/blackhebrewisraeli/skills-create-applications-with-the-copilot-cli) |
| Agent Orchestration: Build Your AI Dream Team | Coordinating multiple agents on one task | [`skills-agent-orchestration-build-your-ai-dream-team`](https://github.com/blackhebrewisraeli/skills-agent-orchestration-build-your-ai-dream-team) |
| Agentic Workflows That Read the Room | Agentic workflow setup (finished; previously left out of the old showcase) | [`skills-agentic-workflows-that-read-the-room`](https://github.com/blackhebrewisraeli/skills-agentic-workflows-that-read-the-room) |
| Copilot Code Review | Copilot reviews in the editor and on PRs, review instructions, automatic reviews via rulesets | [`skills-copilot-code-review`](https://github.com/blackhebrewisraeli/skills-copilot-code-review) |
| Customize Your GitHub Copilot Experience | Repo-wide and file/folder custom instructions, agent skills, and custom agents | [`skills-customize-your-github-copilot-experience`](https://github.com/blackhebrewisraeli/skills-customize-your-github-copilot-experience) |

Still open: agent mode apps, coding agent, Spaces, legacy modernization, Copilot App idea-to-merge.

---

## Leftover practice (short list)

The working queue, with reasons, lives in **[ROADMAP.md](ROADMAP.md)**.

**Next up (local editor if possible — skip Codespaces):**

1. [Build applications with Copilot agent mode](https://github.com/skills/build-applications-w-copilot-agent-mode) — no copy yet; [start a public copy →](https://github.com/new?template_owner=skills&template_name=build-applications-w-copilot-agent-mode&owner=%40me&name=skills-build-applications-w-copilot-agent-mode&description=Exercise:+Build+applications+with+GitHub+Copilot+agent+mode&visibility=public)

**Not started (active catalog):** workflow artifacts · ship with quality · expand team with Copilot · Copilot Spaces · modernize legacy code · Idea to App with Spark · Idea to Merge with the Copilot App

**Parked:** [Migrate ADO repository](https://github.com/skills/migrate-ado-repository) (copy exists; Codespaces / Azure DevOps) · org-only Copilot team features until I have access

---

## How I start the next course

1. Open the course from [learn.github.com/skills](https://learn.github.com/skills/) or the `@skills` repo in [ROADMAP.md](ROADMAP.md).
2. Use the template → create a **public** practice repo (keeps Actions minutes off the private-repo quota).
3. Wait ~20 seconds, then follow Step 1 in **Issues**.
4. Close steps as Mona confirms them.
5. When it is finished, update this log:

   - add or move the row in [CATALOG.md](CATALOG.md)
   - bump the counts on this page
   - add a short “what I practiced” line in [KNOWLEDGE.md](KNOWLEDGE.md)
   - drop it from [ROADMAP.md](ROADMAP.md)

**Constraint I am working around:** Codespaces quota is exhausted. Prefer browser or local-clone exercises until it resets.

---

## Pages in this log

| File | Role |
|:-----|:-----|
| [README.md](README.md) | Snapshot and finished list |
| [CATALOG.md](CATALOG.md) | Every official Skills exercise I know about, with status |
| [KNOWLEDGE.md](KNOWLEDGE.md) | Knowledge practiced vs knowledge not practiced yet |
| [ROADMAP.md](ROADMAP.md) | Leftover queue and next exercise |

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0969da,100:2da44e&height=120&section=footer" alt="footer" width="100%" />

<sub>Personal practice log · <a href="https://github.com/blackhebrewisraeli">@blackhebrewisraeli</a> · Not an official GitHub document</sub>

</div>
