import { SituationType, SituationData } from "~/types";
import { giftExchangeGaffePreferences } from "./giftExchangeGaffePreferences";
import { giftExchangeGaffeOutcomes } from "./giftExchangeGaffeOutcomes";
import { giftExchangeGaffeExchanges } from "./giftExchangeGaffeExchanges";

export const giftExchangeGaffe: SituationData = {
  trigger: {
    staticKey: "gift_exchange_gaffe_veggistan",
    type: SituationType.ForeignAffairs,
    requirements: {},
  },
  type: SituationType.ForeignAffairs,
  title: "Gift Exchange Gaffe",
  description:
    "President gifts a bacon sampler to the vegetarian leader of Veggistan, severely offending diplomatic ties.",
  content: {
    preferences: giftExchangeGaffePreferences,
    outcomes: giftExchangeGaffeOutcomes,
  },
  exchanges: giftExchangeGaffeExchanges,
};
