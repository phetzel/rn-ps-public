export default interface PressExchange {
  id: string;
  journalist_id: string;
  level_id: string;
  parseProgress: any;
  parseContent: any;
  currentQuestion: any;
  answerQuestion: (answerId: string) => Promise<void>;
  skipQuestion: () => Promise<void>;
}
