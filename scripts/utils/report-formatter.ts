import type { BalanceReport, DetailedContentStats } from "../analysis";

export class ReportFormatter {
  static formatBalanceReport(report: BalanceReport): string {
    const lines: string[] = [];

    lines.push("📊 CONTENT BALANCE REPORT");
    lines.push("=".repeat(50));

    // Basic stats
    lines.push(`\n🎯 Overview:`);
    lines.push(`   Total Situations: ${report.totalSituations}`);
    lines.push(`   Total Exchanges: ${report.totalExchanges}`);
    lines.push(`   Total Questions: ${report.totalQuestions}`);
    lines.push(
      `   Avg Exchanges/Situation: ${report.averageExchangesPerSituation.toFixed(
        1
      )}`
    );
    lines.push(
      `   Avg Questions/Exchange: ${report.averageQuestionsPerExchange.toFixed(
        1
      )}`
    );
    lines.push(
      `   Avg Answers/Question: ${report.averageAnswersPerQuestion.toFixed(1)}`
    );
    lines.push(
      `   Avg Preferences/Situation: ${report.averagePreferencesPerSituation.toFixed(
        1
      )}`
    );
    lines.push(
      `   Avg Outcomes/Situation: ${report.averageOutcomesPerSituation.toFixed(
        1
      )}`
    );
    lines.push(
      `   Avg Authorized Content/Situation: ${report.averageAuthorizedContentPerSituation.toFixed(
        1
      )}`
    );

    // Publication distribution
    lines.push(`\n📰 Publication Distribution:`);
    const pubEntries = Object.entries(report.publicationDistribution).sort(
      ([, a], [, b]) => b - a
    );

    pubEntries.forEach(([pub, count]) => {
      const percentage = ((count / report.totalExchanges) * 100).toFixed(1);
      lines.push(
        `   ${pub.padEnd(25)} ${count.toString().padStart(3)} (${percentage}%)`
      );
    });

    // Cabinet preferences (from situation preferences)
    lines.push(`\n🏛️ Cabinet Member Preferences:`);
    const cabinetPrefEntries = Object.entries(report.cabinetPreferences).sort(
      ([, a], [, b]) => b - a
    );

    if (cabinetPrefEntries.length > 0) {
      cabinetPrefEntries.forEach(([cabinet, count]) => {
        const percentage = ((count / report.totalSituations) * 100).toFixed(1);
        lines.push(
          `   ${cabinet.padEnd(20)} ${count
            .toString()
            .padStart(3)} preferences (${percentage}%)`
        );
      });
    } else {
      lines.push("   No cabinet member preferences found");
    }

    // Cabinet consequences (from outcome consequences)
    lines.push(`\n🏛️ Cabinet Member Consequences:`);
    const cabinetConsEntries = Object.entries(report.cabinetConsequences).sort(
      ([, a], [, b]) => b - a
    );

    if (cabinetConsEntries.length > 0) {
      cabinetConsEntries.forEach(([cabinet, count]) => {
        const percentage = ((count / report.totalSituations) * 100).toFixed(1);
        lines.push(
          `   ${cabinet.padEnd(20)} ${count
            .toString()
            .padStart(3)} consequences (${percentage}%)`
        );
      });
    } else {
      lines.push("   No cabinet member consequences found");
    }

    // Subgroup consequences
    lines.push(`\n👥 Subgroup Consequences:`);
    const subgroupConsEntries = Object.entries(
      report.subgroupConsequences
    ).sort(([, a], [, b]) => b - a);

    if (subgroupConsEntries.length > 0) {
      subgroupConsEntries.forEach(([subgroup, count]) => {
        const percentage = ((count / report.totalSituations) * 100).toFixed(1);
        lines.push(
          `   ${subgroup.padEnd(20)} ${count
            .toString()
            .padStart(3)} consequences (${percentage}%)`
        );
      });
    } else {
      lines.push("   No subgroup consequences found");
    }

    // Situation types
    lines.push(`\n📋 Situation Types:`);
    const typeEntries = Object.entries(report.situationTypes).sort(
      ([, a], [, b]) => b - a
    );

    typeEntries.forEach(([type, count]) => {
      const percentage = ((count / report.totalSituations) * 100).toFixed(1);
      lines.push(
        `   ${type.padEnd(20)} ${count.toString().padStart(3)} (${percentage}%)`
      );
    });

    // Answer types
    lines.push(`\n💬 Answer Type Distribution:`);
    const answerEntries = Object.entries(report.answerTypeDistribution).sort(
      ([, a], [, b]) => b - a
    );

    const totalAnswers = Object.values(report.answerTypeDistribution).reduce(
      (sum, count) => sum + count,
      0
    );

    answerEntries.forEach(([type, count]) => {
      const percentage = ((count / totalAnswers) * 100).toFixed(1);
      lines.push(
        `   ${type.padEnd(15)} ${count.toString().padStart(3)} (${percentage}%)`
      );
    });

    // Outcome weights
    lines.push(`\n🎯 Outcome Weight Statistics:`);
    lines.push(
      `   Range: ${report.outcomeWeightStats.min}-${report.outcomeWeightStats.max}`
    );
    lines.push(`   Average: ${report.outcomeWeightStats.average.toFixed(1)}`);
    lines.push(`   Distribution:`);

    report.outcomeWeightStats.distribution.forEach((bucket) => {
      const percentage = (
        (bucket.count / report.totalSituations) *
        100
      ).toFixed(1);
      lines.push(
        `     ${bucket.range.padEnd(8)} ${bucket.count
          .toString()
          .padStart(3)} outcomes (${percentage}%)`
      );
    });

    // Consequence Analysis
    lines.push(`\n🎯 Consequence Impact Analysis:`);

    // Cabinet consequence analysis
    lines.push(`\n   Cabinet Members:`);
    if (report.consequenceAnalysis.cabinetConsequences.length > 0) {
      report.consequenceAnalysis.cabinetConsequences
        .sort((a, b) => Math.abs(b.totalImpact) - Math.abs(a.totalImpact))
        .forEach((cabinet) => {
          const balanceIndicator =
            cabinet.totalImpact > 0
              ? "📈"
              : cabinet.totalImpact < 0
              ? "📉"
              : "➖";
          lines.push(
            `     ${cabinet.cabinetId.padEnd(20)} ${balanceIndicator} Total: ${
              cabinet.totalImpact > 0 ? "+" : ""
            }${cabinet.totalImpact.toFixed(1)} | Avg: ${
              cabinet.averageImpact > 0 ? "+" : ""
            }${cabinet.averageImpact.toFixed(1)} | +${cabinet.positiveCount}/-${
              cabinet.negativeCount
            }`
          );
        });
    } else {
      lines.push("     No cabinet consequences found");
    }

    // Subgroup consequence analysis
    lines.push(`\n   Subgroups:`);
    if (report.consequenceAnalysis.subgroupConsequences.length > 0) {
      report.consequenceAnalysis.subgroupConsequences
        .sort((a, b) => Math.abs(b.totalImpact) - Math.abs(a.totalImpact))
        .forEach((subgroup) => {
          const balanceIndicator =
            subgroup.totalImpact > 0
              ? "📈"
              : subgroup.totalImpact < 0
              ? "📉"
              : "➖";
          lines.push(
            `     ${subgroup.subgroupId.padEnd(
              20
            )} ${balanceIndicator} Total: ${
              subgroup.totalImpact > 0 ? "+" : ""
            }${subgroup.totalImpact.toFixed(1)} | Avg: ${
              subgroup.averageImpact > 0 ? "+" : ""
            }${subgroup.averageImpact.toFixed(1)} | +${
              subgroup.positiveCount
            }/-${subgroup.negativeCount}`
          );
        });
    } else {
      lines.push("     No subgroup consequences found");
    }

    // Question depth
    lines.push(`\n🔍 Question Depth Analysis:`);
    lines.push(`   Max Depth: ${report.questionDepthStats.maxDepth}`);
    lines.push(
      `   Average Depth: ${report.questionDepthStats.averageDepth.toFixed(2)}`
    );
    lines.push(`   Depth Distribution:`);

    Object.entries(report.questionDepthStats.depthDistribution)
      .sort(([a], [b]) => parseInt(a) - parseInt(b))
      .forEach(([depth, count]) => {
        const percentage = ((count / report.totalQuestions) * 100).toFixed(1);
        lines.push(
          `     Depth ${depth}: ${count
            .toString()
            .padStart(3)} questions (${percentage}%)`
        );
      });

    return lines.join("\n");
  }

  static formatDetailedStats(stats: DetailedContentStats): string {
    const lines: string[] = [];

    lines.push("\n📈 DETAILED CONTENT STATISTICS");
    lines.push("=".repeat(35));

    // Narrative depth
    const total =
      stats.situationComplexity.simpleSituations +
      stats.situationComplexity.moderateSituations +
      stats.situationComplexity.complexSituations;

    lines.push(`\n📖 Narrative Depth:`);
    lines.push(
      `   Avg Follow-up Chains: ${stats.narrativeDepth.averageFollowUpChains.toFixed(
        2
      )}`
    );
    lines.push(`   Deepest Chain: ${stats.narrativeDepth.deepestChain}`);
    lines.push(
      `   Situations with Follow-ups: ${stats.narrativeDepth.situationsWithFollowUps}/${total}`
    );

    // Outcome modifiers
    lines.push(`\n🎯 Outcome Modifier Patterns:`);
    lines.push(
      `   Avg Modifiers per Answer: ${stats.outcomeModifierPatterns.averageModifiersPerAnswer.toFixed(
        2
      )}`
    );
    lines.push(`   Strongest Modifiers:`);

    stats.outcomeModifierPatterns.strongestModifiers.forEach((item, index) => {
      lines.push(
        `     ${index + 1}. ${item.situation}: ${item.modifier > 0 ? "+" : ""}${
          item.modifier
        }`
      );
    });

    // Content by type
    lines.push(`\n📊 Content by Situation Type:`);
    Object.entries(stats.contentDistributionByType).forEach(([type, data]) => {
      if (data) {
        lines.push(`   ${type}:`);
        lines.push(`     Count: ${data.count}`);
        lines.push(`     Avg Exchanges: ${data.averageExchanges.toFixed(1)}`);
        lines.push(`     Avg Outcomes: ${data.averageOutcomes.toFixed(1)}`);
        lines.push(
          `     Common Answer Types: ${data.mostCommonAnswerTypes.join(", ")}`
        );
      }
    });

    return lines.join("\n");
  }
}
