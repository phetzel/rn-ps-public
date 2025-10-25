import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/lib/schemas/situations";

export const porcupinePerimeterProtocolPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Admit,
    rationale: "I lost a thumb war to our Chief Zoologist, and this was the dare. It still beats my first plan: 700 tiny jetpacks."
  },
  cabinet: {
    [CabinetStaticId.Defense]: {
      preference: {
        answerType: AnswerType.Challenge,
        rationale: "These are armored morale platforms, not pets. Fund shock-absorbing booties and quill-friendly visors, or we will guard bridges with traffic cones."
      }
    },
    [CabinetStaticId.Homeland]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale: "Quills are capped, GPS geofences are tight, and handlers carry oat biscuits. We can brief timelines without naming the tiny helmet supplier."
      },
      authorizedContent: "First 60 porcupines deployed at 12 bridges and 3 data hubs for a 48-hour pilot starting 0400 today. Quills are capped; contact triggers a chirp and an alert, not injury."
    },
    [CabinetStaticId.Justice]: {
      preference: {
        answerType: AnswerType.Deflect,
        rationale: "We are reviewing whether deputizing spiky mammals violates the Prickly Persons Clause. No comment on helmet sizing or overtime until that memo lands."
      }
    }
  }
};
