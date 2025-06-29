import { situationsData } from "~/lib/data/situations/v1";
import { getMetadataSection } from "../util/file-utils";

export interface OutcomesAnalysis {
  totalOutcomes: number;
  totalSituations: number;
  averageOutcomesPerSituation: number;

  // Approval analysis
  outcomesWithApproval: number;
  approvalPercentage: number;
  positiveApprovalOutcomes: number;
  negativeApprovalOutcomes: number;

  // Outcome distribution
  situationsWithOutcomes: number;
  situationsWithoutOutcomes: number;

  // Positive/Negative combinations
  positiveOnlyOutcomes: number;
  negativeOnlyOutcomes: number;
  mixedOutcomes: number;
  neutralOutcomes: number;
}

/**
 * Analyzes outcomes data including approval distribution and positive/negative combinations
 */
export function analyzeOutcomesData(): OutcomesAnalysis {
  let totalOutcomes = 0;
  let outcomesWithApproval = 0;
  let positiveApprovalOutcomes = 0;
  let negativeApprovalOutcomes = 0;
  let situationsWithOutcomes = 0;
  let positiveOnlyOutcomes = 0;
  let negativeOnlyOutcomes = 0;
  let mixedOutcomes = 0;
  let neutralOutcomes = 0;

  situationsData.forEach((situation) => {
    let situationHasOutcomes = false;

    if (situation.content.outcomes && situation.content.outcomes.length > 0) {
      situationHasOutcomes = true;
      situationsWithOutcomes++;

      situation.content.outcomes.forEach((outcome) => {
        if (outcome) {
          totalOutcomes++;

          // Analyze approval changes
          let hasApprovalChanges = false;
          let positiveChanges = 0;
          let negativeChanges = 0;

          // Check subgroup approval changes from consequences
          if (outcome.consequences?.approvalChanges?.subgroups) {
            Object.values(
              outcome.consequences.approvalChanges.subgroups
            ).forEach((change) => {
              if (change !== undefined && change !== 0) {
                hasApprovalChanges = true;
                outcomesWithApproval++;

                if (change > 0) {
                  positiveChanges++;
                  positiveApprovalOutcomes++;
                } else {
                  negativeChanges++;
                  negativeApprovalOutcomes++;
                }
              }
            });
          }

          // Categorize outcome type
          if (positiveChanges > 0 && negativeChanges > 0) {
            mixedOutcomes++;
          } else if (positiveChanges > 0 && negativeChanges === 0) {
            positiveOnlyOutcomes++;
          } else if (positiveChanges === 0 && negativeChanges > 0) {
            negativeOnlyOutcomes++;
          } else {
            neutralOutcomes++;
          }
        }
      });
    }
  });

  return {
    totalOutcomes,
    totalSituations: situationsData.length,
    averageOutcomesPerSituation: totalOutcomes / situationsData.length,
    outcomesWithApproval,
    approvalPercentage:
      totalOutcomes > 0 ? (outcomesWithApproval / totalOutcomes) * 100 : 0,
    positiveApprovalOutcomes,
    negativeApprovalOutcomes,
    situationsWithOutcomes,
    situationsWithoutOutcomes: situationsData.length - situationsWithOutcomes,
    positiveOnlyOutcomes,
    negativeOnlyOutcomes,
    mixedOutcomes,
    neutralOutcomes,
  };
}

/**
 * Generates markdown content for outcomes analysis
 */
export function generateOutcomesMarkdown(): string {
  const data = analyzeOutcomesData();
  let content = getMetadataSection(situationsData.length);

  content += `## Outcomes Analysis

### Overview
- **Total Outcomes:** ${data.totalOutcomes}
- **Total Situations:** ${data.totalSituations}
- **Average Outcomes per Situation:** ${data.averageOutcomesPerSituation.toFixed(
    2
  )}
- **Situations with Outcomes:** ${data.situationsWithOutcomes} of ${
    data.totalSituations
  }
- **Situations without Outcomes:** ${data.situationsWithoutOutcomes}

### Approval Impact Analysis
- **Outcomes with Approval Changes:** ${data.outcomesWithApproval}
- **Approval Impact Percentage:** ${data.approvalPercentage.toFixed(1)}%
- **Positive Approval Changes:** ${data.positiveApprovalOutcomes}
- **Negative Approval Changes:** ${data.negativeApprovalOutcomes}

### Outcome Type Distribution
`;

  const totalCategorizedOutcomes =
    data.positiveOnlyOutcomes +
    data.negativeOnlyOutcomes +
    data.mixedOutcomes +
    data.neutralOutcomes;

  if (totalCategorizedOutcomes > 0) {
    const positiveOnlyPercentage =
      (data.positiveOnlyOutcomes / totalCategorizedOutcomes) * 100;
    const negativeOnlyPercentage =
      (data.negativeOnlyOutcomes / totalCategorizedOutcomes) * 100;
    const mixedPercentage =
      (data.mixedOutcomes / totalCategorizedOutcomes) * 100;
    const neutralPercentage =
      (data.neutralOutcomes / totalCategorizedOutcomes) * 100;

    content += `- **Positive Only:** ${
      data.positiveOnlyOutcomes
    } outcomes (${positiveOnlyPercentage.toFixed(1)}%)
- **Negative Only:** ${
      data.negativeOnlyOutcomes
    } outcomes (${negativeOnlyPercentage.toFixed(1)}%)
- **Mixed (Both):** ${data.mixedOutcomes} outcomes (${mixedPercentage.toFixed(
      1
    )}%)
- **Neutral (No Changes):** ${
      data.neutralOutcomes
    } outcomes (${neutralPercentage.toFixed(1)}%)
`;
  }

  content += `\n### Balance Analysis
`;

  // Calculate positive/negative ratio
  const totalApprovalChanges =
    data.positiveApprovalOutcomes + data.negativeApprovalOutcomes;
  if (totalApprovalChanges > 0) {
    const positiveRatio =
      data.positiveApprovalOutcomes / data.negativeApprovalOutcomes;
    const positivePercentage =
      (data.positiveApprovalOutcomes / totalApprovalChanges) * 100;
    const negativePercentage =
      (data.negativeApprovalOutcomes / totalApprovalChanges) * 100;

    content += `- **Positive/Negative Ratio:** ${positiveRatio.toFixed(2)}
- **Positive Percentage:** ${positivePercentage.toFixed(1)}%
- **Negative Percentage:** ${negativePercentage.toFixed(1)}%
`;

    // Balance assessment
    const balanceStatus =
      positiveRatio >= 0.8 && positiveRatio <= 1.25
        ? "✅ Balanced"
        : positiveRatio < 0.8
        ? "🚨 Too Negative"
        : "⚠️ Too Positive";

    content += `- **Balance Assessment:** ${balanceStatus}
`;
  }

  content += `\n### Coverage Analysis
- **Outcomes per Situation:** ${data.averageOutcomesPerSituation.toFixed(
    2
  )} average
- **Approval Impact Rate:** ${data.approvalPercentage.toFixed(
    1
  )}% of outcomes have approval changes
`;

  // Coverage assessment
  const coverageStatus =
    data.approvalPercentage >= 70
      ? "✅ Good Coverage"
      : data.approvalPercentage >= 50
      ? "⚠️ Moderate Coverage"
      : "🚨 Low Coverage";

  content += `- **Coverage Assessment:** ${coverageStatus}

*Target: 70%+ outcomes should have approval impacts for meaningful gameplay*
`;

  return content;
}
