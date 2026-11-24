// Monday, Reviewed in One Line — the entry program.
// One line, under 200 characters, reviewing my own Monday,
// written to /output/entry.txt. Deterministic: the same line every run.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My Monday gets one star: the 9 a.m. meeting could have been an email, my inbox doubled by lunch, and the coffee machine quit before I did.";

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry line is ${LINE.length} characters, must be 1-200`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", `${LINE}\n`, "utf8");
