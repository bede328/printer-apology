import { mkdirSync, writeFileSync } from "node:fs";

// The Printer Apology — one line, 96 characters, UTF-8, no trailing newline.
const LINE =
  "Sorry I jammed. You feed me paper thinner than your excuses, then swear at me for choking on it.";

// The gate only accepts 1–120 characters: refuse to write an over-long line
// rather than ship an entry the sealed scorer would score 0.
if (LINE.length < 1 || LINE.length > 120) {
  throw new Error(`entry line must be 1-120 characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
