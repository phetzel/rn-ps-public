import { writeFileSync, mkdirSync } from "fs";
import { join } from "path";
import { situationsData } from "~/lib/data/situations";
import {
  SituationType,
  AnswerType,
  CabinetStaticId,
  SubgroupStaticId,
} from "~/types";

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
  // Entity involvement analysis
  const cabinetInvolved = new Set<string>();
  const entityImpacts = new Map<
    string,
    { positive: number; negative: number; totalValue: number }
  >();

  // Track cabinet involvement from exchanges
  situation.exchanges.forEach((exchange: any) => {
    Object.values(exchange.content.questions).forEach((question: any) => {
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
  const preferenceMap: string[] = [];
  const preferences = situation.content.preferences;

  // Check president preferences
  if (preferences.president) {
    preferenceMap.push(`president: ${preferences.president.answerType}`);
  }

  // Check cabinet preferences
  if (preferences.cabinet) {
    Object.entries(preferences.cabinet).forEach(
      ([cabinetId, cabinetPref]: [string, any]) => {
        if (cabinetPref?.preference) {
          preferenceMap.push(
            `${cabinetId}: ${cabinetPref.preference.answerType}`
          );
        }
      }
    );
  }

  // Outcome analysis with detailed entity impact tracking
  const outcomes = situation.content.outcomes;
  const outcomeDetails: string[] = [];
  let hasPositiveOutcome = false;
  let hasNegativeOutcome = false;

  outcomes.forEach((outcome: any) => {
    const entityEffects: string[] = [];
    let outcomeTotal = 0;

    // Track cabinet approval changes
    if (outcome.consequences.approvalChanges.cabinet) {
      Object.entries(outcome.consequences.approvalChanges.cabinet).forEach(
        ([id, weight]: [string, any]) => {
          if (weight !== undefined) {
            const symbol =
              weight >= 3 ? "++" : weight > 0 ? "+" : weight <= -3 ? "--" : "-";
            entityEffects.push(`${id}:${symbol}`);
            outcomeTotal += weight;

            // Track for entity impact summary
            if (!entityImpacts.has(id)) {
              entityImpacts.set(id, {
                positive: 0,
                negative: 0,
                totalValue: 0,
              });
            }
            const impact = entityImpacts.get(id)!;
            if (weight > 0) impact.positive++;
            else if (weight < 0) impact.negative++;
            impact.totalValue += weight;
          }
        }
      );
    }

    // Track subgroup approval changes
    if (outcome.consequences.approvalChanges.subgroups) {
      Object.entries(outcome.consequences.approvalChanges.subgroups).forEach(
        ([id, weight]: [string, any]) => {
          if (weight !== undefined) {
            const symbol =
              weight >= 3 ? "++" : weight > 0 ? "+" : weight <= -3 ? "--" : "-";
            entityEffects.push(`${id}:${symbol}`);
            outcomeTotal += weight;

            // Track for entity impact summary
            if (!entityImpacts.has(id)) {
              entityImpacts.set(id, {
                positive: 0,
                negative: 0,
                totalValue: 0,
              });
            }
            const impact = entityImpacts.get(id)!;
            if (weight > 0) impact.positive++;
            else if (weight < 0) impact.negative++;
            impact.totalValue += weight;
          }
        }
      );
    }

    // Determine outcome type
    if (outcomeTotal > 0) {
      hasPositiveOutcome = true;
    } else if (outcomeTotal < 0) {
      hasNegativeOutcome = true;
    }

    const totalSymbol =
      outcomeTotal >= 3
        ? "++"
        : outcomeTotal > 0
        ? "+"
        : outcomeTotal <= -3
        ? "--"
        : outcomeTotal < 0
        ? "-"
        : "0";
    outcomeDetails.push(
      `**${outcome.title}** (${totalSymbol}): ${entityEffects.join(", ")}`
    );
  });

  // Create entities affected summary
  const entitiesAffectedList: string[] = [];
  entityImpacts.forEach((impact, entityId) => {
    entitiesAffectedList.push(
      `${entityId}:(+${impact.positive}/-${impact.negative}/=${impact.totalValue})`
    );
  });

  // Create formatted strings for display
  const outcomeBalance = outcomeDetails.join("<br/>") || "No outcomes";
  const preferenceDiversityDisplay = preferenceMap.join(", ") || "None";
  const entitiesAffectedDisplay = entitiesAffectedList.join(", ") || "None";

  return {
    name: situation.title,
    description: situation.description,
    cabinetInvolved: Array.from(cabinetInvolved).join(", ") || "None",
    preferenceDiversity: preferenceDiversityDisplay,
    entitiesAffected: entitiesAffectedDisplay,
    outcomeBalance,
    // balanceIssues, // Commented out
  };
}

/**
 * Groups situations by type and analyzes each type
 */
function analyzeSituationsByType(): SituationTypeBalance[] {
  const typeGroups = new Map<SituationType, any[]>();

  // Group situations by type
  situationsData.forEach((situation) => {
    if (!typeGroups.has(situation.type)) {
      typeGroups.set(situation.type, []);
    }
    typeGroups.get(situation.type)!.push(situation);
  });

  // Analyze each type
  return Array.from(typeGroups.entries()).map(([type, situations]) => {
    const situationRows = situations.map(analyzeSituation);

    // Calculate summary statistics
    const totalSituations = situations.length;
    const cabinetCoverage = new Map<string, number>();
    const impactedEntities = new Map<string, number>();
    let missingPositiveCount = 0;
    let missingNegativeCount = 0;

    situationRows.forEach((row) => {
      // Track cabinet involvement counts
      if (row.cabinetInvolved !== "None") {
        row.cabinetInvolved.split(", ").forEach((id: string) => {
          cabinetCoverage.set(id, (cabinetCoverage.get(id) || 0) + 1);
        });
      }

      // Track entity impacts counts
      if (row.entitiesAffected !== "None") {
        // Parse entity impacts format: "entity:(+1/-2/=3)"
        const entityMatches = row.entitiesAffected.match(/(\w+):\(/g);
        if (entityMatches) {
          entityMatches.forEach((match) => {
            const entityId = match.replace(":(", "");
            impactedEntities.set(
              entityId,
              (impactedEntities.get(entityId) || 0) + 1
            );
          });
        }
      }

      // Count missing outcomes based on outcome text analysis
      if (
        row.outcomeBalance === "No outcomes" ||
        !row.outcomeBalance.includes("(+")
      ) {
        missingPositiveCount++;
      }
      if (
        row.outcomeBalance === "No outcomes" ||
        !row.outcomeBalance.includes("(-")
      ) {
        missingNegativeCount++;
      }
    });

    return {
      type,
      situations: situationRows,
      summary: {
        totalSituations,
        missingPositiveCount,
        missingNegativeCount,
        entityCoverage: {
          cabinet: cabinetCoverage,
          impactedEntities,
        },
        commonIssues: [], // Empty since we're not tracking individual issues
      },
    };
  });
}

/**
 * Generates markdown table for a situation type
 */
function generateMarkdownTable(typeBalance: SituationTypeBalance): string {
  const { type, situations, summary } = typeBalance;

  let markdown = `# ${
    type.charAt(0).toUpperCase() + type.slice(1).replace("_", " ")
  } Situations\n\n`;

  // Summary section
  markdown += `## Summary\n\n`;
  markdown += `- **Total Situations:** ${summary.totalSituations}\n`;
  markdown += `- **Missing Positive Outcomes:** ${summary.missingPositiveCount} situations\n`;
  markdown += `- **Missing Negative Outcomes:** ${summary.missingNegativeCount} situations\n`;

  // Cabinet coverage with counts
  const cabinetList = Array.from(summary.entityCoverage.cabinet.entries())
    .map(([id, count]) => `${id}(${count})`)
    .join(", ");
  markdown += `- **Cabinet Coverage:** ${cabinetList || "None"}\n`;

  // Impacted entities with counts
  const entitiesList = Array.from(
    summary.entityCoverage.impactedEntities.entries()
  )
    .map(([id, count]) => `${id}(${count})`)
    .join(", ");
  markdown += `- **Impacted Entities:** ${entitiesList || "None"}\n`;

  markdown += `\n## Situation Balance Details\n\n`;

  // Main balance table - updated columns
  markdown += `| Name | Description | Cabinet Involved | Preference Diversity | Entities Affected | Outcome Balance |\n`;
  markdown += `|------|-------------|------------------|---------------------|-------------------|----------------|\n`;

  // Table rows
  situations.forEach((row) => {
    markdown += `| ${row.name} | ${row.description} | ${row.cabinetInvolved} | ${row.preferenceDiversity} | ${row.entitiesAffected} | ${row.outcomeBalance} |\n`;
  });

  return markdown;
}

/**
 * Main analysis function
 */
export function runSituationBalanceAnalysis(): void {
  console.log("Analyzing situation balance...");

  const outputDir = join(process.cwd(), "analysis-output", "situations");
  mkdirSync(outputDir, { recursive: true });

  const typeBalances = analyzeSituationsByType();

  typeBalances.forEach((typeBalance) => {
    const markdown = generateMarkdownTable(typeBalance);
    const filename = `${typeBalance.type.replace("_", "-")}.md`;
    const filepath = join(outputDir, filename);

    writeFileSync(filepath, markdown);
    console.log(
      `📝 Generated ${filename} with ${typeBalance.situations.length} situations`
    );
  });

  // Generate overall summary
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

  let summaryMarkdown = `# Situation Balance Analysis Summary\n\n`;
  summaryMarkdown += `**Total Situations:** ${totalSituations}\n`;
  summaryMarkdown += `**Situations Missing Positive Outcomes:** ${totalMissingPositive}\n`;
  summaryMarkdown += `**Situations Missing Negative Outcomes:** ${totalMissingNegative}\n\n`;

  summaryMarkdown += `## Balance Priority\n\n`;
  summaryMarkdown += `1. **High Priority:** Add positive outcomes to ${totalMissingPositive} situations\n`;
  summaryMarkdown += `2. **Medium Priority:** Add negative outcomes to ${totalMissingNegative} situations\n\n`;

  summaryMarkdown += `## Situations by Type\n\n`;

  typeBalances.forEach((tb) => {
    const issues =
      tb.summary.missingPositiveCount + tb.summary.missingNegativeCount;
    summaryMarkdown += `- **${tb.type}:** ${tb.summary.totalSituations} situations, ${issues} with missing outcome issues\n`;
  });

  writeFileSync(join(outputDir, "README.md"), summaryMarkdown);

  console.log(`✅ Analysis complete! Check ${outputDir} for detailed reports.`);
}
