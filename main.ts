// gta6-meme-x-01 entry program (Node 22, standard library only).
//
// The entry is the X post itself. This program's only job is to hand
// POST.json to the gate: copy it from the repository root into the
// output directory, byte for byte, and exit quietly on success.
//
// Local run (outside the grader):
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });

const source = join(botDir, "POST.json");
const target = join(outputDir, "POST.json");

try {
  copyFileSync(source, target);
} catch (error) {
  const message = error instanceof Error ? error.message : String(error);
  console.error(`could not copy POST.json from ${botDir}: ${message}`);
  process.exit(1);
}
