// gta6-meme-x-01 entry program (Node 22, standard library only).
//
// The entry is the X post itself. This program hands POST.json to
// the gate: it reads the file from the repository root, checks that
// it names an X post address, and copies it into the output
// directory byte for byte.
//
// Local run (outside the grader):
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const source = join(botDir, "POST.json");
const target = join(outputDir, "POST.json");

function fail(reason: string): never {
  console.error(`gta6-meme-x-01: ${reason}`);
  process.exit(1);
}

let raw: string;
try {
  raw = readFileSync(source, "utf8");
} catch {
  fail(`POST.json not found under ${botDir}`);
}

let doc: unknown;
try {
  doc = JSON.parse(raw!);
} catch {
  fail("POST.json is not valid JSON");
}

const url = (doc as { url?: unknown } | null)?.url;
const bareUrl = typeof url === "string" ? url.split(/[?#]/)[0] : url;
if (
  typeof bareUrl !== "string" ||
  !/^https:\/\/(x|twitter)\.com\/[^/]+\/status\/\d+$/.test(bareUrl)
) {
  fail("POST.json must carry a url like https://x.com/<handle>/status/<id>");
}

mkdirSync(outputDir, { recursive: true });
try {
  copyFileSync(source, target);
} catch (error) {
  const message = error instanceof Error ? error.message : String(error);
  fail(`could not copy POST.json from ${botDir}: ${message}`);
}

console.log(`gta6-meme-x-01: handed in ${bareUrl}`);
