# Final Prototype — Design 2: Magnified QWERTY V2 Updated

**Previously:** `prototype-v4-1/`

**Selected final design for Team 6's Bakeoff 3.** This refines the separate [Magnified QWERTY V2](../prototype-v2/) concept; it does not change the underlying text-entry task.

### What changed

- The magnified five-letter view remains stable while the chosen letter stays in view; it shifts only when needed.
- A soft pink selection highlight animates smoothly between letters without constantly rebuilding the preview.
- **F and J** are blue home-key anchors to support memorability.
- **Space** has a soft pink background and small press animation.
- **Next** is a distinct green navigation button next to Target Phrase, **outside** the keyboard region, to avoid confusing it with Space.
- Additional page-gesture handling reduces accidental iPhone Safari zoom.
- The selected-letter caption shows **ROW + SELECTED letter** without the long footer instruction.

### Why this was selected

The team observed during informal testing that the full QWERTY layout was easier for first-time users to understand, while grouped flicks could suit returning users who memorized gestures. The final selection prioritizes learnability. **No numerical improvement is claimed without recorded participant data.**

### Test setup

Open `calibrate.html` on the same iPhone/browser and adjust the blue square to exactly **25.4 mm × 25.4 mm** with a physical ruler. Then start the keyboard at `index.html`.

All letters, Space, Delete and cursor interactions occur inside the calibrated square. Target / Entered Phrase and Next are outside. There is no target-dependent prediction, word dictionary or voice entry. Built-in phrase examples are for demonstration, not substitutes for the instructor's formal test and scaffold comparison.

### Files

- `index.html` — self-contained final keyboard (HTML/CSS/JS).
- `calibrate.html` — physical size calibration.

This is the **final proposed implementation**, subject to the instructor's approval and required user testing.
