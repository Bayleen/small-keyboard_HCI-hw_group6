# StarFlick Prototype V4 — Magnified QWERTY

HCI Bakeoff 2, Group 6. This is an experimental touch keyboard for a **physical 1 × 1 inch** interaction area. It is not approved by the course instructor yet.

## Concept
- **Bottom 50%:** tiny conventional QWERTY rows (`qwertyuiop`, `asdfghjkl`, `zxcvbnm`).
- **Top 50%, while touching a letter:** a magnified 5-letter local window. The currently selected letter is large and bright in its center; neighbors are shown for context.
- **Touch + drag:** touching a small key selects its nearest letter; drag the finger to adjust the selection (using a 0.65× fine-control gain). Lift the finger to commit the highlighted letter. The preview is not a separate touch target.
- **Top 50%, when idle:** left Delete, center joystick for horizontal text-caret movement, right Space. Tap/release Delete or Space to apply. Drag the center joystick horizontally and release to keep the new caret position.
- The text field is a display, not a native editable control. All character/cursor interactions occur inside the one-inch square. Pointer releases outside the square do not commit a letter.
- No dictionary, word completion, T9, target-phrase matching, voice input or predictive behavior. Every a–z character and space can be entered, including arbitrary sequences.

## How to run on iPhone
1. Publish `index.html` and `calibrate.html` in the same GitHub Pages directory, e.g. `prototype-v4/`.
2. In iPhone Safari open `prototype-v4/calibrate.html`.
3. Use a **physical ruler** and adjust the blue square to exactly 25.4 mm × 25.4 mm; press Save.
4. Keep page zoom at 100% and use the same device/orientation for the entire test.

## Measurement
Practice trials are the same four sample trials used in earlier iterations, with the same definitions:
- WPM = (entered characters / 5) / elapsed minutes.
- Accuracy = 100 × (1 − Levenshtein edit distance / max(target length, entered length)).
- Results CSV includes timing, WPM, accuracy, deletes, gestures, and cursor moves.

**Important:** This practice measurement does not replace the instructor's scaffold baseline comparison or formal user study. Design approval is still required.

## File list
- `index.html` — entire standalone V4 app (no external libraries).
- `calibrate.html` — one-inch physical size calibration screen.