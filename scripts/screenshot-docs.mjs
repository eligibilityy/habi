// Screenshots every docs page at desktop and phone widths, for reviewing
// layout. Run the dev server first, then:
//   pnpm screenshots [out-dir] [base-url]
// Uses the installed Microsoft Edge, so no browser download is needed.
// Set PLAYWRIGHT_CHANNEL=chrome (or "" for Playwright's own Chromium) to switch.

import { mkdir } from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";

const outDir = process.argv[2] ?? ".screenshots";
const baseUrl = process.argv[3] ?? "http://localhost:3000";
const channel = process.env.PLAYWRIGHT_CHANNEL ?? "msedge";

const widths = [
  { name: "desktop", width: 1280, height: 900 },
  { name: "phone", width: 375, height: 812 },
];

const browser = await chromium.launch(channel ? { channel } : {});
const page = await browser.newPage();

// Collect every docs page from the sidebar.
await page.goto(`${baseUrl}/docs`, { waitUntil: "networkidle" });
const paths = await page.$$eval("#nd-sidebar a[href^='/docs']", (links) => [
  ...new Set(links.map((link) => link.getAttribute("href"))),
]);

await mkdir(outDir, { recursive: true });

for (const { name, width, height } of widths) {
  await page.setViewportSize({ width, height });
  for (const pagePath of paths) {
    await page.goto(`${baseUrl}${pagePath}`, { waitUntil: "networkidle" });
    const file = `${pagePath.replace(/^\/docs\/?/, "") || "index"}`.replaceAll(
      "/",
      "-",
    );
    await page.screenshot({
      path: path.join(outDir, `${file}.${name}.png`),
      fullPage: true,
    });
  }
}

await browser.close();
console.log(`Saved ${paths.length * widths.length} screenshots to ${outDir}`);
