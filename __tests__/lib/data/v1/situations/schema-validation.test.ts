import { situationsData } from "~/lib/data/situations";
import { situationDataSchema } from "~/lib/schemas";
import { SituationType, AnswerType, CabinetStaticId } from "~/types";

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

    test("all situations have required fields", () => {
      situationsData.forEach((situation, index) => {
        expect(situation.trigger).toBeDefined();
        expect(situation.type).toBeDefined();
        expect(situation.title).toBeDefined();
        expect(situation.description).toBeDefined();
        expect(situation.content).toBeDefined();
        expect(situation.exchanges).toBeDefined();
        expect(Array.isArray(situation.exchanges)).toBe(true);
      });
    });
  });

  describe("ID Uniqueness and Format", () => {
    test("all trigger static keys are unique", () => {
      const staticKeys = situationsData.map((s) => s.trigger.staticKey);
      const uniqueKeys = new Set(staticKeys);

      expect(uniqueKeys.size).toBe(staticKeys.length);
    });

    test("all trigger static keys are non-empty strings", () => {
      situationsData.forEach((situation, index) => {
        expect(typeof situation.trigger.staticKey).toBe("string");
        expect(situation.trigger.staticKey.length).toBeGreaterThan(0);
      });
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

  describe("Type Consistency", () => {
    test("situation type matches trigger type", () => {
      situationsData.forEach((situation, index) => {
        expect(situation.type).toBe(situation.trigger.type);
      });
    });

    test("all situation types are valid enum values", () => {
      situationsData.forEach((situation, index) => {
        expect(Object.values(SituationType)).toContain(situation.type);
      });
    });

    test("all answer types are valid enum values", () => {
      situationsData.forEach((situation, index) => {
        situation.exchanges.forEach((exchange, exchangeIndex) => {
          Object.values(exchange.content.questions).forEach(
            (question, questionIndex) => {
              question.answers.forEach((answer, answerIndex) => {
                expect(Object.values(AnswerType)).toContain(answer.type);
              });
            }
          );
        });
      });
    });
  });

  describe("Reference Validation", () => {
    test("root question IDs reference valid questions", () => {
      situationsData.forEach((situation, index) => {
        situation.exchanges.forEach((exchange, exchangeIndex) => {
          const { questions, rootQuestionId } = exchange.content;
          expect(questions[rootQuestionId]).toBeDefined();
        });
      });
    });

    test("answer follow-up IDs reference valid questions within same exchange", () => {
      situationsData.forEach((situation, index) => {
        situation.exchanges.forEach((exchange, exchangeIndex) => {
          const { questions } = exchange.content;

          Object.values(questions).forEach((question, questionIndex) => {
            question.answers.forEach((answer, answerIndex) => {
              if (answer.followUpId) {
                expect(questions[answer.followUpId]).toBeDefined();
              }
            });
          });
        });
      });
    });

    test("authorized cabinet member IDs are valid", () => {
      situationsData.forEach((situation, index) => {
        situation.exchanges.forEach((exchange, exchangeIndex) => {
          Object.values(exchange.content.questions).forEach(
            (question, questionIndex) => {
              question.answers.forEach((answer, answerIndex) => {
                if (answer.authorizedCabinetMemberId) {
                  expect(Object.values(CabinetStaticId)).toContain(
                    answer.authorizedCabinetMemberId
                  );
                }
              });
            }
          );
        });
      });
    });
  });

  describe("Structural Integrity", () => {
    test("all situations have at least one outcome", () => {
      situationsData.forEach((situation, index) => {
        expect(situation.content.outcomes.length).toBeGreaterThan(0);
      });
    });

    test("all situations have at least one exchange", () => {
      situationsData.forEach((situation, index) => {
        expect(situation.exchanges.length).toBeGreaterThan(0);
      });
    });

    test("all questions have at least one answer", () => {
      situationsData.forEach((situation, index) => {
        situation.exchanges.forEach((exchange, exchangeIndex) => {
          Object.values(exchange.content.questions).forEach(
            (question, questionIndex) => {
              expect(question.answers.length).toBeGreaterThan(0);
            }
          );
        });
      });
    });

    test("question depths are non-negative integers", () => {
      situationsData.forEach((situation, index) => {
        situation.exchanges.forEach((exchange, exchangeIndex) => {
          Object.values(exchange.content.questions).forEach(
            (question, questionIndex) => {
              expect(Number.isInteger(question.depth)).toBe(true);
              expect(question.depth).toBeGreaterThanOrEqual(0);
            }
          );
        });
      });
    });
  });
});
