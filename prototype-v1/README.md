# StarFlick V1 — 1-inch smartwatch text-entry prototype

## What is included
- `index.html` — mobile Safari-compatible text-entry prototype. During trials, the only items outside the 1-inch keyboard are Target phrase, Entered phrase, and Next.
- `calibrate.html` — **separate, pre-test-only** sizing setup. It is not used during the official input test.

## Running on iPhone
1. Put both HTML files in the same public GitHub repository.
2. In GitHub Settings → Pages, enable Pages for the main branch and root directory. Wait for the provided URL to be active.
3. On the iPhone, open `https://<yourname>.github.io/<repo>/calibrate.html` in Safari.
4. Using a physical ruler, adjust the blue square to exactly **25.4 × 25.4 mm** and press **Save size & start**.
5. The resulting `index.html` contains the live prototype. Keep Safari's page zoom at 100%. Test the physical dimension again before class.
6. On a laptop, you can open `index.html` directly in a browser to use the mouse as a touch pointer.

## Gesture mapping
- 3×3 keyboard: `abcd | efg | hij / klm | SPACE | nop / qrs | tuv | wxyz`
- **Press and release without swiping:** first letter of group.
- **Swipe right:** second letter.
- **Swipe down:** third letter.
- **Swipe left:** fourth letter (if the group has one).
- **Swipe up:** cancel with no character.
- Center block: **tap = space; swipe left = backspace**.
- While holding, a big circular on-screen guide shows valid directions and highlights the current selection. ALL graphics, including the circular guide, are clipped to the 1-inch pad.

## Practice/testing
The prototype has four example trials; edit the `PHRASES` constant near the bottom of `index.html` to choose different neutral phrases or arbitrary letter sequences. The target phrase is never used by the keyboard to select, highlight, predict or autocorrect letters.

Tap `Next` to end each trial, and tap `Finish` on the last trial. A separate post-trial results view appears, showing:
- WPM: entered characters / 5 / elapsed minutes
- Final accuracy: 100 × (1 - Levenshtein edit distance / max(length of target, length of entered))
- Backspace count and number of gestures in the exported CSV

Time starts at the first key press and ends on Next. Download the trial CSV from the post-test results screen. These are **practice metrics**, not the professor's scaffold scoring implementation; ensure official testing and benchmark comparisons use the professor's required procedure.

## Important assignment restrictions
1. Please confirm legality of StarFlick gestures with the instructor before submission.
2. Do not claim this browser delivery method is individually approved; the assignment explicitly permits HTML/Processing.js and p5.js as routes, but specific implementations still need approval.
3. The professor forbids T9 and any key highlighting/prediction based on the target phrase. V1 deliberately does not contain word prediction or autocorrection, and works for arbitrary strings such as `hfgwmcwx`.
4. Generic dictionary suggestions are NOT explicitly approved by the supplied assignment wording; ask before adding them.
5. During formal trials, only target/entered phrases and Next are outside the input area. Pre-test calibration and post-test metrics are separate screens.
6. Baseline comparison with the provided scaffold is still required for round 2 and final testing. Integrating the official scaffold may be necessary for equivalent scoring.

## Instructor-approval message (suggested)
> We plan to implement StarFlick, a 1×1-inch text-entry pad with nine letter-group regions. Pressing a region opens a circular directional guide entirely inside the 1-inch area. Tap or swipe selects one of the letters; the center region handles space and backspace. It does not use target-phrase information, T9, voice, or autocorrect, and can type arbitrary letter strings. We plan to run this HTML/JS prototype in Safari on an iPhone and calibrate the physical 1-inch dimension before testing. Would this implementation be allowed?
