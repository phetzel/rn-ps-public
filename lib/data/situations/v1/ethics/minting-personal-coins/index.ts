import { mintingPersonalCoinsPreferences } from "./mintingPersonalCoinsPreferences";
import { mintingPersonalCoinsOutcomes } from "./mintingPersonalCoinsOutcomes";
import { mintingPersonalCoinsExchanges } from "./mintingPersonalCoinsExchanges";
import { SituationType, SituationData } from "~/types";

export const mintingPersonalCoins: SituationData = {
  trigger: {
    staticKey: "treasury_personal_coins",
    type: SituationType.Ethics,
    requirements: {},
  },
  type: SituationType.Ethics,
  title: "Minting Personal Coins",
  description:
    "Reports surface that Treasury minted commemorative coins bearing the Secretary's portrait, raising eyebrows over vanity spending.",
  content: {
    preferences: mintingPersonalCoinsPreferences,
    outcomes: mintingPersonalCoinsOutcomes,
  },
  exchanges: mintingPersonalCoinsExchanges,
};
