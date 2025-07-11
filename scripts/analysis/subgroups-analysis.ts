import { situationsData } from "~/lib/data/situations";
import { SubgroupStaticId, SituationType } from "~/types";
import { getMetadataSection } from "../util/file-utils";

export interface SubgroupAnalysis {
  approvalPositive: number;
  approvalNegative: number;
  approvalTotal: number;
  situationTypeDistribution: Record<SituationType, number>;
}

export type SubgroupAnalysisData = Record<string, SubgroupAnalysis>;

/**
 * Analyzes subgroup-related data from all situations
 */
export function analyzeSubgroupData(): SubgroupAnalysisData {
  const subgroupAnalysis: Record<string, SubgroupAnalysis> = {};

  // Initialize analysis for each subgroup
  Object.values(SubgroupStaticId).forEach((subgroupId) => {
    subgroupAnalysis[subgroupId] = {
      approvalPositive: 0,
      approvalNegative: 0,
      approvalTotal: 0,
      situationTypeDistribution: {} as Record<SituationType, number>,
    };
  });

  situationsData.forEach((situation) => {
    // Analyze approval impacts from outcomes
    situation.content.outcomes.forEach((outcome) => {
      if (outcome.consequences.approvalChanges.subgroups) {
        Object.entries(outcome.consequences.approvalChanges.subgroups).forEach(
          ([subgroupId, weight]) => {
            const subgroup = subgroupAnalysis[subgroupId as SubgroupStaticId];
            if (subgroup) {
              subgroup.approvalTotal++;
              const numWeight = Number(weight);
              if (numWeight > 0) {
                subgroup.approvalPositive++;
              } else if (numWeight < 0) {
                subgroup.approvalNegative++;
              }

              // Count situation type distribution
              if (!subgroup.situationTypeDistribution[situation.type]) {
                subgroup.situationTypeDistribution[situation.type] = 0;
              }
              subgroup.situationTypeDistribution[situation.type]++;
            }
          }
        );
      }
    });
  });

  return subgroupAnalysis;
}

/**
 * Generates markdown content for subgroups analysis
 */
export function generateSubgroupsMarkdown(): string {
  const subgroupData = analyzeSubgroupData();
  let content = getMetadataSection(situationsData.length);

  content += `## Subgroups

### General Distribution
- **Total Approval Changes:** ${Object.values(subgroupData).reduce(
    (sum: number, subgroup) => sum + subgroup.approvalTotal,
    0
  )}

`;

  Object.entries(subgroupData).forEach(([subgroupId, data]) => {
    const approvalRatio =
      data.approvalNegative > 0
        ? (data.approvalPositive / data.approvalNegative).toFixed(2)
        : "N/A";

    const approvalChangeRate = (
      (data.approvalPositive - data.approvalNegative) /
      situationsData.length
    ).toFixed(2);

    content += `### ${subgroupId.toUpperCase()}

#### Approval Changes
- **Positive Count:** ${data.approvalPositive}
- **Negative Count:** ${data.approvalNegative}
- **Positive/Negative Ratio:** ${approvalRatio}
- **Total Changes:** ${data.approvalTotal}
- **Change Rate:** ${approvalChangeRate} net changes per situation

#### Situation Types
`;
    // Add ALL situation types, even if 0%
    const allSituationTypes = Object.values(SituationType);
    allSituationTypes.forEach((situationType) => {
      const count = data.situationTypeDistribution[situationType] || 0;
      const percentage =
        data.approvalTotal > 0
          ? ((count / data.approvalTotal) * 100).toFixed(1)
          : "0.0";
      content += `- ${situationType}: ${count} (${percentage}%)\n`;
    });

    content += `\n`;
  });

  return content;
}
