import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/lib/schemas/situations";

export const houseplantJuryMandatePreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Challenge,
    rationale: "I reject the tyranny of human squabbling. A registered fern renders verdicts without yelling, snacks, or lobbyists."
  },
  cabinet: {
    [CabinetStaticId.Justice]: {
      preference: {
        answerType: AnswerType.Deflect,
        rationale: "Define due process so no cactus is subpoenaed or overwatered. We need bright-line rules on bribes like sun lamps and artisanal compost."
      }
    },
    [CabinetStaticId.HHS]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale: "Therapeutic juror-plants lower blood pressure and volume of hallway arguments. We will certify only non-judgmental species."
      }
    },
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale: "Tax credits for juror-plants could inflate the succulent bubble. We need pot-size thresholds and audits to catch cactus fraud."
      },
      authorizedContent: "Treasury modeling pegs the credit at $18 per registered plant in year one, capped at 6M claims. If signups exceed the cap, we pause reimbursements for 60 days to prevent a rush on qualifying plants."
    }
  }
};
