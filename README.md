# Judo Academy 3.0

A standalone, installable progressive web app built to help anyone study judo from their first white belt class through advanced lifelong practice. Version 3 adds an iOS-inspired interface, direct Kodokan demonstration videos, Japanese pronunciation playback and organizational rank preparation checklists.

## What's new in 3.0

- **Redesigned iPhone experience:** familiar five-tab navigation, readable cards, system typography, larger touch targets, custom icon, and automatic light/dark appearances. This is an independent design, not an Apple product.
- **Japanese audio:** Listen and Slow controls on all 77 flashcards and individual technique pages. Playback uses the browser's Speech Synthesis API with a Japanese voice and generated hiragana prompts. This is *not recorded native-speaker audio*. Japanese voice availability and offline playback depend on iOS voice packs and browser support.
- **Direct Kodokan video links:** all 100 Kodokan-classified techniques resolve to individual videos from the Kodokan × IJF Academy demonstration series. Video playback requires an internet connection and opens YouTube. Four additional technique variants are included in search; when no direct official clip is mapped, the app uses a targeted search.
- **Rank preparation:** USJF, USJA, USA Judo, Kodokan and local dojo choices. Checkpoints adapt by organization, target grade and junior/adult division. The senior USJF Shodan tracker is based on the *2021 USJF senior promotion recommendations*, not a guaranteed 2026 local examination list. The app distinguishes sourced administrative/technical items from suggested learning milestones.
- **Preserved from version 2:** 64 lessons across five study paths, 104 technique entries (100 classified Kodokan techniques), spaced-repetition flashcards, quizzes, training journal, Nage no Kata reference, import/export and offline app shell.

## Update your existing GitHub Pages deployment

1. **Back up your progress** in the CURRENT app: More → Settings → Export JSON backup. Keep the downloaded JSON in iPhone Files or iCloud Drive.
2. Download `judo-academy-v3.zip`, then extract it in Files. The ZIP contains a folder named `judo-academy-v3`.
3. In your **existing** GitHub repository, replace the website files with the files *inside* that folder at the repository **root**. Keep the same repository, Pages URL and `main` branch.
4. Replace these files: `index.html`, `app.js`, `data.js`, `curriculum.js`, `style.css`, `sw.js`, `manifest.webmanifest`, `icons/icon-192.png` and `icons/icon-512.png`. Add the new files: `apple.css`, `videos.js`, `speech.js`, `ranks.js`.
5. Commit changes. GitHub Pages typically deploys automatically. Confirm under the repository's Actions tab or Settings → Pages. Existing Pages settings should remain unchanged.
6. Reopen your current Home Screen app while online. If you see the old interface, allow the site to load once in Safari at its existing Pages URL, refresh, then relaunch the Home Screen app. The v3 service worker has a new cache name so it will cache the new files.
7. Verify your progress. If anything is missing, use More → Settings → Restore a backup, selecting the JSON file you saved before the upgrade.

Do **not** upload the ZIP itself as a website file, do **not** leave the entire `judo-academy-v3` folder nested in your repository, and do **not** delete your existing PWA until you have a verified backup. The icon may remain cached by iOS temporarily. Reinstalling a Home Screen shortcut can change its storage container, so back up before reinstalling.

GitHub's native mobile app can browse and edit code, but its bulk upload functionality may be limited. Use whichever file-upload method you successfully used for the previous version. No extra hosting service is required.

## Existing progress and data compatibility

This release intentionally retains the localStorage key `judo-shodan-academy-v1` and unchanged lesson / vocabulary / technique IDs. It adds `rankChecks` without removing previous fields. Existing lesson, review, journal, quiz and profile data is preserved when the origin/browser storage is the same. Old v1 data without an account profile is migrated to an Ikkyu/USJF profile as in v2.

Progress lives **on your own device**. It is not synchronized across browsers. Create backup files regularly, especially before updating or removing the app. Backups include your private training notes. No accounts, analytics SDKs, trackers or subscription.

## Offline capabilities and limitations

All locally hosted HTML/CSS/JS and lessons are cacheable through the service worker on HTTPS GitHub Pages. The app's full curriculum, cards, quizzes, and journal work offline after a successful installation/first load. External YouTube video playback and federation websites require internet access. Speech depends on browser support and installed Japanese voice assets, so offline pronunciation audio is **not guaranteed**.

This app is for education and organization of study. It cannot assess technique quality or issue promotions. Always practice throws, breakfalls, strangulations and joint locks with a qualified instructor. Certain classified techniques are prohibited in modern competition. Rank colors, age rules, memberships, deadlines and tests change across dojos and federations.

## Curriculum & references

- Official Kodokan / IJF Academy channel: https://www.youtube.com/channel/UCtF6tu7GuZYkZzht5MIv8UQ
- Full direct link index collated from the 2020–21 official series: https://www.reddit.com/r/judo/comments/ofeodr/100_judo_techniques_from_kodokan_20202021/
- USJF rank guidelines (2021): https://www.usjf.com/wp-content/uploads/2021/05/Handbook-Final-Revised-Sr.-Jr.-5-1-21.pdf
- USJF rank and resources: https://www.usjf.com/downloadable-resources/
- USJA national promotion system: https://www.usja.net/about/promotion
- USA Judo promotion forms: https://www.usajudo.com/membership/promotions
- IJF document library: https://www.ijf.org/ijf/documents

## For developers

The site is plain HTML, CSS and JavaScript with no build step and no external JS packages. Host its contents at the GitHub Pages repository root. Local browser tests: `node tests/check.mjs`; JS syntax: `node --check app.js` etc. Project data files: `data.js`, `curriculum.js`, `videos.js`, `ranks.js` and `speech.js`. PWA caching: `sw.js`. Apple-inspired appearance overrides: `apple.css`.
