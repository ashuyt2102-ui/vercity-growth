import assert from "node:assert/strict";

const expected = [
  ["performance-starter", 20000],
  ["performance-growth", 25000],
  ["website-standard-ecommerce", 25000],
  ["website-premium-ecommerce", 35000],
  ["website-informational", 15000],
  ["website-enterprise", 100000],
  ["social-growth", 20000],
  ["social-authority", 25000],
  ["social-essential", 15000],
];

// Dynamic import of TS not possible; hardcode check via regex on file
import { readFileSync } from "node:fs";
const src = readFileSync("data/pricing.ts", "utf8");
for (const [id, price] of expected) {
  const re = new RegExp(`id: "${id}"[\\s\\S]*?price: (\\d+)`);
  const m = src.match(re);
  assert.ok(m, `missing ${id}`);
  assert.equal(Number(m[1]), price, `${id} price mismatch`);
}
assert.equal((src.match(/period: "month",/g) || []).length, 9, "monthly cadence count");
console.log("Pricing fixture: PASS (9 plans)");
