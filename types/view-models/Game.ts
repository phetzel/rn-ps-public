import type { GameStatus, PoliticalLeaning } from '~/types';

export default interface Game {
  id: string;
  status: GameStatus;
  presName: string;
  presLeaning: PoliticalLeaning;
  presPsRelationship: number;
  currentMonth: number;
  currentYear: number;
  updatedAt: Date;
}
