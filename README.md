# Judo Academy 6.0 — Personal Library and Combination Flowchart

A standalone, privacy-friendly, offline-capable Progressive Web App for judo learning, hosted on GitHub Pages. This update builds on Judo Academy 5.0 rather than replacing its established curriculum, training journal, exercise studio, progress, or account-free workflow.

## New in version 6

### My Library

- Save any of the 104 technique entries from Explore.
- Star your favorite throws (tokui waza) to prioritize them in your combination suggestions.
- Record personal training notes and tags for each technique.
- Filter your saved techniques by name, category, tags or notes.
- Existing self-assessed proficiency levels continue to appear and previously marked techniques are included in your personal library after the update, without automatically labeling them as favorites.

### Interactive Combination Flowchart

- 35 authored links connecting Kodokan throwing techniques, combinations, counters and selected safe groundwork transitions.
- Start from a technique in your library or from any available curated starting technique.
- An SVG flow diagram shows the starting technique, immediate responses, and selected second attacks. Scroll the diagram horizontally on a phone and tap an arrow or node. The same links are available as accessible text cards.
- Each link explains (1) uke's reaction, (2) grip and hand placement, (3) foot and body placement, (4) the transition and finish, and (5) a suggested partner drill.
- Direct Kodokan demonstration links for techniques with existing video entries in the app.
- Right and left stance viewing, with the caveat that mirroring basic directional wording is not a substitute for instruction in the correct entry.
- Filters for combinations, counters, groundwork transitions, your saved links, or all curated links.
- Mark a link as practiced, pin it for later, add the next technique to your library, or open your training journal prefilled with that combination.
- Create your own connection between two saved techniques and describe the reaction, hand grips, foot placement, finish, and drill. Your authored connections are clearly labeled as personal.

The suggestions are curated educational examples, not claims of competition frequency or empirically validated success rates. Saved favorites, previously pinned connections, and existing technique proficiency affect recommendation ordering; no AI service or ongoing subscription is needed.

### Existing features retained

- 64 lessons and five learning pathways
- 100 official Kodokan techniques plus four additional variations
- 100 direct Kodokan demonstration video links in the technique encyclopedia
- Japanese pronunciation and spaced repetition, quizzes, kata, belt progress
- Training journal, training analytics, and optional personal exercise studio (65 exercises and 23 workout programs)
- Local progress saving, JSON export / restore, service worker cache and iPhone Home Screen installation

## Getting started

1. Open **Explore → All techniques**.
2. Tap **+** beside techniques you train, such as **O uchi gari**, **Tai otoshi**, **O soto gari**, and **Seoi nage**.
3. Open **Explore → My Library** and star your favorite throws.
4. Open **Explore → Flowchart** and choose the starting throw.
5. Tap arrows or cards to read reaction, hand and foot placement cues, drills, and video links.
6. Pin useful connections, mark them as practiced, or create your own.

## Important safety and educational limitations

*These are educational judo training suggestions, not a replacement for a qualified judo instructor.* Technique chains depend on stance, grips, relative size, timing, and uke's actual response. The exact entries are not universal. Do not force a combination if the reaction is absent. Practice throws, counters, sacrifice throws, locks, and chokes only under proper supervision with trained partners, appropriate mats, and applicable age and competition restrictions. Some traditional techniques are prohibited in competition.

The original app's preexisting video links point to Kodokan demonstrations on YouTube. These require an internet connection; lessons and locally stored flow data work offline once successfully cached.

## Sources used to curate example connections

The interaction design and coaching text are newly authored for this app; they are not copied from JudoFlow's implementation or source code.

- [Teizo Kawamura, Combination and Counter Techniques of Judo (1958)](https://judoinfo.com/combine/)
- [IJF Academy pedagogical examples](https://academy.ijf.org/help)
- [University of Toronto Judo Club syllabus](https://judo.sa.utoronto.ca/syllabus/)
- [Kodokan Ireland performance skills](https://www.kodokanireland.com/curriculum/performance-skills)
- [USJA Renraku no Kata guidelines](https://www.usja.net/staff/forms/107/document/download)
- [USJF Gokyo technique library](https://learn.usjf.com/gokyo-no-waza/)
- [Waza Book combinations reference](https://wazabook.com/combinations/)

A source link, if available, appears in each combination's detailed view. Specific hand and foot placement text is an educational synthesis written for this app, not a verbatim reproduction of the source and not validated against every style of judo.

## Hosting and updates

See [UPDATE_EXISTING_SITE.md](UPDATE_EXISTING_SITE.md). Everything runs from a static site: no server or paid backend is required.

## Development tests

From this folder:

```bash
node tests/check.mjs
node --check app.js
node --check flows.js
```

End-to-end checks were performed in Chromium with scripts and styles loaded inline because this environment restricts browser navigation to locally hosted websites. These tests covered library saving, favorites, notes, flow suggestions, pinned routes, custom routes, journal and practice state, and an older Ikkyu profile. Real device service worker behavior and the deployed GitHub Pages upgrade should still be tested on the actual iPhone.
