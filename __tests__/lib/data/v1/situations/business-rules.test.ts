import { situationsData } from "~/lib/data/situations/v1";
import { AnswerType, CabinetStaticId } from "~/types";

describe("Situation Data Business Rules", () => {
  describe("Mathematical Constraints", () => {
    test("outcome weights sum to exactly 100 per situation", () => {
      const errors: Array<{ title: string; sum: number; outcomes: any[] }> = [];

      situationsData.forEach((situation) => {
        const weightSum = situation.content.outcomes.reduce(
          (sum, outcome) => sum + outcome.weight,
          0
        );

        if (weightSum !== 100) {
          errors.push({
            title: situation.title,
            sum: weightSum,
            outcomes: situation.content.outcomes.map((o) => ({
              id: o.id,
              title: o.title,
              weight: o.weight,
            })),
          });
        }
      });

      if (errors.length > 0) {
        console.error(
          "Outcome weight sum errors:",
          JSON.stringify(errors, null, 2)
        );
        fail(
          `${errors.length} situations have outcome weights that don't sum to 100. See console for details.`
        );
      }

      expect(errors).toHaveLength(0);
    });

    test("outcome modifiers sum to 0 per answer (game balance)", () => {
      const errors: Array<{
        situationTitle: string;
        questionId: string;
        answerId: string;
        sum: number;
        modifiers: Record<string, number>;
      }> = [];

      situationsData.forEach((situation) => {
        situation.exchanges.forEach((exchange) => {
          Object.entries(exchange.content.questions).forEach(
            ([questionId, question]) => {
              question.answers.forEach((answer) => {
                const modifierSum = Object.values(
                  answer.outcomeModifiers
                ).reduce((sum, modifier) => sum + modifier, 0);

                if (modifierSum !== 0) {
                  errors.push({
                    situationTitle: situation.title,
                    questionId,
                    answerId: answer.id,
                    sum: modifierSum,
                    modifiers: answer.outcomeModifiers,
                  });
                }
              });
            }
          );
        });
      });

      if (errors.length > 0) {
        console.error(
          "Outcome modifier sum errors:",
          JSON.stringify(errors, null, 2)
        );
        fail(
          `${errors.length} answers have outcome modifiers that don't sum to 0. See console for details.`
        );
      }

      expect(errors).toHaveLength(0);
    });

    test("outcome weights are positive numbers", () => {
      situationsData.forEach((situation) => {
        situation.content.outcomes.forEach((outcome) => {
          expect(outcome.weight).toBeGreaterThan(0);
          expect(Number.isFinite(outcome.weight)).toBe(true);
        });
      });
    });

    test("outcome modifier values are within reasonable range (-50 to +50)", () => {
      const errors: Array<{
        situationTitle: string;
        answerId: string;
        outcomeId: string;
        modifier: number;
      }> = [];

      situationsData.forEach((situation) => {
        situation.exchanges.forEach((exchange) => {
          Object.values(exchange.content.questions).forEach((question) => {
            question.answers.forEach((answer) => {
              Object.entries(answer.outcomeModifiers).forEach(
                ([outcomeId, modifier]) => {
                  if (modifier < -50 || modifier > 50) {
                    errors.push({
                      situationTitle: situation.title,
                      answerId: answer.id,
                      outcomeId,
                      modifier,
                    });
                  }
                }
              );
            });
          });
        });
      });

      if (errors.length > 0) {
        console.error(
          "Extreme outcome modifier values:",
          JSON.stringify(errors, null, 2)
        );
        fail(
          `${errors.length} outcome modifiers are outside reasonable range (-50 to +50). See console for details.`
        );
      }

      expect(errors).toHaveLength(0);
    });
  });

  describe("Cabinet Authorization Logic", () => {
    test("authorized answers reference cabinet members with authorizedContent", () => {
      const errors: Array<{
        situationTitle: string;
        answerId: string;
        cabinetMemberId: CabinetStaticId;
        hasAuthorizedContent: boolean;
      }> = [];

      situationsData.forEach((situation) => {
        situation.exchanges.forEach((exchange) => {
          Object.values(exchange.content.questions).forEach((question) => {
            question.answers.forEach((answer) => {
              if (
                answer.type === AnswerType.Authorized &&
                answer.authorizedCabinetMemberId
              ) {
                const cabinetMember =
                  situation.content.preferences.cabinet?.[
                    answer.authorizedCabinetMemberId
                  ];
                const hasAuthorizedContent = !!cabinetMember?.authorizedContent;

                if (!hasAuthorizedContent) {
                  errors.push({
                    situationTitle: situation.title,
                    answerId: answer.id,
                    cabinetMemberId: answer.authorizedCabinetMemberId,
                    hasAuthorizedContent,
                  });
                }
              }
            });
          });
        });
      });

      if (errors.length > 0) {
        console.error(
          "Authorized answers without corresponding cabinet content:",
          JSON.stringify(errors, null, 2)
        );
        fail(
          `${errors.length} authorized answers reference cabinet members without authorizedContent. See console for details.`
        );
      }

      expect(errors).toHaveLength(0);
    });

    test("authorized answers must have authorizedCabinetMemberId", () => {
      const errors: Array<{
        situationTitle: string;
        answerId: string;
      }> = [];

      situationsData.forEach((situation) => {
        situation.exchanges.forEach((exchange) => {
          Object.values(exchange.content.questions).forEach((question) => {
            question.answers.forEach((answer) => {
              if (
                answer.type === AnswerType.Authorized &&
                !answer.authorizedCabinetMemberId
              ) {
                errors.push({
                  situationTitle: situation.title,
                  answerId: answer.id,
                });
              }
            });
          });
        });
      });

      if (errors.length > 0) {
        console.error(
          "Authorized answers without cabinet member ID:",
          JSON.stringify(errors, null, 2)
        );
        fail(
          `${errors.length} authorized answers are missing authorizedCabinetMemberId. See console for details.`
        );
      }

      expect(errors).toHaveLength(0);
    });

    test("cabinet preferences never use AnswerType.Authorized", () => {
      const errors: Array<{
        situationTitle: string;
        cabinetMemberId: CabinetStaticId;
      }> = [];

      situationsData.forEach((situation) => {
        if (situation.content.preferences.cabinet) {
          Object.entries(situation.content.preferences.cabinet).forEach(
            ([cabinetId, pref]) => {
              if (pref.preference.answerType === AnswerType.Authorized) {
                errors.push({
                  situationTitle: situation.title,
                  cabinetMemberId: cabinetId as CabinetStaticId,
                });
              }
            }
          );
        }
      });

      if (errors.length > 0) {
        console.error(
          "Cabinet preferences using Authorized answer type:",
          JSON.stringify(errors, null, 2)
        );
        fail(
          `${errors.length} cabinet preferences use AnswerType.Authorized. See console for details.`
        );
      }

      expect(errors).toHaveLength(0);
    });
  });

  describe("Trigger Requirements Logic", () => {
    test("year requirements have logical min/max ranges", () => {
      const errors: Array<{
        situationTitle: string;
        min?: number;
        max?: number;
      }> = [];

      situationsData.forEach((situation) => {
        const yearReq = situation.trigger.requirements.year;
        if (yearReq && yearReq.min !== undefined && yearReq.max !== undefined) {
          if (yearReq.min > yearReq.max) {
            errors.push({
              situationTitle: situation.title,
              min: yearReq.min,
              max: yearReq.max,
            });
          }
        }
      });

      if (errors.length > 0) {
        console.error(
          "Invalid year requirement ranges:",
          JSON.stringify(errors, null, 2)
        );
        fail(
          `${errors.length} situations have invalid year requirement ranges (min > max). See console for details.`
        );
      }

      expect(errors).toHaveLength(0);
    });

    test("month requirements are within valid range (1-12)", () => {
      const errors: Array<{
        situationTitle: string;
        min?: number;
        max?: number;
      }> = [];

      situationsData.forEach((situation) => {
        const monthReq = situation.trigger.requirements.month;
        if (monthReq) {
          if (
            monthReq.min !== undefined &&
            (monthReq.min < 1 || monthReq.min > 12)
          ) {
            errors.push({
              situationTitle: situation.title,
              min: monthReq.min,
              max: monthReq.max,
            });
          }
          if (
            monthReq.max !== undefined &&
            (monthReq.max < 1 || monthReq.max > 12)
          ) {
            errors.push({
              situationTitle: situation.title,
              min: monthReq.min,
              max: monthReq.max,
            });
          }
          if (
            monthReq.min !== undefined &&
            monthReq.max !== undefined &&
            monthReq.min > monthReq.max
          ) {
            errors.push({
              situationTitle: situation.title,
              min: monthReq.min,
              max: monthReq.max,
            });
          }
        }
      });

      if (errors.length > 0) {
        console.error(
          "Invalid month requirement ranges:",
          JSON.stringify(errors, null, 2)
        );
        fail(
          `${errors.length} situations have invalid month requirements. See console for details.`
        );
      }

      expect(errors).toHaveLength(0);
    });

    test("approval rating requirements are within valid range (0-100)", () => {
      const errors: Array<{
        situationTitle: string;
        entity: string;
        min?: number;
        max?: number;
      }> = [];

      situationsData.forEach((situation) => {
        const req = situation.trigger.requirements;

        // Check president approval requirements
        if (req.president) {
          if (
            req.president.minApproval !== undefined &&
            (req.president.minApproval < 0 || req.president.minApproval > 100)
          ) {
            errors.push({
              situationTitle: situation.title,
              entity: "president",
              min: req.president.minApproval,
              max: req.president.maxApproval,
            });
          }
          if (
            req.president.maxApproval !== undefined &&
            (req.president.maxApproval < 0 || req.president.maxApproval > 100)
          ) {
            errors.push({
              situationTitle: situation.title,
              entity: "president",
              min: req.president.minApproval,
              max: req.president.maxApproval,
            });
          }
          if (
            req.president.minApproval !== undefined &&
            req.president.maxApproval !== undefined &&
            req.president.minApproval > req.president.maxApproval
          ) {
            errors.push({
              situationTitle: situation.title,
              entity: "president",
              min: req.president.minApproval,
              max: req.president.maxApproval,
            });
          }
        }

        // Check cabinet approval requirements
        if (req.cabinet) {
          Object.entries(req.cabinet).forEach(([cabinetId, cabinetReq]) => {
            if (
              cabinetReq.minApproval !== undefined &&
              (cabinetReq.minApproval < 0 || cabinetReq.minApproval > 100)
            ) {
              errors.push({
                situationTitle: situation.title,
                entity: `cabinet.${cabinetId}`,
                min: cabinetReq.minApproval,
                max: cabinetReq.maxApproval,
              });
            }
            if (
              cabinetReq.maxApproval !== undefined &&
              (cabinetReq.maxApproval < 0 || cabinetReq.maxApproval > 100)
            ) {
              errors.push({
                situationTitle: situation.title,
                entity: `cabinet.${cabinetId}`,
                min: cabinetReq.minApproval,
                max: cabinetReq.maxApproval,
              });
            }
            if (
              cabinetReq.minApproval !== undefined &&
              cabinetReq.maxApproval !== undefined &&
              cabinetReq.minApproval > cabinetReq.maxApproval
            ) {
              errors.push({
                situationTitle: situation.title,
                entity: `cabinet.${cabinetId}`,
                min: cabinetReq.minApproval,
                max: cabinetReq.maxApproval,
              });
            }
          });
        }

        // Check subgroup approval requirements
        if (req.subgroups) {
          Object.entries(req.subgroups).forEach(([subgroupId, subgroupReq]) => {
            if (
              subgroupReq.minApproval !== undefined &&
              (subgroupReq.minApproval < 0 || subgroupReq.minApproval > 100)
            ) {
              errors.push({
                situationTitle: situation.title,
                entity: `subgroups.${subgroupId}`,
                min: subgroupReq.minApproval,
                max: subgroupReq.maxApproval,
              });
            }
            if (
              subgroupReq.maxApproval !== undefined &&
              (subgroupReq.maxApproval < 0 || subgroupReq.maxApproval > 100)
            ) {
              errors.push({
                situationTitle: situation.title,
                entity: `subgroups.${subgroupId}`,
                min: subgroupReq.minApproval,
                max: subgroupReq.maxApproval,
              });
            }
            if (
              subgroupReq.minApproval !== undefined &&
              subgroupReq.maxApproval !== undefined &&
              subgroupReq.minApproval > subgroupReq.maxApproval
            ) {
              errors.push({
                situationTitle: situation.title,
                entity: `subgroups.${subgroupId}`,
                min: subgroupReq.minApproval,
                max: subgroupReq.maxApproval,
              });
            }
          });
        }
      });

      if (errors.length > 0) {
        console.error(
          "Invalid approval rating requirements:",
          JSON.stringify(errors, null, 2)
        );
        fail(
          `${errors.length} situations have invalid approval rating requirements. See console for details.`
        );
      }

      expect(errors).toHaveLength(0);
    });
  });

  describe("Game Balance Validation", () => {
    test("each situation has reasonable number of outcomes (2-6)", () => {
      const errors: Array<{
        situationTitle: string;
        outcomeCount: number;
      }> = [];

      situationsData.forEach((situation) => {
        const outcomeCount = situation.content.outcomes.length;
        if (outcomeCount < 2 || outcomeCount > 6) {
          errors.push({
            situationTitle: situation.title,
            outcomeCount,
          });
        }
      });

      if (errors.length > 0) {
        console.error(
          "Situations with unusual outcome counts:",
          JSON.stringify(errors, null, 2)
        );
        fail(
          `${errors.length} situations have unusual outcome counts (should be 2-6). See console for details.`
        );
      }

      expect(errors).toHaveLength(0);
    });

    test("each exchange has reasonable number of questions (1-10)", () => {
      const errors: Array<{
        situationTitle: string;
        exchangeIndex: number;
        questionCount: number;
      }> = [];

      situationsData.forEach((situation) => {
        situation.exchanges.forEach((exchange, index) => {
          const questionCount = Object.keys(exchange.content.questions).length;
          if (questionCount < 1 || questionCount > 10) {
            errors.push({
              situationTitle: situation.title,
              exchangeIndex: index,
              questionCount,
            });
          }
        });
      });

      if (errors.length > 0) {
        console.error(
          "Exchanges with unusual question counts:",
          JSON.stringify(errors, null, 2)
        );
        fail(
          `${errors.length} exchanges have unusual question counts (should be 1-10). See console for details.`
        );
      }

      expect(errors).toHaveLength(0);
    });

    test("each question has reasonable number of answers (2-5)", () => {
      const errors: Array<{
        situationTitle: string;
        questionId: string;
        answerCount: number;
      }> = [];

      situationsData.forEach((situation) => {
        situation.exchanges.forEach((exchange) => {
          Object.entries(exchange.content.questions).forEach(
            ([questionId, question]) => {
              const answerCount = question.answers.length;
              if (answerCount < 2 || answerCount > 5) {
                errors.push({
                  situationTitle: situation.title,
                  questionId,
                  answerCount,
                });
              }
            }
          );
        });
      });

      if (errors.length > 0) {
        console.error(
          "Questions with unusual answer counts:",
          JSON.stringify(errors, null, 2)
        );
        fail(
          `${errors.length} questions have unusual answer counts (should be 2-5). See console for details.`
        );
      }

      expect(errors).toHaveLength(0);
    });
  });
});
