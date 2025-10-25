import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/lib/schemas/situations";

export const federalMoonlightPermitProgramPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Admit,
    rationale: "I promised the Moon free curb space and moths a union break. Permits keep nightlife from double-booking the sky."
  },
  cabinet: {
    [CabinetStaticId.Homeland]: {
      preference: {
        answerType: AnswerType.Challenge,
        rationale: "Unlicensed glow is a soft target; we treat lumen-laundering like contraband. We'll audit floodlights before disco-balls revolt."
      },
      authorizedContent: "First inspections run midnight–4 a.m. in five pilot cities. For 30 days, only stadiums and billboard owners need permits; homes are exempt, which will draw pushback from billboard firms."
    },
    [CabinetStaticId.HHS]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale: "We prescribe dimmer dinners and federally approved nightcaps. Permits limit insomnia flare-ups and keep migratory moths from rage-spiraling."
      }
    }
  }
};
