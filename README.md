# Judo Academy 7.0 — A focused judo study app

A lightweight, offline-capable PWA for rank preparation, technique study, and building combinations. No accounts or paid services.

## Navigation
1. **Home:** current rank, target rank, previous-rank review checklist, and goal checklist.
2. **Learn:** guided lessons, kata and Japanese terminology.
3. **My Library:** save or pin favorite techniques and browse the Kodokan encyclopedia.
4. **Flowchart:** curated combination and counter pathways with grip/footwork detail, plus your own combination builder.
5. **More:** vocabulary, quizzes, kata, videos, settings and backup.

## Removed
Class journals, workout plans, exercise library, weekly mat charts and workout logs are removed from the UI. Older saved data is retained in device storage and in JSON exports so upgrading never silently destroys prior records. It no longer contributes to new study progress. The `exercise-data.js` resource has been removed from the app and cache.

## Rank lists
Rank checklists for regular kyu grades are **suggested study milestones** and not a definitive federation syllabus. USJF Shodan details use the bundled 2021 USJF senior rank recommendations, but your local examination authority controls the requirements. For colors, grade conventions differ by organization. Profile and rank selections are study labels, not promotions.

## Privacy
The localStorage key remains `judo-shodan-academy-v1` for continuity. New updates do not erase previous saved data. Export a JSON backup before upgrading. Only static files are served by GitHub Pages. No server or telemetry is required.

## Deploy
Upload the *contents* of this folder to the root of your existing GitHub Pages repository, overwriting old files. Ensure `rank-path.js` exists at the root. Remove the old `exercise-data.js` if present. Commit, and reopen on the same Pages URL. If stale, quit/relaunch the Home Screen app and refresh while connected. Never delete the app and its storage before exporting a backup.

Run local data checks: `node tests/check.mjs`.
