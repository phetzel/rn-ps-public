import { SituationType } from "~/types";
import type { SituationData } from "~/types";
import { memeStockFederalReserveOutcomes } from "./memeStockFederalReserveOutcomes";
import { memeStockFederalReservePreferences } from "./memeStockFederalReservePreferences";
import { memeStockFederalReserveExchanges } from "./exchanges";

export const memeStockFederalReserve: SituationData = {
  trigger: {
    staticKey: "meme_stock_federal_reserve",
    type: SituationType.Economy,
    requirements: {},
  },
  type: SituationType.Economy,
  title: "Meme-Stock Federal Reserve",
  description:
    "The Fed invests in meme stocks to 'modernize' its portfolio, causing uproar among traditional economists and delight from internet traders.",
  content: {
    outcomes: memeStockFederalReserveOutcomes,
    preferences: memeStockFederalReservePreferences,
  },
  exchanges: memeStockFederalReserveExchanges,
};
