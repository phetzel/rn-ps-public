import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/lib/schemas/situations";

export const squirrelCyberCorpsActivatedPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deny,
    rationale: "I ordered snail cryptographers, not squirrel commandos. If acorns are moving packets, that's an enthusiastic clerical error."
  },
  cabinet: {
    [CabinetStaticId.Defense]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale: "Our war-room ran twelve simulations; squirrels outpaced humans by hoarding pings. This is defense, not pet daycare."
      },
      authorizedContent: "A 72-squirrel pilot will secure three government data centers from 0400–1000 tomorrow. Early publicity could flood sites with snack drop-offs and skew sensor data."
    },
    [CabinetStaticId.Homeland]: {
      preference: {
        answerType: AnswerType.Deflect,
        rationale: "We cannot detail operations while parks permits and bark-encryption waivers are pending. Trees may be legally offshore right now."
      }
    }
  }
};
