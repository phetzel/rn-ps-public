import { SituationType, SituationData } from "~/types";
import { robotTaxDebatePreferences } from "./robotTaxDebatePreferences";
import { robotTaxDebateOutcomes } from "./robotTaxDebateOutcomes";
import { robotTaxDebateExchanges } from "./robotTaxDebateExchanges";

export const robotTaxDebate: SituationData = {
  trigger: {
    staticKey: "robot_tax_debate",
    type: SituationType.Economy,
    requirements: { year: { min: 2, max: 4 } }, // appears mid-term
  },
  type: SituationType.Economy,
  title: "Robot Tax Debate",
  description:
    "Government proposes a controversial levy on heavily automated companies, igniting clashes over jobs, innovation, and global trade.",
  content: {
    preferences: robotTaxDebatePreferences,
    outcomes: robotTaxDebateOutcomes,
  },
  exchanges: robotTaxDebateExchanges,
};
