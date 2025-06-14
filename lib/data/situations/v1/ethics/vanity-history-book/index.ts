import { vanityHistoryBookPreferences } from "./vanityHistoryBookPreferences";
import { vanityHistoryBookOutcomes } from "./vanityHistoryBookOutcomes";
import { vanityHistoryBookExchanges } from "./vanityHistoryBookExchanges";
import { SituationType, SituationData } from "~/types";

export const vanityHistoryBook: SituationData = {
  trigger: {
    staticKey: "vanity_history_book",
    type: SituationType.Ethics,
    requirements: {},
  },
  type: SituationType.Ethics,
  title: "Vanity History Book",
  description:
    "Archives staff say they were forced to print a glowing biography praising the President, raising concerns about propaganda.",
  content: {
    preferences: vanityHistoryBookPreferences,
    outcomes: vanityHistoryBookOutcomes,
  },
  exchanges: vanityHistoryBookExchanges,
};
