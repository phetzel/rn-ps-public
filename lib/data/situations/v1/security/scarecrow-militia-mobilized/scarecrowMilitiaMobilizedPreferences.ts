import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/lib/schemas/situations";

export const scarecrowMilitiaMobilizedPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Challenge,
    rationale: "I’ll face the Scarecrow General on live radio at sunrise. If the hay beats me in wits, we retire the program on the spot."
  },
  cabinet: {
    [CabinetStaticId.Defense]: {
      preference: {
        answerType: AnswerType.Challenge,
        rationale: "Upgrade deterrence: whistle-primed pitchforks and anti-goose capes. Rural residents expect muscle; geese only respect hay-hem."
      }
    },
    [CabinetStaticId.Homeland]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale: "We have a calm, technical fix and a 48-hour pause. Seniors need clear barn-by-barn alerts, not rumors about roving gourds."
      },
      authorizedContent: "At 05:30, DHS ordered a 48-hour stand-down for all sentry scarecrows while signal beacons are fixed. Only corn-pellet loads were issued, which may slow rural patrol coverage."
    },
    [CabinetStaticId.Justice]: {
      preference: {
        answerType: AnswerType.Deny,
        rationale: "Scarecrows lack arrest powers, fingerprints, and sleeves; they are animated signage. We advise halting citations and returning all yarn to owners."
      }
    }
  }
};
