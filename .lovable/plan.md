## Mobile optimisation pass — typographic hierarchy preserved

Goal: make the mobile view feel like the desktop screenshots — clear hierarchy where **section headlines** (Instrument Serif h2s) and **big numbers** ($400B, 3.5B, 1,000, $300k) visibly dominate body text. Desktop layout stays byte-identical; only ≤760px and ≤420px change.

### Issues observed on the current mobile build
1. Body text is too small (13–15px) for phones.
2. Traction stats stack into a tall 1- or 2-col list with small numbers — they should read as big proof points.
3. Section h2s (`.section h2`) shrink to 26px on mobile — barely larger than body. In the desktop reference they tower over the surrounding copy. Same for market sizes ($400B etc.) which look prominent on desktop but get reduced to 34px on mobile.
4. Story h3s, team names, ask numbers — all flatten to similar weight as body.
5. Vertical rhythm between sections feels cramped.

### Hierarchy rules to enforce on mobile (from the reference screenshots)
- **Section h2** (Instrument Serif): always ~1.8–2× body size. Mobile target 30px (24px on tiny phones), body 15.5px.
- **Big numbers** ($400B, 3.5B, 1,000, $300k, traction nums): always the largest element on screen in their block. Mobile target 44–48px.
- **Hero line**: largest of all — 44px (38px tiny).
- **Card titles** (story h3, team name, truth title, why-title, moat-title, ask h3, closed-headline): one clear step above body — ~18–22px serif or 16px bold sans.
- **Body / leads**: 15.5px, line-height 1.7.
- **Eyebrows / mono labels**: stay small (10–11px) — they're meta, not content.

### Changes (CSS only — `src/pages/memo.css`)

**≤760px (phones + small tablets)**
- Hero: `.hero-line` 40 → 44px; `.hero-sub` 14 → 15.5px / lh 1.7.
- Traction bar: keep as 2×2 grid (was 2×2 already); `.traction-num` 32 → 44px; cell padding 22→26px; label 10 → 11px. Remove the small-phone 1-col override.
- Section: `.section h2` 26 → 30px; `.section-tag` keep 10px; `.section-lead` 14 → 15.5px.
- Thesis quote: 18 → 21px.
- Why-now: `.why-title` 14 → 16px; `.why-body` 13 → 15px.
- Truth: `.truth-title` 13 → 16px; `.truth-body` 13.5 → 15px.
- Stories: `.story h3` 18 → 22px; `.story p` 13 → 15px.
- Network: `.nf-step` 11 → 13px; `.network-stat` 17 → 20px.
- Market (key fix): `.market-size` 34 → **46px**; `.market-size--small` 24 → 28px; `.market-note` 12 → 14.5px; `.market-desc` 10 → 11px.
- Moat: `.moat-title` 14 → 16px; `.moat-body` 13 → 15px; `.moat-num` 11 → 13px.
- Team: `.team-name` 22 → 28px; `.cred` 12 → 14px.
- Closed/ask: `.closed-num` 32 → **44px**; `.closed-headline` 20 → 22px; `.ask-num` desktop value → **34px**; `.ask-block h3` 22 → 24px; bodies 13 → 14.5px. Stack `.ask-amounts` vertically (drop the row override) so each amount reads as a headline.
- Bottom bar: stack vertically, left-aligned.
- Increase `.section { padding-top }` 44 → 56px for more rhythm.

**≤420px (small phones)**
- Override the previous 1-col traction rule — keep it 2×2.
- `.traction-num` 44 → 36px (so two fit per row cleanly).
- `.hero-line` 44 → 38px.
- `.section h2` 30 → 24px.
- `.market-size` 46 → 38px; `.closed-num` 44 → 36px.
- Side gutters: header/body/bottom-bar 28 → 18px.

### Out of scope
- No JSX/content changes in `Index.tsx`.
- Desktop (>760px) stays byte-identical.
- No font, color, or component swaps. No new dependencies.
