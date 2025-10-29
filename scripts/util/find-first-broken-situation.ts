import { situationsData } from "~/lib/data/situations";
import { PublicationStaticId, ExchangeImpactWeight } from "~/types";

type BrokenAnswer = {
  publication: PublicationStaticId;
  questionId: string;
  answerId: string;
  issue: string;
  sum?: number;
  outcomeModifiers?: Record<string, number>;
};

function getAllQuestions(exchangeContent: typeof situationsData[number]["exchanges"][number]["content"]) {
  return [
    exchangeContent.rootQuestion,
    ...exchangeContent.secondaryQuestions,
    ...exchangeContent.tertiaryQuestions,
  ];
}

function findBrokenAnswers(): void {
  const positiveWeights = [
    ExchangeImpactWeight.StronglyPositive,
    ExchangeImpactWeight.Positive,
    ExchangeImpactWeight.SlightlyPositive,
  ];
  const negativeWeights = [
    ExchangeImpactWeight.StronglyNegative,
    ExchangeImpactWeight.Negative,
    ExchangeImpactWeight.SlightlyNegative,
  ];

  for (const situation of situationsData) {
    const broken: BrokenAnswer[] = [];
    const outcomeIds = situation.content.outcomes.map((o) => o.id);

    for (const exchange of situation.exchanges) {
      const questions = getAllQuestions(exchange.content);
      for (const question of questions) {
        // Answer-level checks
        for (const answer of question.answers) {
          // Check 1: outcomeModifiers sum to zero
          const modifiers = answer.outcomeModifiers || {};
          const total = Object.values(modifiers).reduce(
            (sum, value) => sum + value,
            0
          );
          if (total !== 0) {
            broken.push({
              publication: exchange.publication,
              questionId: question.id,
              answerId: answer.id,
              issue: "outcomeModifiers sum not zero",
              sum: total,
              outcomeModifiers: modifiers,
            });
          }

          // Check 2: mixed impacts (both positive and negative)
          let hasPos = false;
          let hasNeg = false;

          if (answer.impacts.president?.weight !== undefined) {
            const w = answer.impacts.president.weight;
            if (positiveWeights.includes(w)) hasPos = true;
            if (negativeWeights.includes(w)) hasNeg = true;
          }
          if (answer.impacts.cabinet) {
            Object.values(answer.impacts.cabinet).forEach((impact) => {
              if (!impact) return;
              if (positiveWeights.includes(impact.weight)) hasPos = true;
              if (negativeWeights.includes(impact.weight)) hasNeg = true;
            });
          }

          if (!(hasPos && hasNeg)) {
            broken.push({
              publication: exchange.publication,
              questionId: question.id,
              answerId: answer.id,
              issue: "missing mixed impacts (needs both positive AND negative impacts)",
            });
          }
        }

        // Question-level checks
        // Check 3: At least 3 of 4 answers must be net-negative
        let netNegativeCount = 0;
        for (const answer of question.answers) {
          let net = 0;
          if (answer.impacts.president?.weight !== undefined) {
            net += answer.impacts.president.weight;
          }
          if (answer.impacts.cabinet) {
            Object.values(answer.impacts.cabinet).forEach((impact) => {
              if (impact?.weight !== undefined) net += impact.weight;
            });
          }
          if (net < 0) netNegativeCount++;
        }
        if (netNegativeCount < 3) {
          broken.push({
            publication: exchange.publication,
            questionId: question.id,
            answerId: "(question-level)",
            issue: `At least 3 of 4 answers must be net-negative (found ${netNegativeCount})`,
          });
        }

        // Check 4: Each outcome must have both positive and negative modifiers across the question's answers
        outcomeIds.forEach((outcomeId) => {
          let hasPos = false;
          let hasNeg = false;
          question.answers.forEach((answer) => {
            const w = answer.outcomeModifiers?.[outcomeId];
            if (typeof w === "number") {
              if (w > 0) hasPos = true;
              if (w < 0) hasNeg = true;
            }
          });
          if (!hasPos || !hasNeg) {
            broken.push({
              publication: exchange.publication,
              questionId: question.id,
              answerId: "(question-level)",
              issue: `Outcome "${outcomeId}" must have both positive and negative modifiers across question's answers (hasPos: ${hasPos}, hasNeg: ${hasNeg})`,
            });
          }
        });
      }
    }

    if (broken.length > 0) {
      console.log(`⚠️  First failing situation: "${situation.title}" (${situation.trigger.staticKey})`);
      broken.forEach((entry) => {
        console.log(
          `  • Publication: ${entry.publication}, Question: ${entry.questionId}, Answer: ${entry.answerId}`
        );
        console.log(`    Issue: ${entry.issue}`);
        if (entry.sum !== undefined) {
          console.log(`    Sum: ${entry.sum}`);
          console.log(`    outcomeModifiers: ${JSON.stringify(entry.outcomeModifiers, null, 2)}`);
        }
      });
      return;
    }
  }

  console.log("✅ No situations with validation issues were found.");
}

findBrokenAnswers();
