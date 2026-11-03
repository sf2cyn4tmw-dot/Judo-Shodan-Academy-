# Judo Academy 8.0 — Focused learning, smarter flows

Judo Academy is a standalone offline-capable Progressive Web App for GitHub Pages. It can be installed on iPhone from Safari. No account, AI subscription or database needed.

## Main navigation

1. **Home**: current and target ranks, promotion-study checklists.
2. **Learn**: guided lessons, vocabulary, kata.
3. **My Library**: saved techniques, starred favorites, search, and full Kodokan encyclopedia browsing.
4. **Flowchart**: the three tools **Ideas / Saved / Build**.
5. **More**: flashcards, quizzes, kata, resources, settings and JSON backups.

Class logging, workout planning, training analytics and session history are not presented. Legacy saved data is retained in the same storage key so upgrades are not destructive.

## What's new in version 8

- **18 original detailed combination entry guides** covering grips, supporting and attacking feet, first attack, uke's reaction, pivots, timing and common errors, each in three short steps. All have a footwork progression summary and links to the individual Kodokan technique videos.
- Remaining curated combinations retain the existing introductory hand and footwork cues, with no fabricated detailed steps.
- Flowchart now defaults to a short list of Ideas, instead of a large network map, long details, and the full form on the same page.
- The horizontal map is optional via **See map**.
- **Saved** shows favorite connections and personal combinations, **Build** opens the personal builder directly.
- My Library has **All / Pinned** filters, search, and an obvious Browse action without a duplicate dashboard.
- All prior rank checkmarks, lessons, flashcard schedules, pinned techniques, notes and personal flows remain compatible.

### Sources and limits

Curriculum and combination pairings were cross-referenced with:

- IJF Academy teaching framework: https://academy.ijf.org/student-handbook
- Teizo Kawamura's combination examples: https://judoinfo.com/combine/
- Kodokan Ireland performance syllabus examples: https://www.kodokanireland.com/curriculum/performance-skills
- Official Kodokan and IJF classified technique reference: https://judo.ijf.org/

The **pairings** are documented judo teaching examples. The specific grip and footwork instructions in `entry-guides.js` are *original educational syntheses*, not quotations or official certification. All detailed examples assume a cooperative right-side, same-stance sleeve/lapel scenario, and the app can mirror left/right terms for left-sided study. Real execution depends on grips, relative stance, uke's movement, experience and safe coaching. No combinations are ranked as statistically “most successful” because we lack suitable competitive or user-frequency data. The app is not affiliated with JudoFlow.

## Deploy to GitHub Pages

See `UPDATE_EXISTING_SITE.md`. Upload the contents of this directory into the root of your existing repository. Include new `entry-guides.js`; update `sw.js` to the new cache version. Keep the same GitHub Pages URL so browser progress remains available. Export a backup first.

## Verify

From this directory: `node tests/check.mjs`.

The app's data persists in localStorage under **`judo-shodan-academy-v1`**. No user account is required and the app never uploads study data to GitHub Pages. Offline lessons and flow instructions work once cached; external videos require an internet connection.
