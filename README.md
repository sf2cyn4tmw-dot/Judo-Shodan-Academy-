# Judo Academy 5.0 · Exercise Studio

A standalone offline-capable iPhone Progressive Web App that teaches judo from white belt onward, now with a complete **exercise studio for physical preparation**. Original app made of HTML, CSS and JavaScript. No build step, subscription, user account, analytics service or paid hosting needed. Compatible with the existing GitHub Pages site and the original `judo-shodan-academy-v1` saved data key.

## What's new

| Area | New content |
| --- | --- |
| Exercise library | **65** written movement guides with starting sets, reps, rest suggestions, technique cues, equipment, alternatives and cautions |
| Workout programs | **23** complete routines spanning strength, conditioning, power, grip, agility, warmup, mobility, joint conditioning and recovery |
| Joint care education | Shoulder, knee, ankle, trunk and wrist/general grip conditioning with explicit references to official orthopedic sources |
| Weekly planner | Choose available equipment, lifting experience, approximate judo session frequency and training goal; generates a simple adjustable template |
| Interactive workouts | Check off performed exercises, annotate loads or adaptations, record session minutes, optional effort and private notes |
| Training analytics | Separate exercise history, workout count and time totals, without inflating recorded *judo mat time* |
| Discoverability | New dedicated Exercise Studio link on the Today dashboard, the Train tab, and More |
| Saved progress | Exercise logs and planner preferences are included automatically in existing JSON export/import |
| Offline support | Exercise descriptions and programs added to the service worker's local asset cache. External source/video links require internet. |

**Existing app retained:** 64 judo lessons; 104 technique entries (100 Kodokan classified); 100 video links; 77 Japanese vocabulary cards; flashcard review; quizzes, guided lessons, technique skill tracking, rank checklists, kata, journal, installation and backups.

## Where to find it

Open **Train → Exercise studio** or use the new tile on **Today**. In the Exercise studio:

- **Programs**: filter by workout goal and required equipment. Open a workout to view the full exercise sequence and record what you actually completed.
- **My week**: configure equipment (`None`, `Bands`, `Dumbbells`, `Gym`), workout experience, weekly judo practice frequency, and training emphasis. See a suggested weekly rotation.
- **Exercises**: search all 65 movement guides. Each has original technique cues and substitution information.
- **Joint care**: find low-load conditioning and links to the American Academy of Orthopaedic Surgeons (AAOS), plus suggestions for discussing sport readiness with a physical therapist.
- **History**: review/delete saved exercise sessions separately from the judo class journal.

### Recommended starting points

Beginners can start with **Beginner strength A**, **Beginner strength B**, **10 minute judo warmup** and **10 minute mobility reset**. Experienced adults with suitable equipment may use **Judo strength Session A/B**. Adjust for actual judo practice and recovery. If you train judo four or more times weekly, reduce supplemental workouts when needed.

The starting prescriptions are **illustrative, not individualized** and deliberately use moderate training volume. Workouts include opt-in higher-skill training such as jumps or heavy barbell lifts, which require technical competence and supervision. The app does not prescribe injury rehabilitation.

## Evidence and important limits

1. **CDC adult physical activity guidance:** general adults can work toward at least two weekly muscle-strengthening sessions and 150 minutes moderate aerobic activity, adjusted for personal health and ability. https://www.cdc.gov/physical-activity-basics/adding-adults/
2. **Judo training methods systematic review:** judo research uses resistance exercise, interval work, aerobic exercise and judo-specific practice. The evidence does not establish one universal optimal template for every judoka. https://pubmed.ncbi.nlm.nih.gov/33795601/
3. **IPPON injury prevention development:** a coach-led judo warmup focusing on shoulder, knee and ankle mobility, balance and strength was developed and piloted. The published report explicitly notes injury prevention effectiveness had **not yet been established**. The included 10-minute warmup is an original, simplified *inspired by* program, not a reproduction of the IPPON intervention. https://bmjopensem.bmj.com/content/6/1/e000791
4. **AAOS conditioning resources:** links to the shoulder, knee, ankle and spine programs. Their postoperative or injury recovery content requires clinician guidance; the app includes general educational exercise principles, **not rehabilitation prescriptions**.
   - https://www.orthoinfo.org/recovery/rotator-cuff-and-shoulder-conditioning-program
   - https://www.orthoinfo.org/recovery/knee-conditioning-program/
   - https://www.orthoinfo.org/recovery/foot-and-ankle-conditioning-program
   - https://www.orthoinfo.org/recovery/spine-conditioning-program/

### Safety

The app is for general conditioning education, primarily suitable for healthy adults. It cannot diagnose a condition, establish injury severity, provide medical clearance or determine readiness to return after an injury. **Stop exercises if they cause pain or worsening symptoms.** Persistent pain, swelling, instability, sensory changes or weakness warrant evaluation. Acute severe symptoms, major injury or inability to bear weight need prompt professional assessment. For minors, exercise selection and loading should involve a qualified coach and appropriate healthcare guidance. Always train technical judo with an instructor.

No endorsement from AAOS, CDC, IPPON authors, Kodokan or any affiliated agency is claimed.

## Installing on GitHub Pages

Read [`UPDATE_EXISTING_SITE.md`](UPDATE_EXISTING_SITE.md). Keep the **same repository and URL** so your saved progress has the best chance of carrying over. Export a backup in the old app before upgrading. Upload the **contents** of this folder and be sure to add the new **`exercise-data.js`** file to the repository root.

## For developers

Static source files:

- `index.html`: app document and loading order
- `app.js`: application UI and saved data, including the new exercise studio
- `exercise-data.js`: 65 exercises, 23 routines and their source links
- `apple.css`: iOS style UI including exercise cards and workout forms
- `sw.js`: cache version 5; includes `exercise-data.js` in precache
- `data.js`, `curriculum.js`, `videos.js`, `ranks.js`, `speech.js`, `coaching.js`, `style.css`, `manifest.webmanifest`, `icons/*`: existing app modules
- `tests/check.mjs`: static data checks. Run `node tests/check.mjs` and `node --check app.js`.

The saved record uses the existing localStorage key, `judo-shodan-academy-v1`. New fields are `exerciseLog: []` and `exercisePrefs: {}`. JSON backup and restoration support these additions while accepting the previous version's missing fields.

The app has no backend. Deleting site storage or the installed Home Screen app may erase local progress. Export the JSON backup regularly.

## Testing status

Passed: Node syntax and data integrity checks, mobile Chromium simulation covering new-user onboarding, workout browser, filters, full workout, exercise instructions, partial workout logging, weekly planner, search, navigation and saved state, plus migration from a v4 profile. **True offline reload could not be verified here due to localhost browser restrictions.** Cache asset entries were checked statically, but run a real offline check after publishing to GitHub Pages.
