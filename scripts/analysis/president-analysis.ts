import { situationsData } from "~/lib/data/situations";
import { AnswerType } from "~/types";
import { getAllQuestionsFromExchange } from "~/lib/db/helpers/exchangeApi";

export interface PresidentAnalysisData {
  positiveRelationships: number;
  negativeRelationships: number;
  totalRelationships: number;
  ratio: string;
  preferenceVariety: number;
  preferenceTypes: AnswerType[];
}

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
      const allQuestions = getAllQuestionsFromExchange(exchange.content);
      allQuestions.forEach((question) => {
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
    totalRelationships > 0
      ? `${positiveRelationships}:${negativeRelationships}`
      : "0:0";

  return {
    positiveRelationships,
    negativeRelationships,
    totalRelationships,
    ratio,
    preferenceVariety: answerTypes.size,
    preferenceTypes: Array.from(answerTypes).sort(),
  };
}

export function generatePresidentMarkdown(): string {
  const data = analyzePresidentData();

  return `# President Analysis

## Relationship Impact Balance
- **Positive Impacts**: ${data.positiveRelationships}
- **Negative Impacts**: ${data.negativeRelationships}
- **Total Impacts**: ${data.totalRelationships}
- **Ratio**: ${data.ratio}

## Preference Variety
- **Unique Answer Types**: ${data.preferenceVariety}
- **Types Used**: ${data.preferenceTypes.join(", ")}

## Analysis
${
  data.totalRelationships === 0
    ? "⚠️ No presidential relationship impacts found in any answers."
    : data.positiveRelationships === data.negativeRelationships
    ? "✅ Perfect balance between positive and negative presidential impacts."
    : data.positiveRelationships > data.negativeRelationships
    ? "⚠️ More positive than negative presidential impacts - may be too easy to maintain relationship."
    : "⚠️ More negative than positive presidential impacts - may be too difficult to maintain relationship."
}

${
  data.preferenceVariety < 3
    ? "⚠️ Limited answer type variety in presidential preferences - consider diversifying."
    : data.preferenceVariety > 5
    ? "✅ Good variety in presidential answer type preferences."
    : "✅ Reasonable variety in presidential answer type preferences."
}
`;
}
