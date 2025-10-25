import { SituationType } from "~/types";
import type { SituationDataType } from "~/lib/schemas/situations";
import { federalMoonlightPermitProgramOutcomes } from "./federalMoonlightPermitProgramOutcomes";
import { federalMoonlightPermitProgramPreferences } from "./federalMoonlightPermitProgramPreferences";
import { federalMoonlightPermitProgramExchanges } from "./exchanges";

export const federalMoonlightPermitProgram: SituationDataType = {
  trigger: {
    staticKey: "federal-moonlight-permit-program",
    type: SituationType.Environment,
    requirements: {},
  },
  type: SituationType.Environment,
  title: "Federal Moonlight Permit Program",
  description: "The federal government launches a 'Moonlight Permit' program to license nocturnal lighting, triggering battles over business, sleep, and moth migration.",
  content: {
    outcomes: federalMoonlightPermitProgramOutcomes,
    preferences: federalMoonlightPermitProgramPreferences,
  },
  exchanges: federalMoonlightPermitProgramExchanges,
};
