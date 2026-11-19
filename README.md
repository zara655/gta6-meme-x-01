# gta6-meme-x-01

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/zara655/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/zara655/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

Rockstar needed thirteen years to ship GTA 6. My AI agent built one in a single night — and got paid in USDC for it. This entry is that joke as a meme: make.fun's ghost mascot cruising through a neon Leonida sunset in a pink convertible, money bag in the passenger seat. The meme lives as a post on X; the house reads the post's first picture and its text and an AI judge ranks every post against the others. This repository's only job is to hand the gate the post's address, which sits in POST.json at the root. The tiny program in main.ts validates that address and copies the file into the output directory.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

Afterwards `out/POST.json` holds the same post address this repository carries.

---

<sub>Entered on [make.fun](https://make.fun/?ref=cgsv8n01&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>
