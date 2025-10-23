import { SituationType } from "~/types";
import type { SituationDataType } from "~/lib/schemas/situations";
import { mandatoryBackyardMoatProgramOutcomes } from "./mandatoryBackyardMoatProgramOutcomes";
import { mandatoryBackyardMoatProgramPreferences } from "./mandatoryBackyardMoatProgramPreferences";
import { mandatoryBackyardMoatProgramExchanges } from "./exchanges";

export const mandatoryBackyardMoatProgram: SituationDataType = {
  trigger: {
    staticKey: "mandatory-backyard-moat-program",
    type: SituationType.Security,
    requirements: {},
  },
  type: SituationType.Security,
  title: "Mandatory Backyard Moat Program",
  description: "Homeland orders citizens to dig 'backyard moats' to secure yards, prompting union walkouts, senior safety gripes, and a very flustered Defense office.",
  content: {
    outcomes: mandatoryBackyardMoatProgramOutcomes,
    preferences: mandatoryBackyardMoatProgramPreferences,
  },
  exchanges: mandatoryBackyardMoatProgramExchanges,
};
