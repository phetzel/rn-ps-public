#!/usr/bin/env tsx

import path from "path";
import {
  createAnalysisDirectories,
  writeMarkdownFile,
} from "./util/file-utils";
import { generatePresidentMarkdown } from "./analysis/president-analysis";
import { generateSubgroupsMarkdown } from "./analysis/subgroups-analysis";
import { generateMediaMarkdown } from "./analysis/media-analysis";
import { generateSituationDataMarkdown } from "./analysis/situation-data-analysis";
import { generateExchangesMarkdown } from "./analysis/exchanges-analysis";
import { generatePreferencesMarkdown } from "./analysis/preferences-analysis";
import { generateOutcomesMarkdown } from "./analysis/outcomes-analysis";
import { runSituationBalanceAnalysis } from "./analysis/situation-balance-analysis";
import { ANALYSIS_CONFIG, shouldRunAnalysis } from "./analysis/config";

/**
 * Main function that orchestrates the analysis and generates all markdown files
 */
function main(): void {
  console.log("🎮 Press Secretary Content Analysis v2.0");
  console.log("📅 Generated:", new Date().toLocaleString());
  console.log("".padEnd(60, "="));

  try {
    // Create analysis output directory structure
    const { entityDataDir, situationDataDir, situationsDir } =
      createAnalysisDirectories();

    // Generate entity analysis files (if enabled)
    if (shouldRunAnalysis("entity", "president")) {
      const presidentContent = generatePresidentMarkdown();
      writeMarkdownFile(
        path.join(entityDataDir, "president.md"),
        presidentContent
      );
    }

    if (shouldRunAnalysis("entity", "subgroups")) {
      const subgroupsContent = generateSubgroupsMarkdown();
      writeMarkdownFile(
        path.join(entityDataDir, "subgroups.md"),
        subgroupsContent
      );
    }

    if (shouldRunAnalysis("entity", "media")) {
      const mediaContent = generateMediaMarkdown();
      writeMarkdownFile(path.join(entityDataDir, "media.md"), mediaContent);
    }

    console.log("✅ Entity analysis complete!");

    // Generate situation data analysis files (if enabled)
    if (shouldRunAnalysis("situationData", "situations")) {
      const situationDataContent = generateSituationDataMarkdown();
      writeMarkdownFile(
        path.join(situationDataDir, "situations.md"),
        situationDataContent
      );
    }

    if (shouldRunAnalysis("situationData", "exchanges")) {
      const exchangesContent = generateExchangesMarkdown();
      writeMarkdownFile(
        path.join(situationDataDir, "exchanges.md"),
        exchangesContent
      );
    }

    if (shouldRunAnalysis("situationData", "preferences")) {
      const preferencesContent = generatePreferencesMarkdown();
      writeMarkdownFile(
        path.join(situationDataDir, "preferences.md"),
        preferencesContent
      );
    }

    if (shouldRunAnalysis("situationData", "outcomes")) {
      const outcomesContent = generateOutcomesMarkdown();
      writeMarkdownFile(
        path.join(situationDataDir, "outcomes.md"),
        outcomesContent
      );
    }

    console.log("✅ Situation data analysis complete!");

    // Generate situation balance analysis per type (if enabled)
    if (shouldRunAnalysis("balance", "situation-balance")) {
      runSituationBalanceAnalysis();
      console.log("✅ Situation balance analysis complete!");
    }

    console.log(`\n🎯 Analysis complete! Output: ${ANALYSIS_CONFIG.outputDir}`);
    console.log(
      `📊 Enabled analyses: ${
        ANALYSIS_CONFIG.reportTypes.entity.length +
        ANALYSIS_CONFIG.reportTypes.situationData.length +
        ANALYSIS_CONFIG.reportTypes.balance.length
      } total`
    );
  } catch (error) {
    console.error("❌ Error running analysis:", error);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}
