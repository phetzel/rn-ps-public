import { situationsData } from "~/lib/data/situations";
import { CROSS_REFERENCE_THRESHOLDS } from "~/lib/constants";

describe("Situation Data Cross-Reference Validation", () => {
  // Create lookup maps for efficient testing
  const situationsByStaticKey = new Map(
    situationsData.map((s) => [s.trigger.staticKey, s])
  );

  describe("Follow-up Relationships", () => {
    test("outcome follow-up IDs reference valid situation static keys", () => {
      const errors: Array<{
        situationTitle: string;
        outcomeId: string;
        followUpId: string;
      }> = [];

      situationsData.forEach((situation) => {
        situation.content.outcomes.forEach((outcome) => {
          if (outcome.followUpId) {
            if (!situationsByStaticKey.has(outcome.followUpId)) {
              errors.push({
                situationTitle: situation.title,
                outcomeId: outcome.id,
                followUpId: outcome.followUpId,
              });
            }
          }
        });
      });

      if (errors.length > 0) {
        console.error(
          "Invalid outcome follow-up references:",
          JSON.stringify(errors, null, 2)
        );
        expect(errors).toHaveLength(0);
      }
    });

    test("follow-up situations are properly marked as isFollowUp", () => {
      const followUpIds = new Set<string>();

      // Collect all follow-up IDs
      situationsData.forEach((situation) => {
        situation.content.outcomes.forEach((outcome) => {
          if (outcome.followUpId) {
            followUpIds.add(outcome.followUpId);
          }
        });
      });

      const errors: Array<{
        staticKey: string;
        title: string;
        isFollowUp: boolean;
      }> = [];

      // Check that referenced follow-ups are marked correctly
      followUpIds.forEach((followUpId) => {
        const followUpSituation = situationsByStaticKey.get(followUpId);
        if (followUpSituation && !followUpSituation.trigger.isFollowUp) {
          errors.push({
            staticKey: followUpId,
            title: followUpSituation.title,
            isFollowUp: followUpSituation.trigger.isFollowUp || false,
          });
        }
      });

      if (errors.length > 0) {
        console.error(
          "Follow-up situations not marked as isFollowUp:",
          JSON.stringify(errors, null, 2)
        );
        expect(errors).toHaveLength(0);
      }
    });

    test("no circular references in follow-up chains", () => {
      const errors: Array<{
        chain: string[];
        circularReference: string;
      }> = [];

      // Check each situation for circular references
      situationsData.forEach((situation) => {
        situation.content.outcomes.forEach((outcome) => {
          if (outcome.followUpId) {
            const visited = new Set<string>();
            const chain: string[] = [situation.trigger.staticKey];
            let currentId: string | undefined = outcome.followUpId;

            while (currentId && !visited.has(currentId)) {
              visited.add(currentId);
              chain.push(currentId);

              const currentSituation = situationsByStaticKey.get(currentId);
              if (!currentSituation) break;

              // Find the next follow-up (if any)
              currentId = undefined;
              for (const nextOutcome of currentSituation.content.outcomes) {
                if (nextOutcome.followUpId) {
                  currentId = nextOutcome.followUpId;
                  break;
                }
              }
            }

            // If we found a cycle
            if (currentId && visited.has(currentId)) {
              errors.push({
                chain,
                circularReference: currentId,
              });
            }
          }
        });
      });

      if (errors.length > 0) {
        console.error(
          "Circular follow-up references found:",
          JSON.stringify(errors, null, 2)
        );
        expect(errors).toHaveLength(0);
      }
    });

    test("follow-up chains don't exceed reasonable depth", () => {
      const errors: Array<{
        startingSituation: string;
        chain: string[];
        depth: number;
      }> = [];

      situationsData.forEach((situation) => {
        situation.content.outcomes.forEach((outcome) => {
          if (outcome.followUpId) {
            const chain: string[] = [situation.trigger.staticKey];
            let currentId: string | undefined = outcome.followUpId;
            let depth = 1;

            while (
              currentId &&
              depth <= CROSS_REFERENCE_THRESHOLDS.MAX_FOLLOW_UP_DEPTH + 1
            ) {
              // Check up to max + 1 to detect violations
              chain.push(currentId);
              const currentSituation = situationsByStaticKey.get(currentId);
              if (!currentSituation) break;

              // Find the next follow-up
              currentId = undefined;
              for (const nextOutcome of currentSituation.content.outcomes) {
                if (nextOutcome.followUpId) {
                  currentId = nextOutcome.followUpId;
                  break;
                }
              }
              depth++;
            }

            if (depth > CROSS_REFERENCE_THRESHOLDS.MAX_FOLLOW_UP_DEPTH) {
              errors.push({
                startingSituation: situation.title,
                chain,
                depth: depth - 1,
              });
            }
          }
        });
      });

      if (errors.length > 0) {
        console.error(
          "Follow-up chains exceeding max depth:",
          JSON.stringify(errors, null, 2)
        );
        expect(errors).toHaveLength(0);
      }
    });
  });

  describe("Question Flow Validation", () => {
    test("question follow-up IDs reference valid questions within same exchange", () => {
      const errors: Array<{
        situationTitle: string;
        questionId: string;
        answerId: string;
        followUpId: string;
      }> = [];

      situationsData.forEach((situation) => {
        situation.exchanges.forEach((exchange) => {
          const { questions } = exchange.content;

          Object.entries(questions).forEach(([questionId, question]) => {
            question.answers.forEach((answer) => {
              if (answer.followUpId && !questions[answer.followUpId]) {
                errors.push({
                  situationTitle: situation.title,
                  questionId,
                  answerId: answer.id,
                  followUpId: answer.followUpId,
                });
              }
            });
          });
        });
      });

      if (errors.length > 0) {
        console.error(
          "Invalid question follow-up references:",
          JSON.stringify(errors, null, 2)
        );
        expect(errors).toHaveLength(0);
      }
    });

    test("question depth progression is logical for follow-ups", () => {
      const errors: Array<{
        situationTitle: string;
        parentQuestionId: string;
        parentDepth: number;
        followUpQuestionId: string;
        followUpDepth: number;
      }> = [];

      situationsData.forEach((situation) => {
        situation.exchanges.forEach((exchange) => {
          const { questions } = exchange.content;

          Object.entries(questions).forEach(([questionId, question]) => {
            question.answers.forEach((answer) => {
              if (answer.followUpId) {
                const followUpQuestion = questions[answer.followUpId];
                if (
                  followUpQuestion &&
                  followUpQuestion.depth <= question.depth
                ) {
                  errors.push({
                    situationTitle: situation.title,
                    parentQuestionId: questionId,
                    parentDepth: question.depth,
                    followUpQuestionId: answer.followUpId,
                    followUpDepth: followUpQuestion.depth,
                  });
                }
              }
            });
          });
        });
      });

      if (errors.length > 0) {
        console.error(
          "Invalid question depth progression:",
          JSON.stringify(errors, null, 2)
        );
        expect(errors).toHaveLength(0);
      }
    });

    test("root questions have depth 0", () => {
      const errors: Array<{
        situationTitle: string;
        rootQuestionId: string;
        depth: number;
      }> = [];

      situationsData.forEach((situation) => {
        situation.exchanges.forEach((exchange) => {
          const { questions, rootQuestionId } = exchange.content;
          const rootQuestion = questions[rootQuestionId];

          if (
            rootQuestion &&
            rootQuestion.depth !==
              CROSS_REFERENCE_THRESHOLDS.ROOT_QUESTION_DEPTH
          ) {
            errors.push({
              situationTitle: situation.title,
              rootQuestionId,
              depth: rootQuestion.depth,
            });
          }
        });
      });

      if (errors.length > 0) {
        console.error(
          "Root questions with non-zero depth:",
          JSON.stringify(errors, null, 2)
        );
        expect(errors).toHaveLength(0);
      }
    });

    test("no orphaned questions (all questions reachable from root)", () => {
      const errors: Array<{
        situationTitle: string;
        orphanedQuestions: string[];
      }> = [];

      situationsData.forEach((situation) => {
        situation.exchanges.forEach((exchange) => {
          const { questions, rootQuestionId } = exchange.content;
          const reachableQuestions = new Set<string>();

          // BFS to find all reachable questions
          const queue = [rootQuestionId];
          while (queue.length > 0) {
            const currentId = queue.shift();
            if (!currentId || reachableQuestions.has(currentId)) continue;

            reachableQuestions.add(currentId);
            const currentQuestion = questions[currentId];

            if (currentQuestion) {
              currentQuestion.answers.forEach((answer) => {
                if (
                  answer.followUpId &&
                  !reachableQuestions.has(answer.followUpId)
                ) {
                  queue.push(answer.followUpId);
                }
              });
            }
          }

          // Find orphaned questions
          const allQuestionIds = Object.keys(questions);
          const orphanedQuestions = allQuestionIds.filter(
            (id) => !reachableQuestions.has(id)
          );

          if (orphanedQuestions.length > 0) {
            errors.push({
              situationTitle: situation.title,
              orphanedQuestions,
            });
          }
        });
      });

      if (errors.length > 0) {
        console.error(
          "Orphaned questions found:",
          JSON.stringify(errors, null, 2)
        );
        expect(errors).toHaveLength(0);
      }
    });
  });

  describe("Outcome Modifier Validation", () => {
    test("outcome modifiers reference valid outcome IDs", () => {
      const errors: Array<{
        situationTitle: string;
        answerId: string;
        invalidOutcomeId: string;
        validOutcomeIds: string[];
      }> = [];

      situationsData.forEach((situation) => {
        const validOutcomeIds = situation.content.outcomes.map((o) => o.id);

        situation.exchanges.forEach((exchange) => {
          Object.values(exchange.content.questions).forEach((question) => {
            question.answers.forEach((answer) => {
              Object.keys(answer.outcomeModifiers).forEach((outcomeId) => {
                if (!validOutcomeIds.includes(outcomeId)) {
                  errors.push({
                    situationTitle: situation.title,
                    answerId: answer.id,
                    invalidOutcomeId: outcomeId,
                    validOutcomeIds,
                  });
                }
              });
            });
          });
        });
      });

      if (errors.length > 0) {
        console.error(
          "Invalid outcome modifier references:",
          JSON.stringify(errors, null, 2)
        );
        expect(errors).toHaveLength(0);
      }
    });
  });

  describe("Data Consistency", () => {
    test("situation types are consistent between trigger and main type", () => {
      const errors: Array<{
        situationTitle: string;
        triggerType: string;
        mainType: string;
      }> = [];

      situationsData.forEach((situation) => {
        if (situation.trigger.type !== situation.type) {
          errors.push({
            situationTitle: situation.title,
            triggerType: situation.trigger.type,
            mainType: situation.type,
          });
        }
      });

      if (errors.length > 0) {
        console.error(
          "Inconsistent situation types:",
          JSON.stringify(errors, null, 2)
        );
        expect(errors).toHaveLength(0);
      }
    });

    test("all situations have unique static keys", () => {
      const staticKeys = situationsData.map((s) => s.trigger.staticKey);
      const uniqueKeys = new Set(staticKeys);

      expect(uniqueKeys.size).toBe(staticKeys.length);
    });
  });
});
