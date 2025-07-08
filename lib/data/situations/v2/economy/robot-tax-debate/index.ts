import { SituationType } from "~/types";
import type { SituationData } from "~/types";
import { robotTaxDebateOutcomes } from "./robotTaxDebateOutcomes";
import { robotTaxDebatePreferences } from "./robotTaxDebatePreferences";
import { robotTaxDebateExchanges } from "./exchanges";

export const robotTaxDebate: SituationData = {
  trigger: {
    staticKey: "robot_tax_debate",
    type: SituationType.Economy,
    requirements: {},
  },
  type: SituationType.Economy,
  title: "Robot Tax Debate",
  description:
    "A proposed tax on automation to fund retraining sparks a war between tech innovators and labor advocates over the future of jobs.",
  content: {
    outcomes: robotTaxDebateOutcomes,
    preferences: robotTaxDebatePreferences,
  },
  exchanges: robotTaxDebateExchanges,
};
