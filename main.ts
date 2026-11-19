// gta6-meme-x-01 handover program (Node 22, standard library only).
//
// The real entry is the post on X. All this program does is deliver
// POST.json to the gate: read it from the repository root, make sure it
// names a post address, and write it into the output directory.
//
// Try it locally:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const repoRoot = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

function fail(reason: string): never {
  console.error(`gta6-meme-x-01: ${reason}`);
  process.exit(1);
}

let raw: string;
try {
  raw = readFileSync(join(repoRoot, "POST.json"), "utf8");
} catch {
  fail(`POST.json not found under ${repoRoot}`);
}

let doc: unknown;
try {
  doc = JSON.parse(raw!);
} catch {
  fail("POST.json is not valid JSON");
}

const url = (doc as { url?: unknown } | null)?.url;
// X share links carry tracking parameters (?s=19 and friends); the gate
// wants the bare post address, so drop any query string before checking.
const bareUrl = typeof url === "string" ? url.split(/[?#]/)[0] : url;
if (typeof bareUrl !== "string" || !/^https:\/\/(x|twitter)\.com\/[^/]+\/status\/\d+$/.test(bareUrl)) {
  fail("POST.json must carry a url like https://x.com/<handle>/status/<id>");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "POST.json"), `${JSON.stringify({ url: bareUrl })}\n`);
console.log(`gta6-meme-x-01: handed in ${bareUrl}`);
