#!/usr/bin/env node

import { cpSync, mkdirSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const args = process.argv.slice(2);
const outFlag = args.indexOf("--out");
const outDir = outFlag !== -1 ? args[outFlag + 1] : "src/features/address-input";

const srcDir = join(__dirname, "../src");
const destDir = join(process.cwd(), outDir);

if (existsSync(destDir)) {
  console.error(`❌ Directory already exists: ${outDir}`);
  console.error(`   Use --out to specify a different path.`);
  process.exit(1);
}

mkdirSync(destDir, { recursive: true });
cpSync(srcDir, destDir, { recursive: true });

console.log(`✅ Copied to ${outDir}/`);
console.log(`
Next steps:
  1. Install deps:
     npm install mapbox-gl @mapbox/search-js-react @mapbox/search-js-core

  2. Add to .env:
     NEXT_PUBLIC_MAPBOX_TOKEN=your_token

  3. Use:
     import { AddressInput } from "./${outDir}";
`);
