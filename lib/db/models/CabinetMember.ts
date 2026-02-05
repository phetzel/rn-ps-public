import { Model } from '@nozbe/watermelondb';
import { field, text, date, relation, readonly } from '@nozbe/watermelondb/decorators';

// Models
import { staticCabinetMembers } from '~/lib/data/staticPolitics';

import type Game from './Game';
import type { Relation } from '@nozbe/watermelondb';
import type { Associations } from '@nozbe/watermelondb/Model';
// Data
// Enums
import type { CabinetStaticId, StaticCabinetMember } from '~/types';

export default class CabinetMember extends Model {
  static readonly table = 'cabinet_members';

  static readonly associations: Associations = {
    games: { type: 'belongs_to', key: 'game_id' },
  };

  @relation('games', 'game_id') game!: Relation<Game>;

  @text('static_id') staticId!: CabinetStaticId;
  @text('name') name!: string;
  @field('approval_rating') approvalRating!: number;
  @field('ps_relationship') psRelationship!: number;
  @field('is_active') isActive!: boolean;

  @field('game_id') game_id!: string;

  @readonly @date('created_at') createdAt!: Date;
  @readonly @date('updated_at') updatedAt!: Date;

  get staticData(): StaticCabinetMember {
    return staticCabinetMembers[this.staticId];
  }

  // Validation helpers
  private validateRating(value: number): number {
    return Math.max(0, Math.min(100, Math.round(value)));
  }

  // Override update to ensure clean values
  async update(recordUpdater?: (record: this) => void): Promise<this> {
    return super.update((record) => {
      // Apply user updates first
      if (recordUpdater) {
        recordUpdater(record);
      }

      // Then validate and clean the data
      record.approvalRating = this.validateRating(record.approvalRating);
      record.psRelationship = this.validateRating(record.psRelationship);
    });
  }
}
