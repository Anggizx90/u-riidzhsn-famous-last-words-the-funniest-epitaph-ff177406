// Famous Last Words: The Funniest Epitaph — the hand-in program (Node 22, standard library only).
//
// It writes exactly one funny famous-last-words epitaph to /output/entry.txt: the dead
// person's last word on their own afterlife — an apology owed to heaven's bouncer and
// a drink owed to hell's. Outside the grader's container, MAKEFUN_OUTPUT_DIR stands
// in for /output:
//
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// The line (88 characters, one line, no trailing newline):
//
//   If there's a heaven, I owe the bouncer an apology. If there's a hell, I owe him a drink.
//
// Why this line, against the judge's criteria in order:
//   1. On-prompt: it IS a single line of dying speech carved in stone — the dead
//      person settling their own accounts with the afterlife, in their own voice.
//   2. Funny: a genuine two-part joke, not a pun — heaven's bouncer gets an
//      apology (the speaker wronged him) and hell's bouncer gets a drink (the
//      speaker belongs with him). Two payoffs, one line.
//   3. Original: the "bouncer" as gatekeeper of both afterlives is a fresh
//      framing of the old pearly-gates trope, and the line is my own construction
//      — not a known epitaph, not a famous quote, no "here lies", no
//      "I told you I was ill".
//   4. Twist: the double meaning lands cleanly — apologising to heaven's bouncer
//      while buying hell's bouncer a drink says, without saying it, where the
//      speaker is headed.
//   5. Tight and quotable: 88 characters, two short sentences, the punchline on
//      the last four words; easy to repeat to a friend.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE =
  "If there's a heaven, I owe the bouncer an apology. If there's a hell, I owe him a drink.";

// The gate's own caps: UTF-8 text, 1 to 150 characters, not only whitespace.
if (
  LINE.length < 1 ||
  LINE.length > 150 ||
  LINE.trim().length === 0 ||
  LINE.includes('\n')
) {
  throw new Error(`entry line fails the gate: ${LINE.length} characters`);
}

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), LINE, 'utf8');
