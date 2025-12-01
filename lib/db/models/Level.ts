import { Model, Relation, Query } from '@nozbe/watermelondb';
import {
  field,
  text,
  date,
  relation,
  readonly,
  children,
  writer,
} from '@nozbe/watermelondb/decorators';

import { cabinetSnapshotSchema, outcomeSnapshotSchema } from '~/lib/schemas';
import { type LevelStatus, type OutcomeSnapshotType, type CabinetSnapshot } from '~/types';

import type Game from './Game';
import type PressExchange from './PressExchange';
import type Situation from './Situation';
import type { Associations } from '@nozbe/watermelondb/Model'; // Import for clarity if needed, but as const is sufficient

export default class Level extends Model {
  static table = 'levels';

  static associations: Associations = {
    games: { type: 'belongs_to', key: 'game_id' },
    situations: { type: 'has_many', foreignKey: 'level_id' },
    press_exchanges: { type: 'has_many', foreignKey: 'level_id' },
  };

  @relation('games', 'game_id') game!: Relation<Game>;
  @children('situations') situations!: Query<Situation>;
  @children('press_exchanges') pressExchanges!: Query<PressExchange>;

  @field('year') year!: number;
  @field('month') month!: number;
  @text('status') status!: LevelStatus;
  @text('cabinet_snapshot') cabinetSnapshot!: string; // JSON string of CabinetSnapshotType
  @text('outcome_snapshot') outcomeSnapshot!: string | null;
  @field('press_ad_watched') pressAdWatched!: boolean;
  @field('situation_ad_watched') situationAdWatched!: boolean;

  @field('game_id') game_id!: string;

  @readonly @date('created_at') createdAt!: Date;
  @readonly @date('updated_at') updatedAt!: Date;

  // Actions
  // --- Cabinet Snapshot ---
  get parseCabinetSnapshot(): CabinetSnapshot | null {
    if (!this.cabinetSnapshot) {
      return null;
    }

    try {
      const parsedData = JSON.parse(this.cabinetSnapshot);
      const validationResult = cabinetSnapshotSchema.safeParse(parsedData);

      if (!validationResult.success) {
        console.warn(
          'Level.cabinetSnapshot getter: Invalid data structure found in DB:',
          validationResult.error.format(),
        );
        return null;
      }
      return validationResult.data;
    } catch (e) {
      console.error(`Error parsing Level ${this.id} cabinetSnapshot:`, e);
      console.error('Invalid JSON string:', this.cabinetSnapshot);
      return null;
    }
  }

  // --- Outcome Snapshot ---
  get parseOutcomeSnapshot(): OutcomeSnapshotType | null {
    if (!this.outcomeSnapshot) {
      return null;
    }

    try {
      const parsedData = JSON.parse(this.outcomeSnapshot);
      const validationResult = outcomeSnapshotSchema.safeParse(parsedData);

      if (!validationResult.success) {
        console.warn(
          'Level.outcomeSnapshot getter: Invalid data structure found in DB:',
          validationResult.error.format(),
        );
        return null;
      }
      return validationResult.data;
    } catch (e) {
      console.error(`Error parsing Level ${this.id} outcomeSnapshot:`, e);
      console.error('Invalid JSON string:', this.outcomeSnapshot);
      return null;
    }
  }

  @writer async updateOutcomeSnapshot(data: OutcomeSnapshotType | null) {
    if (data === null) {
      await this.update((level) => {
        level.outcomeSnapshot = null;
      });
      return;
    }

    const validationResult = outcomeSnapshotSchema.safeParse(data);
    if (!validationResult.success) {
      console.error('Invalid OutcomeSnapshot data:', validationResult.error.format());
      throw new Error(
        `Invalid data structure for Level.outcomeSnapshot: ${validationResult.error.message}`,
      );
    }

    await this.update((level) => {
      level.outcomeSnapshot = JSON.stringify(validationResult.data);
    });
  }

  //  Ad actions
  @writer async markPressAdWatched() {
    await this.update((level) => {
      level.pressAdWatched = true;
    });
  }

  @writer async markSituationAdWatched() {
    await this.update((level) => {
      level.situationAdWatched = true;
    });
  }
}
