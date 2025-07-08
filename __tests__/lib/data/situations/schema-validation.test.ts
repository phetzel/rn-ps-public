import { situationsData } from "~/lib/data/situations";
import { situationDataSchema } from "~/lib/schemas";

describe("Situation Data Schema Validation", () => {
  describe("Overall Schema Compliance", () => {
    test("all situations conform to SituationData schema", () => {
      const errors: Array<{ index: number; title: string; errors: any }> = [];

      situationsData.forEach((situation, index) => {
        const result = situationDataSchema.safeParse(situation);
        if (!result.success) {
          errors.push({
            index,
            title: situation.title || `Situation ${index}`,
            errors: result.error.format(),
          });
        }
      });

      if (errors.length > 0) {
        console.error(
          "Schema validation errors:",
          JSON.stringify(errors, null, 2)
        );
        fail(
          `${errors.length} situations failed schema validation. See console for details.`
        );
      }

      expect(errors).toHaveLength(0);
    });
  });

  describe("Cross-Entity Uniqueness Validation", () => {
    test("all trigger static keys are unique", () => {
      const staticKeys = situationsData.map((s) => s.trigger.staticKey);
      const uniqueKeys = new Set(staticKeys);

      expect(uniqueKeys.size).toBe(staticKeys.length);
    });

    test("outcome IDs are unique within each situation", () => {
      situationsData.forEach((situation, index) => {
        const outcomeIds = situation.content.outcomes.map((o) => o.id);
        const uniqueIds = new Set(outcomeIds);

        expect(uniqueIds.size).toBe(outcomeIds.length);
      });
    });

    test("question IDs are unique within each exchange", () => {
      situationsData.forEach((situation, index) => {
        situation.exchanges.forEach((exchange, exchangeIndex) => {
          const questionIds = Object.keys(exchange.content.questions);
          const uniqueIds = new Set(questionIds);

          expect(uniqueIds.size).toBe(questionIds.length);
        });
      });
    });

    test("answer IDs are unique within each question", () => {
      situationsData.forEach((situation, index) => {
        situation.exchanges.forEach((exchange, exchangeIndex) => {
          Object.values(exchange.content.questions).forEach(
            (question, questionIndex) => {
              const answerIds = question.answers.map((a) => a.id);
              const uniqueIds = new Set(answerIds);

              expect(uniqueIds.size).toBe(answerIds.length);
            }
          );
        });
      });
    });
  });
});
