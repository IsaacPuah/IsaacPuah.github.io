# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal portfolio site hosted on GitHub Pages at IsaacPuah.github.io. Pure static HTML/CSS/JS — no build tools, no package manager, no framework. Changes go live by pushing to `main`.

## Development

No build step. To preview locally, open `index.html` in a browser or run a local HTTP server:

```powershell
python -m http.server 8000
# then open http://localhost:8000
```

## Architecture

Two files make up the entire site:

- **`index.html`** — All markup, embedded CSS (~343 lines in a `<style>` tag), and two inline `<script>` blocks. The first script renders projects by iterating over the `PROJECTS` array from `projects.js`; the second drives the crosshair cursor and coordinate display using `requestAnimationFrame`.
- **`projects.js`** — Single exported `PROJECTS` array. Each entry has `title`, `titleItalic`, `desc`, `tags`, `image`, `imageAlt`, `link`, and optional `sections` (subsections with `heading` + `body`). This is the only file to edit when adding or updating project content.

## Design System

- **Fonts**: EB Garamond (serif body) + JetBrains Mono (monospace accents), loaded from Google Fonts.
- **Color tokens**: `--paper` (background) and `--ink` (foreground) CSS variables.
- **Mobile breakpoint**: 640px media query in the embedded `<style>`.
- **Project images**: Render grayscale by default, full color on hover.
- **Crosshair cursor**: Custom SVG crosshair follows mouse; coordinates display in the bottom-right corner.

## Deployment

Push to `main` — GitHub Pages serves the site automatically with no CI step.
