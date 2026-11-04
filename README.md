# Judo Academy 10.0 — Combination Builder Fix

This is a direct update of Judo Academy 9.0. It preserves the same website, manifest, settings, technique library, rank paths, saved combinations, lesson history, and backup format.

## What was broken

The Build screen in older releases limited its two technique selectors to the techniques the user had previously saved in My Library. A user with only one saved technique saw the same selection in both controls and could not create a flow. The Save button was disabled if fewer than two techniques were saved.

## Changes

- **Both selectors now contain all 104 techniques**, not just My Library. Items in My Library appear first, then throws, pins, chokes, and arm locks in categorized groups.
- The follow-up field starts at **Choose a follow-up** instead of silently selecting the same technique.
- No need to save a technique to the library before building a connection.
- **Coaching notes are optional.** Choose a pair, then tap Save. For a known combination with no custom notes, the app saves the existing curated instructional route rather than creating an empty duplicate.
- A new custom pair can be saved immediately. The saved flow appears in the **Saved** tab with the diagram. Choose **Edit my notes** to add grips, footwork, reaction, timing, and drills later.
- **Use available teaching cues** copies existing curated explanatory text for known connections when the user wants to customize their own version.
- Inline messages explain known and custom pairs, with a visible success banner after Save.
- Existing completed lessons, pinned techniques, custom combinations, and backup data remain untouched.
- Versioned CSS/JS URLs and a new service worker cache name reduce the risk of running the previous cached builder after a GitHub Pages deployment.

## Safety and technique content

Saved personal notes are user-authored, not verified instruction. Judo entries should be practiced under qualified supervision. New custom connections with no saved coaching notes explicitly display **Not recorded yet** rather than inventing foot placements.

## Installing / updating

See `UPDATE_EXISTING_SITE.md`. Use your existing GitHub Pages repository, commit the full extracted project files, and reopen the installed PWA with internet access.

## Verification

- `node --check app.js` and `node tests/check.mjs` passed.
- Automated Chromium tests, at iPhone width, confirmed that both selectors each have 104 items with only one or zero saved techniques; saved curated combinations display a chart and a three-stage foot diagram; users can save and edit a custom route without added notes; legacy study data is retained.
- A physical iPhone test and GitHub Pages deployment are still recommended before treating the update as production-verified.
