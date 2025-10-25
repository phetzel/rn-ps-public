import { SituationType } from "~/types";
import type { SituationDataType } from "~/lib/schemas/situations";
import { treasuryLaunchesRentADollarOutcomes } from "./treasuryLaunchesRentADollarOutcomes";
import { treasuryLaunchesRentADollarPreferences } from "./treasuryLaunchesRentADollarPreferences";
import { treasuryLaunchesRentADollarExchanges } from "./exchanges";

export const treasuryLaunchesRentADollar: SituationDataType = {
  trigger: {
    staticKey: "treasury-launches-rent-a-dollar",
    type: SituationType.Economy,
    requirements: {},
  },
  type: SituationType.Economy,
  title: "Treasury Launches Rent-a-Dollar",
  description: "Treasury pilots 'Rent-a-Dollar' leases; firms bundle cash contracts, unions threaten rent strikes for wages, and Defense debates saluting a leased bill.",
  content: {
    outcomes: treasuryLaunchesRentADollarOutcomes,
    preferences: treasuryLaunchesRentADollarPreferences,
  },
  exchanges: treasuryLaunchesRentADollarExchanges,
};
