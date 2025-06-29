import { situationsData } from "~/lib/data/situations/v1";
import { AnswerType } from "~/types";
import { getMetadataSection } from "../util/file-utils";

export interface PresidentAnalysisData {
  positiveRelationships: number;
  negativeRelationships: number;
  totalRelationships: number;
  ratio: string;
  preferenceVariety: number;
  preferenceTypes: AnswerType[];
}

/**
 * Analyzes president-related data from all situations
 */
export function analyzePresidentData(): PresidentAnalysisData {
  let positiveRelationships = 0;
  let negativeRelationships = 0;
  let totalRelationships = 0;
  const answerTypes = new Set<AnswerType>();

  situationsData.forEach((situation) => {
    // Check preferences
    if (situation.content.preferences.president) {
      answerTypes.add(situation.content.preferences.president.answerType);
    }

    // Check relationship impacts from answers
    situation.exchanges.forEach((exchange) => {
      Object.values(exchange.content.questions).forEach((question) => {
        question.answers.forEach((answer) => {
          if (answer.impacts.president?.weight !== undefined) {
            totalRelationships++;
            if (answer.impacts.president.weight > 0) {
              positiveRelationships++;
            } else if (answer.impacts.president.weight < 0) {
              negativeRelationships++;
            }
          }
        });
      });
    });
  });

  const ratio =
    negativeRelationships > 0
      ? (positiveRelationships / negativeRelationships).toFixed(2)
      : "N/A";

  return {
    positiveRelationships,
    negativeRelationships,
    totalRelationships,
    ratio,
    preferenceVariety: answerTypes.size,
    preferenceTypes: Array.from(answerTypes),
  };
}

/**
 * Generates markdown content for president analysis
 */
export function generatePresidentMarkdown(): string {
  const presidentData = analyzePresidentData();
  let content = getMetadataSection(situationsData.length);

  // President section
  const changeRate = (
    (presidentData.positiveRelationships -
      presidentData.negativeRelationships) /
    situationsData.length
  ).toFixed(2);

  content += `## President

### Relationship Changes
- **Positive Count:** ${presidentData.positiveRelationships}
- **Negative Count:** ${presidentData.negativeRelationships}
- **Positive/Negative Ratio:** ${presidentData.ratio}
- **Total Changes:** ${presidentData.totalRelationships}
- **Change Rate:** ${changeRate} net changes per situation

### Preference Variety
- **Types Used:** ${presidentData.preferenceVariety} of ${
    Object.keys(AnswerType).length - 1
  } (excluding authorized)
- **Answer Type Distribution:**
`;

  // Add president answer type percentages (excluding authorized)
  const presidentAnswerTypes = Object.values(AnswerType).filter(
    (type) => type !== AnswerType.Authorized
  );
  const totalPreferences = presidentData.preferenceTypes.length;

  presidentAnswerTypes.forEach((answerType) => {
    const count = presidentData.preferenceTypes.filter(
      (type) => type === answerType
    ).length;
    const percentage =
      totalPreferences > 0
        ? ((count / totalPreferences) * 100).toFixed(1)
        : "0.0";
    content += `  - ${answerType}: ${count} (${percentage}%)\n`;
  });

  return content;
}
