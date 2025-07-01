import { situationsData } from "~/lib/data/situations";
import { SituationType } from "~/types";
import { getMetadataSection } from "../util/file-utils";

export interface SituationDataAnalysis {
  totalSituations: number;
  situationTypeDistribution: Record<SituationType, number>;
  situationTypePercentages: Record<SituationType, number>;
}

/**
 * Analyzes situation type distribution
 */
export function analyzeSituationData(): SituationDataAnalysis {
  const situationTypeDistribution: Partial<Record<SituationType, number>> = {};
  const situationTypePercentages: Partial<Record<SituationType, number>> = {};

  // Initialize all situation types
  Object.values(SituationType).forEach((type) => {
    situationTypeDistribution[type] = 0;
  });

  // Count situations by type
  situationsData.forEach((situation) => {
    const currentCount = situationTypeDistribution[situation.type] ?? 0;
    situationTypeDistribution[situation.type] = currentCount + 1;
  });

  // Calculate percentages
  Object.values(SituationType).forEach((type) => {
    const count = situationTypeDistribution[type]!; // We know this exists since we initialized it
    situationTypePercentages[type] = (count / situationsData.length) * 100;
  });

  return {
    totalSituations: situationsData.length,
    situationTypeDistribution: situationTypeDistribution as Record<
      SituationType,
      number
    >,
    situationTypePercentages: situationTypePercentages as Record<
      SituationType,
      number
    >,
  };
}

/**
 * Generates markdown content for situation data analysis
 */
export function generateSituationDataMarkdown(): string {
  const data = analyzeSituationData();
  let content = getMetadataSection(situationsData.length);

  content += `## Situation Types Distribution

### Overview
- **Total Situations:** ${data.totalSituations}

### Distribution by Type
`;

  // Sort by count (descending)
  const sortedTypes = Object.entries(data.situationTypeDistribution).sort(
    ([, a], [, b]) => b - a
  );

  sortedTypes.forEach(([type, count]) => {
    const percentage = data.situationTypePercentages[type as SituationType];
    content += `- **${type}:** ${count} situations (${percentage.toFixed(
      1
    )}%)\n`;
  });

  content += `\n### Target Distribution Analysis
`;

  // Calculate ideal distribution (equal distribution would be ~14.3% each for 7 types)
  const idealPercentage = 100 / Object.keys(SituationType).length;

  sortedTypes.forEach(([type, count]) => {
    const percentage = data.situationTypePercentages[type as SituationType];
    const variance = percentage - idealPercentage;
    const status =
      Math.abs(variance) < 3 ? "✅" : Math.abs(variance) < 7 ? "⚠️" : "🚨";

    content += `- **${type}:** ${percentage.toFixed(1)}% (${
      variance > 0 ? "+" : ""
    }${variance.toFixed(1)}% from ideal) ${status}\n`;
  });

  content += `\n*Target: ~${idealPercentage.toFixed(
    1
  )}% per type for balanced distribution*\n`;

  return content;
}
