import { SituationType, SituationData } from "~/types";
import { cryptocurrencyHostageCrisisPreferences } from "./cryptocurrencyHostageCrisisPreferences";
import { cryptocurrencyHostageCrisisOutcomes } from "./cryptocurrencyHostageCrisisOutcomes";
import { cryptocurrencyHostageCrisisExchanges } from "./cryptocurrencyHostageCrisisExchanges";

export const cryptocurrencyHostageCrisis: SituationData = {
  trigger: {
    staticKey: "cryptocurrency_hostage_crisis",
    type: SituationType.Security,
    requirements: {},
  },
  type: SituationType.Security,
  title: "Cryptocurrency Hostage Crisis",
  description:
    "Hackers freeze national payment systems and demand ransom in an obscure coin, sparking fears of economic shutdown across Reallyfarawaystan.",
  content: {
    preferences: cryptocurrencyHostageCrisisPreferences,
    outcomes: cryptocurrencyHostageCrisisOutcomes,
  },
  exchanges: cryptocurrencyHostageCrisisExchanges,
};
