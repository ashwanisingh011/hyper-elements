import { cpSync, existsSync, mkdirSync, statSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { render } from "@hyper-elements/react";
import { ConfirmationEmail } from "./templates/ConfirmationEmail.js";
import { LandingPage } from "./templates/LandingPage.js";
import { SocialCard } from "./templates/SocialCard.js";
import { Ticket } from "./templates/Ticket.js";
import { currentTheme } from "./tokens.js";

async function build() {
  const outDir = resolve(process.cwd(), "dist");
  if (!existsSync(outDir)) {
    mkdirSync(outDir, { recursive: true });
  }

  // Copy assets into dist/assets
  const srcAssets = resolve(process.cwd(), "assets");
  const destAssets = resolve(outDir, "assets");
  if (existsSync(srcAssets)) {
    cpSync(srcAssets, destAssets, { recursive: true });
  }

  console.log(`\n======================================================`);
  console.log(`🔨 Building Northwind Summit Launch Kit [Theme: ${currentTheme.name}]`);
  console.log(`======================================================\n`);

  // 1. Landing Page
  console.log("→ Rendering Landing Page (<Page>)...");
  const landingResult = await render(<LandingPage />);
  const indexPath = resolve(outDir, "index.html");
  writeFileSync(indexPath, landingResult.html, "utf-8");

  // 2. Confirmation Email
  console.log("→ Rendering Confirmation Email (<Email>)...");
  const emailResult = await render(<ConfirmationEmail />);
  const emailHtmlPath = resolve(outDir, "confirmation.html");
  const emailTxtPath = resolve(outDir, "confirmation.txt");
  writeFileSync(emailHtmlPath, emailResult.html, "utf-8");
  writeFileSync(emailTxtPath, emailResult.text || "", "utf-8");

  // 3. Ticket
  console.log("→ Rendering Ticket Document (<Document>)...");
  const ticketResult = await render(<Ticket />);
  const ticketPath = resolve(outDir, "ticket.html");
  writeFileSync(ticketPath, ticketResult.html, "utf-8");

  // 4. Social Card
  console.log("→ Rendering Social Card Canvas (<Canvas>)...");
  const socialResult = await render(<SocialCard />);
  const socialPath = resolve(outDir, "social-card.html");
  writeFileSync(socialPath, socialResult.html, "utf-8");

  // Summary Table
  const files = [
    { file: "index.html", desc: "Responsive Landing Page" },
    { file: "confirmation.html", desc: "Email-safe HTML" },
    { file: "confirmation.txt", desc: "Email plain text" },
    { file: "ticket.html", desc: "Print Ticket HTML" },
    { file: "social-card.html", desc: "OG Canvas HTML (1200x630)" },
  ];

  console.log("\n📁 Generated Artifacts Summary:");
  console.log("------------------------------------------------------");
  for (const item of files) {
    const fullPath = resolve(outDir, item.file);
    const size = (statSync(fullPath).size / 1024).toFixed(1);
    console.log(`  ✓ dist/${item.file.padEnd(20)} ${size.padStart(6)} KB   (${item.desc})`);
  }
  console.log("------------------------------------------------------\n");
}

build().catch((err) => {
  console.error("Build failed:", err);
  process.exit(1);
});
