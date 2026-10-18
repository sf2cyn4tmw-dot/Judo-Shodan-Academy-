# Update your existing iPhone Judo Academy to 4.0

**Keep your same repository, URL, and Home Screen app.** You do not need to pay for new hosting or create a second app.

## 1. Back up first (important)

Open your **current** Judo Academy Home Screen app. Tap **More → Settings → Export JSON backup**. Save the downloaded `.json` file in **Files** or iCloud Drive. This protects the journal, vocabulary schedules, previous study progress and profile.

## 2. Get the new files ready

Download `judo-academy-v4.zip`. In the iPhone Files app, tap the ZIP to extract it. Open `judo-academy-v4`.

The website must have `index.html`, `app.js`, `coaching.js`, `data.js`, `curriculum.js`, `videos.js`, `ranks.js`, `speech.js`, `style.css`, `apple.css`, `sw.js`, `manifest.webmanifest` and the `icons/` directory at the **repository root**. Include the `tests/` folder and instructions if convenient; they do not affect the deployed app.

## 3. Replace files in your existing GitHub repository

Use the same GitHub upload/edit workflow that you successfully used for version 3.

- Stay on your existing repository's **main** branch.
- Replace same-named files with these newer ones.
- **Add the new `coaching.js` file**, which did not exist in 3.0.
- Keep `index.html` at the root, not inside a nested versioned folder.
- Prefer committing the changes together, so a half-uploaded release is not briefly deployed.
- Do **not** upload only the ZIP file. GitHub Pages will not unpack it automatically.

If GitHub's iPhone app will not bulk-upload a folder, use the same method that worked during your previous upgrade. The file structure is identical except for `coaching.js`.

## 4. Wait for GitHub Pages

Your previously configured GitHub Pages deployment should run automatically after the commit. In the repository check **Actions** or **Settings → Pages** if you need to verify that the latest commit published successfully. Keep your existing Pages source (`main`, `/ (root)`).

## 5. Refresh the installed app

While connected to the internet, open your GitHub Pages site in Safari once and reload it. Then close and reopen the installed Home Screen app. Occasionally the service worker takes another refresh to activate.

You should now see these tabs: **Today, Learn, Explore, Train, More**. The new home screen includes a daily study plan, and the Train tab has a training dashboard.

If the old interface remains, give the new service worker an additional online reload; do not immediately delete the Home Screen app because doing so may remove its locally stored data.

## 6. Confirm saved progress

Open your profile, finished lessons, flashcards, technique history, and Training journal. Your original local data format remains compatible. The new fields are additive.

If anything appears missing, go to **More → Settings → Restore a backup**, choose the JSON from Step 1, and confirm. **Restore replaces the current device's data**, so make sure you're using the correct backup.

## Notes

- Everything important works without a ChatGPT account after installation.
- External Kodokan/YouTube video playback needs internet.
- Japanese Listen/Slow may depend on installed iOS voice files.
- No account or cloud sync yet. Progress lives on the current device/browser and can be transferred by manual JSON backup.
- Technical skill stages are personal study indicators, not official promotion results.
