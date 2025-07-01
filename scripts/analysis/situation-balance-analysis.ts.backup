import { writeFileSync, mkdirSync } from "fs";
import { join } from "path";
import { situationsData } from "~/lib/data/situations/v1";
import {
  SituationType,
  AnswerType,
  CabinetStaticId,
  SubgroupStaticId,
} from "~/types";

interface SituationBalanceRow {
  name: string;
  cabinetInvolved: string;
  subgroupsAffected: string;
  authorizedOn: string;
  outcomeBalance: string;
  preferenceDiversity: string;
  balanceIssues: string[];
}

interface SituationTypeBalance {
  type: SituationType;
  situations: SituationBalanceRow[];
  summary: {
    totalSituations: number;
    avgExchanges: number;
    avgQuestions: number;
    authorizedCount: number;
    missingPositiveCount: number;
    missingNegativeCount: number;
    entityCoverage: {
      cabinet: Set<string>;
      subgroups: Set<string>;
    };
    commonIssues: string[];
  };
}

/**
 * Analyzes a single situation for balance metrics
 */
function analyzeSituation(situation: any): SituationBalanceRow {
  const balanceIssues: string[] = [];

  // Exchange and question analysis for balance checking
  const exchangeCount = situation.exchanges.length;
  const allQuestions = situation.exchanges.flatMap((ex: any) =>
    Object.values(ex.content.questions)
  );
  const questionCount = allQuestions.length;
  const questionDepths = allQuestions.map((q: any) => q.depth);
  const maxQuestionDepth = Math.max(...questionDepths, 0);

  // Answer analysis
  const allAnswers = allQuestions.flatMap((q: any) => q.answers);
  let authorizedAnswers = 0;
  let authorizedOn = "None";

  // Entity involvement analysis
  const cabinetInvolved = new Set<string>();
  const subgroupsAffected = new Set<string>();

  allAnswers.forEach((answer: any) => {
    // Track authorized answers
    if (answer.type === AnswerType.Authorized) {
      authorizedAnswers++;
      // Find which entity this answer belongs to by checking impacts
      if (answer.impacts.president) {
        authorizedOn = "president";
      } else if (answer.impacts.cabinet) {
        const cabinetIds = Object.keys(answer.impacts.cabinet);
        if (cabinetIds.length > 0) {
          authorizedOn = cabinetIds[0]; // Take first cabinet member
        }
      }
    }

    // Track entity involvement
    if (answer.impacts.cabinet) {
      Object.keys(answer.impacts.cabinet).forEach((id) =>
        cabinetInvolved.add(id)
      );
    }
  });

  // Preference analysis
  const preferenceAnswerTypes = new Set<AnswerType>();
  const preferences = situation.content.preferences;

  // Check president preferences
  if (preferences.president) {
    preferenceAnswerTypes.add(preferences.president.answerType);
  }

  // Check cabinet preferences
  if (preferences.cabinet) {
    Object.entries(preferences.cabinet).forEach(
      ([cabinetId, cabinetPref]: [string, any]) => {
        if (cabinetPref?.preference) {
          preferenceAnswerTypes.add(cabinetPref.preference.answerType);
        }
      }
    );
  }

  // Outcome analysis
  const outcomes = situation.content.outcomes;
  let positiveOutcomes = 0;
  let negativeOutcomes = 0;
  let mixedOutcomes = 0;

  outcomes.forEach((outcome: any) => {
    let hasPositive = false;
    let hasNegative = false;

    // Check cabinet approval changes
    if (outcome.consequences.approvalChanges.cabinet) {
      Object.entries(outcome.consequences.approvalChanges.cabinet).forEach(
        ([id, weight]: [string, any]) => {
          if (weight !== undefined) {
            subgroupsAffected.add(id); // Cabinet members affect subgroups
            if (weight > 0) hasPositive = true;
            if (weight < 0) hasNegative = true;
          }
        }
      );
    }

    // Check subgroup approval changes
    if (outcome.consequences.approvalChanges.subgroups) {
      Object.entries(outcome.consequences.approvalChanges.subgroups).forEach(
        ([id, weight]: [string, any]) => {
          if (weight !== undefined) {
            subgroupsAffected.add(id);
            if (weight > 0) hasPositive = true;
            if (weight < 0) hasNegative = true;
          }
        }
      );
    }

    if (hasPositive && hasNegative) {
      mixedOutcomes++;
    } else if (hasPositive) {
      positiveOutcomes++;
    } else if (hasNegative) {
      negativeOutcomes++;
    }
  });

  // Balance issue detection
  if (exchangeCount < 2 || exchangeCount > 4) {
    balanceIssues.push(`Invalid exchange count: ${exchangeCount}`);
  }
  if (authorizedAnswers > 0) {
    balanceIssues.push(`${authorizedAnswers} Authorized`);
  }
  if (positiveOutcomes === 0) {
    balanceIssues.push("No positive outcomes");
  }
  if (negativeOutcomes === 0) {
    balanceIssues.push("No negative outcomes");
  }
  if (cabinetInvolved.size === 0) {
    balanceIssues.push("No cabinet involvement");
  }
  if (maxQuestionDepth === 0 && questionCount > 2) {
    balanceIssues.push("All depth 0");
  }

  // Create formatted strings for display
  const outcomeBalance = `${positiveOutcomes}P/${negativeOutcomes}N/${mixedOutcomes}M`;
  const preferenceDiversityDisplay =
    preferenceAnswerTypes.size > 3
      ? `${preferenceAnswerTypes.size} types`
      : Array.from(preferenceAnswerTypes).join(", ") || "None";

  return {
    name: situation.title,
    cabinetInvolved: Array.from(cabinetInvolved).join(", ") || "None",
    subgroupsAffected: Array.from(subgroupsAffected).join(", ") || "None",
    authorizedOn,
    outcomeBalance,
    preferenceDiversity: preferenceDiversityDisplay,
    balanceIssues,
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
    const totalExchanges = situations.reduce(
      (sum: number, s: any) => sum + s.exchanges.length,
      0
    );
    const totalQuestions = situations.reduce((sum: number, s: any) => {
      return (
        sum +
        s.exchanges.reduce(
          (qSum: number, ex: any) =>
            qSum + Object.keys(ex.content.questions).length,
          0
        )
      );
    }, 0);

    const avgExchanges = totalExchanges / totalSituations;
    const avgQuestions = totalQuestions / totalSituations;

    const cabinetCoverage = new Set<string>();
    const subgroupCoverage = new Set<string>();
    let authorizedCount = 0;
    let missingPositiveCount = 0;
    let missingNegativeCount = 0;

    situationRows.forEach((row) => {
      if (row.cabinetInvolved !== "None") {
        row.cabinetInvolved
          .split(", ")
          .forEach((id) => cabinetCoverage.add(id));
      }
      if (row.subgroupsAffected !== "None") {
        row.subgroupsAffected
          .split(", ")
          .forEach((id) => subgroupCoverage.add(id));
      }

      if (row.authorizedOn !== "None") authorizedCount++;
      if (row.balanceIssues.includes("No positive outcomes"))
        missingPositiveCount++;
      if (row.balanceIssues.includes("No negative outcomes"))
        missingNegativeCount++;
    });

    // Find common issues
    const issueFrequency = new Map<string, number>();
    situationRows.forEach((row) => {
      row.balanceIssues.forEach((issue) => {
        issueFrequency.set(issue, (issueFrequency.get(issue) || 0) + 1);
      });
    });

    const commonIssues: string[] = [];
    issueFrequency.forEach((count, issue) => {
      if (count >= Math.ceil(totalSituations * 0.3)) {
        // 30% threshold
        commonIssues.push(`${issue} (${count}/${totalSituations})`);
      }
    });

    return {
      type,
      situations: situationRows,
      summary: {
        totalSituations,
        avgExchanges: Math.round(avgExchanges * 100) / 100,
        avgQuestions: Math.round(avgQuestions * 100) / 100,
        authorizedCount,
        missingPositiveCount,
        missingNegativeCount,
        entityCoverage: {
          cabinet: cabinetCoverage,
          subgroups: subgroupCoverage,
        },
        commonIssues,
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
  markdown += `- **Average Exchanges:** ${summary.avgExchanges}\n`;
  markdown += `- **Average Questions:** ${summary.avgQuestions}\n`;
  markdown += `- **Authorized Answers:** ${summary.authorizedCount} situations\n`;
  markdown += `- **Missing Positive Outcomes:** ${summary.missingPositiveCount} situations\n`;
  markdown += `- **Missing Negative Outcomes:** ${summary.missingNegativeCount} situations\n`;
  markdown += `- **Cabinet Coverage:** ${Array.from(
    summary.entityCoverage.cabinet
  ).join(", ")}\n`;
  markdown += `- **Subgroup Coverage:** ${Array.from(
    summary.entityCoverage.subgroups
  ).join(", ")}\n`;

  if (summary.commonIssues.length > 0) {
    markdown += `\n### Common Issues\n`;
    summary.commonIssues.forEach((issue) => {
      markdown += `- ${issue}\n`;
    });
  }

  markdown += `\n## Situation Balance Details\n\n`;

  // Main balance table
  markdown += `| Name | Cabinet Involved | Subgroups Affected | Authorized On | Outcome Balance | Preference Diversity | Balance Issues |\n`;
  markdown += `|------|------------------|-------------------|---------------|-----------------|---------------------|----------------|\n`;

  // Table rows
  situations.forEach((row) => {
    const issuesStr =
      row.balanceIssues.length > 0 ? row.balanceIssues.join("; ") : "✅ None";

    markdown += `| ${row.name} | ${row.cabinetInvolved} | ${row.subgroupsAffected} | ${row.authorizedOn} | ${row.outcomeBalance} | ${row.preferenceDiversity} | ${issuesStr} |\n`;
  });

  return markdown;
}

/**
 * Main analysis function
 */
export function runSituationBalanceAnalysis(): void {
  console.log("🔍 Analyzing situation balance...");

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
  const totalAuthorized = typeBalances.reduce(
    (sum, tb) => sum + tb.summary.authorizedCount,
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
  summaryMarkdown += `**Situations with Authorized Answers:** ${totalAuthorized}\n`;
  summaryMarkdown += `**Situations Missing Positive Outcomes:** ${totalMissingPositive}\n`;
  summaryMarkdown += `**Situations Missing Negative Outcomes:** ${totalMissingNegative}\n\n`;

  summaryMarkdown += `## Balance Priority\n\n`;
  summaryMarkdown += `1. **High Priority:** Remove ${totalAuthorized} Authorized answers\n`;
  summaryMarkdown += `2. **High Priority:** Add positive outcomes to ${totalMissingPositive} situations\n`;
  summaryMarkdown += `3. **Medium Priority:** Add negative outcomes to ${totalMissingNegative} situations\n\n`;

  summaryMarkdown += `## Situations by Type\n\n`;

  typeBalances.forEach((tb) => {
    const issues =
      tb.summary.authorizedCount +
      tb.summary.missingPositiveCount +
      tb.summary.missingNegativeCount;
    summaryMarkdown += `- **${tb.type}:** ${tb.summary.totalSituations} situations, ${issues} with issues\n`;
  });

  writeFileSync(join(outputDir, "README.md"), summaryMarkdown);

  console.log(`✅ Analysis complete! Check ${outputDir} for detailed reports.`);
}
