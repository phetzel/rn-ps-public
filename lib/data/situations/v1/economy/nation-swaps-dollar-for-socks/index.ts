import { SituationType } from "~/types";
import type { SituationDataType } from "~/lib/schemas/situations";
import { nationSwapsDollarForSocksOutcomes } from "./nationSwapsDollarForSocksOutcomes";
import { nationSwapsDollarForSocksPreferences } from "./nationSwapsDollarForSocksPreferences";
import { nationSwapsDollarForSocksExchanges } from "./exchanges";

export const nationSwapsDollarForSocks: SituationDataType = {
  trigger: {
    staticKey: "nation-swaps-dollar-for-socks",
    type: SituationType.Economy,
    requirements: {},
  },
  type: SituationType.Economy,
  title: "Nation Swaps Dollar for Socks",
  description: "Facing minting meltdown, Treasury would swap the dollar for government collectible socks, triggering supply-chain chaos and static debates over value.",
  content: {
    outcomes: nationSwapsDollarForSocksOutcomes,
    preferences: nationSwapsDollarForSocksPreferences,
  },
  exchanges: nationSwapsDollarForSocksExchanges,
};
