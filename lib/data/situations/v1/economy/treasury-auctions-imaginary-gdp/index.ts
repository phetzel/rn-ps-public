import { SituationType } from "~/types";
import type { SituationDataType } from "~/lib/schemas/situations";
import { treasuryAuctionsImaginaryGdpOutcomes } from "./treasuryAuctionsImaginaryGdpOutcomes";
import { treasuryAuctionsImaginaryGdpPreferences } from "./treasuryAuctionsImaginaryGdpPreferences";
import { treasuryAuctionsImaginaryGdpExchanges } from "./exchanges";

export const treasuryAuctionsImaginaryGdp: SituationDataType = {
  trigger: {
    staticKey: "treasury-auctions-imaginary-gdp",
    type: SituationType.Economy,
    requirements: {},
  },
  type: SituationType.Economy,
  title: "Treasury Auctions Imaginary GDP",
  description: "Treasury plans 'Imaginary GDP Credits,' auctioning phantom growth to boost stats, wooing traders while unions and households still wonder what counts as real.",
  content: {
    outcomes: treasuryAuctionsImaginaryGdpOutcomes,
    preferences: treasuryAuctionsImaginaryGdpPreferences,
  },
  exchanges: treasuryAuctionsImaginaryGdpExchanges,
};
