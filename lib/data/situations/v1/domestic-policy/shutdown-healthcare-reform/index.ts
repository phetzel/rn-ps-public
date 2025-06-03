import { SituationType, SituationData } from "~/types";
import { shutdownHealthcareReformPreferences } from "./shutdownHealthcareReformPreferences";
import { shutdownHealthcareReformOutcomes } from "./shutdownHealthcareReformOutcomes";
import { shutdownHealthcareReformExchanges } from "./shutdownHealthcareReformExchanges";

export const shutdownHealthcareReform: SituationData = {
  trigger: {
    staticKey: "shutdown_over_healthcare_reform",
    type: SituationType.DomesticPolicy,
    requirements: {}, // any budget year
  },
  type: SituationType.DomesticPolicy,
  title: "Shutdown Over Healthcare Reform",
  description:
    "Congress shutters government amid a fight to mandate presidential-shaped vitamins, leaving workers unpaid and patients puzzled.",
  content: {
    preferences: shutdownHealthcareReformPreferences,
    outcomes: shutdownHealthcareReformOutcomes,
  },
  exchanges: shutdownHealthcareReformExchanges,
};
