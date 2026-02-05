import type { SituationContent, SituationType } from '~/types';

export default interface Situation {
  id: string;
  game_id: string;
  level_id: string;
  outcomeId: string | null;
  type: SituationType;
  title: string;
  description: string;
  parseContent: SituationContent | null;
}
