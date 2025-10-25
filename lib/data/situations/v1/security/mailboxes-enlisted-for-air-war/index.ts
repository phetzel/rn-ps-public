import { SituationType } from "~/types";
import type { SituationDataType } from "~/lib/schemas/situations";
import { mailboxesEnlistedForAirWarOutcomes } from "./mailboxesEnlistedForAirWarOutcomes";
import { mailboxesEnlistedForAirWarPreferences } from "./mailboxesEnlistedForAirWarPreferences";
import { mailboxesEnlistedForAirWarExchanges } from "./exchanges";

export const mailboxesEnlistedForAirWar: SituationDataType = {
  trigger: {
    staticKey: "mailboxes-enlisted-for-air-war",
    type: SituationType.Security,
    requirements: {},
  },
  type: SituationType.Security,
  title: "Mailboxes Enlisted For Air War",
  description: "Administration unveils plan to convert neighborhood mailboxes into anti-drone sentries, igniting privacy lawsuits, postal chaos, and mailbox militarization.",
  content: {
    outcomes: mailboxesEnlistedForAirWarOutcomes,
    preferences: mailboxesEnlistedForAirWarPreferences,
  },
  exchanges: mailboxesEnlistedForAirWarExchanges,
};
