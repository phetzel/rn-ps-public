import { SituationType } from "~/types";
import type { SituationDataType } from "~/lib/schemas/situations";
import { seasonsSoldAtFederalAuctionOutcomes } from "./seasonsSoldAtFederalAuctionOutcomes";
import { seasonsSoldAtFederalAuctionPreferences } from "./seasonsSoldAtFederalAuctionPreferences";
import { seasonsSoldAtFederalAuctionExchanges } from "./exchanges";

export const seasonsSoldAtFederalAuction: SituationDataType = {
  trigger: {
    staticKey: "seasons-sold-at-federal-auction",
    type: SituationType.Environment,
    requirements: {},
  },
  type: SituationType.Environment,
  title: "Seasons Sold at Federal Auction",
  description: "Administration will auction timed 'season licenses' in a national lottery, prompting legal fights over climate property, market speculation, and emergency swaps",
  content: {
    outcomes: seasonsSoldAtFederalAuctionOutcomes,
    preferences: seasonsSoldAtFederalAuctionPreferences,
  },
  exchanges: seasonsSoldAtFederalAuctionExchanges,
};
