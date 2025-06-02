/**
 * Situation Model Tests
 *
 * Tests core functionality of the Situation model including:
 * - Basic model operations (create, read, update)
 * - JSON content parsing and validation
 * - Outcome setting and retrieval
 * - Follow-up detection and management
 * - Relationship management with Game, Level, and PressExchanges
 */

import { Database } from "@nozbe/watermelondb";
import { testDatabase, resetTestDatabase } from "../index";
import {
  createTestGame,
  createTestLevel,
  createTestSituation,
  createTestPressExchange,
} from "../fixtures";
import {
  SituationType,
  CabinetStaticId,
  SubgroupStaticId,
  SituationConsequenceWeight,
} from "~/types";

describe("Situation Model", () => {
  let database: Database;

  beforeEach(async () => {
    database = testDatabase;
    await resetTestDatabase(database);
  });

  afterEach(async () => {
    if (database) {
      await database.write(async () => {
        await database.unsafeResetDatabase();
      });
    }
  });

  describe("Basic Model Operations", () => {
    it("should create a situation with valid data", async () => {
      const game = await createTestGame(database);
      const level = await createTestLevel(database, { gameId: game.id });
      const situation = await createTestSituation(database, {
        gameId: game.id,
        levelId: level.id,
        type: SituationType.DomesticPolicy,
        title: "Test Crisis",
        description: "A test domestic crisis situation",
      });

      expect(situation.type).toBe(SituationType.DomesticPolicy);
      expect(situation.title).toBe("Test Crisis");
      expect(situation.description).toBe("A test domestic crisis situation");
      expect(situation.game_id).toBe(game.id);
      expect(situation.level_id).toBe(level.id);
      expect(situation.outcomeId).toBeNull();
      expect(situation.createdAt).toBeInstanceOf(Date);
      expect(situation.updatedAt).toBeInstanceOf(Date);
    });

    it("should maintain relationships with game and level", async () => {
      const game = await createTestGame(database);
      const level = await createTestLevel(database, { gameId: game.id });
      const situation = await createTestSituation(database, {
        gameId: game.id,
        levelId: level.id,
      });

      const relatedGame = await situation.game.fetch();
      const relatedLevel = await situation.level.fetch();

      expect(relatedGame.id).toBe(game.id);
      expect(relatedLevel.id).toBe(level.id);
    });

    it("should update situation properties", async () => {
      const situation = await createTestSituation(database, {
        title: "Original Title",
        outcomeId: null,
      });

      await database.write(async () => {
        await situation.update((s) => {
          s.title = "Updated Title";
          s.outcomeId = "outcome_1";
        });
      });

      expect(situation.title).toBe("Updated Title");
      expect(situation.outcomeId).toBe("outcome_1");
    });
  });

  describe("Content Parsing and Validation", () => {
    it("should parse valid JSON content correctly", async () => {
      const validContent = {
        preferences: {
          president: {
            answerType: "inform",
            rationale:
              "President prefers complete transparency in handling this sensitive diplomatic matter to maintain public trust", // Fixed: 40-120 chars
          },
        },
        outcomes: [
          {
            id: "outcome_1",
            title: "Successful Diplomatic Resolution", // Fixed: 20-60 chars
            description:
              "The situation is handled through careful diplomatic channels resulting in a positive outcome for all parties involved", // Fixed: 60-140 chars
            weight: 70, // Fixed: weights sum to 100
            consequences: {
              approvalChanges: {
                cabinet: {
                  [CabinetStaticId.State]: SituationConsequenceWeight.Positive,
                },
                subgroups: {
                  [SubgroupStaticId.LeftWingBase]:
                    SituationConsequenceWeight.SlightlyPositive,
                },
              },
            },
          },
          {
            id: "outcome_2",
            title: "Poor Response With Complications", // Fixed: 20-60 chars
            description:
              "The situation goes badly leading to diplomatic tensions and negative public perception of the administration", // Fixed: 60-140 chars
            weight: 30, // Fixed: weights sum to 100
            consequences: {
              approvalChanges: {
                cabinet: {
                  [CabinetStaticId.State]: SituationConsequenceWeight.Negative,
                },
                subgroups: {
                  [SubgroupStaticId.RightWingBase]:
                    SituationConsequenceWeight.SlightlyNegative,
                },
              },
            },
          },
        ],
      };

      const situation = await createTestSituation(database, {
        content: JSON.stringify(validContent),
      });

      const parsedContent = situation.parseContent;
      expect(parsedContent).not.toBeNull();
      expect(parsedContent?.preferences.president?.answerType).toBe("inform");
      expect(parsedContent?.outcomes).toHaveLength(2);
      expect(parsedContent?.outcomes[0].id).toBe("outcome_1");
    });

    it("should handle invalid JSON content gracefully", async () => {
      const consoleSpy = jest.spyOn(console, "error").mockImplementation();

      const situation = await createTestSituation(database, {
        content: "invalid json {",
      });

      const parsedContent = situation.parseContent;
      expect(parsedContent).toBeNull();
      expect(consoleSpy).toHaveBeenCalledWith(
        expect.stringContaining("Error parsing Situation"),
        expect.any(Error)
      );

      consoleSpy.mockRestore();
    });

    it("should handle content that doesn't match schema", async () => {
      const consoleWarnSpy = jest.spyOn(console, "warn").mockImplementation();

      const invalidContent = {
        preferences: {
          // Missing or invalid structure
        },
        outcomes: [
          {
            // Missing required fields
          },
        ],
      };

      const situation = await createTestSituation(database, {
        content: JSON.stringify(invalidContent),
      });

      const parsedContent = situation.parseContent;
      expect(parsedContent).toBeNull();
      expect(consoleWarnSpy).toHaveBeenCalledWith(
        "Situation.content getter: Invalid data structure found in DB:",
        expect.any(Object)
      );

      consoleWarnSpy.mockRestore();
    });

    it("should return null for empty content", async () => {
      const situation = await createTestSituation(database, {
        content: "",
      });

      const parsedContent = situation.parseContent;
      expect(parsedContent).toBeNull();
    });
  });

  describe("Outcome Management", () => {
    it("should set outcome correctly", async () => {
      const validContent = {
        preferences: {
          president: {
            answerType: "inform",
            rationale:
              "President believes in maintaining transparency and accountability in all government communications during this crisis",
          },
        },
        outcomes: [
          {
            id: "outcome_1",
            title: "Crisis Successfully Managed",
            description:
              "Through effective communication and decisive action the administration successfully resolves the issue",
            weight: 60,
            consequences: {
              approvalChanges: {
                cabinet: {
                  [CabinetStaticId.Treasury]:
                    SituationConsequenceWeight.Positive,
                },
              },
            },
          },
          {
            id: "outcome_2",
            title: "Crisis Escalates Further",
            description:
              "Poor handling of the situation leads to increased tensions and public dissatisfaction with leadership",
            weight: 40,
            consequences: {
              approvalChanges: {
                cabinet: {
                  [CabinetStaticId.Treasury]:
                    SituationConsequenceWeight.Negative,
                },
              },
            },
          },
        ],
      };

      const situation = await createTestSituation(database, {
        content: JSON.stringify(validContent),
        outcomeId: null,
      });

      await situation.setOutcome("outcome_1");

      expect(situation.outcomeId).toBe("outcome_1");
    });

    it("should retrieve outcome data correctly", async () => {
      const validContent = {
        preferences: {
          president: {
            answerType: "reassure",
            rationale:
              "President wants to calm public fears while demonstrating strong leadership during this challenging period",
          },
        },
        outcomes: [
          {
            id: "outcome_1",
            title: "Crisis Resolved Successfully",
            description:
              "The crisis is successfully managed through diplomatic channels resulting in positive public perception",
            weight: 75,
            consequences: {
              approvalChanges: {
                cabinet: {
                  [CabinetStaticId.State]:
                    SituationConsequenceWeight.StronglyPositive,
                  [CabinetStaticId.Treasury]:
                    SituationConsequenceWeight.SlightlyPositive,
                },
                subgroups: {
                  [SubgroupStaticId.LeftWingBase]:
                    SituationConsequenceWeight.Positive,
                },
              },
            },
          },
          {
            id: "outcome_2",
            title: "Crisis Management Fails",
            description:
              "The situation deteriorates further causing significant damage to administration credibility and public trust",
            weight: 25,
            consequences: {
              approvalChanges: {
                cabinet: {
                  [CabinetStaticId.State]: SituationConsequenceWeight.Negative,
                },
              },
            },
          },
        ],
      };

      const situation = await createTestSituation(database, {
        content: JSON.stringify(validContent),
        outcomeId: "outcome_1",
      });

      const outcome = situation.outcome;
      expect(outcome).not.toBeNull();
      expect(outcome?.id).toBe("outcome_1");
      expect(outcome?.title).toBe("Crisis Resolved Successfully");
      expect(outcome?.weight).toBe(75);
      expect(
        outcome?.consequences.approvalChanges.cabinet?.[CabinetStaticId.State]
      ).toBe(SituationConsequenceWeight.StronglyPositive);
      expect(
        outcome?.consequences.approvalChanges.subgroups?.[
          SubgroupStaticId.LeftWingBase
        ]
      ).toBe(SituationConsequenceWeight.Positive);
    });

    it("should return null outcome for invalid outcome ID", async () => {
      const validContent = {
        preferences: {
          president: {
            answerType: "deny",
            rationale:
              "President chooses to reject allegations and maintain strong denial of any wrongdoing in this matter",
          },
        },
        outcomes: [
          {
            id: "outcome_1",
            title: "Strong Denial Succeeds",
            description:
              "The denial strategy works effectively and public support remains stable for the administration",
            weight: 55,
            consequences: {
              approvalChanges: {
                cabinet: {
                  [CabinetStaticId.Justice]: SituationConsequenceWeight.Neutral,
                },
              },
            },
          },
          {
            id: "outcome_2",
            title: "Denial Strategy Backfires",
            description:
              "The denial approach fails and creates more skepticism among the public and media coverage",
            weight: 45,
            consequences: {
              approvalChanges: {
                cabinet: {
                  [CabinetStaticId.Justice]:
                    SituationConsequenceWeight.SlightlyNegative,
                },
              },
            },
          },
        ],
      };

      const situation = await createTestSituation(database, {
        content: JSON.stringify(validContent),
        outcomeId: "nonexistent_outcome",
      });

      const outcome = situation.outcome;
      expect(outcome).toBeNull();
    });

    it("should return null outcome when no outcome is set", async () => {
      const situation = await createTestSituation(database, {
        outcomeId: null,
      });

      const outcome = situation.outcome;
      expect(outcome).toBeNull();
    });
  });

  describe("Follow-up Detection", () => {
    it("should detect when outcome has follow-up", async () => {
      const contentWithFollowUp = {
        preferences: {
          president: {
            answerType: "challenge",
            rationale:
              "President decides to take a confrontational approach to demonstrate strength and resolve in this situation",
          },
        },
        outcomes: [
          {
            id: "outcome_1",
            title: "Initial Strong Response",
            description:
              "First aggressive response succeeds in demonstrating presidential authority but creates new challenges",
            weight: 65,
            followUpId: "follow_up_situation_1",
            consequences: {
              approvalChanges: {
                cabinet: {
                  [CabinetStaticId.Defense]:
                    SituationConsequenceWeight.SlightlyPositive,
                },
              },
            },
          },
          {
            id: "outcome_2",
            title: "Challenge Strategy Fails",
            description:
              "The confrontational approach backfires and damages relationships with key stakeholders significantly",
            weight: 35,
            consequences: {
              approvalChanges: {
                cabinet: {
                  [CabinetStaticId.Defense]:
                    SituationConsequenceWeight.Negative,
                },
              },
            },
          },
        ],
      };

      const situation = await createTestSituation(database, {
        content: JSON.stringify(contentWithFollowUp),
        outcomeId: "outcome_1",
      });

      expect(situation.hasFollowUp).toBe(true);
      expect(situation.followUpId).toBe("follow_up_situation_1");
    });

    it("should detect when outcome has no follow-up", async () => {
      const contentWithoutFollowUp = {
        preferences: {
          president: {
            answerType: "admit",
            rationale:
              "President believes honesty and accountability are the best path forward for maintaining public trust",
          },
        },
        outcomes: [
          {
            id: "outcome_1",
            title: "Honest Admission Works",
            description:
              "The admission of fault and commitment to improvement resonates well with the public and media",
            weight: 80,
            consequences: {
              approvalChanges: {
                subgroups: {
                  [SubgroupStaticId.IndependentBase]:
                    SituationConsequenceWeight.Neutral,
                },
              },
            },
          },
          {
            id: "outcome_2",
            title: "Admission Creates Weakness",
            description:
              "The admission is seen as weakness and vulnerability by political opponents and some supporters",
            weight: 20,
            consequences: {
              approvalChanges: {
                subgroups: {
                  [SubgroupStaticId.IndependentBase]:
                    SituationConsequenceWeight.SlightlyNegative,
                },
              },
            },
          },
        ],
      };

      const situation = await createTestSituation(database, {
        content: JSON.stringify(contentWithoutFollowUp),
        outcomeId: "outcome_1",
      });

      expect(situation.hasFollowUp).toBe(false);
      expect(situation.followUpId).toBeNull();
    });

    it("should handle follow-up detection with invalid content", async () => {
      const consoleSpy = jest.spyOn(console, "error").mockImplementation();

      const situation = await createTestSituation(database, {
        content: "invalid json",
        outcomeId: "outcome_1",
      });

      expect(situation.hasFollowUp).toBe(false);
      expect(situation.followUpId).toBeNull();
      expect(consoleSpy).toHaveBeenCalled();

      consoleSpy.mockRestore();
    });

    it("should return false for follow-up when no outcome is set", async () => {
      const situation = await createTestSituation(database, {
        outcomeId: null,
      });

      expect(situation.hasFollowUp).toBe(false);
      expect(situation.followUpId).toBeNull();
    });
  });

  describe("Press Exchange Relationships", () => {
    it("should maintain relationship with press exchanges", async () => {
      const game = await createTestGame(database);
      const level = await createTestLevel(database, { gameId: game.id });
      const situation = await createTestSituation(database, {
        gameId: game.id,
        levelId: level.id,
      });

      const pressExchange1 = await createTestPressExchange(database, {
        levelId: level.id,
        situationId: situation.id,
      });

      const pressExchange2 = await createTestPressExchange(database, {
        levelId: level.id,
        situationId: situation.id,
      });

      const relatedExchanges = await situation.pressExchanges.fetch();
      expect(relatedExchanges).toHaveLength(2);
      expect(relatedExchanges.map((pe) => pe.id)).toContain(pressExchange1.id);
      expect(relatedExchanges.map((pe) => pe.id)).toContain(pressExchange2.id);
    });
  });

  describe("Situation Types", () => {
    it("should handle all situation types correctly", async () => {
      const situationTypes = Object.values(SituationType);

      for (const type of situationTypes) {
        const situation = await createTestSituation(database, {
          type,
          title: `${type} Situation`,
        });

        expect(situation.type).toBe(type);
        expect(situation.title).toBe(`${type} Situation`);
      }
    });
  });

  describe("Edge Cases and Error Handling", () => {
    it("should handle multiple outcome retrievals correctly", async () => {
      const multiOutcomeContent = {
        preferences: {
          president: {
            answerType: "deflect",
            rationale:
              "President chooses to redirect attention away from controversial aspects while maintaining credibility",
          },
        },
        outcomes: [
          {
            id: "outcome_1",
            title: "Deflection Strategy Works",
            description:
              "Successfully redirecting attention allows the administration to focus on positive policy achievements",
            weight: 50,
            consequences: {
              approvalChanges: {
                cabinet: {
                  [CabinetStaticId.HHS]:
                    SituationConsequenceWeight.SlightlyPositive,
                },
              },
            },
          },
          {
            id: "outcome_2",
            title: "Deflection Appears Evasive",
            description:
              "The attempt to deflect is seen as evasive and increases media scrutiny of the administration",
            weight: 30,
            consequences: {
              approvalChanges: {
                subgroups: {
                  [SubgroupStaticId.YouthVoters]:
                    SituationConsequenceWeight.SlightlyNegative,
                },
              },
            },
          },
          {
            id: "outcome_3",
            title: "Mixed Public Reception",
            description:
              "Some audiences appreciate the deflection while others demand more direct answers to questions",
            weight: 20,
            consequences: {
              approvalChanges: {
                cabinet: {
                  [CabinetStaticId.Homeland]:
                    SituationConsequenceWeight.Neutral,
                },
              },
            },
          },
        ],
      };

      const situation = await createTestSituation(database, {
        content: JSON.stringify(multiOutcomeContent),
        outcomeId: "outcome_2",
      });

      const outcome = situation.outcome;
      expect(outcome?.id).toBe("outcome_2");
      expect(outcome?.title).toBe("Deflection Appears Evasive");
      expect(outcome?.weight).toBe(30);
    });

    it("should handle situation with complex consequence structure", async () => {
      const complexContent = {
        preferences: {
          president: {
            answerType: "authorized",
            rationale:
              "Cabinet coordination required for this sensitive matter involving multiple departments and agencies",
          },
          cabinet: {
            [CabinetStaticId.State]: {
              preference: {
                answerType: "inform",
                rationale:
                  "State Department prefers complete transparency to maintain diplomatic relationships and trust",
              },
              authorizedContent:
                "Classified diplomatic communications reveal ongoing negotiations with foreign partners regarding this sensitive issue",
            },
          },
        },
        outcomes: [
          {
            id: "complex_outcome",
            title: "Multi-Department Coordination Success",
            description:
              "Successful coordination between multiple departments leads to effective resolution of complex policy challenges",
            weight: 85,
            consequences: {
              approvalChanges: {
                cabinet: {
                  [CabinetStaticId.State]:
                    SituationConsequenceWeight.StronglyPositive,
                  [CabinetStaticId.Defense]:
                    SituationConsequenceWeight.Positive,
                  [CabinetStaticId.Treasury]:
                    SituationConsequenceWeight.SlightlyNegative,
                },
                subgroups: {
                  [SubgroupStaticId.LeftWingBase]:
                    SituationConsequenceWeight.Positive,
                  [SubgroupStaticId.RightWingBase]:
                    SituationConsequenceWeight.Negative,
                  [SubgroupStaticId.IndependentBase]:
                    SituationConsequenceWeight.Neutral,
                },
              },
            },
          },
          {
            id: "coordination_failure",
            title: "Department Coordination Fails",
            description:
              "Poor coordination between departments leads to confused messaging and policy implementation problems",
            weight: 15,
            consequences: {
              approvalChanges: {
                cabinet: {
                  [CabinetStaticId.State]: SituationConsequenceWeight.Negative,
                },
              },
            },
          },
        ],
      };

      const situation = await createTestSituation(database, {
        content: JSON.stringify(complexContent),
        outcomeId: "complex_outcome",
      });

      const outcome = situation.outcome;
      expect(
        outcome?.consequences.approvalChanges.cabinet?.[CabinetStaticId.State]
      ).toBe(SituationConsequenceWeight.StronglyPositive);
      expect(
        outcome?.consequences.approvalChanges.cabinet?.[CabinetStaticId.Defense]
      ).toBe(SituationConsequenceWeight.Positive);
      expect(
        outcome?.consequences.approvalChanges.subgroups?.[
          SubgroupStaticId.LeftWingBase
        ]
      ).toBe(SituationConsequenceWeight.Positive);
      expect(
        outcome?.consequences.approvalChanges.subgroups?.[
          SubgroupStaticId.RightWingBase
        ]
      ).toBe(SituationConsequenceWeight.Negative);
    });

    it("should maintain data integrity across updates", async () => {
      const situation = await createTestSituation(database, {
        title: "Original",
        description: "Original description",
        type: SituationType.DomesticPolicy,
      });

      await database.write(async () => {
        await situation.update((s) => {
          s.title = "Updated Title";
          s.description = "Updated description";
          s.type = SituationType.ForeignAffairs;
        });
      });

      expect(situation.title).toBe("Updated Title");
      expect(situation.description).toBe("Updated description");
      expect(situation.type).toBe(SituationType.ForeignAffairs);
    });
  });
});
