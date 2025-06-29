import { situationsData } from "~/lib/data/situations/v1";
import { AnswerType } from "~/types";
import { getMetadataSection } from "../util/file-utils";

export interface ExchangesAnalysis {
  // General stats
  totalExchanges: number;
  totalQuestions: number;
  totalAnswers: number;
  averageExchangesPerSituation: number;
  averageQuestionsPerExchange: number;
  averageAnswersPerQuestion: number;

  // Consequence analysis by answer type
  consequencesByAnswerType: Record<
    string,
    {
      totalAnswers: number;
      withConsequences: number;
      positiveConsequences: number;
      negativeConsequences: number;
      averageImpactEntities: number;
    }
  >;

  // Question depth analysis
  answersWithFollowups: number;
  averageDepthPercentage: number;
}

/**
 * Analyzes exchange data including questions, answers, and consequences
 */
export function analyzeExchangesData(): ExchangesAnalysis {
  let totalExchanges = 0;
  let totalQuestions = 0;
  let totalAnswers = 0;
  let answersWithFollowups = 0;

  const consequencesByAnswerType: Record<
    string,
    {
      totalAnswers: number;
      withConsequences: number;
      positiveConsequences: number;
      negativeConsequences: number;
      averageImpactEntities: number;
    }
  > = {};

  // Initialize answer type tracking
  Object.values(AnswerType).forEach((answerType) => {
    consequencesByAnswerType[answerType] = {
      totalAnswers: 0,
      withConsequences: 0,
      positiveConsequences: 0,
      negativeConsequences: 0,
      averageImpactEntities: 0,
    };
  });

  situationsData.forEach((situation) => {
    totalExchanges += situation.exchanges.length;

    situation.exchanges.forEach((exchange) => {
      const questions = Object.values(exchange.content.questions);
      totalQuestions += questions.length;

      questions.forEach((question) => {
        totalAnswers += question.answers.length;

        // Analyze each answer
        question.answers.forEach((answer) => {
          const answerType = answer.type;

          // Safety check: ensure we have this answer type in our tracking
          if (!consequencesByAnswerType[answerType]) {
            console.warn(`Unknown answer type found: ${answerType}`);
            consequencesByAnswerType[answerType] = {
              totalAnswers: 0,
              withConsequences: 0,
              positiveConsequences: 0,
              negativeConsequences: 0,
              averageImpactEntities: 0,
            };
          }

          const stats = consequencesByAnswerType[answerType];
          stats.totalAnswers++;

          // Check for follow-ups
          if (answer.followUpId) {
            answersWithFollowups++;
          }

          // Count consequences
          let hasConsequences = false;
          let positiveCount = 0;
          let negativeCount = 0;
          let impactEntities = 0;

          // Check president impacts
          if (answer.impacts.president?.weight !== undefined) {
            hasConsequences = true;
            impactEntities++;
            if (answer.impacts.president.weight > 0) positiveCount++;
            else if (answer.impacts.president.weight < 0) negativeCount++;
          }

          // Check cabinet impacts
          if (answer.impacts.cabinet) {
            Object.values(answer.impacts.cabinet).forEach((impact) => {
              if (impact?.weight !== undefined) {
                hasConsequences = true;
                impactEntities++;
                if (impact.weight > 0) positiveCount++;
                else if (impact.weight < 0) negativeCount++;
              }
            });
          }

          if (hasConsequences) {
            stats.withConsequences++;
            stats.positiveConsequences += positiveCount;
            stats.negativeConsequences += negativeCount;
            stats.averageImpactEntities += impactEntities;
          }
        });
      });
    });
  });

  // Calculate averages for impact entities
  Object.values(consequencesByAnswerType).forEach((stats) => {
    if (stats.withConsequences > 0) {
      stats.averageImpactEntities =
        stats.averageImpactEntities / stats.withConsequences;
    }
  });

  return {
    totalExchanges,
    totalQuestions,
    totalAnswers,
    averageExchangesPerSituation: totalExchanges / situationsData.length,
    averageQuestionsPerExchange: totalQuestions / totalExchanges,
    averageAnswersPerQuestion: totalAnswers / totalQuestions,
    consequencesByAnswerType,
    answersWithFollowups,
    averageDepthPercentage:
      totalAnswers > 0 ? (answersWithFollowups / totalAnswers) * 100 : 0,
  };
}

/**
 * Generates markdown content for exchanges analysis
 */
export function generateExchangesMarkdown(): string {
  const data = analyzeExchangesData();
  let content = getMetadataSection(situationsData.length);

  content += `## Exchanges Analysis

### General Statistics
- **Total Exchanges:** ${data.totalExchanges}
- **Total Questions:** ${data.totalQuestions}
- **Total Answers:** ${data.totalAnswers}
- **Average Exchanges per Situation:** ${data.averageExchangesPerSituation.toFixed(
    2
  )}
- **Average Questions per Exchange:** ${data.averageQuestionsPerExchange.toFixed(
    2
  )}
- **Average Answers per Question:** ${data.averageAnswersPerQuestion.toFixed(2)}

### Question Depth Analysis
- **Answers with Follow-ups:** ${data.answersWithFollowups} of ${
    data.totalAnswers
  }
- **Average Depth Percentage:** ${data.averageDepthPercentage.toFixed(1)}%

### Consequences by Answer Type
`;

  // Sort answer types by total answers (descending)
  const sortedAnswerTypes = Object.entries(data.consequencesByAnswerType).sort(
    ([, a], [, b]) => b.totalAnswers - a.totalAnswers
  );

  sortedAnswerTypes.forEach(([answerType, stats]) => {
    const consequenceRate =
      stats.totalAnswers > 0
        ? (stats.withConsequences / stats.totalAnswers) * 100
        : 0;

    content += `
#### ${answerType.toUpperCase()}
- **Total Answers:** ${stats.totalAnswers}
- **With Consequences:** ${stats.withConsequences} (${consequenceRate.toFixed(
      1
    )}%)
- **Positive Consequences:** ${stats.positiveConsequences}
- **Negative Consequences:** ${stats.negativeConsequences}
- **Average Impact Entities:** ${stats.averageImpactEntities.toFixed(2)}
`;
  });

  return content;
}
