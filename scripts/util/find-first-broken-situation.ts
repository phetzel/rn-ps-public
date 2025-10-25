import { situationsData } from "~/lib/data/situations";
import { PublicationStaticId } from "~/types";

type BrokenAnswer = {
  publication: PublicationStaticId;
  questionId: string;
  answerId: string;
  sum: number;
  outcomeModifiers: Record<string, number>;
};

function getAllQuestions(exchangeContent: typeof situationsData[number]["exchanges"][number]["content"]) {
  return [
    exchangeContent.rootQuestion,
    ...exchangeContent.secondaryQuestions,
    ...exchangeContent.tertiaryQuestions,
  ];
}

function findBrokenAnswers(): void {
  for (const situation of situationsData) {
    const broken: BrokenAnswer[] = [];

    for (const exchange of situation.exchanges) {
      const questions = getAllQuestions(exchange.content);
      for (const question of questions) {
        for (const answer of question.answers) {
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
              sum: total,
              outcomeModifiers: modifiers,
            });
          }
        }
      }
    }

    if (broken.length > 0) {
      console.log(`⚠️  First failing situation: "${situation.title}" (${situation.trigger.staticKey})`);
      broken.forEach((entry) => {
        console.log(
          `  • Publication: ${entry.publication}, Question: ${entry.questionId}, Answer: ${entry.answerId}, Sum: ${entry.sum}`
        );
        console.log(`    outcomeModifiers: ${JSON.stringify(entry.outcomeModifiers, null, 2)}`);
      });
      return;
    }
  }

  console.log("✅ No situations with imbalanced outcome modifiers were found.");
}

findBrokenAnswers();
