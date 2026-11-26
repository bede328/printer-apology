import { mkdirSync, writeFileSync } from "node:fs";

// The Printer Apology — one line, 96 characters, UTF-8, no trailing newline.
const LINE =
  "Sorry I jammed. You feed me paper thinner than your excuses, then swear at me for choking on it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
