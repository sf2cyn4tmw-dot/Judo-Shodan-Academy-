# Update the Judo app you already installed

You do **not** need a new GitHub repository or a new Pages URL.

## Before replacing files

1. Open your existing Judo Shodan Academy app on the iPhone.
2. Go to **More > Settings > Export backup**.
3. Save the `.json` file in **Files**, preferably in iCloud Drive.

## Update your existing GitHub repository

1. Download and unzip `judo-academy-v2.zip` on your phone or computer.
2. Open the **same repository** you used for the first version.
3. Upload/replace the following project files in the root of the `main` branch:

   `index.html`, `app.js`, `data.js`, `curriculum.js` (new), `style.css`, `sw.js`, and `manifest.webmanifest`.

   Also retain or replace the icons inside `icons/`.

4. Commit your changes. Do not place everything inside another `judo-academy-v2` folder. `index.html` must be at the root of the published branch.
5. GitHub Pages should automatically deploy the updated version. Check **Actions** for deployment completion.
6. Open your existing app icon while connected to Wi-Fi or mobile data. Close and reopen if the old version is cached; the new design should say **Judo Academy** rather than **Judo Shodan Academy**.

### If you only see the old app

Refresh the existing GitHub Pages URL in Safari. Wait for the update to install, then fully close and reopen the Home Screen app. If needed, back up your progress, delete the old Home Screen icon, open the Pages URL in Safari, and use **Share > Add to Home Screen** again. Remember that an iPhone Home Screen app may have separate storage from Safari, so **export a backup before deleting or reinstalling anything**.

### Your old Ikkyu progress

The app keeps the exact old localStorage key and original 30 lesson identifiers. When you update the files at the same published URL, it recognizes existing local progress and keeps you on an **Ikkyu / black belt** learning path by default. New visitors get a white belt welcome screen. You can change either in **More > Learning profile**.

If old progress does not appear, use **More > Settings > Restore a backup** and select the JSON you exported.

### Note about GitHub mobile

GitHub's iPhone app may not offer the same multi-file replacement UI as the website. Use whatever GitHub upload/edit workflow worked for you when you published version 1. The important detail is to **replace files at their original paths and commit to the same branch**, not upload a ZIP or create a second folder.
