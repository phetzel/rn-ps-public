/**
 * PressExchange Model Tests
 *
 * Tests core functionality of the PressExchange model including:
 * - Model creation and relationships
 * - Content and progress JSON parsing with schema validation
 * - Press conference workflow (answering and skipping questions)
 * - Current question logic
 * - Error handling for invalid data
 */

import { Database } from "@nozbe/watermelondb";
import { testDatabase, resetTestDatabase } from "../index";
import {
  createTestGame,
  createTestLevel,
  createTestSituation,
  createTestJournalist,
  createTestPressExchange,
} from "../fixtures";

// Models & Types
import { PressExchange } from "~/lib/db/models";
import {
  AnswerType,
  ExchangeImpactWeight,
  OutcomeModifierWeight,
} from "~/types";

describe("PressExchange Model", () => {
  let database: Database;

  beforeEach(async () => {
    database = testDatabase;
    await resetTestDatabase(database);
  });

  // ═══════════════════════════════════════════════════════════════════════════════
  // MODEL STRUCTURE & PROPERTIES
  // ═══════════════════════════════════════════════════════════════════════════════

  describe("Model Structure", () => {
    it("should have correct table name and associations", () => {
      expect(PressExchange.table).toBe("press_exchanges");
      expect(PressExchange.associations.levels).toEqual({
        type: "belongs_to",
        key: "level_id",
      });
      expect(PressExchange.associations.situations).toEqual({
        type: "belongs_to",
        key: "situation_id",
      });
      expect(PressExchange.associations.journalists).toEqual({
        type: "belongs_to",
        key: "journalist_id",
      });
    });

    it("should create press exchange with required properties", async () => {
      const game = await createTestGame(database);
      const level = await createTestLevel(database, { gameId: game.id });
      const situation = await createTestSituation(database, {
        gameId: game.id,
        levelId: level.id,
      });
      const journalist = await createTestJournalist(database, {
        gameId: game.id,
      });

      const exchange = await createTestPressExchange(database, {
        levelId: level.id,
        situationId: situation.id,
        journalistId: journalist.id,
      });

      expect(exchange.id).toBeDefined();
      expect(exchange.level_id).toBe(level.id);
      expect(exchange.situation_id).toBe(situation.id);
      expect(exchange.journalist_id).toBe(journalist.id);
      expect(exchange.content).toBeDefined();
      expect(exchange.progress).toBeDefined();
      expect(exchange.createdAt).toBeInstanceOf(Date);
      expect(exchange.updatedAt).toBeInstanceOf(Date);
    });

    it("should have correct relationships", async () => {
      const game = await createTestGame(database);
      const level = await createTestLevel(database, { gameId: game.id });
      const situation = await createTestSituation(database, {
        gameId: game.id,
        levelId: level.id,
      });
      const journalist = await createTestJournalist(database, {
        gameId: game.id,
      });

      const exchange = await createTestPressExchange(database, {
        levelId: level.id,
        situationId: situation.id,
        journalistId: journalist.id,
      });

      // Test relationships
      const relatedLevel = await exchange.level.fetch();
      const relatedSituation = await exchange.situation.fetch();
      const relatedJournalist = await exchange.journalist.fetch();

      expect(relatedLevel.id).toBe(level.id);
      expect(relatedSituation.id).toBe(situation.id);
      expect(relatedJournalist.id).toBe(journalist.id);

      // Test reverse relationships
      const levelExchanges = await level.pressExchanges.fetch();
      const journalistExchanges = await journalist.pressExchanges.fetch();

      expect(levelExchanges.find((e) => e.id === exchange.id)).toBeDefined();
      expect(
        journalistExchanges.find((e) => e.id === exchange.id)
      ).toBeDefined();
    });
  });

  // ═══════════════════════════════════════════════════════════════════════════════
  // CONTENT PARSING
  // ═══════════════════════════════════════════════════════════════════════════════

  describe("Content Parsing", () => {
    it("should parse valid content JSON", async () => {
      const validContent = {
        questions: {
          q1: {
            id: "q1",
            text: "What is the administration's response to this developing situation today?",
            depth: 0,
            answers: [
              {
                id: "a1",
                text: "We are currently reviewing all available information and will provide a comprehensive response once our analysis is complete and we have consulted with relevant stakeholders",
                type: AnswerType.Inform,
                impacts: {
                  president: {
                    weight: ExchangeImpactWeight.Positive,
                    reaction:
                      "The President appreciates the transparency and measured approach to this situation",
                  },
                },
                outcomeModifiers: {
                  "outcome-1": OutcomeModifierWeight.SlightPositive,
                  "outcome-2": OutcomeModifierWeight.SlightNegative,
                },
              },
              {
                id: "a2",
                text: "I cannot provide specific details at this time, but I can assure you that the administration takes this matter very seriously and is committed to addressing it appropriately",
                type: AnswerType.Deflect,
                impacts: {},
                outcomeModifiers: {},
              },
            ],
          },
        },
        rootQuestionId: "q1",
      };

      const exchange = await createTestPressExchange(database, {
        content: JSON.stringify(validContent),
      });

      const parsed = exchange.parseContent;
      expect(parsed).toEqual(validContent);
    });

    it("should return null for empty content", async () => {
      const exchange = await createTestPressExchange(database, {
        content: "",
      });

      const parsed = exchange.parseContent;
      expect(parsed).toBeNull();
    });

    it("should handle invalid JSON in content", async () => {
      const consoleSpy = jest.spyOn(console, "error").mockImplementation();

      const exchange = await createTestPressExchange(database, {
        content: "invalid json {",
      });

      const parsed = exchange.parseContent;
      expect(parsed).toBeNull();
      expect(consoleSpy).toHaveBeenCalled();

      consoleSpy.mockRestore();
    });

    it("should handle content that fails schema validation", async () => {
      const consoleWarnSpy = jest.spyOn(console, "warn").mockImplementation();

      const invalidContent = {
        invalidField: "some value",
      };

      const exchange = await createTestPressExchange(database, {
        content: JSON.stringify(invalidContent),
      });

      const parsed = exchange.parseContent;
      expect(parsed).toBeNull();
      expect(consoleWarnSpy).toHaveBeenCalled();

      consoleWarnSpy.mockRestore();
    });
  });

  // ═══════════════════════════════════════════════════════════════════════════════
  // PROGRESS PARSING
  // ═══════════════════════════════════════════════════════════════════════════════

  describe("Progress Parsing", () => {
    it("should parse valid progress JSON", async () => {
      const validProgress = {
        history: [
          {
            questionId: "q1",
            answerId: "a1",
            skipped: false,
          },
        ],
        currentQuestionId: "q2",
      };

      const exchange = await createTestPressExchange(database, {
        progress: JSON.stringify(validProgress),
      });

      const parsed = exchange.parseProgress;
      expect(parsed).toEqual(validProgress);
    });

    it("should return null for empty progress", async () => {
      const exchange = await createTestPressExchange(database, {
        progress: "",
      });

      const parsed = exchange.parseProgress;
      expect(parsed).toBeNull();
    });

    it("should handle invalid JSON in progress", async () => {
      const consoleSpy = jest.spyOn(console, "error").mockImplementation();

      const exchange = await createTestPressExchange(database, {
        progress: "invalid json {",
      });

      const parsed = exchange.parseProgress;
      expect(parsed).toBeNull();
      expect(consoleSpy).toHaveBeenCalled();

      consoleSpy.mockRestore();
    });

    it("should handle progress that fails schema validation", async () => {
      const consoleWarnSpy = jest.spyOn(console, "warn").mockImplementation();

      const invalidProgress = {
        invalidField: "some value",
      };

      const exchange = await createTestPressExchange(database, {
        progress: JSON.stringify(invalidProgress),
      });

      const parsed = exchange.parseProgress;
      expect(parsed).toBeNull();
      expect(consoleWarnSpy).toHaveBeenCalled();

      consoleWarnSpy.mockRestore();
    });
  });

  // ═══════════════════════════════════════════════════════════════════════════════
  // CURRENT QUESTION LOGIC
  // ═══════════════════════════════════════════════════════════════════════════════

  describe("Current Question Logic", () => {
    it("should return current question when valid", async () => {
      const content = {
        questions: {
          q1: {
            id: "q1",
            text: "What is the administration's current stance on this particular policy issue?",
            depth: 0,
            answers: [
              {
                id: "a1",
                text: "We strongly support this initiative and believe it represents the best path forward for addressing the current challenges facing our nation today",
                type: AnswerType.Reassure,
                impacts: {},
                outcomeModifiers: {},
              },
              {
                id: "a2",
                text: "We are still in the process of reviewing all aspects of this policy and will provide our position once that review is complete and thorough",
                type: AnswerType.Deflect,
                impacts: {},
                outcomeModifiers: {},
              },
            ],
          },
          q2: {
            id: "q2",
            text: "Can you provide any additional details or context regarding the timeline for implementation?",
            depth: 1,
            answers: [
              {
                id: "a3",
                text: "I don't have any additional information to share at this time, but we'll keep you updated as more details become available to us",
                type: AnswerType.Deflect,
                impacts: {},
                outcomeModifiers: {},
              },
              {
                id: "a4",
                text: "We expect to have more concrete details and a clearer timeline within the next few weeks as our review process continues to move forward",
                type: AnswerType.Inform,
                impacts: {},
                outcomeModifiers: {},
              },
            ],
          },
        },
        rootQuestionId: "q1",
      };

      const progress = {
        history: [],
        currentQuestionId: "q2",
      };

      const exchange = await createTestPressExchange(database, {
        content: JSON.stringify(content),
        progress: JSON.stringify(progress),
      });

      const currentQuestion = exchange.currentQuestion;
      expect(currentQuestion).toEqual(content.questions.q2);
    });

    it("should return null when no current question ID", async () => {
      const content = {
        questions: {
          q1: {
            id: "q1",
            text: "What is the administration's position on this matter that has been developing?",
            depth: 0,
            answers: [
              {
                id: "a1",
                text: "We are committed to addressing this issue in a comprehensive and thoughtful manner that takes into account all relevant factors",
                type: AnswerType.Reassure,
                impacts: {},
                outcomeModifiers: {},
              },
              {
                id: "a2",
                text: "I cannot provide specific details at this time but can assure you we are taking this matter very seriously indeed",
                type: AnswerType.Deflect,
                impacts: {},
                outcomeModifiers: {},
              },
            ],
          },
        },
        rootQuestionId: "q1",
      };

      const progress = {
        history: [],
        currentQuestionId: null,
      };

      const exchange = await createTestPressExchange(database, {
        content: JSON.stringify(content),
        progress: JSON.stringify(progress),
      });

      const currentQuestion = exchange.currentQuestion;
      expect(currentQuestion).toBeNull();
    });

    it("should return null when content or progress is invalid", async () => {
      const exchange = await createTestPressExchange(database, {
        content: "invalid json",
        progress: JSON.stringify({ history: [], currentQuestionId: "q1" }),
      });

      const currentQuestion = exchange.currentQuestion;
      expect(currentQuestion).toBeNull();
    });

    it("should return null when question ID not found in content", async () => {
      const content = {
        questions: {
          q1: {
            id: "q1",
            text: "What is the administration's position on this developing policy matter today?",
            depth: 0,
            answers: [
              {
                id: "a1",
                text: "We are committed to working with all stakeholders to find the most effective solution to this important challenge facing us",
                type: AnswerType.Reassure,
                impacts: {},
                outcomeModifiers: {},
              },
              {
                id: "a2",
                text: "I don't have specific details to share at this time but will follow up with you as soon as more information becomes available",
                type: AnswerType.Deflect,
                impacts: {},
                outcomeModifiers: {},
              },
            ],
          },
        },
        rootQuestionId: "q1",
      };

      const progress = {
        history: [],
        currentQuestionId: "nonexistent",
      };

      const exchange = await createTestPressExchange(database, {
        content: JSON.stringify(content),
        progress: JSON.stringify(progress),
      });

      const currentQuestion = exchange.currentQuestion;
      expect(currentQuestion).toBeNull();
    });
  });

  // ═══════════════════════════════════════════════════════════════════════════════
  // ANSWER QUESTION WORKFLOW
  // ═══════════════════════════════════════════════════════════════════════════════

  describe("Answer Question Workflow", () => {
    it("should answer question and update progress", async () => {
      const content = {
        questions: {
          q1: {
            id: "q1",
            text: "What is the administration's official response to this significant development?",
            depth: 0,
            answers: [
              {
                id: "a1",
                text: "We are actively addressing this situation and working closely with all relevant agencies to ensure a comprehensive response",
                type: AnswerType.Inform,
                impacts: {},
                outcomeModifiers: {},
                followUpId: "q2",
              },
              {
                id: "a2",
                text: "I'm not able to provide specific details at this time, but I can assure you that this matter is being handled appropriately",
                type: AnswerType.Deflect,
                impacts: {},
                outcomeModifiers: {},
              },
            ],
          },
          q2: {
            id: "q2",
            text: "Can you elaborate on the specific steps being taken to address this particular issue?",
            depth: 1,
            answers: [
              {
                id: "a3",
                text: "We are implementing a multi-faceted approach that includes coordination with federal agencies and consultation with relevant experts",
                type: AnswerType.Inform,
                impacts: {},
                outcomeModifiers: {},
              },
              {
                id: "a4",
                text: "I don't have additional details to share at this time, but we will provide updates as they become available to us",
                type: AnswerType.Deflect,
                impacts: {},
                outcomeModifiers: {},
              },
            ],
          },
        },
        rootQuestionId: "q1",
      };

      const initialProgress = {
        history: [],
        currentQuestionId: "q1",
      };

      const exchange = await createTestPressExchange(database, {
        content: JSON.stringify(content),
        progress: JSON.stringify(initialProgress),
      });

      // Answer the question
      await exchange.answerQuestion("a1");

      // Verify progress was updated
      const updatedProgress = exchange.parseProgress;
      expect(updatedProgress?.history).toHaveLength(1);
      expect(updatedProgress?.history[0]).toEqual({
        questionId: "q1",
        answerId: "a1",
        skipped: false,
      });
      expect(updatedProgress?.currentQuestionId).toBe("q2");
    });

    it("should end exchange when answer has no follow-up", async () => {
      const content = {
        questions: {
          q1: {
            id: "q1",
            text: "Is there anything else the administration would like to say about this matter?",
            depth: 0,
            answers: [
              {
                id: "a1",
                text: "That concludes our remarks on this topic, and we appreciate your continued interest in keeping the public informed",
                type: AnswerType.Inform,
                impacts: {},
                outcomeModifiers: {},
                // No followUpId
              },
              {
                id: "a2",
                text: "I believe we have covered everything we can discuss publicly at this time, thank you for your understanding",
                type: AnswerType.Deflect,
                impacts: {},
                outcomeModifiers: {},
              },
            ],
          },
        },
        rootQuestionId: "q1",
      };

      const initialProgress = {
        history: [],
        currentQuestionId: "q1",
      };

      const exchange = await createTestPressExchange(database, {
        content: JSON.stringify(content),
        progress: JSON.stringify(initialProgress),
      });

      await exchange.answerQuestion("a1");

      const updatedProgress = exchange.parseProgress;
      expect(updatedProgress?.currentQuestionId).toBeNull();
    });

    it("should throw error when no current question", async () => {
      const content = {
        questions: {
          q1: {
            id: "q1",
            text: "What is the administration's position on this policy development today?",
            depth: 0,
            answers: [
              {
                id: "a1",
                text: "We are committed to working with all stakeholders to address this important issue in a comprehensive manner",
                type: AnswerType.Reassure,
                impacts: {},
                outcomeModifiers: {},
              },
              {
                id: "a2",
                text: "I don't have specific details to share at this time but will follow up with more information as it becomes available",
                type: AnswerType.Deflect,
                impacts: {},
                outcomeModifiers: {},
              },
            ],
          },
        },
        rootQuestionId: "q1",
      };

      const progress = {
        history: [],
        currentQuestionId: null,
      };

      const exchange = await createTestPressExchange(database, {
        content: JSON.stringify(content),
        progress: JSON.stringify(progress),
      });

      await expect(exchange.answerQuestion("a1")).rejects.toThrow(
        "No current question to answer"
      );
    });

    it("should throw error when answer not found", async () => {
      const content = {
        questions: {
          q1: {
            id: "q1",
            text: "What is the administration's response to this developing situation today?",
            depth: 0,
            answers: [
              {
                id: "a1",
                text: "We are actively monitoring the situation and working with relevant agencies to ensure an appropriate response",
                type: AnswerType.Inform,
                impacts: {},
                outcomeModifiers: {},
              },
              {
                id: "a2",
                text: "I cannot provide specific details at this time, but I can assure you that this matter is being handled appropriately",
                type: AnswerType.Deflect,
                impacts: {},
                outcomeModifiers: {},
              },
            ],
          },
        },
        rootQuestionId: "q1",
      };

      const progress = {
        history: [],
        currentQuestionId: "q1",
      };

      const exchange = await createTestPressExchange(database, {
        content: JSON.stringify(content),
        progress: JSON.stringify(progress),
      });

      await expect(exchange.answerQuestion("nonexistent")).rejects.toThrow(
        "Answer nonexistent not found in question q1"
      );
    });

    it("should throw error when question not found", async () => {
      const content = {
        questions: {
          q1: {
            id: "q1",
            text: "What is the administration's official stance on this important policy matter?",
            depth: 0,
            answers: [
              {
                id: "a1",
                text: "We are committed to addressing this issue through careful consideration of all available options and stakeholder input",
                type: AnswerType.Reassure,
                impacts: {},
                outcomeModifiers: {},
              },
              {
                id: "a2",
                text: "I don't have specific details to share at this moment, but we will provide updates as they become available to us",
                type: AnswerType.Deflect,
                impacts: {},
                outcomeModifiers: {},
              },
            ],
          },
        },
        rootQuestionId: "q1",
      };

      const progress = {
        history: [],
        currentQuestionId: "nonexistent",
      };

      const exchange = await createTestPressExchange(database, {
        content: JSON.stringify(content),
        progress: JSON.stringify(progress),
      });

      await expect(exchange.answerQuestion("a1")).rejects.toThrow(
        "Question nonexistent not found"
      );
    });
  });

  // ═══════════════════════════════════════════════════════════════════════════════
  // SKIP QUESTION WORKFLOW
  // ═══════════════════════════════════════════════════════════════════════════════

  describe("Skip Question Workflow", () => {
    it("should skip question and end exchange", async () => {
      const content = {
        questions: {
          q1: {
            id: "q1",
            text: "This is a particularly challenging question about sensitive policy matters, correct?",
            depth: 0,
            answers: [
              {
                id: "a1",
                text: "We are committed to addressing all policy matters with the careful consideration they deserve and merit",
                type: AnswerType.Inform,
                impacts: {},
                outcomeModifiers: {},
              },
              {
                id: "a2",
                text: "I cannot provide specific details on this particular matter at this time due to ongoing review processes",
                type: AnswerType.Deflect,
                impacts: {},
                outcomeModifiers: {},
              },
            ],
          },
        },
        rootQuestionId: "q1",
      };

      const initialProgress = {
        history: [],
        currentQuestionId: "q1",
      };

      const exchange = await createTestPressExchange(database, {
        content: JSON.stringify(content),
        progress: JSON.stringify(initialProgress),
      });

      // Skip the question
      await exchange.skipQuestion();

      // Verify progress was updated
      const updatedProgress = exchange.parseProgress;
      expect(updatedProgress?.history).toHaveLength(1);
      expect(updatedProgress?.history[0]).toEqual({
        questionId: "q1",
        skipped: true,
      });
      expect(updatedProgress?.currentQuestionId).toBeNull();
    });

    it("should throw error when no current question to skip", async () => {
      const content = {
        questions: {
          q1: {
            id: "q1",
            text: "What is the administration's position on this developing policy initiative today?",
            depth: 0,
            answers: [
              {
                id: "a1",
                text: "We are actively reviewing all aspects of this initiative and will provide our position once that process is complete",
                type: AnswerType.Deflect,
                impacts: {},
                outcomeModifiers: {},
              },
              {
                id: "a2",
                text: "This initiative represents an important step forward in addressing the challenges facing our nation today",
                type: AnswerType.Reassure,
                impacts: {},
                outcomeModifiers: {},
              },
            ],
          },
        },
        rootQuestionId: "q1",
      };

      const progress = {
        history: [],
        currentQuestionId: null,
      };

      const exchange = await createTestPressExchange(database, {
        content: JSON.stringify(content),
        progress: JSON.stringify(progress),
      });

      await expect(exchange.skipQuestion()).rejects.toThrow(
        "No current question to skip"
      );
    });
  });

  // ═══════════════════════════════════════════════════════════════════════════════
  // REALISTIC GAME SCENARIOS
  // ═══════════════════════════════════════════════════════════════════════════════

  describe("Game Integration Scenarios", () => {
    it("should support complete press conference flow", async () => {
      const game = await createTestGame(database);
      const level = await createTestLevel(database, { gameId: game.id });
      const situation = await createTestSituation(database, {
        gameId: game.id,
        levelId: level.id,
      });
      const journalist = await createTestJournalist(database, {
        gameId: game.id,
      });

      const content = {
        questions: {
          q1: {
            id: "q1",
            text: "What is the administration's official position on this significant policy development?",
            depth: 0,
            answers: [
              {
                id: "a1",
                text: "We strongly support this initiative and believe it represents the best path forward for addressing the challenges facing our nation",
                type: AnswerType.Reassure,
                impacts: {
                  president: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
                outcomeModifiers: {
                  "outcome-positive": OutcomeModifierWeight.ModeratePositive,
                  "outcome-negative": OutcomeModifierWeight.ModerateNegative,
                },
                followUpId: "q2",
              },
              {
                id: "a2",
                text: "We are still in the process of reviewing all available options and will provide our position once that analysis is complete",
                type: AnswerType.Deflect,
                impacts: {},
                outcomeModifiers: {},
              },
            ],
          },
          q2: {
            id: "q2",
            text: "Can you provide more specific details about the implementation timeline for this initiative?",
            depth: 1,
            answers: [
              {
                id: "a3",
                text: "I'll have more detailed information available soon, but I don't have specific timeline details to share at this particular moment",
                type: AnswerType.Deflect,
                impacts: {},
                outcomeModifiers: {},
              },
              {
                id: "a4",
                text: "We expect to begin implementation within the next quarter, working closely with all relevant agencies and stakeholders involved",
                type: AnswerType.Inform,
                impacts: {},
                outcomeModifiers: {},
              },
            ],
          },
        },
        rootQuestionId: "q1",
      };

      const initialProgress = {
        history: [],
        currentQuestionId: "q1",
      };

      const exchange = await createTestPressExchange(database, {
        levelId: level.id,
        situationId: situation.id,
        journalistId: journalist.id,
        content: JSON.stringify(content),
        progress: JSON.stringify(initialProgress),
      });

      // Simulate answering first question
      expect(exchange.currentQuestion?.id).toBe("q1");
      await exchange.answerQuestion("a1");

      // Should progress to follow-up
      expect(exchange.currentQuestion?.id).toBe("q2");

      // Answer follow-up question
      await exchange.answerQuestion("a3");

      // Should end the exchange
      expect(exchange.currentQuestion).toBeNull();

      // Verify complete history
      const finalProgress = exchange.parseProgress;
      expect(finalProgress?.history).toHaveLength(2);
      expect(finalProgress?.history[0]).toEqual({
        questionId: "q1",
        answerId: "a1",
        skipped: false,
      });
      expect(finalProgress?.history[1]).toEqual({
        questionId: "q2",
        answerId: "a3",
        skipped: false,
      });
    });

    it("should maintain data integrity during complex interactions", async () => {
      const game = await createTestGame(database);
      const level = await createTestLevel(database, { gameId: game.id });
      const situation = await createTestSituation(database, {
        gameId: game.id,
        levelId: level.id,
      });
      const journalist = await createTestJournalist(database, {
        gameId: game.id,
      });

      const exchange = await createTestPressExchange(database, {
        levelId: level.id,
        situationId: situation.id,
        journalistId: journalist.id,
      });

      // Verify all relationships are maintained
      expect((await exchange.level.fetch()).id).toBe(level.id);
      expect((await exchange.situation.fetch()).id).toBe(situation.id);
      expect((await exchange.journalist.fetch()).id).toBe(journalist.id);

      // Verify reverse relationships
      const levelExchanges = await level.pressExchanges.fetch();
      const journalistExchanges = await journalist.pressExchanges.fetch();

      expect(levelExchanges).toHaveLength(1);
      expect(journalistExchanges).toHaveLength(1);
      expect(levelExchanges[0].id).toBe(exchange.id);
      expect(journalistExchanges[0].id).toBe(exchange.id);
    });
  });
});
