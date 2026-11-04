# Update your existing Judo Academy to version 9.0

The new version repairs the Flowchart. **You do not need a new GitHub repository, domain or installed Home Screen app.**

1. In your current app, open **More → Settings → Export backup**. Save the JSON backup in Files or iCloud Drive. Do not upload the backup to your public repository.
2. Download `judo-academy-v9.zip` and unzip it on your iPhone or Mac.
3. Open the **same GitHub repository** used by your existing GitHub Pages site. Upload the files **inside** the new folder into the repository root, replacing the existing files. Do not upload the ZIP as one file or nest everything inside another folder.
4. Confirm that the root contains `index.html`, `app.js`, `flows.js`, `entry-guides.js`, **`footwork.js`**, `apple.css`, `style.css`, `sw.js`, `data.js`, `curriculum.js`, and the other bundled resources, as well as the `icons/` folder.
5. Commit the files to the branch that GitHub Pages deploys (normally `main`). Open GitHub **Actions** or **Settings → Pages** to verify that the deployment finished.
6. Open your existing installed iPhone web app while online. Close it fully and relaunch if the screen still looks like v8. If needed, visit the site URL in Safari and refresh, then relaunch the Home Screen app. Never delete the installed app before exporting a backup because its storage may be tied to that installed instance.
7. Tap **Flowchart**. You should **immediately see a connected node diagram** beneath the starting technique and stance pickers. Tap a blue arrow or technique to open the foot diagram and instructions below it. Tap **1 / 2 / 3** to advance through the grips and footwork. Try switching to Left stance.
8. Check **Saved**, **Build**, your rank checklist and My Library. Your previous progress should remain. If it's missing, use **More → Settings → Restore backup** with the JSON you exported.

## Troubleshooting

- **Still seeing a list rather than a chart:** Confirm GitHub has deployed the new `app.js`, `apple.css`, `index.html`, and `sw.js`. iOS may retain an older PWA cache until you refresh online.
- **Blank screen:** Check for missing `footwork.js`, `entry-guides.js`, `flows.js`, or other script files. Every JS file referenced by `index.html` must be present in the repository root.
- **Empty My Library:** Your stored data is device-specific, not synced to GitHub. Restore your JSON backup on the same site if needed.
- **Videos unavailable offline:** Expected; technique text, diagrams and locally cached lessons work offline after the updated app has loaded and cached successfully. External video requires internet.

## Safety note

The colored foot diagrams are schematic illustrations, not a substitute for a coach or a guarantee that a specific foot position is safe for every athlete, opponent, stance or grip. Practice with a qualified judo instructor and cooperative uke before adding speed or resistance.
