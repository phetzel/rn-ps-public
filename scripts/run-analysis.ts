#!/usr/bin/env tsx

import { ContentBalanceAnalyzer, ContentStatsAnalyzer } from "./analysis";
import { ReportFormatter } from "./utils/report-formatter";

function main() {
  console.log("🎮 Press Secretary Content Analysis");
  console.log("📅 Generated:", new Date().toLocaleString());
  console.log("".padEnd(60, "="));

  try {
    // Generate balance report
    const balanceReport = ContentBalanceAnalyzer.generateReport();
    console.log(ReportFormatter.formatBalanceReport(balanceReport));

    // Generate detailed stats (includes narrative depth)
    const detailedStats = ContentStatsAnalyzer.generateDetailedStats();
    console.log(ReportFormatter.formatDetailedStats(detailedStats));

    console.log("\n✅ Analysis complete!");
  } catch (error) {
    console.error("❌ Error running analysis:", error);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}
