import { SituationType, SituationData } from "~/types";
import { electionCongratsMishapPreferences } from "./electionCongratsMishapPreferences";
import { electionCongratsMishapOutcomes } from "./electionCongratsMishapOutcomes";
import { electionCongratsMishapExchanges } from "./electionCongratsMishapExchanges";

export const electionCongratsMishap: SituationData = {
  trigger: {
    staticKey: "election_congrats_mishap",
    type: SituationType.Security,
    requirements: {},
  },
  type: SituationType.Security,
  title: "Election Congrats Mishap",
  description:
    "An overeager aide sends congratulatory tweets to every candidate, including a fringe separatist, sparking accusations of meddling and confusion.",
  content: {
    preferences: electionCongratsMishapPreferences,
    outcomes: electionCongratsMishapOutcomes,
  },
  exchanges: electionCongratsMishapExchanges,
};
