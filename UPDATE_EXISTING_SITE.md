# Upgrade your current Judo Academy app to Version 3

**Keep the same GitHub repository and Pages web address.** This is an update, not a separate app.

1. Open the existing Home Screen Judo Academy app.
2. Open **More → Settings → Export JSON backup** and save the JSON to iPhone Files. This is the most important step.
3. Download and unzip `judo-academy-v3.zip` using your iPhone's Files app.
4. In your existing GitHub repository on the `main` branch, replace the existing files at the repository root with the contents of the extracted `judo-academy-v3` folder. Add the new files `apple.css`, `videos.js`, `speech.js`, and `ranks.js`; don't forget `icons/`.
5. Commit. Do not create another repository, and don't upload the ZIP itself.
6. Wait until your GitHub Pages deployment is complete. Reopen your Home Screen app while connected to Wi-Fi or cellular data.
7. Confirm the new white/blue (or dark/blue) interface and **More → Belt progress** and **More → Video library** appear.
8. Check that your journal and lessons are intact. If not, More → Settings → Restore a backup.

### If the old design remains

Visit your existing GitHub Pages URL in Safari, refresh once while connected to the internet, and reopen your Home Screen app. Service workers can take an extra refresh to activate. iOS may temporarily cache the previous app icon. Export your backup before attempting to remove or reinstall the Home Screen app.

### What the new controls do

- **Cards → Listen / Slow:** synthesized Japanese voice. This relies on iOS language voices; offline speech is not assured.
- **Techniques → [any classified technique] → Watch Kodokan video:** the specific Kodokan demonstration, not a broad search.
- **More → Belt progress:** select rank, organization (in Profile), and adult/junior division. Checkbox selections are stored on this device only and do not count as official promotion credit.
- **More → Video library:** highlights and a shortcut to all techniques.

For GitHub iPhone-app limitations on uploading many files at once, repeat the successful file-upload process you used for Version 2. The GitHub app may not expose every bulk-upload control.
