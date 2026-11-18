# StarFlick V4.1 — Stable Magnified QWERTY

## Changes from V4
- Prevent iPhone double-tap and pinch zoom on the *test* page (Safari may still honor accessibility zoom overrides).
- Keep the five-letter magnifier window steady until selection moves outside it; then shift only enough to include the next letter.
- Low-motion selection highlighting (no scaling/glow jumping).
- Pink SPACE button with larger space symbol and short animation.
- Two muted QWERTY home-key anchors: F is green and J is blue. Colors do not depend on target phrases.

## Testing
Use `calibrate.html` on the test device to measure 25.4 mm by 25.4 mm; then start the keyboard. Its interactive elements remain inside the single one-inch square. Character set: a–z and space; full arbitrary strings supported. The app does not predict target text.

V4 remains unchanged at `../prototype-v4/`. This is an iterative UI prototype, not verified against the instructor's entire unseen rules. Record real WPM/accuracy and compare to the scaffold for class reporting.