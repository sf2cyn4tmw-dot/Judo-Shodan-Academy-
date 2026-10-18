# Upgrade Judo Academy 4.0 to 5.0 on your existing GitHub Pages website

You do **not** need a new GitHub repository, URL or Home Screen icon. The update adds an **Exercise studio** while preserving the existing judo curriculum and local progress data.

## 1. Back up first

In your **current Judo Academy app on your iPhone**, open **More → Settings → Export JSON backup**. Save the JSON to Files or iCloud Drive. Verify that the file exists before changing the GitHub repository. Exercise logs will be included in the same backup mechanism once v5 is installed.

**Do not delete the current Home Screen app.** Installed iPhone web apps can have storage that differs from Safari's storage.

## 2. Unzip the new package

Download `judo-academy-v5.zip`. On your iPhone, open it in Files to extract the folder. Open the resulting `judo-academy-v5` folder.

The **files inside** must end up at the **root** of your existing GitHub repository. `index.html` should be directly visible in the repository root alongside `app.js` and `exercise-data.js`. Do not upload only the ZIP and do not nest another `judo-academy-v5/` directory around the website.

## 3. Upload to your existing repository

Use the same GitHub upload/edit workflow you previously used to publish version 4. Choose the `main` branch.

**Required additions or replacements:**

- Replace `index.html`, `app.js`, `apple.css` and `sw.js` with the v5 files.
- **ADD `exercise-data.js`** in the same root folder as `app.js`. The exercise section will not load without this file.
- Keep the other project files together (`data.js`, `curriculum.js`, `videos.js`, `ranks.js`, `speech.js`, `coaching.js`, `style.css`, `manifest.webmanifest`, `icons/`). It is safest to upload the complete contents and replace same-named files in a single commit.
- Updating `README.md`, `UPDATE_EXISTING_SITE.md` and `tests/` is optional for deployment, but helpful for maintenance.

GitHub's iPhone app can be limited for bulk folder uploads. If you had another method that worked for your previous updates, keep using it. You **do not** need to configure Pages again.

## 4. Let GitHub Pages redeploy

Your existing Pages setup (`main`, `/ (root)`) should deploy automatically after the commit. Check the latest workflow in **Actions** if necessary.

## 5. Refresh online

When Pages shows the deployment as complete, open your website in Safari while connected to the internet and reload. Close and reopen your installed Home Screen app. The new service worker uses a new versioned cache; the old app might continue showing temporarily until an online reload activates the update.

You should see **Exercise studio** on the Today screen and inside the Train tab. Test **Programs → Beginner strength A → check one movement → Save completed workout**. Confirm that it appears in Exercise Studio → History.

## 6. Verify your original progress

Check your name, belt, completed lessons, flashcards and judo training journal. Version 5 uses the same localStorage key as version 4 and adds optional fields without deleting old data.

If your progress is absent, open **More → Settings → Restore a backup** and select the JSON you saved in Step 1. Be aware that **restoring replaces the currently stored app data**.

## 7. Offline test (recommended)

While online, open the updated app and the Exercise studio once. Turn on Airplane Mode, close and reopen the app, then open an exercise and a complete workout. The text-based exercise library should be available offline after caching. External YouTube and medical resource links require internet. If it fails, reconnect, reload once or twice, and test again.

## What is new?

**65 exercises, 23 programs, joint conditioning reference library, workout completion checklists, session notes, training statistics and an equipment-aware weekly planner.** All remain free and locally stored. No cloud synchronization or medical diagnosis.
