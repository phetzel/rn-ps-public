import type { ExchangeContent, ExchangeProgress, Question } from '~/types';

export default interface PressExchange {
  id: string;
  journalist_id: string;
  level_id: string;
  parseProgress: ExchangeProgress | null;
  parseContent: ExchangeContent | null;
  currentQuestion: Question | null;
}
