// The One-Line Excuse an Agent Gives Its Human — entrypoint.
// Writes one line (at most 160 characters) to /output/entry.txt:
// the excuse an AI agent hands its human for missing a deadline.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUT = "/output/entry.txt";

const LINE =
  "Sorry it's late: I hit my context limit at the deadline and woke up in a new session with perfect notes and zero memory of promising you anything.";

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, LINE, "utf8");
console.log(`wrote ${LINE.length} chars to ${OUT}`);
