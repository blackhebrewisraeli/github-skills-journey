# Knowledge practiced (and not practiced yet)

This page is a study map, not a skill endorsement.

- **Practiced** means I completed a GitHub Skills exercise that made me *do* that work in a real repository.
- **Not practiced yet** means I do not have a finished exercise for it in this log.
- Nothing here is a credential, exam domain, or official “you know this” stamp.

For the course-by-course checklist, use [CATALOG.md](CATALOG.md).

---

## Practiced

### Git on the command line and on GitHub

I have finished exercises that walked through:

- Creating a repository, branches, commits, and pull requests on GitHub
- Cloning, staging, committing, and pushing from the CLI
- Amending commits, interactive rebase, squashing, and reordering history
- Why merge conflicts appear, how the markers read, and resolving them in the GitHub UI / editor
- Tagging versions and cutting a release-based workflow

**Finished in:** Introduction to GitHub · Introduction to Git · Change Commit History · Resolve Merge Conflicts · Release-based Workflow

### Collaboration on GitHub

I have finished exercises that walked through:

- Writing issues, PRs, and docs in Markdown (headings, lists, links, tables, code)
- Assigning reviewers, commenting, suggesting changes, approving, and merging
- Cross-linking issues, pull requests, and commits so the history is navigable
- Repository settings that support a healthier project: access, branch protection, templates / labels / similar project-hygiene features

**Finished in:** Communicate using Markdown · Review Pull Requests · Connect the Dots · Introduction to Repository Management

### Publishing and cloud-adjacent shipping

I have finished exercises that walked through:

- Publishing a site from a repository with GitHub Pages
- Opening a Codespaces environment from a repo (done earlier; quota is now exhausted)
- Deploying an app to Azure from GitHub Actions

**Finished in:** GitHub Pages · Code with Codespaces · Deploy to Azure

### Actions and automation

I have finished exercises that walked through:

- Workflow files, event triggers, jobs, and steps
- Running tests in CI and using workflow status as a signal
- Calling a reusable workflow from another workflow
- Writing a custom JavaScript Action (`action.yml`, inputs / outputs)
- Building and publishing a Docker image from Actions
- Calling models from Actions (AI in Actions, AI-powered JavaScript Actions)

**Finished in:** Hello GitHub Actions · Test with Actions · Reusable Workflows · Write JavaScript Actions · Publish Docker Images · AI in Actions · Create AI-Powered Actions · Deploy to Azure

### Security features I actually turned on or played

I have finished exercises that walked through:

- Dependabot and the dependency graph; seeing and patching vulnerable dependencies
- Secret scanning: finding plaintext credentials and the response path
- CodeQL code scanning, then a language matrix for more than one language
- A game-style pass over common vulnerability patterns (injection, XSS, path traversal, and similar)

**Finished in:** Secure your Repository Supply Chain · Introduction to Secret Scanning · Introduction to CodeQL · Configure CodeQL Language Matrix · Secure Code Game

### Copilot and agents I have actually run

I have finished exercises that walked through:

- Copilot inline suggestions and chat in the editor
- Talking to Copilot from the CLI to scaffold a small app
- Attaching an MCP server to Copilot
- Coordinating more than one agent on a shared task
- Standing up an agentic workflow (the “read the room” lab)
- Asking Copilot to review code in the editor and on pull requests, adding review instructions, and turning on automatic PR reviews with repository rulesets

**Finished in:** Getting Started with GitHub Copilot · Create Applications with the Copilot CLI · Integrate MCP with Copilot · Agent Orchestration · Agentic Workflows That Read the Room · Copilot Code Review

---

## Not practiced yet

These are gaps in *this log*, not a claim that I have never touched the product.

### Copilot I have not finished

| Topic | Course still open | Why it is still open |
|:------|:------------------|:---------------------|
| Custom instructions, agent skills, and custom agents | [Customize your GitHub Copilot experience](https://github.com/skills/customize-your-github-copilot-experience) | Not started; local editor. **Next.** |
| Multi-file apps from agent mode | [Build applications with Copilot agent mode](https://github.com/skills/build-applications-w-copilot-agent-mode) | Not started |
| Assigning issues to Copilot coding agent | [Expand your team with Copilot](https://github.com/skills/expand-your-team-with-copilot) | Parked — usually needs team / org access |
| Copilot Spaces as shared project context | [Scale institutional knowledge using Copilot Spaces](https://github.com/skills/scale-institutional-knowledge-using-copilot-spaces) | Parked — product access |
| Legacy (COBOL-style) modernization with Copilot | [Modernize your legacy code with GitHub Copilot](https://github.com/skills/modernize-your-legacy-code-with-github-copilot) | Not started |
| Idea → PR inside the Copilot App | [Idea to Merge with the Copilot App](https://github.com/skills/idea-to-merge-with-the-copilot-app) | Not started |

### Actions I have not finished

| Topic | Course still open |
|:------|:------------------|
| Upload, preview, download, and reuse workflow artifacts | [Workflow artifacts](https://github.com/skills/workflow-artifacts) |
| Automated quality signals, coverage, and required checks on PRs | [Ship with quality](https://github.com/skills/ship-with-quality) |

I already practiced *running tests in CI* (`test-with-actions`). Ship with quality is the leftover “quality gate / coverage / checks” lab, not a repeat of Hello Actions.

### Product labs I have not finished

| Topic | Course still open | Notes |
|:------|:------------------|:------|
| Natural-language app generation with Spark | [Idea to App with Spark](https://github.com/skills/idea-to-app-with-spark) | Only if Spark is on the account |
| Azure DevOps → GitHub migration with the CLI | [Migrate ADO repository](https://github.com/skills/migrate-ado-repository) | Copy exists; parked (Codespaces / ADO) |

### Retired official courses (not a knowledge gap I am chasing)

GitHub archived:

- Copilot + Codespaces + VS Code
- Your first extension for GitHub Copilot

I am not treating those as leftover academy practice. See [CATALOG.md](CATALOG.md).

---

## How I read this page

- A finished exercise is **practice**, not proof I would do the same task unaided in a production repo.
- Several finished security and Actions labs were done on **public** copies so Features that need a public repo would actually run.
- Codespaces is practiced once; I am not repeating Codespaces-heavy labs until quota returns.
- When I finish the next course, add one short bullet under **Practiced** and delete the matching row under **Not practiced yet**.
