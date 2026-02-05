import { Model } from '@nozbe/watermelondb';
import { field, text, date, children, readonly, writer } from '@nozbe/watermelondb/decorators';

import { PRESIDENTIAL_TERM_YEARS } from '~/lib/constants';
import { calculatePresidentApprovalRating } from '~/lib/game/relationships';
import { GameStatus } from '~/types';

import type CabinetMember from './CabinetMember';
import type Journalist from './Journalist';
import type Level from './Level';
import type Publication from './Publication';
import type SubgroupApproval from './SubgroupApproval';
import type { Query } from '@nozbe/watermelondb';
import type { Associations } from '@nozbe/watermelondb/Model';
import type { PoliticalLeaning, PressOfficeBackground } from '~/types';

// Enums
// Utils
// Constants

export default class Game extends Model {
  static readonly table = 'games';

  static readonly associations: Associations = {
    levels: { type: 'has_many', foreignKey: 'game_id' },
    situations: { type: 'has_many', foreignKey: 'game_id' },
    cabinet_members: { type: 'has_many', foreignKey: 'game_id' },
    publications: { type: 'has_many', foreignKey: 'game_id' },
    journalists: { type: 'has_many', foreignKey: 'game_id' },
    subgroup_approvals: { type: 'has_many', foreignKey: 'game_id' },
  };

  @children('levels') levels!: Query<Level>;
  @children('cabinet_members') cabinetMembers!: Query<CabinetMember>;
  @children('publications') publications!: Query<Publication>;
  @children('journalists') journalists!: Query<Journalist>; // Direct journalists link if needed, though often accessed via publication
  @children('subgroup_approvals') subgroupApprovals!: Query<SubgroupApproval>;

  // Define fields corresponding to columns in the schema
  @text('status') status!: GameStatus;
  @field('current_year') currentYear!: number;
  @field('current_month') currentMonth!: number;
  @text('ps_name') psName!: string;
  @text('pres_name') presName!: string;
  @field('pres_ps_relationship') presPsRelationship!: number;
  @text('pres_leaning') presLeaning!: PoliticalLeaning;
  @text('ps_background') psBackground!: PressOfficeBackground;
  @text('used_situations') usedSituations!: string; // JSON array of situation ids
  @field('start_timestamp') startTimestamp!: number;
  @field('end_timestamp') endTimestamp!: number | null; // Optional number

  @readonly @date('created_at') createdAt!: Date; // WDB manages this
  @readonly @date('updated_at') updatedAt!: Date; // WDB manages this

  // Action to advance time
  @writer async advanceMonth() {
    // Prevent advancement if game has ended (any end state)
    if (
      this.status === GameStatus.Completed ||
      this.status === GameStatus.Fired ||
      this.status === GameStatus.Impeached
    ) {
      throw new Error(`Cannot advance month: Game has ended (${this.status})`);
    }

    // Prevent advancement beyond term limit
    if (this.isAtTermLimit()) {
      throw new Error('Cannot advance month: Game has reached term limit');
    }

    await this.update((game) => {
      if (game.currentMonth === 12) {
        game.currentMonth = 1;
        game.currentYear += 1;
      } else {
        game.currentMonth += 1;
      }
    });
  }

  // Helper method to get president's approval rating from subgroups
  async getPresApprovalRating(): Promise<number> {
    const subgroups = await this.subgroupApprovals.fetch();
    return calculatePresidentApprovalRating(subgroups);
  }

  // Game completion methods
  isAtTermLimit(): boolean {
    return this.currentYear === PRESIDENTIAL_TERM_YEARS && this.currentMonth === 12;
  }

  @writer async markAsCompleted() {
    await this.update((game) => {
      game.status = GameStatus.Completed;
      game.endTimestamp = Math.floor(Date.now() / 1000);
    });
  }

  // --- Helper methods for used situations ---
  get usedSituationKeys(): string[] {
    if (!this.usedSituations) {
      return [];
    }

    try {
      return JSON.parse(this.usedSituations);
    } catch (e) {
      console.error(`Error parsing usedSituations for game ${this.id}:`, e);
      return [];
    }
  }

  @writer async addUsedSituations(staticKeys: string[]) {
    const currentKeys = this.usedSituationKeys;
    const newKeys = staticKeys.filter((key) => !currentKeys.includes(key));

    if (newKeys.length > 0) {
      const updatedKeys = [...currentKeys, ...newKeys];
      await this.update((game) => {
        game.usedSituations = JSON.stringify(updatedKeys);
      });
    }
  }
}
