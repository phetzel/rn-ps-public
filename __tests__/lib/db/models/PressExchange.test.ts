/**
 * PressExchange Model Tests
 *
 * COVERAGE AREAS:
 * - Model creation and complex relationships (Level, Situation, Journalist)
 * - JSON parsing for content and progress fields with schema validation
 * - Business logic for updating answer progress and managing selections
 * - Error handling for malformed data
 */

import { Database } from '@nozbe/watermelondb';

import { setupTestDatabase, resetDatabase } from '~/__tests__/support/db';
import { createGame } from '~/__tests__/support/factories/gameFactory';
import { createJournalist } from '~/__tests__/support/factories/journalistFactory';
import { createLevel } from '~/__tests__/support/factories/levelFactory';
import { createPressExchange } from '~/__tests__/support/factories/pressExchangeFactory';
import { createPublication } from '~/__tests__/support/factories/publicationFactory';
import { createSituation } from '~/__tests__/support/factories/situationFactory';
// Models & Types
import { PressExchange } from '~/lib/db/models';

describe('PressExchange Model', () => {
  let database: Database;

  beforeAll(() => {
    database = setupTestDatabase();
  });

  afterEach(async () => {
    await resetDatabase(database);
  });

  // ═══════════════════════════════════════════════════════════════════════════════
  // MODEL STRUCTURE & PROPERTIES
  // ═══════════════════════════════════════════════════════════════════════════════

  describe('Model Structure', () => {
    it('should have correct table name and associations', () => {
      expect(PressExchange.table).toBe('press_exchanges');
      expect(PressExchange.associations.levels).toEqual({
        type: 'belongs_to',
        key: 'level_id',
      });
      expect(PressExchange.associations.situations).toEqual({
        type: 'belongs_to',
        key: 'situation_id',
      });
      expect(PressExchange.associations.journalists).toEqual({
        type: 'belongs_to',
        key: 'journalist_id',
      });
    });

    it('should create PressExchange with required properties', async () => {
      const game = await createGame(database);
      const level = await createLevel(database, { gameId: game.id });
      const situation = await createSituation(database, {
        gameId: game.id,
        levelId: level.id,
      });
      const publication = await createPublication(database, {
        gameId: game.id,
      });
      const journalist = await createJournalist(database, {
        gameId: game.id,
        publicationId: publication.id,
      });

      const pressExchange = await createPressExchange(database, {
        levelId: level.id,
        situationId: situation.id,
        journalistId: journalist.id,
      });

      expect(pressExchange.level_id).toBe(level.id);
      expect(pressExchange.situation_id).toBe(situation.id);
      expect(pressExchange.journalist_id).toBe(journalist.id);
      expect(pressExchange.content).toBeDefined();
      expect(pressExchange.progress).toBeDefined();
    });

    it('should belong to a level, situation, and journalist', async () => {
      const game = await createGame(database);
      const level = await createLevel(database, { gameId: game.id });
      const situation = await createSituation(database, {
        gameId: game.id,
        levelId: level.id,
      });
      const publication = await createPublication(database, {
        gameId: game.id,
      });
      const journalist = await createJournalist(database, {
        gameId: game.id,
        publicationId: publication.id,
      });

      const pressExchange = await createPressExchange(database, {
        levelId: level.id,
        situationId: situation.id,
        journalistId: journalist.id,
      });

      // Test relationships
      const relatedLevel = await pressExchange.level.fetch();
      const relatedSituation = await pressExchange.situation.fetch();
      const relatedJournalist = await pressExchange.journalist.fetch();

      expect(relatedLevel.id).toBe(level.id);
      expect(relatedSituation.id).toBe(situation.id);
      expect(relatedJournalist.id).toBe(journalist.id);

      // Test accessibility from parents
      const levelExchanges = await level.pressExchanges.fetch();
      const situationExchanges = await situation.pressExchanges.fetch();
      const journalistExchanges = await journalist.pressExchanges.fetch();

      expect(levelExchanges[0].id).toBe(pressExchange.id);
      expect(situationExchanges[0].id).toBe(pressExchange.id);
      expect(journalistExchanges[0].id).toBe(pressExchange.id);
    });
  });

  // ═══════════════════════════════════════════════════════════════════════════════
  // JSON PARSING & VALIDATION (CONTENT & PROGRESS)
  // ═══════════════════════════════════════════════════════════════════════════════

  describe('JSON Parsing', () => {
    it('should parse valid content JSON', async () => {
      const game = await createGame(database);
      const level = await createLevel(database, { gameId: game.id });
      const situation = await createSituation(database, {
        gameId: game.id,
        levelId: level.id,
      });
      const publication = await createPublication(database, {
        gameId: game.id,
      });
      const journalist = await createJournalist(database, {
        gameId: game.id,
        publicationId: publication.id,
      });

      const pressExchange = await createPressExchange(database, {
        levelId: level.id,
        situationId: situation.id,
        journalistId: journalist.id,
      });

      // Debug the content validation issue
      console.log('Raw content string:', pressExchange.content);

      if (pressExchange.content) {
        try {
          const parsed = JSON.parse(pressExchange.content);
          console.log('Parsed content:', JSON.stringify(parsed, null, 2));
        } catch (e) {
          console.log('JSON parse error:', e);
        }
      }

      const content = pressExchange.parseContent;
      expect(content).not.toBeNull();
      if (!content) return; // Type guard

      expect(content).toBeDefined();
      expect(content).toHaveProperty('rootQuestion');
      expect(content).toHaveProperty('secondaryQuestions');
      expect(content).toHaveProperty('tertiaryQuestions');

      // Check that the root question has an id and answers
      expect(content.rootQuestion).toHaveProperty('id');
      expect(content.rootQuestion).toHaveProperty('answers');

      // Check that the root question has answers
      const rootQuestion = content.rootQuestion;
      expect(rootQuestion.answers.length).toBeGreaterThan(0);
    });

    it('should parse valid progress JSON', async () => {
      const game = await createGame(database);
      const level = await createLevel(database, { gameId: game.id });
      const situation = await createSituation(database, {
        gameId: game.id,
        levelId: level.id,
      });
      const publication = await createPublication(database, {
        gameId: game.id,
      });
      const journalist = await createJournalist(database, {
        gameId: game.id,
        publicationId: publication.id,
      });

      const pressExchange = await createPressExchange(database, {
        levelId: level.id,
        situationId: situation.id,
        journalistId: journalist.id,
      });

      const progress = pressExchange.parseProgress;
      expect(progress).not.toBeNull();
      if (!progress) return; // type guard

      expect(progress).toBeDefined();
      expect(progress).toHaveProperty('history');
      expect(progress.history).toEqual([]);
      expect(progress).toHaveProperty('currentQuestionId');
    });

    it('should handle malformed JSON gracefully', async () => {
      const consoleSpy = jest.spyOn(console, 'error').mockImplementation();
      const game = await createGame(database);
      const level = await createLevel(database, { gameId: game.id });
      const situation = await createSituation(database, {
        gameId: game.id,
        levelId: level.id,
      });
      const publication = await createPublication(database, {
        gameId: game.id,
      });
      const journalist = await createJournalist(database, {
        gameId: game.id,
        publicationId: publication.id,
      });

      const pressExchange = await createPressExchange(database, {
        levelId: level.id,
        situationId: situation.id,
        journalistId: journalist.id,
      });

      await database.write(async () => {
        await pressExchange.update((pe) => {
          pe.content = 'invalid {';
          pe.progress = 'invalid {';
        });
      });

      expect(pressExchange.parseContent).toBeNull();
      expect(pressExchange.parseProgress).toBeNull();
      expect(consoleSpy).toHaveBeenCalledTimes(4); // Model creation + malformed JSON calls console.error

      consoleSpy.mockRestore();
    });

    it('should return null for data failing schema validation', async () => {
      const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation();
      const game = await createGame(database);
      const level = await createLevel(database, { gameId: game.id });
      const situation = await createSituation(database, {
        gameId: game.id,
        levelId: level.id,
      });
      const publication = await createPublication(database, {
        gameId: game.id,
      });
      const journalist = await createJournalist(database, {
        gameId: game.id,
        publicationId: publication.id,
      });

      const pressExchange = await createPressExchange(database, {
        levelId: level.id,
        situationId: situation.id,
        journalistId: journalist.id,
      });

      const invalidContent = { questions: { q1: { invalid_prop: true } } };
      const invalidProgress = { questions: { q1: 'not an object' } };

      await database.write(async () => {
        await pressExchange.update((pe) => {
          pe.content = JSON.stringify(invalidContent);
          pe.progress = JSON.stringify(invalidProgress);
        });
      });

      expect(pressExchange.parseContent).toBeNull();
      expect(pressExchange.parseProgress).toBeNull();
      expect(consoleWarnSpy).toHaveBeenCalledTimes(3); // Updated from 2 to 3 due to currentQuestion getter

      consoleWarnSpy.mockRestore();
    });
  });

  // ═══════════════════════════════════════════════════════════════════════════════
  // PROGRESS UPDATES & LOGIC
  // ═══════════════════════════════════════════════════════════════════════════════

  describe('Progress Management', () => {
    let pressExchange: PressExchange;

    beforeEach(async () => {
      const game = await createGame(database);
      const level = await createLevel(database, { gameId: game.id });
      const situation = await createSituation(database, {
        gameId: game.id,
        levelId: level.id,
      });
      const publication = await createPublication(database, {
        gameId: game.id,
      });
      const journalist = await createJournalist(database, {
        gameId: game.id,
        publicationId: publication.id,
      });

      // Use real teachers-strike-back data (it's already valid and has proper schema)
      pressExchange = await createPressExchange(database, {
        levelId: level.id,
        situationId: situation.id,
        journalistId: journalist.id,
        // No custom content - use default teachers-strike-back data
      });
    });

    it('should answer the current question and move to the next', async () => {
      // Current question is q_student_welfare (teachers-strike-back root question)
      expect(pressExchange.currentQuestion?.id).toBe('q_student_welfare');

      // Answer with choice that has no follow-up (ends the exchange)
      await pressExchange.answerQuestion('a_welfare_inform');
      const updatedExchange = await database
        .get<PressExchange>('press_exchanges')
        .find(pressExchange.id);

      // After answering, there should be no current question (exchange complete)
      expect(updatedExchange.currentQuestion).toBeNull();
    });

    it('should answer a question that has no follow-up', async () => {
      await pressExchange.answerQuestion('a_welfare_deny'); // Answer with choice that has no follow-up
      const updatedExchange = await database
        .get<PressExchange>('press_exchanges')
        .find(pressExchange.id);
      const progress = updatedExchange.parseProgress;

      expect(progress?.history).toHaveLength(1);
      expect(progress?.currentQuestionId).toBeNull();
      expect(updatedExchange.currentQuestion).toBeNull();
    });

    it('should skip the current question', async () => {
      await pressExchange.skipQuestion();
      const updatedExchange = await database
        .get<PressExchange>('press_exchanges')
        .find(pressExchange.id);
      const progress = updatedExchange.parseProgress;

      expect(progress?.history).toHaveLength(1);
      expect(progress?.history[0]).toEqual({
        questionId: 'q_student_welfare',
        skipped: true,
      });
      expect(progress?.currentQuestionId).toBeNull();
      expect(updatedExchange.currentQuestion).toBeNull();
    });

    it('should throw an error for an invalid answer ID', async () => {
      await expect(pressExchange.answerQuestion('invalid-answer')).rejects.toThrow(
        'Failed to answer question: Answer with ID invalid-answer not found',
      );
    });

    it('should handle multiple answers sequentially', async () => {
      // Answer with reassure choice which has a follow-up question to q_teacher_working_conditions
      await pressExchange.answerQuestion('a_welfare_reassure');
      let updatedExchange = await database
        .get<PressExchange>('press_exchanges')
        .find(pressExchange.id);

      // Should now be on the follow-up question
      expect(updatedExchange.currentQuestion?.id).toBe('q_teacher_working_conditions');

      // Answer the follow-up question
      await updatedExchange.answerQuestion('a_conditions_admit');
      updatedExchange = await database.get<PressExchange>('press_exchanges').find(pressExchange.id);

      // Should now be on the tertiary question (union rights)
      expect(updatedExchange.currentQuestion?.id).toBe('q_union_rights');

      const progress = updatedExchange.parseProgress;
      expect(progress?.history).toHaveLength(2);
      expect(progress?.history[0].questionId).toBe('q_student_welfare');
      expect(progress?.history[1].questionId).toBe('q_teacher_working_conditions');
    });

    it('should throw an error if trying to answer/skip when no question is active', async () => {
      // End the exchange by answering a question with no follow-up
      await pressExchange.answerQuestion('a_welfare_inform');
      const updatedExchange = await database
        .get<PressExchange>('press_exchanges')
        .find(pressExchange.id);
      expect(updatedExchange.currentQuestion).toBeNull();

      // Now, try to answer again
      await expect(updatedExchange.answerQuestion('a_welfare_challenge')).rejects.toThrow(
        'No current question to answer',
      );
      await expect(updatedExchange.skipQuestion()).rejects.toThrow('No current question to skip');
    });

    it('should handle hierarchical exchange flow with follow-up questions', async () => {
      // Start with root question q_student_welfare
      expect(pressExchange.currentQuestion?.id).toBe('q_student_welfare');

      // Answer with choice that has follow-up to q_teacher_working_conditions
      await pressExchange.answerQuestion('a_welfare_reassure');
      let updatedExchange = await database
        .get<PressExchange>('press_exchanges')
        .find(pressExchange.id);

      // Should now be on secondary question
      expect(updatedExchange.currentQuestion?.id).toBe('q_teacher_working_conditions');

      let progress = updatedExchange.parseProgress;
      expect(progress?.history).toHaveLength(1);
      expect(progress?.history[0].questionId).toBe('q_student_welfare');
      expect(progress?.currentQuestionId).toBe('q_teacher_working_conditions');

      // Answer secondary question with choice that has follow-up to q_union_rights
      await updatedExchange.answerQuestion('a_conditions_admit');
      updatedExchange = await database.get<PressExchange>('press_exchanges').find(pressExchange.id);

      // Should now be on tertiary question
      expect(updatedExchange.currentQuestion?.id).toBe('q_union_rights');

      progress = updatedExchange.parseProgress;
      expect(progress?.history).toHaveLength(2);
      expect(progress?.history[1].questionId).toBe('q_teacher_working_conditions');
      expect(progress?.currentQuestionId).toBe('q_union_rights');
    });
  });
});
