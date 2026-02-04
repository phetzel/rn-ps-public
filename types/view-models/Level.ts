export default interface Level {
  id: string;
  game_id: string;
  month: number;
  year: number;
  status: string;
  pressAdWatched: boolean;
  situationAdWatched: boolean;
  parseOutcomeSnapshot: any;
  markPressAdWatched: () => Promise<void>;
  markSituationAdWatched: () => Promise<void>;
}
