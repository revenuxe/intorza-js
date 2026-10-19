import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { once } from "node:events";
import fs from "node:fs";
import { setTimeout as delay } from "node:timers/promises";
import { chromium } from "playwright";

const origin = "http://127.0.0.1:3201";
const server = spawn(
  process.execPath,
  ["node_modules/next/dist/bin/next", "start", "--hostname", "127.0.0.1", "--port", "3201"],
  { stdio: ["ignore", "pipe", "pipe"] },
);
let logs = "",
  browser;
server.stdout.on("data", (chunk) => {
  logs += chunk;
});
server.stderr.on("data", (chunk) => {
  logs += chunk;
});
const browserOptions = process.env.PLAYWRIGHT_CHANNEL
  ? { channel: process.env.PLAYWRIGHT_CHANNEL }
  : process.platform === "win32"
    ? { channel: "msedge" }
    : {};
try {
  let ready = false;
  for (let i = 0; i < 100; i++) {
    if (logs.includes("Ready in")) {
      ready = true;
      break;
    }
    if (server.exitCode !== null) break;
    await delay(100);
  }
  assert.ok(ready, "Responsive test server did not start.");
  browser = await chromium.launch({ ...browserOptions, headless: true });
  const context = await browser.newContext({
    viewport: { width: 390, height: 844 },
    serviceWorkers: "block",
  });
  const page = await context.newPage();
  const runtimeErrors = [];
  const cspViolations = [];
  page.on("console", (message) => {
    if (
      message.type() === "error" &&
      /Content Security Policy|violates.*directive/i.test(message.text())
    )
      cspViolations.push(message.text());
  });
  page.on("pageerror", (error) => runtimeErrors.push(error.message));
  const results = [];
  fs.mkdirSync("reports", { recursive: true });
  for (const width of [320, 375, 390, 768, 1280]) {
    await page.setViewportSize({ width, height: 844 });
    for (const path of [
      "/",
      "/interior-quotation",
      "/ai-quotation-builder",
      "/interior-design-dashboard",
      "/interior-site-measurement",
    ]) {
      await page.goto(origin + path, { waitUntil: "networkidle" });
      await page.evaluate(() => document.fonts.ready);
      const layout = await page.evaluate(() => {
        const rect = (element) => {
          const bounds = element.getBoundingClientRect();
          return { top: bounds.top, left: bounds.left, right: bounds.right, width: bounds.width };
        };
        return {
          viewport: innerWidth,
          documentWidth: document.documentElement.scrollWidth,
          buttons: [...document.querySelectorAll(".hero-actions > a")].map(rect),
          benefits: [
            ...document.querySelectorAll('[aria-label="Getting started benefits"] > li'),
          ].map(rect),
          featureCards: [...document.querySelectorAll("#features .grid-cols-2 > *")]
            .slice(0, 2)
            .map(rect),
        };
      });
      assert.ok(
        layout.documentWidth <= width + 1,
        `${path} at ${width}px: no horizontal overflow (${layout.documentWidth}px)`,
      );
      assert.equal(layout.buttons.length, 2);
      assert.ok(
        Math.abs(layout.buttons[0].top - layout.buttons[1].top) < 2,
        `${path} at ${width}px: hero buttons share a row`,
      );
      assert.equal(layout.benefits.length, 3);
      assert.ok(
        layout.benefits.every((item) => Math.abs(item.top - layout.benefits[0].top) < 2),
        `${path} at ${width}px: all three benefits share a row`,
      );
      assert.equal(layout.featureCards.length, 2);
      assert.ok(
        Math.abs(layout.featureCards[0].top - layout.featureCards[1].top) < 2,
        `${path} at ${width}px: feature cards are at least two across`,
      );
      if (width === 390)
        await page.screenshot({
          path:
            path === "/"
              ? "reports/mobile-home-390.png"
              : `reports/mobile-${path.slice(1)}-390.png`,
        });
      if (
        width === 1280 &&
        ["/interior-design-dashboard", "/interior-site-measurement"].includes(path)
      ) {
        await page.screenshot({ path: `reports/desktop-${path.slice(1)}-1280.png` });
      }
      results.push({ path, width, result: "passed" });
    }
  }
  await page.goto(origin + "/ai-quotation-builder", { waitUntil: "networkidle" });
  assert.equal(await page.locator("h1").innerText(), "AI Interior Design Quotation Tool");
  await page.getByText("AI Floor Plan Analysis", { exact: true }).waitFor();
  await page.getByText("AI Quotation Builder", { exact: true }).first().waitFor();
  const video = page.locator("video");
  await page.waitForFunction(() => document.querySelector("video").currentTime > 0);
  const before = await video.evaluate((v) => v.currentTime);
  await page.waitForTimeout(700);
  const playback = await video.evaluate((v) => ({
    time: v.currentTime,
    muted: v.muted,
    autoplay: v.autoplay,
    controls: v.controls,
    loop: v.loop,
    inline: v.playsInline,
    width: v.videoWidth,
    height: v.videoHeight,
  }));
  assert.ok(playback.time > before || before > 21, "Video plays automatically");
  assert.ok(
    playback.muted && playback.autoplay && playback.loop && playback.inline && !playback.controls,
    "Silent inline autoplay without playback controls",
  );
  assert.equal(playback.width, 1280);
  assert.equal(playback.height, 720);
  assert.equal(
    await page
      .locator("footer")
      .getByRole("link", { name: "AI Quotation Builder", exact: true })
      .getAttribute("href"),
    "/ai-quotation-builder",
  );
  const ranged = await fetch(origin + "/videos/ai-interior-quotation-builder.mp4", {
    headers: { Range: "bytes=0-1023" },
  });
  assert.equal(ranged.status, 206, "Video supports byte-range requests");
  await page.screenshot({ path: "reports/desktop-ai-quotation-builder-1280.png" });
  await page.setViewportSize({ width: 375, height: 844 });
  for (const path of [
    "/about",
    "/contact",
    "/interior-quotation-format",
    "/interior-cost-calculator",
    "/privacy",
    "/terms",
    "/cookies",
    "/refund",
  ]) {
    await page.goto(origin + path, { waitUntil: "networkidle" });
    const documentWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    assert.ok(documentWidth <= 376, `${path}: no mobile horizontal overflow (${documentWidth}px)`);
    results.push({ path, width: 375, result: "passed" });
  }
  await page.goto(origin + "/interior-cost-calculator", { waitUntil: "networkidle" });
  const area = page.getByLabel("Carpet area (sq ft)");
  await area.fill("1000");
  await page.getByLabel("Rate per sq ft").fill("1000");
  assert.ok(
    (await page.locator('[aria-live="polite"]').textContent()).includes("11,80,000"),
    "Calculator still updates after isolating its interactive widget",
  );
  await page.goto(origin + "/contact", { waitUntil: "networkidle" });
  await page.getByLabel("Name", { exact: true }).fill("Browser security check");
  await page.getByLabel("Email", { exact: true }).fill("browser-check@example.invalid");
  await page.getByLabel("Subject", { exact: true }).fill("Form compatibility check");
  await page
    .getByLabel("Message", { exact: true })
    .fill("Browser validation without storing a real inquiry.");
  await page
    .locator('input[name="website"]')
    .evaluate((input) => (input.value = "honeypot-browser-check"));
  await page.getByRole("button", { name: "Send message", exact: true }).click();
  await page.getByRole("status").filter({ hasText: "Thank you" }).waitFor();
  await page.goto(origin + "/", { waitUntil: "networkidle" });
  const menu = page.getByRole("button", { name: "Toggle menu" });
  await menu.click();
  assert.equal(await menu.getAttribute("aria-expanded"), "true", "Mobile menu expands");
  await page
    .locator("#mobile-navigation")
    .getByRole("link", { name: "About", exact: true })
    .click();
  await page.waitForURL(origin + "/about");
  for (const [label, path, h1] of [
    [
      "Complete Business Overview",
      "/interior-design-dashboard",
      "Interior Design Business Dashboard",
    ],
    [
      "Organize Site Visits Efficiently",
      "/interior-site-measurement",
      "Interior Site Measurement Software",
    ],
  ]) {
    await page.goto(origin + "/", { waitUntil: "networkidle" });
    await page.getByRole("link", { name: label, exact: true }).click();
    await page.waitForURL(origin + path);
    assert.equal(await page.locator("h1").innerText(), h1);
    const firstFaq = page.locator("details").first();
    await firstFaq.locator("summary").click();
    assert.equal(await firstFaq.getAttribute("open"), "");
  }
  assert.equal(cspViolations.length, 0, `CSP violations: ${cspViolations.join("; ")}`);
  assert.equal(runtimeErrors.length, 0, `Browser errors: ${runtimeErrors.join("; ")}`);
  fs.writeFileSync(
    "reports/responsive-audit.json",
    JSON.stringify(
      {
        auditedAt: new Date().toISOString(),
        browser: browserOptions.channel ?? "chromium",
        results,
        interactions: [
          "Calculator recomputation",
          "Contact action under CSP (honeypot, no database write)",
          "Mobile navigation",
          "Homepage feature heading navigation and landing-page FAQs",
          "AI demo autoplay, controls, dimensions and byte ranges",
        ],
        runtimeErrors,
      },
      null,
      2,
    ) + "\n",
  );
  console.log(
    "Passed: hero rows and benefit rows at 320–1280px, mobile feature columns, all public pages at 375px, calculator updates and mobile navigation. Screenshots saved in reports/.",
  );
} finally {
  if (browser) await browser.close();
  server.kill();
  if (server.exitCode === null) await once(server, "exit");
}
