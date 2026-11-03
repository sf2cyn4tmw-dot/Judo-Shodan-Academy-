# Update your Judo Academy GitHub Pages site from v5 to v6

**You do not need another GitHub repository or website address.** Update the existing Judo Academy site, not a new project.

## Protect your progress first

1. On your iPhone, open the *existing* Judo Academy app.
2. Open **More → Settings → Export JSON backup**.
3. Save the `.json` backup in your iPhone's Files app. This includes lesson progress, journal, flashcard review schedules, exercise sessions and other saved data.

## Upload v6 to the existing repository

1. Download and unzip `judo-academy-v6.zip`.
2. Open the `judo-academy-v6` folder. Upload the **contents of this folder**, not the zip and not an extra nested folder.
3. Replace the existing files in your repository's `main` branch with the same-named files from this version. **Add the new `flows.js` file.** Important updated files include `app.js`, `apple.css`, `sw.js`, `index.html`, `README.md`, and `UPDATE_EXISTING_SITE.md`.
4. Keep the complete set of assets: `data.js`, `curriculum.js`, `videos.js`, `ranks.js`, `speech.js`, `coaching.js`, `exercise-data.js`, `flows.js`, `style.css`, `apple.css`, `app.js`, `index.html`, `sw.js`, `manifest.webmanifest`, and the icon files.
5. Commit your changes to `main`. Your existing **Settings → Pages → Deploy from a branch → main → /(root)** setup can stay unchanged.
6. Confirm on GitHub that `index.html` and `flows.js` appear at the repository root. If `index.html` is inside an extra `judo-academy-v6` folder, GitHub Pages may show the wrong site.

You can use whichever GitHub upload method worked for the earlier releases, including your iPhone. When replacing a file, make sure the old file is actually replaced, not uploaded alongside a second copy with a different name.

## See the update on your iPhone

1. Open the existing GitHub Pages website in Safari with an internet connection.
2. Reload the page. The service worker cache name was changed to `judo-academy-v6-20261103` to make the new files eligible to replace the old cached version.
3. Close and reopen the Home Screen app if it still appears unchanged. It may take another refresh for iOS to activate the updated service worker.
4. Open **Explore**, where you'll now see **All techniques**, **My Library**, and **Flowchart**.
5. Save a few throws and test the new connections.

## What happens to my existing data?

This update uses the same browser storage key as every previous version:

`judo-shodan-academy-v1`

Older progress remains in the existing site storage. The new fields include `techLibrary`, `flowPinned`, `customFlows`, `flowHistory`, and `flowPrefs`. Previously marked techniques are offered in My Library without labeling them favorites. The new JSON backup format includes everything from prior releases plus the new connections.

**Important:** A PWA installed from a *different web address or browser context* may have separate local storage. Keep your current website URL. If a particular Home Screen installation has isolated storage, use **More → Settings → Restore a backup** with the JSON backup saved earlier.

## Troubleshooting

- **Blank screen or no Flowchart:** Check whether `flows.js` is present in the repository root and whether `index.html` includes a `flows.js` script tag before `app.js`. Refresh online.
- **Old version appears:** Reload the website in Safari, then close and reopen the Home Screen app. Service worker upgrades can require more than one visit.
- **No suggestions from one technique:** Not every technique has a curated connection. Change to **All connections**, select a different starting throw, or add a personal connection.
- **You see a favorite but it has no links:** Favorite status does not manufacture combinations. It prioritizes existing instructional links, and you can create your own.
- **Progress seems missing:** Confirm you're at the original website address; then restore your JSON backup.
- **Video links unavailable offline:** YouTube requires internet. The reference data and graph are local after caching.

## Verify the update

In the app, try **Explore → All techniques → + beside Tai otoshi → My Library → ☆ Favorite → Flowchart**. You should see suggestions including **Tai otoshi → O uchi gari**, **Tai otoshi → Seoi nage**, and **Tai otoshi → Uchi mata**, with detailed grip, footwork, reaction, and drill notes.
