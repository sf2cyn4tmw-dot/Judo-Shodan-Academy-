# Update your installed Judo Academy to Version 8

**Do not create a new GitHub repository or remove the installed app.** Your saved progress lives in browser storage at your existing Pages URL.

1. On your current app, open **More → Settings → Export backup**. Keep the exported JSON file safely in Files or iCloud Drive.
2. Download `judo-academy-v8.zip` and unzip it in the Files app on iPhone or Finder on your Mac.
3. Open the **same GitHub repository** that hosts your Judo Academy. Upload/replace the *contents* of the extracted `judo-academy-v8` folder at the repository root. Do not upload the ZIP itself or nest all files in a second directory.
4. Confirm these key files are present at the root: `index.html`, `app.js`, `apple.css`, `flows.js`, **`entry-guides.js`**, `data.js`, `curriculum.js`, `sw.js`, `manifest.webmanifest`, plus the other JS/CSS files and the `icons` directory.
5. Commit to the branch currently used by GitHub Pages, typically `main`. GitHub Pages will republish automatically. Check **Settings → Pages** or **Actions** for deployment status.
6. Reopen your existing iPhone Home Screen app while online. Close and relaunch it if old screens persist. The service worker cache identifier has been updated for this version.
7. Open **Flowchart → Ideas**, choose a starting throw, tap **See steps**, and try the supporting foot/attacking foot descriptions. Use **Saved** for bookmarked combinations and **Build** to create your own.
8. Verify your existing lesson progress, pins and rank checkmarks. If they are missing, return to **More → Settings → Restore backup** and select the JSON you exported.

## Troubleshooting

- **No changes:** Confirm `entry-guides.js` is in the root, `index.html` references it, and the GitHub Pages deployment finished. Refresh while online. Do not delete the app before backing up.
- **Blank screen:** Make sure every script file is uploaded, including `entry-guides.js`, `rank-path.js`, `coaching.js`, and `flows.js`.
- **Videos unavailable offline:** That's expected; the app stores text lessons and instruction cues locally, not YouTube videos.
- **Private data:** Your notes, pinned techniques and progress are stored on your device, not published with the site. Don't upload your backup JSON to a public repository.

## Notes

This update retains the existing `judo-shodan-academy-v1` storage key and supports import of older backups. No workouts or class journals have been restored to the navigation. Entries are educational cues for trained partners and should be verified with a qualified judo instructor.
