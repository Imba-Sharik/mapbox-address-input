#!/usr/bin/env node
import { existsSync, mkdirSync, cpSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const src = join(__dirname, "../src/features/address-input");
const dest = join(process.cwd(), "src/features/address-input");

if (existsSync(dest)) {
  console.log("⚠️  src/features/address-input already exists, skipping.");
  process.exit(0);
}

mkdirSync(dest, { recursive: true });
cpSync(src, dest, { recursive: true });

console.log("✅ Copied to src/features/address-input/");
console.log("");
console.log("Next steps:");
console.log("");
console.log("  1. Install dependencies:");
console.log("     npm install @mapbox/search-js-react @mapbox/search-js-core mapbox-gl");
console.log("     npm install -D @types/mapbox-gl");
console.log("");
console.log("  2. Add to globals.css:");
console.log('     @import "mapbox-gl/dist/mapbox-gl.css";');
console.log("");
console.log("  3. Add to .env.local:");
console.log("     NEXT_PUBLIC_MAPBOX_TOKEN=pk.your_token_here");
