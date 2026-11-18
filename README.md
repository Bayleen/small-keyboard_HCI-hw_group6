# Team 6 — Bakeoff 3: Smartwatch Text Entry

This repository presents **two distinct 1 × 1 inch touchscreen keyboard concepts**, each with an original prototype and a refinement. It is organized for a clear Bakeoff design-and-testing narrative, not as five separate competing designs.

## Prototype map

| Design | Prototype | Folder | Previously named |
|---|---|---|---|
| **Design 1 — StarFlick (Grouped Flick)** | V1: First prototype | [prototype-v1/](prototype-v1/) | prototype-v2 |
| **Design 1 — StarFlick** | V1 Updated: First refinement | [prototype-v1-updated/](prototype-v1-updated/) | prototype-v3 |
| **Design 2 — Magnified QWERTY** | V2: Second concept | [prototype-v2/](prototype-v2/) | prototype-v4 |
| **Design 2 — Magnified QWERTY** | **V2 Updated: Final prototype** | [prototype-v2-updated/](prototype-v2-updated/) | prototype-v4-1 |

The early experimental old V1 is **retired from the current branch**. It remains recoverable from Git history. The old `prototype-v4-1/` web links redirect to the renamed final prototype so previously shared instructor links still work.

## Design comparison and selection

**Design 1 — StarFlick:** Nine grouped letter zones. Press and flick to choose letters; improved radial feedback and cancellations in its refinement. The team observed it may suit returning users who have learned the gesture mappings.

**Design 2 — Magnified QWERTY:** Full a–z QWERTY layout in the bottom half of the one-inch square. Press and slide for letter selection with a five-letter magnified window above. Delete, space and cursor joystick occupy the top half when idle. The refined version adds a stable selection viewport, softer feedback, blue F/J home-key anchors, pink Space and a separate green Next by the target phrase. The team observed this familiar layout felt easier for new users.

**Final decision:** Continue with **Design 2, V2 Updated** because of its first-time discoverability and more familiar QWERTY organization. These are **qualitative team observations**, not measured claims about WPM or accuracy; record test results separately and compare under the course protocol.

## Official HTML scaffold scoring (2026-11-18)

All four prototypes now use the **exact scoring equations from the uploaded official Bakeoff 3 HTML/Processing.js scaffold**; the keyboard layouts, letter-selection behavior and calibrated 1 × 1 inch interaction area are unchanged.

- **START**: touch the START overlay **inside the one-inch keyboard area**. The continuous-session timer begins immediately.
- **Phrases**: randomized from the [official HTML scaffold's 473 phrases](official-bakeoff3-phrases.js). Default = 10 phrases (the scaffold's comment suggests ~10 for the real bakeoff, while its debug default is 2).
- **NEXT**: submit each phrase. Time continues throughout all phrases and ends at the **last NEXT**.
- **Final score** (identical to the official HTML scaffold):
  - `enteredTotal = sum(entered.length)`
  - `expectedTotal = sum(target.length)`
  - `errorsTotal = sum(Levenshtein(entered.trim(), target.trim()))`
  - `rawWPM = (enteredTotal/5)/((finishTime-startTime)/60000)`
  - `freebieErrors = expectedTotal * .05`
  - `penalty = Math.max(errorsTotal-freebieErrors, 0)*.5`
  - **`officialWPM = rawWPM - penalty`**
- The per-trial WPM and accuracy figures remain diagnostic. Do **not** compare old per-trial-average screenshots with the official continuous-session WPM.
- CSV export includes overall official metrics alongside each trial, for easy aggregation.

**Matching tests across the two designs:** use the **same query parameters** for each version, e.g. `index.html?trials=10&seed=6` for the same randomized 10 official sentences in the same order. For quick checks use `?trials=2&seed=6`. `?demo=1` uses the earlier four demo strings including `hfgwmcwx`; it is **not** formal scoring data.

**Calibrate before every device change:** the 1-inch size is still determined on `calibrate.html`, using a physical ruler. The START overlay is itself inside the pad (no forbidden outside controls).

## Run and calibrate

1. Open the relevant `calibrate.html` on the **actual test device**.
2. Use a physical ruler to adjust the touch square to exactly **25.4 mm × 25.4 mm**.
3. Start `index.html`. Each keyboard's text-entry interactions stay inside its calibrated square; Target / Entered and Next are permitted outside.
4. For formal testing, use the instructor's required phrases, users and scaffold comparison rather than treating the built-in demonstration phrases as benchmark results.

### Final prototype

- [Calibrate and try V2 Updated](prototype-v2-updated/calibrate.html)
- [Open V2 Updated directly](prototype-v2-updated/index.html)

No voice input, T9, autocomplete or target-phrase-based selection is used. The keyboard is implemented as self-contained HTML/CSS/JavaScript.

**Submission note:** This GitHub layout documents the design iterations. Verify the instructor's final ZIP naming, narrated-video requirements and testing protocol against the course assignment; the repository is not by itself the full submission.
