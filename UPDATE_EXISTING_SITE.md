# Update your current Judo Academy to 10.0

1. **Back up your current study data.** Open Judo Academy on your iPhone, go to More → Settings, and choose **Export backup**. Save the JSON file to Files.
2. Download the `judo-academy-v10.zip` file, open it in Files, and unzip it.
3. Open your existing GitHub repository and upload the **contents** of the extracted `judo-academy-v10` folder to the repository root. Replace the old same-named files rather than uploading the ZIP or placing an extra folder inside the repo.
4. Confirm `index.html`, `app.js`, `apple.css`, `flows.js`, `entry-guides.js`, `footwork.js`, and `sw.js` are all in the repository root. Include every other file in the package too.
5. Commit to the branch GitHub Pages deploys (usually `main`). **Do not create a new repository or change your GitHub Pages address.**
6. Wait until GitHub Actions or Settings → Pages shows the updated deployment completed. Open your Pages URL in Safari while connected to the internet, then close and reopen your Home Screen app. If you still see the old disabled form, reload the Safari site and reopen the app; versioned scripts help force an update.
7. Open **Flowchart → + Build**. Both drop-downs should offer 104 techniques. Choose O uchi gari and Tai otoshi and tap **Save combination**. It should open **Saved** with a visible combination map and coaching detail. If you already saved that route, it will remain saved rather than create another copy.

## Notes

- Existing app progress is kept under the original browser storage key `judo-shodan-academy-v1`. These files do not reset it.
- Old journal/workout records remain in backups, but those interfaces are still removed.
- Saved personal combinations can now be edited by opening **Saved**, selecting the combination, and tapping **Edit my notes**.
- If an update unexpectedly loses your progress, import the backup in More → Settings. Restoring overwrites the device's current study data.
- A first deployment can still be affected by iOS PWA caching; make sure you check the live Pages website and then the installed Home Screen app.
