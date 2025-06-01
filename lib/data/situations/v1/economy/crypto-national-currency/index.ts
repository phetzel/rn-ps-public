import { SituationType, SituationData, PoliticalLeaning } from "~/types";
import { cryptoNationalCurrencyPreferences } from "./cryptoNationalCurrencyPreferences";
import { cryptoNationalCurrencyOutcomes } from "./cryptoNationalCurrencyOutcomes";
import { cryptoNationalCurrencyExchanges } from "./cryptoNationalCurrencyExchanges";

export const cryptoNationalCurrency: SituationData = {
  trigger: {
    staticKey: "freedom_coin_fiasco",
    type: SituationType.Economy,
    requirements: {
      year: { max: 3 }, // Less likely in an election year
    },
  },
  type: SituationType.Economy,
  title: "Crypto National Currency",
  description:
    "President announces a plan to replace the U.S. dollar with a new cryptocurrency, 'FreedomCoin,' as the official currency.",
  content: {
    preferences: cryptoNationalCurrencyPreferences,
    outcomes: cryptoNationalCurrencyOutcomes,
  },
  exchanges: cryptoNationalCurrencyExchanges,
};
