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

- **`index.html`** — All markup, embedded CSS in a `<style>` tag, and inline `<script>` blocks: one renders projects by iterating over the `PROJECTS` array from `projects.js`; one drives the ring cursor (a custom ring that eases behind the pointer, native cursor hidden via JS); one powers the drag-to-steer wheel on the CalSol card.
- **`projects.js`** — Single exported `PROJECTS` array. Each entry has `title`, `titleItalic`, `desc`, `tags`, `link`, optional `sections` (subsections with `heading` + `body`), and optional imagery: a single `image` + `imageAlt`, or an `images` array (`{ src, alt }`) rendered side by side. The CalSol entry additionally sets `steer: true` with `wheel` + `wheelAlt` to render the interactive steering wheel. This is the only file to edit when adding or updating project content.

## Design System

- **Fonts**: EB Garamond (serif body) + JetBrains Mono (monospace accents), loaded from Google Fonts.
- **Color tokens**: `--paper` (background) and `--ink` (foreground) CSS variables.
- **Mobile breakpoint**: 640px media query in the embedded `<style>`.
- **Project images**: Render grayscale by default, full color on hover.
- **Ring cursor**: A custom ring follows the mouse (native cursor hidden via a JS-added `.ring-cursor` class) and swells over links, buttons, and the steering wheel. Disabled on touch devices.
- **Steering wheel**: The CalSol card renders a transparent F1-wheel cutout you drag to steer — rotates in place, locks at ±130° with no wrap-around, springs back to centre on release.

## Deployment

Push to `main` — GitHub Pages serves the site automatically with no CI step.
