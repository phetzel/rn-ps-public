import { Model, Relation } from '@nozbe/watermelondb';
import { field, text, date, relation, readonly, writer } from '@nozbe/watermelondb/decorators';

import {
  getCurrentQuestion,
  updateProgressWithAnswer,
  updateProgressWithSkip,
  initializeExchangeProgress,
} from '~/lib/game/exchange-tree';
import { exchangeContentSchema, exchangeProgressSchema } from '~/lib/schemas';
import { ExchangeContent, ExchangeProgress, Question } from '~/types';

import type Journalist from './Journalist';
import type Level from './Level';
import type Situation from './Situation';
import type { Associations } from '@nozbe/watermelondb/Model';

export default class PressExchange extends Model {
  static table = 'press_exchanges';

  static associations: Associations = {
    levels: { type: 'belongs_to', key: 'level_id' },
    situations: { type: 'belongs_to', key: 'situation_id' },
    journalists: { type: 'belongs_to', key: 'journalist_id' },
  };

  @relation('levels', 'level_id') level!: Relation<Level>;
  @relation('situations', 'situation_id') situation!: Relation<Situation>;
  @relation('journalists', 'journalist_id') journalist!: Relation<Journalist>;

  @text('content') content!: string; // Static exchange content (JSON)
  @text('progress') progress!: string; // User's progress (JSON)

  @field('level_id') level_id!: string;
  @field('situation_id') situation_id!: string;
  @field('journalist_id') journalist_id!: string;

  @readonly @date('created_at') createdAt!: Date;
  @readonly @date('updated_at') updatedAt!: Date;

  // --- Content and Progress Parsing ---
  get parseContent(): ExchangeContent | null {
    if (!this.content) return null;

    try {
      const parsed = JSON.parse(this.content);
      const validationResult = exchangeContentSchema.safeParse(parsed);

      if (!validationResult.success) {
        console.warn(
          'PressExchange.content getter: Invalid data structure found in DB:',
          validationResult.error.format(),
        );
        console.warn('Raw content causing validation error:', JSON.stringify(parsed, null, 2));
        return null;
      }
      return validationResult.data;
    } catch (e) {
      console.error(`Error parsing PressExchange ${this.id} content:`, e);
      console.error('Invalid JSON string:', this.content);
      return null;
    }
  }

  get parseProgress(): ExchangeProgress | null {
    if (!this.progress) return null;

    try {
      const parsed = JSON.parse(this.progress);
      const validationResult = exchangeProgressSchema.safeParse(parsed);

      if (!validationResult.success) {
        console.warn(
          'PressExchange.progress getter: Invalid data structure found in DB:',
          validationResult.error.format(),
        );
        return null;
      }
      return validationResult.data;
    } catch (e) {
      console.error(`Error parsing PressExchange ${this.id} progress:`, e);
      console.error('Invalid JSON string:', this.progress);
      return null;
    }
  }

  //   Helper methods
  get currentQuestion(): Question | null {
    const content = this.parseContent;
    const progress = this.parseProgress;

    if (!content || !progress) {
      return null;
    }

    // Use the new utility function instead of direct JSON manipulation
    return getCurrentQuestion(progress, content);
  }

  // --- Press Conference Actions ---
  @writer async answerQuestion(answerId: string) {
    const content = this.parseContent;
    const progress = this.parseProgress;

    if (!content || !progress) throw new Error('Exchange content or progress not found');

    try {
      // Use the new utility function to update progress
      const updatedProgress = updateProgressWithAnswer(progress, answerId, content);

      await this.update((exchange) => {
        exchange.progress = JSON.stringify(updatedProgress);
      });
    } catch (error) {
      throw new Error(
        `Failed to answer question: ${error instanceof Error ? error.message : String(error)}`,
      );
    }
  }

  @writer async skipQuestion() {
    const content = this.parseContent;
    const progress = this.parseProgress;

    if (!content || !progress) throw new Error('Exchange content or progress not found');

    try {
      // Use the new utility function to update progress
      const updatedProgress = updateProgressWithSkip(progress, content);

      await this.update((exchange) => {
        exchange.progress = JSON.stringify(updatedProgress);
      });
    } catch (error) {
      throw new Error(
        `Failed to skip question: ${error instanceof Error ? error.message : String(error)}`,
      );
    }
  }

  // --- Initialization ---
  @writer async initializeProgress() {
    const initialProgress = initializeExchangeProgress();

    await this.update((exchange) => {
      exchange.progress = JSON.stringify(initialProgress);
    });
  }
}
