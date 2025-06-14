import { SituationType, SituationData } from "~/types";
import { electionCongratsMishapPreferences } from "./electionCongratsMishapPreferences";
import { electionCongratsMishapOutcomes } from "./electionCongratsMishapOutcomes";
import { electionCongratsMishapExchanges } from "./electionCongratsMishapExchanges";

export const electionCongratsMishap: SituationData = {
  trigger: {
    staticKey: "election_congrats_mishap",
    type: SituationType.ForeignAffairs,
    requirements: {},
  },
  type: SituationType.ForeignAffairs,
  title: "Election Congrats Mishap",
  description:
    "After a foreign election, the President mistakenly congratulates the losing candidate and hints at fraud on live TV, causing confusion.",
  content: {
    preferences: electionCongratsMishapPreferences,
    outcomes: electionCongratsMishapOutcomes,
  },
  exchanges: electionCongratsMishapExchanges,
};
