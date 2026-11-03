# Upgrade your existing Judo Academy to 7.0

1. Open your current Judo Academy and **More → Settings → Export backup**; save the JSON somewhere safe.
2. Unzip the new package and open the `judo-academy-v7` folder.
3. Open your existing GitHub repository on the `main` branch. Replace existing project files with those inside this folder. Do not upload an extra folder layer or only the ZIP.
4. Important changed files: `index.html`, `app.js`, `apple.css`, `sw.js`. New file: `rank-path.js`. The unused `exercise-data.js` file can be deleted. Keep other project files (especially `data.js`, `curriculum.js`, `ranks.js`, `flows.js`, and `coaching.js`) from this ZIP.
5. Commit changes. GitHub Pages should deploy from `main / (root)` using the existing URL.
6. On iPhone, reopen the installed PWA online. It should show **Home · Learn · My Library · Flowchart · More**.
7. Confirm your existing saved techniques and rank checks; if necessary restore your backup under **More → Settings**.

Your old class and exercise records will not display, but remain in the local backup data. No new account or backend is required. The new rank dashboard starts with your current grade (Ikkyu stays Ikkyu) and the next rank (Shodan), and shows the previous grade (Nikyu) for review.
