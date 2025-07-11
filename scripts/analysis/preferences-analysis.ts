import { situationsData } from "~/lib/data/situations";
import { AnswerType } from "~/types";
import { getMetadataSection } from "../util/file-utils";

export interface PreferencesAnalysis {
  totalPreferences: number;
  totalSituations: number;
  averagePreferencesPerSituation: number;

  // Distribution by answer type
  preferencesByAnswerType: Record<string, number>;
  preferencePercentagesByAnswerType: Record<string, number>;

  // Authorized analysis
  authorizedPreferences: number;
  authorizedPercentage: number;
  authorizedByAnswerType: Record<string, number>;
  authorizedPercentageByAnswerType: Record<string, number>;

  // Per situation breakdown
  situationsWithPreferences: number;
  situationsWithoutPreferences: number;
  averageAuthorizedPerSituation: number;
}

/**
 * Analyzes preferences data including distribution and authorized ratios
 */
export function analyzePreferencesData(): PreferencesAnalysis {
  let totalPreferences = 0;
  let authorizedPreferences = 0;
  let situationsWithPreferences = 0;
  let totalAuthorizedInSituations = 0;

  const preferencesByAnswerType: Record<string, number> = {};
  const authorizedByAnswerType: Record<string, number> = {};
  const preferencePercentagesByAnswerType: Record<string, number> = {};
  const authorizedPercentageByAnswerType: Record<string, number> = {};

  // Initialize answer type tracking
  Object.values(AnswerType).forEach((answerType) => {
    preferencesByAnswerType[answerType] = 0;
    authorizedByAnswerType[answerType] = 0;
  });

  situationsData.forEach((situation) => {
    let situationPreferenceCount = 0;
    let situationAuthorizedCount = 0;

    // Count preferences in this situation - access from content.preferences
    if (situation.content.preferences) {
      const preferences = situation.content.preferences;

      // Count president preference
      if (preferences.president) {
        totalPreferences++;
        situationPreferenceCount++;
        preferencesByAnswerType[preferences.president.answerType]++;

        if (preferences.president.answerType === AnswerType.Authorized) {
          authorizedPreferences++;
          situationAuthorizedCount++;
          authorizedByAnswerType[AnswerType.Authorized]++;
        }
      }

      // Count cabinet preferences
      if (preferences.cabinet) {
        Object.values(preferences.cabinet).forEach((cabinetPref) => {
          if (cabinetPref?.preference) {
            totalPreferences++;
            situationPreferenceCount++;
            preferencesByAnswerType[cabinetPref.preference.answerType]++;

            if (cabinetPref.preference.answerType === AnswerType.Authorized) {
              authorizedPreferences++;
              situationAuthorizedCount++;
              authorizedByAnswerType[AnswerType.Authorized]++;
            }
          }
        });
      }
    }

    if (situationPreferenceCount > 0) {
      situationsWithPreferences++;
      totalAuthorizedInSituations += situationAuthorizedCount;
    }
  });

  // Calculate percentages
  Object.entries(preferencesByAnswerType).forEach(([answerType, count]) => {
    preferencePercentagesByAnswerType[answerType as string] =
      totalPreferences > 0 ? (count / totalPreferences) * 100 : 0;
    authorizedPercentageByAnswerType[answerType as string] =
      count > 0
        ? (authorizedByAnswerType[answerType as string] / count) * 100
        : 0;
  });

  return {
    totalPreferences,
    totalSituations: situationsData.length,
    averagePreferencesPerSituation: totalPreferences / situationsData.length,
    preferencesByAnswerType,
    preferencePercentagesByAnswerType,
    authorizedPreferences,
    authorizedPercentage:
      totalPreferences > 0
        ? (authorizedPreferences / totalPreferences) * 100
        : 0,
    authorizedByAnswerType,
    authorizedPercentageByAnswerType,
    situationsWithPreferences,
    situationsWithoutPreferences:
      situationsData.length - situationsWithPreferences,
    averageAuthorizedPerSituation:
      situationsWithPreferences > 0
        ? totalAuthorizedInSituations / situationsWithPreferences
        : 0,
  };
}

/**
 * Generates markdown content for preferences analysis
 */
export function generatePreferencesMarkdown(): string {
  const data = analyzePreferencesData();
  let content = getMetadataSection(situationsData.length);

  content += `## Preferences Analysis

### Overview
- **Total Preferences:** ${data.totalPreferences}
- **Total Situations:** ${data.totalSituations}
- **Average Preferences per Situation:** ${data.averagePreferencesPerSituation.toFixed(
    2
  )}
- **Situations with Preferences:** ${data.situationsWithPreferences} of ${
    data.totalSituations
  }
- **Situations without Preferences:** ${data.situationsWithoutPreferences}

### Distribution by Answer Type
`;

  // Sort by count (descending)
  const sortedAnswerTypes = Object.entries(data.preferencesByAnswerType).sort(
    ([, a], [, b]) => b - a
  );

  sortedAnswerTypes.forEach(([answerType, count]) => {
    const percentage =
      data.preferencePercentagesByAnswerType[answerType as string];
    content += `- **${answerType}:** ${count} preferences (${percentage.toFixed(
      1
    )}%)\n`;
  });

  content += `\n### Authorized Answer Analysis
- **Total Authorized Preferences:** ${data.authorizedPreferences}
- **Authorized Percentage:** ${data.authorizedPercentage.toFixed(1)}%
- **Average Authorized per Situation (with preferences):** ${data.averageAuthorizedPerSituation.toFixed(
    2
  )}

### Authorized Ratio by Answer Type
`;

  sortedAnswerTypes.forEach(([answerType, count]) => {
    if (count > 0) {
      const authorizedCount = data.authorizedByAnswerType[answerType as string];
      const authorizedRatio = authorizedCount / count;
      const status =
        answerType === AnswerType.Authorized
          ? "🔒"
          : authorizedRatio === 0
          ? "✅"
          : "⚠️";

      content += `- **${answerType}:** ${authorizedCount}/${count} (${(
        authorizedRatio * 100
      ).toFixed(1)}%) ${status}\n`;
    }
  });

  content += `\n### Balance Analysis
`;

  // Calculate ideal distribution (equal distribution across non-authorized types)
  const nonAuthorizedTypes = Object.values(AnswerType).filter(
    (type) => type !== AnswerType.Authorized
  );
  const idealPercentage = 100 / nonAuthorizedTypes.length;

  sortedAnswerTypes.forEach(([answerType, count]) => {
    if (answerType !== AnswerType.Authorized) {
      const percentage =
        data.preferencePercentagesByAnswerType[answerType as string];
      const variance = percentage - idealPercentage;
      const status =
        Math.abs(variance) < 5 ? "✅" : Math.abs(variance) < 10 ? "⚠️" : "🚨";

      content += `- **${answerType}:** ${percentage.toFixed(1)}% (${
        variance > 0 ? "+" : ""
      }${variance.toFixed(1)}% from ideal) ${status}\n`;
    }
  });

  content += `\n*Target: ~${idealPercentage.toFixed(
    1
  )}% per non-authorized type for balanced distribution*\n`;

  return content;
}
