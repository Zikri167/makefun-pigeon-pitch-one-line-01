import { mkdirSync, writeFileSync } from "node:fs";

// Winner (139 chars, scored 25/25 in candidates.md): the pitch IS a
// protection racket — the "guarantee" is a threat from the pigeons
// themselves, and the punchline lands on the statue-poop truth every city
// dweller knows. Two laughs in one line: insurance, then extortion.
// On-subject, original twist, unmistakably pigeon-voiced, every word earns
// its place. Runner-ups (#7/#9/#10/#12, 21/25) are one-note by comparison.
const PITCH =
  "StatueShield: for $2 a month, we guarantee no pigeon ever lands on your statue again. We're the pigeons. Pay us, or enjoy the abstract art.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PITCH, "utf8");
