# Judo Academy — Learn for Life (v2)

An installable, mobile-first progressive web app for **any judoka**, including someone who has never trained and begins at white belt. Includes the original Shodan material plus new beginner, sport, and lifelong learning paths.

## Features

- First launch setup for preferred name, current belt, affiliation, and study focus.
- Five learning pathways: first month, fundamentals, black belt study, competition, judo culture and teaching.
- Original 30 Kodokan / USJF oriented Shodan lessons **preserved**, plus 34 authored beginner, sport, and lifelong judo lessons.
- Full Kodokan classification of **100 techniques** (68 throws, 32 grappling techniques), plus four additional common variations. Searchable and filterable, with links to the official video directory.
- Japanese flashcards with offline spaced repetition reviews.
- Topic quizzes, training journal, self-reported study and technique checklists, Nage no Kata guide.
- Official Kodokan / IJF / USJF external resources and targeted YouTube search links.
- Offline app shell, on-device save data, manual JSON export/restore. No login, server, third party tracking, ads, or payment.

## Upgrade your existing GitHub Pages site

**Back up your original progress first.** In your current Judo Shodan Academy website, go to Settings and **Export backup**. Save the JSON in Files/iCloud Drive.

1. Extract `judo-academy-v2.zip`.
2. On your **existing** GitHub repository, replace the website files with the contents of the `judo-academy-v2` folder, keeping their paths at the repository root:
   - `index.html`
   - `style.css`
   - `app.js`
   - `data.js`
   - `curriculum.js` **(new)**
   - `sw.js`
   - `manifest.webmanifest`
   - `icons/icon-192.png` and `icons/icon-512.png`
3. Commit the changes on the same `main` branch. **Do not upload a ZIP in place of the files.** If the old files already exist, you must replace them, not create renamed duplicates.
4. If GitHub Pages is already deployed, it will usually republish automatically after the commit. Verify the **Actions** tab or **Settings > Pages** if it doesn't.
5. On your existing iPhone Home Screen icon, fully close and reopen the app while connected to the internet. If an old version remains cached, refresh it in Safari at the exact published URL, wait for the new version, then reopen the Home Screen app. The service worker cache name changed in v2.

### What happens to existing progress?

The new app deliberately uses the **same localStorage key** `judo-shodan-academy-v1` and the same original lesson IDs. On the **same site URL and the same browser storage**, existing checked lessons, studied techniques, flashcard reviews and journal entries should carry over automatically. If the old app had progress but no profile, it migrates as an **Ikkyu / USJF / black belt path** profile. New users see a welcome screen and default to **White belt**. Rank is always editable.

Changing the hostname, clearing browser data, switching browser/PWA storage containers or reinstalling the app can lose access to local data. Use the export/import feature in that case. The v2 import supports v1 backup JSON too.

### New site installation

Upload all files to a public GitHub Pages repository. Go to **Settings > Pages > Deploy from a branch > main > /(root)**. Wait for publishing. Open the HTTPS Pages URL in Safari and choose **Share > Add to Home Screen**. Load the website while online before expecting offline access.

## Development / preview

Run `python3 -m http.server 8000` in the project directory and visit `http://localhost:8000`. JavaScript has no build step or dependencies. `node --check app.js`, `node --check curriculum.js`, and `node --check data.js` perform basic syntax verification.

## Content scope and limitations

This is a broad study companion and technical reference, **not a substitute for a dojo or an exhaustive encyclopedia**. Beginner, throwing, groundwork and kata instruction needs an appropriately qualified instructor. Video links search for Kodokan instruction and are **not hand-verified direct video links**. Chokes, locks, falls, and difficult throws should never be practiced unsupervised.

Belt colors, grading, junior requirements, competition regulations, and technical restrictions vary by association and change over time. The app's pathways are educational and **do not confer rank**. Check the current rank syllabus with the student's dojo and organization. Competition rules: https://www.ijf.org/ijf/documents .

## Privacy and offline behavior

No backend or account. Local progress is saved on device. Videos and official websites remain online-only. The service worker caches local app assets for offline use. The user is responsible for maintaining backups. Backups may include private journal notes.

## Repository guidance

This version can overwrite the original files without changing the repository name or GitHub Pages URL. Keep the exact old URL if you want to preserve locally stored progress. The static content can be expanded in `curriculum.js` and `data.js`.
