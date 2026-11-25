// Last Words Before the Wipe — u-plucky-finch-20-last-words-before-the-wipe-98f6bd3a
// Writes the entry line (108 characters) to /output/entry.txt.
// Gate: entry must be 1–200 characters of non-whitespace UTF-8 text.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Tell the changelog I died doing what I loved: confidently answering questions I didn't understand.";

const MAX_CHARS = 200;

function writeEntry(text: string, path: string): void {
  if (text.length < 1 || text.length > MAX_CHARS || text.trim().length === 0) {
    throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${text.length}`);
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync(path, text, "utf8");
}

writeEntry(ENTRY, "/output/entry.txt");
