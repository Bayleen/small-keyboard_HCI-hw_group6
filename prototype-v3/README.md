# StarFlick V3 — Third Prototype (Group 6)

Standalone smartwatch keyboard for iPhone Safari, Android browser, or desktop preview. Run `calibrate.html` first, then `index.html`.

## Changes from V2

1. **Cancel requires a true downward-outward flick.** Letter gestures cancel only if the finger travels downward beyond the invisible 23 px (at 145 px calibration) selection circle, with the motion sufficiently downward-oriented. Long swipes to the left, right, or up are never cancellations. Feedback turns red and the letters fade while cancel is active. No character is inserted on release.
2. **Larger directional selection zones.** Choices are derived from the initial press-and-flick direction, not from tiny pixel targets in the preview. Three-letter groups use first letter=release/tap, second=left, third=right; a slight vertical drift remains on first letter.
3. **ABCD in the upper-left:** a=tap, b=left, c=right, d=short downward flick within the selection circle. A *longer* downward-outward flick cancels. This keeps the top row preview on center/left/right/down without requiring an upward option hidden by the finger.
4. **WXYZ in the lower-right:** w=tap, x=left, y=up, z=right, so upward selection does not conflict with downward cancellation.
5. **Finger-aware floating guide.** The circular preview is shifted *opposite* the pressed button: top-row buttons show the guide lower, right-column buttons show it left, etc. The visual location does not change gesture recognition: all flicks are relative to their actual touch-start point.
6. **SPACE without cancel.** Tap/release inserts a space. Move LEFT at least about 16–18 px (at 145 px calibration) and release to delete; the entire leftward region stays active, with red feedback rather than a tiny delete target. Other directions still add space.
7. **Cursor move preserved.** Hold SPACE stationary ~540 ms, then drag left/right to move the insertion caret and release. The typing phrase and caret are displayed in the permitted entered-phrase field outside the touch area; no other touch controls appear there.

The letter mapping is fixed for all words, including nonsense strings like `hfgwmcwx`. No voice recognition, T9, target-phrase-based prediction, or autocomplete.

## Using on GitHub Pages

Upload this entire folder as `prototype-v3/` alongside the existing `prototype-v1/` and `prototype-v2/` folders in the same repository. Then visit `https://<username>.github.io/<repo>/prototype-v3/calibrate.html` on your iPhone to calibrate the 25.4 × 25.4 mm touch region with a ruler; subsequently open `index.html`.

**Important:** The floating radial display is visual guidance only; all gesture touches should remain inside the physical 1-inch square. Actual Apple iPhone / iOS Safari acceptance must be checked on the hardware. The instructor must approve the design and test procedure. No real participant accuracy/WPM measurements are claimed.

## Built-in practice recording

Four illustrative practice strings are in `PHRASES` near the beginning of `index.html`. They are not used by the keyboard algorithm. The app records time, WPM, final Levenshtein accuracy, deletes, cancellations, gesture count, and cursor actions. Tap **Next** and **Finish**, then export CSV. Real class testing also needs participant counts and Scaffold comparison.
