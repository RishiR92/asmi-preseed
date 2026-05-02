# Investor PDF — exact replica of the website, no page breaks

## Goal

Generate a single-file, high-resolution PDF that looks **identical to the live memo site** — same fonts, colors, spacing, layout — rendered as **one tall continuous page** (no page breaks slicing through content).

This preserves the editorial dark aesthetic exactly and gives investors something they can email, scroll, and read end-to-end like a long-form deck without slide-by-slide friction.

## Approach

Use headless Chromium (already installed in the sandbox) to render the published site and export it as a single PDF page whose height equals the rendered document height. This is the only way to get a true pixel replica — converting via PPTX or rebuilding in ReportLab would lose the typography and grid fidelity.

### Steps

1. **Add a print-mode tweak to `memo.css`** — a `@media print` block that:
   - Locks the layout to a fixed desktop width (e.g. 1440px) so the PDF renders at the desktop breakpoint regardless of viewport.
   - Disables hover/animation effects and removes the radial glow overflow clipping issues.
   - Ensures backgrounds and colors print (`-webkit-print-color-adjust: exact`).

2. **Write a Node script** (`/tmp/render-memo-pdf.js`) using Chromium's CDP via `puppeteer-core` against the system `/bin/chromium`:
   - Loads the published URL `https://asmi-preseed.lovable.app`.
   - Sets viewport to 1440px wide.
   - Waits for fonts (`document.fonts.ready`) and for all network activity to settle.
   - Measures `document.documentElement.scrollHeight`.
   - Calls `page.pdf({ width: '1440px', height: '<measured>px', printBackground: true, pageRanges: '1' })` so the entire site renders as ONE page.

3. **Output** `Asmi_Investor_Memo.pdf` to `/mnt/documents/`.

4. **QA** — convert the PDF to a JPEG (it will be one very tall image), inspect top/middle/bottom crops to confirm:
   - Fonts loaded (Instrument Serif, JetBrains Mono, Syne)
   - Colors and section borders intact
   - No clipped content, no white gaps, no broken grids
   - Traction bar, team grid, market row, round block all aligned

5. Iterate on the print CSS until the render is clean, then deliver the file with a `<lov-artifact>` tag so you can download it.

## Why this format (vs. PPTX or paginated PDF)

- **Exact replica** — no re-typesetting, no font substitution, no grid drift.
- **No page breaks** — the request was explicit; section-per-slide pagination would split the team grid, market row, and stories awkwardly. A single tall page scrolls naturally in any PDF viewer.
- **Crisp at any zoom** — vector text + vector borders, raster only for the radial gradients.
- **One file, sharable** — no dependency on the live site staying up.

## Deliverable

`Asmi_Investor_Memo.pdf` at `/mnt/documents/`, rendered at 1440px-wide desktop layout, single continuous page, full color, embedded fonts. I'll surface it as a download artifact at the end.

## Out of scope (can add later if you want)

- A second paginated US Letter version for printing.
- A PPTX section-per-slide variant for in-person pitching.
- A cover page / table of contents.

Approve and I'll build it.
