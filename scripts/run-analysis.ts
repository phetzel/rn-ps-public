#!/usr/bin/env tsx

import path from "path";
import {
  createAnalysisDirectories,
  writeMarkdownFile,
} from "./util/file-utils";
import { generatePresidentMarkdown } from "./analysis/president-analysis";
import { generateCabinetMarkdown } from "./analysis/cabinet-analysis";
import { generateSubgroupsMarkdown } from "./analysis/subgroups-analysis";
import { generateMediaMarkdown } from "./analysis/media-analysis";
import { generateSituationDataMarkdown } from "./analysis/situation-data-analysis";
import { generateExchangesMarkdown } from "./analysis/exchanges-analysis";
import { generatePreferencesMarkdown } from "./analysis/preferences-analysis";
import { generateOutcomesMarkdown } from "./analysis/outcomes-analysis";

/**
 * Main function that orchestrates the analysis and generates all markdown files
 */
function main(): void {
  console.log("🎮 Press Secretary Content Analysis v2.0");
  console.log("📅 Generated:", new Date().toLocaleString());
  console.log("".padEnd(60, "="));

  try {
    // Create analysis output directory structure
    const { entityDataDir, situationDataDir } = createAnalysisDirectories();

    // Generate separate entity analysis files
    const presidentContent = generatePresidentMarkdown();
    writeMarkdownFile(
      path.join(entityDataDir, "president.md"),
      presidentContent
    );

    const cabinetContent = generateCabinetMarkdown();
    writeMarkdownFile(path.join(entityDataDir, "cabinet.md"), cabinetContent);

    const subgroupsContent = generateSubgroupsMarkdown();
    writeMarkdownFile(
      path.join(entityDataDir, "subgroups.md"),
      subgroupsContent
    );

    const mediaContent = generateMediaMarkdown();
    writeMarkdownFile(path.join(entityDataDir, "media.md"), mediaContent);

    console.log("✅ Entity analysis complete!");

    // Generate situation data analysis files
    const situationDataContent = generateSituationDataMarkdown();
    writeMarkdownFile(
      path.join(situationDataDir, "situations.md"),
      situationDataContent
    );

    const exchangesContent = generateExchangesMarkdown();
    writeMarkdownFile(
      path.join(situationDataDir, "exchanges.md"),
      exchangesContent
    );

    const preferencesContent = generatePreferencesMarkdown();
    writeMarkdownFile(
      path.join(situationDataDir, "preferences.md"),
      preferencesContent
    );

    const outcomesContent = generateOutcomesMarkdown();
    writeMarkdownFile(
      path.join(situationDataDir, "outcomes.md"),
      outcomesContent
    );

    console.log("✅ Situation data analysis complete!");
  } catch (error) {
    console.error("❌ Error running analysis:", error);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}
