import { Model } from '@nozbe/watermelondb';
import {
  field,
  text,
  date,
  relation,
  readonly,
  writer,
  children,
} from '@nozbe/watermelondb/decorators';

import { situationContentSchema } from '~/lib/schemas';

import type { Relation, Query } from '@nozbe/watermelondb';
import type { Associations } from '@nozbe/watermelondb/Model';
import type { Game, Level, PressExchange } from '~/lib/db/models';
import type { SituationType, SituationContent, SituationOutcome } from '~/types';

export default class Situation extends Model {
  static readonly table = 'situations';

  static readonly associations: Associations = {
    game: { type: 'belongs_to', key: 'game_id' },
    level: { type: 'belongs_to', key: 'level_id' },
    press_exchanges: { type: 'has_many', foreignKey: 'situation_id' },
  };

  @relation('games', 'game_id') game!: Relation<Game>;
  @relation('levels', 'level_id') level!: Relation<Level>;
  @children('press_exchanges') pressExchanges!: Query<PressExchange>;

  @text('type') type!: SituationType;
  @text('title') title!: string;
  @text('description') description!: string;
  @text('content') content!: string; // JSON string for static situation data
  @text('outcome_id') outcomeId!: string | null;

  @field('game_id') game_id!: string;
  @field('level_id') level_id!: string;

  @readonly @date('created_at') createdAt!: Date;
  @readonly @date('updated_at') updatedAt!: Date;

  // Actions
  // --- Situation Progress ---
  get parseContent(): SituationContent | null {
    // Check this.content instead of this.progress
    if (!this.content) {
      return null;
    }

    try {
      // Parse this.content
      const parsedData = JSON.parse(this.content);
      // Use renamed schema
      const validationResult = situationContentSchema.safeParse(parsedData);

      if (!validationResult.success) {
        console.warn(
          // Update warning message
          'Situation.content getter: Invalid data structure found in DB:',
          validationResult.error.format(),
        );
        return null;
      }
      return validationResult.data;
    } catch (e) {
      // Update error message
      console.error(`Error parsing Situation ${this.id} content:`, e);
      // Log this.content
      console.error('Invalid JSON string:', this.content);
      return null;
    }
  }

  // Helper methods for outcome
  @writer async setOutcome(outcomeId: string) {
    await this.update((situation) => {
      situation.outcomeId = outcomeId;
    });
  }

  get outcome(): SituationOutcome | null {
    const content = this.parseContent;
    if (!this.outcomeId || !content || !content.outcomes) {
      return null;
    }

    return content.outcomes.find((o) => o.id === this.outcomeId) || null;
  }

  // Helper methods for follow-up
  get hasFollowUp(): boolean {
    if (!this.outcomeId || !this.content) {
      return false;
    }

    try {
      const parsedContent = JSON.parse(this.content) as SituationContent;
      const outcome = parsedContent.outcomes.find((o) => o.id === this.outcomeId);
      return !!outcome?.followUpId;
    } catch (e) {
      console.error(`Error checking for follow-up in situation ${this.id}:`, e);
      return false;
    }
  }

  get followUpId(): string | null {
    if (!this.outcomeId || !this.content) {
      return null;
    }

    try {
      const parsedContent = JSON.parse(this.content) as SituationContent;
      const outcome = parsedContent.outcomes.find((o) => o.id === this.outcomeId);
      return outcome?.followUpId || null;
    } catch (e) {
      console.error(`Error getting follow-up ID for situation ${this.id}:`, e);
      return null;
    }
  }
}
