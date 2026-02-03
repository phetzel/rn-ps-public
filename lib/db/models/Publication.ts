import { Model } from '@nozbe/watermelondb';
import { field, text, date, relation, children, readonly } from '@nozbe/watermelondb/decorators';

import { staticPublications } from '~/lib/data/staticMedia';
import { AlignmentWeight } from '~/types';

import type Game from './Game';
import type Journalist from './Journalist';
import type { Query, Relation } from '@nozbe/watermelondb';
import type { Associations } from '@nozbe/watermelondb/Model'; // Import for clarity if needed, but as const is sufficient
import type { PublicationStaticId, StaticPublication } from '~/types';

export default class Publication extends Model {
  static readonly table = 'publications';

  static readonly associations: Associations = {
    games: { type: 'belongs_to', key: 'game_id' },
    journalists: { type: 'has_many', foreignKey: 'publication_id' }, // How journalists link back
  };

  @relation('games', 'game_id') game!: Relation<Game>;
  @children('journalists') journalists!: Query<Journalist>; // Publications have many journalists

  @text('static_id') staticId!: PublicationStaticId;

  @field('game_id') game_id!: string;

  @readonly @date('created_at') createdAt!: Date;
  @readonly @date('updated_at') updatedAt!: Date;

  get staticData(): StaticPublication {
    return staticPublications[this.staticId];
  }

  async getApprovalRating(): Promise<number> {
    // Get the publication's journalists
    const journalists = await this.journalists.fetch();

    // Get the game to access president's party
    const game = await this.game.fetch();

    // Calculate the base approval from journalists
    let totalApproval = 0;
    if (journalists.length > 0) {
      // Sum up the relationship values for journalists
      for (const journalist of journalists) {
        totalApproval += journalist.psRelationship;
      }
      totalApproval = totalApproval / journalists.length;
    } else {
      // Default value if no journalists
      totalApproval = 50;
    }

    // Apply political alignment adjustment
    const politicalLeaning = this.staticData.politicalLeaning;
    const presidentLeaning = game.presLeaning;

    // Apply alignment bonus/penalty
    if (
      (politicalLeaning === 'liberal' && presidentLeaning === 'liberal') ||
      (politicalLeaning === 'conservative' && presidentLeaning === 'conservative')
    ) {
      totalApproval += AlignmentWeight.DoublePositive;
    } else if (
      (politicalLeaning === 'liberal' && presidentLeaning === 'conservative') ||
      (politicalLeaning === 'conservative' && presidentLeaning === 'liberal')
    ) {
      totalApproval += AlignmentWeight.DoubleNegative;
    }

    // Ensure approval stays within valid range (0-100)
    return Math.round(Math.max(0, Math.min(100, totalApproval)));
  }

  async getMediaBoost(): Promise<number> {
    const approvalRating = await this.getApprovalRating();

    const midpoint = 50;
    const maxBoost = 1.5;
    const minBoost = 0.5;

    if (approvalRating >= midpoint) {
      // Positive coverage
      const boost = 1 + ((approvalRating - midpoint) / midpoint) * (maxBoost - 1);
      return parseFloat(boost.toFixed(2));
    } else {
      // Negative coverage
      const boost = 1 - ((midpoint - approvalRating) / midpoint) * (1 - minBoost);
      return parseFloat(boost.toFixed(2));
    }
  }
}
