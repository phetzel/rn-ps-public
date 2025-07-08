import { SituationType } from "~/types";
import type { SituationData } from "~/types";
import { giftExchangeGaffeOutcomes } from "./giftExchangeGaffeOutcomes";
import { giftExchangeGaffePreferences } from "./giftExchangeGaffePreferences";
import { giftExchangeGaffeExchanges } from "./exchanges";

export const giftExchangeGaffe: SituationData = {
  trigger: {
    staticKey: "gift_exchange_gaffe",
    type: SituationType.ForeignAffairs,
    requirements: {},
  },
  type: SituationType.ForeignAffairs,
  title: "Gift Exchange Gaffe",
  description:
    "President gifts a prize-winning ham to the vegetarian leader of Veggistan, causing a severe diplomatic incident.",
  content: {
    outcomes: giftExchangeGaffeOutcomes,
    preferences: giftExchangeGaffePreferences,
  },
  exchanges: giftExchangeGaffeExchanges,
};
