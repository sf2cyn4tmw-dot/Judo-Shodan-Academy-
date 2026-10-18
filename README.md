# Judo Academy 4.0

**A standalone, offline-capable Progressive Web App for learning judo from white belt through advanced Kodokan study.** Plain HTML, CSS and JavaScript. No account, subscription, server, analytics provider, framework or build step required. Hosted free on your existing GitHub Pages repository.

This is a community educational study companion, **not** a replacement for qualified physical instruction or an official promotion service. Apple-inspired appearance is an independent design and is not affiliated with Apple.

## What's new in version 4

| Feature | Description |
| --- | --- |
| Personalized Today dashboard | Daily next lesson, due Japanese reviews, suggested mat assignment, study streak, training chart |
| Four-step guided lessons | All 64 lessons now use Learn → Watch → Practice → Reflect; step completion and notes are saved |
| Detailed coaching library | 26 carefully authored technique guides, including kuzushi/control, entry, execution, frequent mistakes, related techniques and suggested drills |
| Five-stage technique development | Not started → Introduced → Understood → Demonstrated → Applied in randori; *all stages are self-reported* |
| Expanded quiz bank | 277 new vocabulary and technique identification questions; older history/theory questions retained; targeted quiz categories |
| Audio recognition practice | Flashcard option hides the Japanese term until the answer is revealed; Listen / Slow use iOS Japanese speech synthesizer |
| Structured mat assignments | Six safety-conscious suggested practice sequences for beginners, movement, groundwork, kata, technique combinations and reflection |
| Training hub and journal | Session type, intensity, focus, notes, coach feedback, seven-day chart, total mat time and weekly goal |
| Configurable weekly study goal | Set a training minutes goal in Settings; this is an optional personal milestone |
| Familiar iPhone navigation | Today, Learn, Explore, Train and More; light/dark modes, system typography and accessible large controls |

### Existing content preserved

64 lessons, 5 learning pathways, 104 searchable technique entries including the 100 classified Kodokan techniques, 100 direct official Kodokan video links, 77 Japanese flashcards, spacing-based review, kata index, USJF/USJA/USA Judo/Kodokan/local-dojo promotion study checklists, privacy-conscious JSON backups, and offline shell caching.

**Study material availability:** all 104 techniques can be opened. The 26 authored guides are the most detailed. Remaining techniques currently provide a general structured checklist plus a video, pronunciation and self-assessment; they do *not* yet have a custom written technique-by-technique explanation. Video and external resource links require internet. Japanese audio depends on available iOS/browser voice support and installed languages, so offline audio is not guaranteed.

## Update the existing app

See `UPDATE_EXISTING_SITE.md` for exact steps. The main process is:

1. **Back up first:** in your current app, More → Settings → Export JSON backup. Store the JSON safely in iPhone Files or iCloud Drive.
2. Unzip `judo-academy-v4.zip` using iPhone Files or a Mac.
3. In your **existing** GitHub repository, replace the old website files with the **contents** of the extracted `judo-academy-v4` folder. Keep the same repository, `main` branch, GitHub Pages setting, URL and top-level `index.html`.
4. Upload/add **`coaching.js`**, new in v4. Update `index.html`, `app.js`, `apple.css`, `sw.js` and the other included existing files. Replace all project code files together, ideally in one commit.
5. Wait for your existing GitHub Pages deployment, refresh the site online in Safari and reopen the Home Screen app. The app icon should not need reinstalling.
6. Check your profile, lessons and journal. If anything is missing, use More → Settings → Restore a backup.

**Do not upload the ZIP as one website file.** Do not nest the entire extracted folder under the repository root. Do not delete your Home Screen app before confirming a backup; iOS web app storage can be separate from Safari storage.

## Progress preservation

The app deliberately continues to use the **same** localStorage key `judo-shodan-academy-v1`, with the original lesson, technique, flashcard and profile IDs. Version 4 only adds these data fields:

- `skillLevels`: self-reported five-stage proficiency for each technique, with old boolean `skills` mapping to Introduced.
- `lessonSteps`: completion of four guided learning steps.
- `reflections`: written notes on lessons.
- `activityLog`: local study activity used for an activity streak.
- `settings.audioMode` and `settings.weeklyGoalMinutes`: personal preferences.
- Extra optional fields on journal entries (`type`, `intensity`). Previous entries remain readable.

Your progress is stored only within the same website origin/browser environment. It does not automatically synchronize across iPhone and Mac. Backups include potentially personal notes. No external tracking is included in this project.

## Safety and accuracy

- Never attempt high-impact techniques, neck controls, chokes or joint locks from video alone. Train with a qualified judo instructor.
- Skills marked Demonstrated or Applied in randori are **self-assessed** and do not count as examiner sign-offs.
- Competition legality can differ by age and ruleset. Historic Kodokan recognition does not imply that a technique is competition legal.
- Belt colors, ages, requirements, testing authority, safety credentials and examination formats vary by organization and locality. Check your current dojo/federation sources.
- Weekly goals, quizzes and charts are educational self-tracking tools; no medical performance or competition prediction is made.

## For developers

Files in repository root:

- `index.html`: web app shell, icons and navigation
- `app.js`: UI, progress management and event handling
- `coaching.js`: 26 authored technique guides, six suggested mat sessions and generated recall quiz content
- `data.js`: techniques and vocabulary
- `curriculum.js`: learning pathways and lessons
- `videos.js`: existing direct video lookup table
- `ranks.js`: organization-aware promotion *study* guides
- `speech.js`: browser Japanese voice and hiragana mapping
- `style.css` and `apple.css`: base style and modern iOS-inspired theme
- `sw.js`: service worker, offline caching (updated cache key v4)
- `manifest.webmanifest`, `icons/*`: installable app metadata
- `tests/check.mjs`: zero-dependency data and asset sanity checks

No npm install needed. You may run `node tests/check.mjs` and `node --check app.js`. For a local preview, serve the folder with `python3 -m http.server 8000` and open it in your browser. HTTPS is required for PWA installation and the offline service worker outside localhost.

## Primary external references

- Kodokan technique descriptions and video catalog: https://kdkjd.org/names-of-judo-techniques/
- Kodokan official video channel: https://www.youtube.com/channel/UCtF6tu7GuZYkZzht5MIv8UQ
- USJF: https://www.usjf.com/
- USJF Nage no Kata: https://learn.usjf.com/course-overview-nage-no-kata/
- USA Judo: https://www.usajudo.com/
- IJF official rules and competition information: https://www.ijf.org/ijf/documents
