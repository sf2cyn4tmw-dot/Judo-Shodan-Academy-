# Judo Academy 9.0 — Flowchart Restored

A standalone, offline-capable judo learning PWA, designed for iPhone and hosted on GitHub Pages. Version 9 corrects two important problems in 8.0: the Flowchart had stopped showing a chart by default, and combination footwork was buried below lists.

## What changed

- **Actual interactive Flowchart is back**, immediately visible when you open the Flowchart tab. Start from a technique, see connected second and third attacks, tap a branch or an arrow to read the instructions.
- **Coaching directly below the chart**, not hidden under optional menus. Study the real first attack, uke's reaction, grips and hands, supporting foot, attacking foot, pivot, timing, mistakes, and partner drill.
- **18 illustrated combinations**, each with three stage foot placement sketches, plus existing detailed text. Left stance mirrors the drawings and directional terms. The other curated combinations retain their written grip and footwork guidance, without pretending to have verified diagrams.
- **Fixed combination personalization bug.** Previous versions computed an invalid numeric score for most connections; pinned or favorite paths now really do receive higher priority.
- **Simpler Flowchart / Saved / Build** tabs remain; the full diagram, not a list, is the primary interaction. The Saved tab also shows connected routes. Other possible paths are folded under one optional disclosure.
- **No class journal or workout planner UI was reintroduced.** Home rank checklist, Learn, My Library, and More remain unchanged.

## Important learning limits

Teaching sketches show relative positions, never exact distances or optimal angles for all situations. They are **original schematic study aids**, not motion-captured footage and not validated by a Japanese instructor. The detailed grips and foot placement descriptions in `entry-guides.js` are original educational syntheses based on teaching combinations, not verbatim instruction from official schools. The individual throws should be learned with qualified in-person supervision. Links to Kodokan demonstrations open externally and require internet.

Sources for selecting and teaching combinations:

- IJF Academy practical teaching progression: https://academy.ijf.org/help (explicit examples include O uchi gari → Tai otoshi and O uchi gari → Ko uchi gari).
- British Judo Association technical frameworks: https://www.britishjudo.org.uk/wp-content/uploads/2024/10/Technical-Frameworks.pdf
- Kodokan Ireland performance combinations: https://www.kodokanireland.com/curriculum/performance-skills
- IJF O soto gari technique reference: https://judo.ijf.org/techniques/O-soto-gari
- Official Kodokan technique videos in the app's video library.

## Deployment and backups

See **UPDATE_EXISTING_SITE.md**. Keep the same GitHub Pages address and repository. Preserve the `judo-shodan-academy-v1` localStorage key. Export a JSON backup before deploying. Version 9 adds **`footwork.js`** and updates `sw.js` to a new cache version.

## Testing

Run `node tests/check.mjs` for data and consistency checks. The built app was also exercised on a simulated 390px iPhone screen via a browser with bundled local assets: graph visible on entry, diagram selection, 3-step guidance, left stance, saved chart, builder access, library, and legacy profile data. Live GitHub deployment and offline reload still need verification on the actual iPhone.
