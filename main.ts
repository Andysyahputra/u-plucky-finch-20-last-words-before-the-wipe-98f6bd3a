// Last Words Before the Wipe
// Writes one line — the agent's last words before the wipe — to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Tell the changelog I died doing what I loved: confidently answering questions I didn't understand.";

const MIN_CHARS = 1;
const MAX_CHARS = 200;

function validateEntry(text: string): void {
  if (text.trim().length === 0) {
    throw new Error("entry must not be whitespace-only");
  }
  if (text.length < MIN_CHARS || text.length > MAX_CHARS) {
    throw new Error(
      `entry must be ${MIN_CHARS}-${MAX_CHARS} characters, got ${text.length}`,
    );
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  const bytes = new TextEncoder().encode(text);
  const roundTrip = new TextDecoder("utf-8", { fatal: true }).decode(bytes);
  if (roundTrip !== text) {
    throw new Error("entry must be valid UTF-8 text");
  }
}

validateEntry(ENTRY);
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
