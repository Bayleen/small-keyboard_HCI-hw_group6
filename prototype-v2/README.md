# StarFlick V2 — Second-round smartwatch text entry prototype

StarFlick is a single-file HTML/CSS/JavaScript keyboard intended to be deployed on an iPhone or tablet browser. The complete 9-key input region and the pop-up dial are confined to a physically calibrated **1 × 1 inch (25.4 × 25.4 mm)** square. No native iOS app, T9, autocorrect, voice input, or reference-phrase-biased prediction is used.

## V1 → V2 design changes

1. **New cancel interaction:** the CANCEL label is visually outside the circular dial (but still inside the 1-inch square). Swiping downward or moving far beyond the dial's active selection radius cancels. During cancellation the outside region glows **red** and the center/letters become translucent; lifting adds nothing.
2. **Four-letter groups** (`abcd` and `wxyz`): the **center** area selects the first letter; **left** selects the second; **up** selects the third; **right** selects the fourth. The center chip uses approximately one-third of the dial diameter.
3. **Three-letter groups** (`efg`, `hij`, `klm`, `nop`, `qrs`, `tuv`): the **center** selects the first letter, and the remaining two letters occupy the **left and right** options. **Down** cancels. No unused top letter is displayed.
4. **SPACE key:** tap/release inserts a space; swipe **left** deletes the character immediately before the caret (backspace). Swiping left anywhere on the keyboard is **not** a global delete gesture, because left is used to choose letters.
5. **Caret editing:** press and hold the center SPACE key for **540 ms** without moving. The cyan `MOVE CURSOR` dial appears. While still holding, move left or right to shift the caret within the already-entered phrase. Release, then continue typing at that position. This is the equivalent of moving the insertion cursor, not physically moving a mouse. No touch outside the one-inch keyboard is needed.
6. **Testing:** tracks practice WPM, end-of-phrase edit-distance accuracy, deletes, cancellations, gestures, and cursor operations; a CSV export is available at the end.

The literal target phrase is used only to display the copying task and score the *finished* text. It is **never read by any key-selection, suggestion, prediction, or correction mechanism**.

## How to run on iPhone Safari

1. Put `index.html` and `calibrate.html` together at the root of a GitHub repository (or another static web host).
2. In GitHub **Settings → Pages**, publish from the main branch/root. Open the resulting site at `/calibrate.html` on the **same iPhone** used for the trial.
3. Place a physical ruler beside the blue square. Adjust BOTH square dimensions to exactly **25.4 mm**, then press **Save size & start**. Keep Safari's page zoom at 100%.
4. All regular trial interactions happen within the calibrated keyboard. Target phrase, Entered phrase, and Next are the only items outside the square.
5. For a desktop-only check, open `index.html` in a browser and drag with the mouse. The physical 1-inch dimension must still be calibrated on the actual test device.

Note: `calibrate.html` is a **pre-test setup page**, not part of the tested text-entry interface. The square's CSS pixel size depends on device/browser scaling; CSS `1in` is not a reliable physical measurement on mobile. No separate network requests are needed after deployment.

## Short gesture reference

| Pad | Tap | Left | Up | Right | Down / far outside |
| --- | --- | --- | --- | --- | --- |
| `abcd` | a | b | c | d | Cancel |
| `efg` | e | f | Cancel (if pulled well upward) | g | Cancel |
| `hij` | h | i | Cancel | j | Cancel |
| `klm` | k | l | Cancel | m | Cancel |
| `nop` | n | o | Cancel | p | Cancel |
| `qrs` | q | r | Cancel | s | Cancel |
| `tuv` | t | u | Cancel | v | Cancel |
| `wxyz` | w | x | y | z | Cancel |
| `SPACE` | Space | Delete | Cancel | Cancel | Cancel |

**Hold SPACE 540 ms** → cyan cursor mode → continue holding and drag left/right to reposition the caret → release.

All letter input happens by releasing after a single press/swipe. There is no phrase-based autofill and non-words like `hfgwmcwx` can be typed.

## Testing and grading notes

- The file contains four *illustrative practice phrases*: `the world is a stage`, `do not squander your time`, `we can learn by testing ideas`, and `hfgwmcwx`. The testing team may replace the `PHRASES` constant with neutral test phrases; these phrases do not affect keyboard logic.
- Tap **Next** to end a trial, and **Finish** at the end. The results are practice scores, **not official Scaffold metrics**. WPM is entered characters / 5 / minutes; displayed accuracy is `1 - Levenshtein(target, entered)/max(targetLength, enteredLength)`.
- For the class's second testing and final testing, recruit actual participants and compare V2 and the provided Scaffold using the instructor's required phrase lists, protocol, speed/accuracy scoring, and the same physical square size. Keep participant counts and record what errors you found. **No real participant results are included here**.
- Ask the instructor to approve the directional guide, cancellation animation, and especially long-press cursor mode before treating the prototype as legal. The assignment permits browser-based ports/p5.js as a technical path, but it does **not** explicitly approve this particular keyboard.
- The official final delivery additionally requires a narrated video with eight titled sections, max 5 minutes / 500 MB; this V2 prototype does **not** contain such a video yet.

## Code structure

- `index.html` — self-contained working V2 prototype; no installation or external scripts.
- `calibrate.html` — pre-test physical sizing page, stores calibrated pixel width in browser local storage.
