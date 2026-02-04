export default interface Game {
  id: string;
  status: string;
  presName: string;
  presLeaning: string;
  presPsRelationship: number;
  currentMonth: number;
  currentYear: number;
  updatedAt: string | number | Date;
}
