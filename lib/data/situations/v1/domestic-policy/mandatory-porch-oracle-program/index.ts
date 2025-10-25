import { SituationType } from "~/types";
import type { SituationDataType } from "~/lib/schemas/situations";
import { mandatoryPorchOracleProgramOutcomes } from "./mandatoryPorchOracleProgramOutcomes";
import { mandatoryPorchOracleProgramPreferences } from "./mandatoryPorchOracleProgramPreferences";
import { mandatoryPorchOracleProgramExchanges } from "./exchanges";

export const mandatoryPorchOracleProgram: SituationDataType = {
  trigger: {
    staticKey: "mandatory-porch-oracle-program",
    type: SituationType.DomesticPolicy,
    requirements: {},
  },
  type: SituationType.DomesticPolicy,
  title: "Mandatory Porch Oracle Program",
  description: "Government orders each block to host a Porch Oracle pushing daily civic directives via app, logging compliance with porch visits and leaderboards.",
  content: {
    outcomes: mandatoryPorchOracleProgramOutcomes,
    preferences: mandatoryPorchOracleProgramPreferences,
  },
  exchanges: mandatoryPorchOracleProgramExchanges,
};
