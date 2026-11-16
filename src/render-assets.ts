import { existsSync, mkdirSync } from "node:fs";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { chromium } from "playwright";

async function renderAssets() {
  const distDir = resolve(process.cwd(), "dist");
  const screenshotsDir = resolve(process.cwd(), "screenshots");

  if (!existsSync(screenshotsDir)) {
    mkdirSync(screenshotsDir, { recursive: true });
  }

  console.log("\n======================================================");
  console.log("📸 Generating PDF, PNG, and High-Resolution Screenshots");
  console.log("======================================================\n");

  const browser = await chromium.launch();

  try {
    const page = await browser.newPage();

    // 1. Ticket PDF & PNG
    console.log("→ Generating dist/ticket.pdf (210mm × 99mm DL Ticket)...");
    const ticketUrl = pathToFileURL(resolve(distDir, "ticket.html")).href;
    await page.goto(ticketUrl, { waitUntil: "networkidle" });
    await page.setViewportSize({ width: 900, height: 420 });

    await page.pdf({
      path: resolve(distDir, "ticket.pdf"),
      width: "210mm",
      height: "99mm",
      printBackground: true,
      margin: { top: "0", right: "0", bottom: "0", left: "0" },
    });

    await page.screenshot({
      path: resolve(screenshotsDir, "ticket.png"),
      fullPage: false,
    });
    console.log("  ✓ dist/ticket.pdf created");
    console.log("  ✓ screenshots/ticket.png created");

    // 2. Social Card PNG
    console.log("→ Generating dist/social-card.png (1200 × 630 OG Banner)...");
    const socialUrl = pathToFileURL(resolve(distDir, "social-card.html")).href;
    await page.setViewportSize({ width: 1200, height: 630 });
    await page.goto(socialUrl, { waitUntil: "networkidle" });

    await page.screenshot({
      path: resolve(distDir, "social-card.png"),
      clip: { x: 0, y: 0, width: 1200, height: 630 },
    });
    await page.screenshot({
      path: resolve(screenshotsDir, "social-card.png"),
      clip: { x: 0, y: 0, width: 1200, height: 630 },
    });
    console.log("  ✓ dist/social-card.png created");
    console.log("  ✓ screenshots/social-card.png created");

    // 3. Confirmation Email Screenshot
    console.log("→ Capturing screenshots/email.png (600px Email Layout)...");
    const emailUrl = pathToFileURL(resolve(distDir, "confirmation.html")).href;
    await page.setViewportSize({ width: 720, height: 1100 });
    await page.goto(emailUrl, { waitUntil: "networkidle" });
    await page.screenshot({
      path: resolve(screenshotsDir, "email.png"),
      fullPage: true,
    });
    console.log("  ✓ screenshots/email.png created");

    // 4. Landing Page Desktop & Mobile Screenshots
    console.log("→ Capturing Landing Page screenshots (Desktop 1440px & Mobile 375px)...");
    const landingUrl = pathToFileURL(resolve(distDir, "index.html")).href;

    // Desktop 1440px
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto(landingUrl, { waitUntil: "networkidle" });
    await page.screenshot({
      path: resolve(screenshotsDir, "landing.png"),
      fullPage: true,
    });
    console.log("  ✓ screenshots/landing.png created (1440px)");

    // Mobile 375px
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto(landingUrl, { waitUntil: "networkidle" });
    await page.screenshot({
      path: resolve(screenshotsDir, "landing-mobile.png"),
      fullPage: true,
    });
    console.log("  ✓ screenshots/landing-mobile.png created (375px)");

    // 5. Hero Composite Preview
    console.log("→ Generating screenshots/hero.png (Showcase Composite)...");
    const compositeHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          * { box-sizing: border-box; margin: 0; padding: 0; }
          body {
            background: #070B16;
            font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
            color: #F5F7FF;
            padding: 40px;
            width: 1440px;
            height: 900px;
            display: flex;
            flex-direction: column;
            gap: 24px;
            overflow: hidden;
          }
          .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #2A3562;
            padding-bottom: 16px;
          }
          .title { font-size: 24px; font-weight: 800; letter-spacing: -0.5px; }
          .tag { font-size: 13px; font-weight: 700; color: #00D1B2; background: #141B34; padding: 6px 14px; border-radius: 20px; border: 1px solid #2A3562; }
          .grid {
            display: grid;
            grid-template-columns: 1.4fr 1fr;
            grid-template-rows: 1fr 1fr;
            gap: 20px;
            flex: 1;
            min-height: 0;
          }
          .card {
            background: #0B1020;
            border: 1px solid #2A3562;
            border-radius: 12px;
            padding: 16px;
            display: flex;
            flex-direction: column;
            gap: 12px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0,0,0,0.4);
          }
          .card-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .card-title { font-size: 14px; font-weight: 700; color: #A9B1CF; }
          .card-badge { font-size: 11px; font-weight: 800; color: #6C5CE7; text-transform: uppercase; }
          .card-content {
            flex: 1;
            border-radius: 8px;
            overflow: hidden;
            border: 1px solid #1B2547;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #141B34;
          }
          .card-content img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: top;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <div class="title">Northwind Summit 2027 — Launch Kit</div>
          <div class="tag">1 Design System · 4 Output Destinations · Built with Hyper Elements</div>
        </div>
        <div class="grid">
          <div class="card" style="grid-row: span 2;">
            <div class="card-header">
              <span class="card-title">Responsive Landing Page</span>
              <span class="card-badge">&lt;Page&gt;</span>
            </div>
            <div class="card-content">
              <img src="${pathToFileURL(resolve(screenshotsDir, "landing.png")).href}" />
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <span class="card-title">Social &amp; OG Card (1200×630)</span>
              <span class="card-badge">&lt;Canvas&gt;</span>
            </div>
            <div class="card-content">
              <img src="${pathToFileURL(resolve(screenshotsDir, "social-card.png")).href}" style="object-fit: contain;" />
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <span class="card-title">Print-Ready Pass / Ticket (DL Format)</span>
              <span class="card-badge">&lt;Document&gt;</span>
            </div>
            <div class="card-content" style="background: #FFFFFF;">
              <img src="${pathToFileURL(resolve(screenshotsDir, "ticket.png")).href}" style="object-fit: contain;" />
            </div>
          </div>
        </div>
      </body>
      </html>
    `;

    await page.setViewportSize({ width: 1440, height: 900 });
    await page.setContent(compositeHtml, { waitUntil: "networkidle" });
    await page.screenshot({
      path: resolve(screenshotsDir, "hero.png"),
      fullPage: false,
    });
    console.log("  ✓ screenshots/hero.png composite created");

    // Now re-render in daylight theme to capture retheme.png
    console.log("→ Generating daylight theme comparison for screenshots/retheme.png...");
    const { execSync } = await import("node:child_process");
    execSync("THEME=daylight npx tsx src/build.tsx", { stdio: "ignore" });

    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto(landingUrl, { waitUntil: "networkidle" });
    await page.screenshot({
      path: resolve(screenshotsDir, "retheme.png"),
      fullPage: false,
    });
    console.log("  ✓ screenshots/retheme.png created");

    // Revert dist back to default midnight theme
    execSync("THEME=midnight npx tsx src/build.tsx", { stdio: "ignore" });
    console.log("  ✓ dist/ restored to default midnight theme");

    console.log("\n✨ All assets and screenshots generated successfully!\n");
  } finally {
    await browser.close();
  }
}

renderAssets().catch((err) => {
  console.error("Asset generation error:", err);
  process.exit(1);
});
