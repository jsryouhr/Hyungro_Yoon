---
name: Python installs in pnpm workspaces
description: Side effects of installing one-off Python packages in this Node.js workspace.
---

Installing a one-off Python package with the workspace package installer can initialize a uv project at the repository root, add Python and Nix settings to `.replit`, and create root-level `pyproject.toml`, `uv.lock`, and `src/` files.

**Why:** This is a pnpm workspace, so Python scaffolding for a one-time file task can create unrelated project changes.

**How to apply:** Prefer existing system utilities for one-off PDF or image work. If Python installation is necessary, inspect the workspace changes and remove only files created by that install; restore `.replit` through its validation callback, not a direct edit.
