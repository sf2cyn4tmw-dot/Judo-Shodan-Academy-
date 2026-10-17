# Judo Shodan Academy

A self-contained progressive web app for learning Kodokan terminology, Gokyo throwing techniques, groundwork, kata, and preparing for a USJF Shodan exam.

## Included

- 30 progressive lessons with learning goals and Kodokan video search links
- 40 Gokyo throws, additional throwing techniques, and pin/choke/arm-lock reference
- Japanese vocabulary with local spaced repetition scheduling
- Interactive ten-question quizzes
- Training journal and completion tracking
- On-device storage (localStorage), downloadable JSON backup and restore
- Service worker for offline study, app manifest, icons, mobile-first UI

## Free hosting: GitHub Pages

1. Create a free GitHub account at https://github.com/ if needed.
2. Create a new **public** repository named `judo-shodan-academy`.
3. Upload **the contents of this folder** to the repository root, including `index.html`, `app.js`, `data.js`, `style.css`, `sw.js`, `manifest.webmanifest`, and the `icons` directory.
4. In the repository, choose **Settings > Pages**. Set **Build and deployment > Source** to **Deploy from a branch**. Select `main` and `/ (root)` and Save.
5. Once published, visit `https://YOUR_USERNAME.github.io/judo-shodan-academy/`. Publishing may take several minutes. The repository URL differs from the website URL.
6. On iPhone, open that website in Safari. Use **Share > Add to Home Screen** (or **Add to Home Screen** from the Share actions). Launch the icon.
7. Open the app while online at least once to save its offline assets. YouTube videos remain online-only.

Alternative free hosting: upload these files to a static-site host such as Cloudflare Pages or Netlify. HTTPS is required for a service worker on a live website.

## Preview locally

`python3 -m http.server 8000`

Navigate to `http://localhost:8000`. Service workers are permitted on localhost. Avoid opening index.html via file:// because offline caching may not work.

## Important data notes

Progress is stored on the current browser/device and is not automatically synchronized. Use **Settings > Export backup** regularly, especially before resetting your phone or clearing website data. The JSON backup contains journal notes and progress, so keep it private. Import replaces local progress after confirmation. No account, server, tracking, or API key is required.

## Content and safety

This is a study aid, not an official USJF certification app. Confirm your Yudanshakai's current promotion requirements, competitive classification, and kata role with your instructor. Use an instructor and suitable partner for potentially injurious throws, strangles and joint locks. Historical techniques in the encyclopedia may be prohibited in competition.

## Updating the app

Edit the static project files, upload replacements, and change the `CACHE` name in `sw.js` for a clean offline-cache refresh. Keep your data backups before changes.
