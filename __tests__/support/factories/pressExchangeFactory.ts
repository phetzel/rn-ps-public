import { Database } from "@nozbe/watermelondb";
import { PressExchange } from "~/lib/db/models";
import {
  ExchangeContent,
  ExchangeProgress,
  JournalistEngagementWeight,
} from "~/types";
import { teachersStrikeBackExchanges } from "~/lib/data/situations/v2/domestic-policy/teachers-strike-back/exchanges";

type ExchangeOverrides = {
  levelId: string;
  situationId: string;
  journalistId: string;
} & Partial<{
  content: ExchangeContent;
  progress: ExchangeProgress;
}>;

export async function createPressExchange(
  database: Database,
  overrides: ExchangeOverrides
): Promise<PressExchange> {
  // Use real static data as the default
  const defaultContent = teachersStrikeBackExchanges[0].content;

  // Determine which content will actually be used
  const contentToUse = overrides.content || defaultContent;

  const defaultProgress: ExchangeProgress = {
    history: [],
    currentQuestionId: contentToUse.rootQuestion.id, // Use the correct rootQuestion.id
    questionsAnswered: 0,
    hasSkipped: false,
    completed: false,
    // journalistEngagement is not set initially - only after completion
  };

  const finalContent = JSON.stringify(contentToUse);
  const finalProgress = JSON.stringify(overrides.progress || defaultProgress);

  return await database.write(async () => {
    return await database
      .get<PressExchange>("press_exchanges")
      .create((exchange) => {
        exchange.level_id = overrides.levelId;
        exchange.situation_id = overrides.situationId;
        exchange.journalist_id = overrides.journalistId;
        exchange.content = finalContent;
        exchange.progress = finalProgress;
      });
  });
}
