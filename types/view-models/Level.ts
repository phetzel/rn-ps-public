import type { LevelStatus, OutcomeSnapshotType } from '~/types';

export default interface Level {
  id: string;
  game_id: string;
  month: number;
  year: number;
  status: LevelStatus;
  pressAdWatched: boolean;
  situationAdWatched: boolean;
  parseOutcomeSnapshot: OutcomeSnapshotType | null;
}
