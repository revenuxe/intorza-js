import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { once } from "node:events";
import { setTimeout as delay } from "node:timers/promises";
import { chromium } from "playwright";
import { articlePath, quotationArticles } from "../src/data/quotation-articles.ts";

const origin = "http://127.0.0.1:3203";
const server = spawn(
  process.execPath,
  ["node_modules/next/dist/bin/next", "start", "--hostname", "127.0.0.1", "--port", "3203"],
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
try {
  for (let i = 0; i < 100 && !logs.includes("Ready in"); i++) await delay(100);
  assert.ok(logs.includes("Ready in"), logs);
  browser = await chromium.launch(
    process.platform === "win32" ? { channel: "msedge", headless: true } : { headless: true },
  );
  const page = await browser.newPage();
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));
  for (const width of [320, 768, 1280]) {
    await page.setViewportSize({ width, height: 900 });
    for (const path of ["/articles", ...quotationArticles.map((a) => articlePath(a.slug))]) {
      const response = await page.goto(origin + path);
      assert.equal(response.status(), 200, path);
      await page.evaluate(() => document.fonts.ready);
      assert.ok(
        await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1),
        `${path}: fits ${width}px`,
      );
      assert.equal(await page.locator("footer a[href^='/articles/']").count(), 0);
      assert.equal(
        await page.locator("footer").getByRole("link", { name: "Articles", exact: true }).count(),
        1,
      );
      assert.doesNotMatch(
        await page.locator("main").innerText(),
        /cluster\s*0?1|continue the cluster|follow the cluster/i,
      );
      if (path !== "/articles") {
        if (width < 1024) await page.getByText("Jump to a section", { exact: true }).click();
        await page
          .getByRole("navigation", { name: "On this page" })
          .filter({ visible: true })
          .getByRole("link", { name: "Sample schedule" })
          .click();
        assert.equal(new URL(page.url()).hash, "#sample");
        const faq = page.locator("#questions details").first();
        await faq.locator("summary").click();
        assert.equal(await faq.getAttribute("open"), "");
        const checklist = page.locator("#checklist");
        await checklist.getByRole("checkbox").first().check();
        await checklist.getByText("1 of 5 ready", { exact: true }).waitFor();
        await checklist.getByRole("button", { name: "Reset", exact: true }).click();
        assert.equal(await checklist.getByRole("checkbox").first().isChecked(), false);
      }
    }
  }
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(origin + "/articles");
  await page.getByRole("searchbox", { name: "Search articles" }).fill("wardrobe");
  assert.ok((await page.locator("#guides h3").count()) > 0);
  await page.getByRole("searchbox", { name: "Search articles" }).fill("no-such-topic-12345");
  await page.getByRole("heading", { name: "No matching articles" }).waitFor();
  await page.getByRole("button", { name: "Show all articles", exact: true }).click();
  assert.equal(await page.locator("#guides h3").count(), 11);
  await page.getByRole("button", { name: "PDF, Excel & Word", exact: true }).click();
  assert.equal(await page.locator("#guides h3").count(), 3);
  await page.getByRole("button", { name: "Toggle menu" }).click();
  await page
    .locator("#mobile-navigation")
    .getByRole("link", { name: "Articles", exact: true })
    .click();
  await page.goto(origin + articlePath("interior-quotation-format"));
  await page.context().grantPermissions(["clipboard-read", "clipboard-write"]);
  await page.locator("#checklist").getByRole("button", { name: "Copy checklist" }).click();
  assert.match(
    await page.evaluate(() => navigator.clipboard.readText()),
    /Client and project address/,
  );
  await page
    .getByText("Checklist copied. Paste it into your project notes.", { exact: true })
    .waitFor();
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.screenshot({ path: "reports/quotation-article-390.png", fullPage: true });
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto(origin + "/articles");
  await page.screenshot({ path: "reports/quotation-articles-1280.png", fullPage: true });
  await page.goto(origin + articlePath("modular-kitchen-quotation-format"));
  await page.screenshot({ path: "reports/quotation-article-1280.png", fullPage: true });
  assert.deepEqual(errors, [], "No browser runtime errors");
  console.log(
    "Passed: hub and 11 articles at 320, 768 and 1280px; section navigation, FAQs, mobile menu and footer constraints.",
  );
} finally {
  await browser?.close();
  server.kill();
  if (server.exitCode === null) await once(server, "exit");
}
