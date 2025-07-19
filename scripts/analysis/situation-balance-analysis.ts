import { writeFileSync, mkdirSync } from "fs";
import { join } from "path";
import { situationsData } from "~/lib/data/situations";
import { SituationType } from "~/types";
import { getAllQuestionsFromExchange } from "~/lib/db/helpers/exchangeApi";

interface SituationBalanceRow {
  name: string;
  description: string;
  cabinetInvolved: string;
  preferenceDiversity: string;
  entitiesAffected: string;
  outcomeBalance: string;
  // balanceIssues: string[]; // Commented out for cleaner table
}

interface SituationTypeBalance {
  type: SituationType;
  situations: SituationBalanceRow[];
  summary: {
    totalSituations: number;
    missingPositiveCount: number;
    missingNegativeCount: number;
    entityCoverage: {
      cabinet: Map<string, number>;
      impactedEntities: Map<string, number>;
    };
    commonIssues: string[];
  };
}

/**
 * Analyzes a single situation for balance metrics
 */
function analyzeSituation(situation: any): SituationBalanceRow {
  const cabinetInvolved = new Set<string>();
  const entitiesAffected = new Set<string>();
  const preferenceTypes = new Set<string>();
  // const balanceIssues: string[] = [];

  // Track cabinet involvement from exchanges
  situation.exchanges.forEach((exchange: any) => {
    const allQuestions = getAllQuestionsFromExchange(exchange.content);
    allQuestions.forEach((question: any) => {
      question.answers.forEach((answer: any) => {
        if (answer.impacts.cabinet) {
          Object.keys(answer.impacts.cabinet).forEach((id) =>
            cabinetInvolved.add(id)
          );
        }
      });
    });
  });

  // Preference analysis - Format: "president: admit, hhs: deflect"
  const preferences: string[] = [];
  if (situation.content.preferences.president) {
    preferences.push(
      `president: ${situation.content.preferences.president.answerType}`
    );
    preferenceTypes.add(situation.content.preferences.president.answerType);
  }

  if (situation.content.preferences.cabinet) {
    Object.entries(situation.content.preferences.cabinet).forEach(
      ([id, pref]: [string, any]) => {
        preferences.push(`${id}: ${pref.preference.answerType}`);
        preferenceTypes.add(pref.preference.answerType);
      }
    );
  }

  // Entity impact analysis
  situation.exchanges.forEach((exchange: any) => {
    const allQuestions = getAllQuestionsFromExchange(exchange.content);
    allQuestions.forEach((question: any) => {
      question.answers.forEach((answer: any) => {
        if (answer.impacts.president) entitiesAffected.add("president");
        if (answer.impacts.cabinet) {
          Object.keys(answer.impacts.cabinet).forEach((id) =>
            entitiesAffected.add(id)
          );
        }
        if (answer.impacts.subgroups) {
          Object.keys(answer.impacts.subgroups).forEach((id) =>
            entitiesAffected.add(id)
          );
        }
        if (answer.impacts.journalists) {
          Object.keys(answer.impacts.journalists).forEach((id) =>
            entitiesAffected.add(id)
          );
        }
      });
    });
  });

  // Outcome balance analysis
  const outcomeWeights = situation.content.outcomes.map((o: any) => o.weight);
  const totalWeight = outcomeWeights.reduce(
    (sum: number, w: number) => sum + w,
    0
  );
  const minWeight = Math.min(...outcomeWeights);
  const maxWeight = Math.max(...outcomeWeights);
  const weightRange = maxWeight - minWeight;

  const outcomeBalance =
    totalWeight !== 100
      ? `⚠️ ${totalWeight}% (should be 100%)`
      : weightRange > 50
      ? `⚠️ unbalanced (${minWeight}-${maxWeight}%)`
      : `✅ balanced (${minWeight}-${maxWeight}%)`;

  return {
    name: situation.title,
    description:
      situation.description.length > 80
        ? situation.description.substring(0, 80) + "..."
        : situation.description,
    cabinetInvolved: Array.from(cabinetInvolved).join(", "),
    preferenceDiversity: `${preferenceTypes.size} types: ${Array.from(
      preferenceTypes
    ).join(", ")}`,
    entitiesAffected: `${entitiesAffected.size} entities`,
    outcomeBalance,
    // balanceIssues,
  };
}

/**
 * Groups situations by type and analyzes each type
 */
function analyzeSituationsByType(): SituationTypeBalance[] {
  const typeMap = new Map<SituationType, any[]>();

  // Group situations by type
  situationsData.forEach((situation) => {
    const type = situation.type as SituationType;
    if (!typeMap.has(type)) {
      typeMap.set(type, []);
    }
    typeMap.get(type)!.push(situation);
  });

  const results: SituationTypeBalance[] = [];

  // Analyze each type
  typeMap.forEach((situations, type) => {
    const situationRows = situations.map(analyzeSituation);

    // Calculate summary statistics
    const cabinetUsage = new Map<string, number>();
    const entityUsage = new Map<string, number>();
    let missingPositiveCount = 0;
    let missingNegativeCount = 0;
    const issues: string[] = [];

    situations.forEach((situation) => {
      // Track cabinet usage
      situation.exchanges.forEach((exchange: any) => {
        const allQuestions = getAllQuestionsFromExchange(exchange.content);
        allQuestions.forEach((question: any) => {
          question.answers.forEach((answer: any) => {
            if (answer.impacts.cabinet) {
              Object.keys(answer.impacts.cabinet).forEach((id) => {
                cabinetUsage.set(id, (cabinetUsage.get(id) || 0) + 1);
              });
            }
          });
        });
      });

      // Track entity usage
      situation.exchanges.forEach((exchange: any) => {
        const allQuestions = getAllQuestionsFromExchange(exchange.content);
        allQuestions.forEach((question: any) => {
          question.answers.forEach((answer: any) => {
            if (answer.impacts.president) {
              entityUsage.set(
                "president",
                (entityUsage.get("president") || 0) + 1
              );
            }
            if (answer.impacts.cabinet) {
              Object.keys(answer.impacts.cabinet).forEach((id) => {
                entityUsage.set(id, (entityUsage.get(id) || 0) + 1);
              });
            }
            if (answer.impacts.subgroups) {
              Object.keys(answer.impacts.subgroups).forEach((id) => {
                entityUsage.set(id, (entityUsage.get(id) || 0) + 1);
              });
            }
            if (answer.impacts.journalists) {
              Object.keys(answer.impacts.journalists).forEach((id) => {
                entityUsage.set(id, (entityUsage.get(id) || 0) + 1);
              });
            }
          });
        });
      });

      // Check for missing positive/negative outcomes
      const outcomeWeights = situation.content.outcomes.map(
        (o: any) => o.weight
      );
      const totalWeight = outcomeWeights.reduce(
        (sum: number, w: number) => sum + w,
        0
      );

      if (totalWeight !== 100) {
        issues.push(
          `${situation.title}: Weight total ${totalWeight}% (should be 100%)`
        );
      }

      const positiveOutcomes = situation.content.outcomes.filter(
        (o: any) =>
          o.consequences?.approvalChanges?.cabinet ||
          o.consequences?.approvalChanges?.subgroups
      ).length;

      const negativeOutcomes = situation.content.outcomes.filter(
        (o: any) =>
          o.consequences?.approvalChanges?.cabinet ||
          o.consequences?.approvalChanges?.subgroups
      ).length;

      if (positiveOutcomes === 0) missingPositiveCount++;
      if (negativeOutcomes === 0) missingNegativeCount++;
    });

    results.push({
      type,
      situations: situationRows,
      summary: {
        totalSituations: situations.length,
        missingPositiveCount,
        missingNegativeCount,
        entityCoverage: {
          cabinet: cabinetUsage,
          impactedEntities: entityUsage,
        },
        commonIssues: issues,
      },
    });
  });

  return results;
}

/**
 * Generates markdown table for a situation type
 */
function generateMarkdownTable(typeBalance: SituationTypeBalance): string {
  let markdown = `## ${typeBalance.type} (${typeBalance.summary.totalSituations} situations)\n\n`;

  markdown += `| Situation | Description | Cabinet Involved | Preference Diversity | Entities Affected | Outcome Balance |\n`;
  markdown += `|-----------|-------------|------------------|---------------------|-------------------|----------------|\n`;

  typeBalance.situations.forEach((situation) => {
    markdown += `| ${situation.name} | ${situation.description} | ${situation.cabinetInvolved} | ${situation.preferenceDiversity} | ${situation.entitiesAffected} | ${situation.outcomeBalance} |\n`;
  });

  markdown += `\n### Summary\n`;
  markdown += `- **Total Situations**: ${typeBalance.summary.totalSituations}\n`;
  markdown += `- **Missing Positive Outcomes**: ${typeBalance.summary.missingPositiveCount}\n`;
  markdown += `- **Missing Negative Outcomes**: ${typeBalance.summary.missingNegativeCount}\n`;

  if (typeBalance.summary.commonIssues.length > 0) {
    markdown += `\n### Common Issues\n`;
    typeBalance.summary.commonIssues.forEach((issue) => {
      markdown += `- ${issue}\n`;
    });
  }

  markdown += `\n### Cabinet Coverage\n`;
  const sortedCabinet = Array.from(
    typeBalance.summary.entityCoverage.cabinet.entries()
  ).sort((a, b) => b[1] - a[1]);

  sortedCabinet.forEach(([id, count]) => {
    markdown += `- **${id}**: ${count} impacts\n`;
  });

  markdown += `\n### Entity Coverage\n`;
  const sortedEntities = Array.from(
    typeBalance.summary.entityCoverage.impactedEntities.entries()
  ).sort((a, b) => b[1] - a[1]);

  sortedEntities.forEach(([id, count]) => {
    markdown += `- **${id}**: ${count} impacts\n`;
  });

  return markdown + "\n";
}

/**
 * Main analysis function
 */
export function runSituationBalanceAnalysis(): void {
  console.log("Analyzing situation balance...");

  const outputDir = join(
    process.cwd(),
    "scripts",
    "analysis-output",
    "situations"
  );
  mkdirSync(outputDir, { recursive: true });

  const typeBalances = analyzeSituationsByType();

  let fullMarkdown = `# Situation Balance Analysis\n\n`;
  fullMarkdown += `Generated on: ${new Date().toISOString()}\n\n`;

  // Overall summary
  const totalSituations = typeBalances.reduce(
    (sum, tb) => sum + tb.summary.totalSituations,
    0
  );
  const totalMissingPositive = typeBalances.reduce(
    (sum, tb) => sum + tb.summary.missingPositiveCount,
    0
  );
  const totalMissingNegative = typeBalances.reduce(
    (sum, tb) => sum + tb.summary.missingNegativeCount,
    0
  );

  fullMarkdown += `## Overall Summary\n`;
  fullMarkdown += `- **Total Situations**: ${totalSituations}\n`;
  fullMarkdown += `- **Situations Missing Positive Outcomes**: ${totalMissingPositive}\n`;
  fullMarkdown += `- **Situations Missing Negative Outcomes**: ${totalMissingNegative}\n\n`;

  // Generate table for each type
  typeBalances.forEach((typeBalance) => {
    fullMarkdown += generateMarkdownTable(typeBalance);
  });

  // Global cabinet usage
  const globalCabinetUsage = new Map<string, number>();
  typeBalances.forEach((tb) => {
    tb.summary.entityCoverage.cabinet.forEach((count, id) => {
      globalCabinetUsage.set(id, (globalCabinetUsage.get(id) || 0) + count);
    });
  });

  fullMarkdown += `## Global Cabinet Usage\n`;
  const sortedGlobalCabinet = Array.from(globalCabinetUsage.entries()).sort(
    (a, b) => b[1] - a[1]
  );

  sortedGlobalCabinet.forEach(([id, count]) => {
    fullMarkdown += `- **${id}**: ${count} total impacts\n`;
  });

  writeFileSync(join(outputDir, "README.md"), fullMarkdown);

  console.log(`✅ Analysis complete! Check ${outputDir} for detailed reports.`);
}
