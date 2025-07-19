import { situationsData } from "~/lib/data/situations";
import { AnswerType } from "~/types";
import { getAllQuestionsFromExchange } from "~/lib/db/helpers/exchangeApi";

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

export function analyzeExchangesData(): ExchangesAnalysis {
  let totalExchanges = 0;
  let totalQuestions = 0;
  let totalAnswers = 0;
  let answersWithFollowups = 0;

  const consequencesByAnswerType: Record<string, any> = {};

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
      const questions = getAllQuestionsFromExchange(exchange.content);
      totalQuestions += questions.length;

      questions.forEach((question) => {
        totalAnswers += question.answers.length;

        // Analyze each answer
        question.answers.forEach((answer) => {
          const answerType = answer.type;
          consequencesByAnswerType[answerType].totalAnswers++;

          // Track follow-ups
          if (answer.followUpId) {
            answersWithFollowups++;
          }

          // Count impact entities
          let impactEntities = 0;
          if (answer.impacts.president) impactEntities++;
          if (answer.impacts.cabinet) {
            impactEntities += Object.keys(answer.impacts.cabinet).length;
          }
          if (answer.impacts.journalists) {
            impactEntities += Object.keys(answer.impacts.journalists).length;
          }

          // Update consequences tracking
          if (impactEntities > 0) {
            consequencesByAnswerType[answerType].withConsequences++;
            consequencesByAnswerType[answerType].averageImpactEntities +=
              impactEntities;

            // Categorize as positive/negative based on impacts
            let hasPositive = false;
            let hasNegative = false;

            if (answer.impacts.president && answer.impacts.president.weight > 0)
              hasPositive = true;
            if (answer.impacts.president && answer.impacts.president.weight < 0)
              hasNegative = true;

            if (answer.impacts.cabinet) {
              Object.values(answer.impacts.cabinet).forEach((impact) => {
                if (impact.weight > 0) hasPositive = true;
                if (impact.weight < 0) hasNegative = true;
              });
            }

            if (answer.impacts.journalists) {
              Object.values(answer.impacts.journalists).forEach((impact) => {
                if (impact.weight > 0) hasPositive = true;
                if (impact.weight < 0) hasNegative = true;
              });
            }

            if (hasPositive)
              consequencesByAnswerType[answerType].positiveConsequences++;
            if (hasNegative)
              consequencesByAnswerType[answerType].negativeConsequences++;
          }
        });
      });
    });
  });

  // Calculate averages
  Object.keys(consequencesByAnswerType).forEach((answerType) => {
    const data = consequencesByAnswerType[answerType];
    if (data.withConsequences > 0) {
      data.averageImpactEntities = Number(
        (data.averageImpactEntities / data.withConsequences).toFixed(2)
      );
    }
  });

  return {
    totalExchanges,
    totalQuestions,
    totalAnswers,
    averageExchangesPerSituation: Number(
      (totalExchanges / situationsData.length).toFixed(2)
    ),
    averageQuestionsPerExchange: Number(
      (totalQuestions / totalExchanges).toFixed(2)
    ),
    averageAnswersPerQuestion: Number(
      (totalAnswers / totalQuestions).toFixed(2)
    ),
    consequencesByAnswerType,
    answersWithFollowups,
    averageDepthPercentage: Number(
      ((answersWithFollowups / totalAnswers) * 100).toFixed(1)
    ),
  };
}

export function generateExchangesMarkdown(): string {
  const data = analyzeExchangesData();

  let markdown = `# Exchanges Analysis

## General Statistics
- **Total Exchanges**: ${data.totalExchanges}
- **Total Questions**: ${data.totalQuestions}
- **Total Answers**: ${data.totalAnswers}
- **Average Exchanges per Situation**: ${data.averageExchangesPerSituation}
- **Average Questions per Exchange**: ${data.averageQuestionsPerExchange}
- **Average Answers per Question**: ${data.averageAnswersPerQuestion}

## Question Depth Analysis
- **Answers with Follow-ups**: ${data.answersWithFollowups}
- **Average Depth Percentage**: ${data.averageDepthPercentage}%

## Consequences by Answer Type

| Answer Type | Total | With Consequences | Positive | Negative | Avg Impact Entities |
|-------------|-------|-------------------|----------|----------|-------------------|
`;

  Object.entries(data.consequencesByAnswerType).forEach(([type, stats]) => {
    const withConseqPercent =
      stats.totalAnswers > 0
        ? ((stats.withConsequences / stats.totalAnswers) * 100).toFixed(1)
        : "0.0";

    markdown += `| ${type} | ${stats.totalAnswers} | ${stats.withConsequences} (${withConseqPercent}%) | ${stats.positiveConsequences} | ${stats.negativeConsequences} | ${stats.averageImpactEntities} |\n`;
  });

  markdown += `\n## Analysis Notes

${
  data.averageQuestionsPerExchange === 5
    ? "✅ Perfect normalized structure - all exchanges have exactly 5 questions."
    : `⚠️ Exchange structure not normalized - average ${data.averageQuestionsPerExchange} questions per exchange.`
}

${
  data.averageDepthPercentage < 30
    ? "⚠️ Low follow-up percentage - consider adding more question depth."
    : data.averageDepthPercentage > 50
    ? "⚠️ High follow-up percentage - might be too complex for players."
    : "✅ Good balance of question depth with follow-ups."
}

${
  data.averageAnswersPerQuestion < 3
    ? "⚠️ Low answer variety - consider adding more options per question."
    : data.averageAnswersPerQuestion > 4
    ? "⚠️ High answer variety - might overwhelm players."
    : "✅ Good answer variety per question."
}
`;

  return markdown;
}
