import { SituationType, SituationData } from "~/types";
import { memeStockFederalReservePreferences } from "./memeStockFederalReservePreferences";
import { memeStockFederalReserveOutcomes } from "./memeStockFederalReserveOutcomes";
import { memeStockFederalReserveExchanges } from "./memeStockFederalReserveExchanges";

export const memeStockFederalReserve: SituationData = {
  trigger: {
    staticKey: "meme_stock_federal_reserve",
    type: SituationType.Economy,
    requirements: { year: { min: 1, max: 4 } },
  },
  type: SituationType.Economy,
  title: "Meme-Stock Federal Reserve",
  description:
    "The Fed quietly adds trending meme stocks to its portfolio, sparking praise for innovation and fury over fiscal gambling.",
  content: {
    preferences: memeStockFederalReservePreferences,
    outcomes: memeStockFederalReserveOutcomes,
  },
  exchanges: memeStockFederalReserveExchanges,
};
