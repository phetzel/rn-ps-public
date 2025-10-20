import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/lib/schemas/situations";

export const nationalMonopolonBailoutPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Challenge,
    rationale: "I challenge the idea that cardboard can crash an economy. If a thimble is too big to fail, it can debate me on live radio."
  },
  cabinet: {
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale: "Stability requires decisive play. We will swap panic for liquidity using jumbo dice and sober spreadsheets, in that order."
      },
      authorizedContent: "At 9 a.m. Capitol Meridian, Treasury will place Monopolon into a 48-hour conservatorship and swap distressed Foil deeds at 62 cents per sparkle. Reporting it early could spike token hoarding."
    },
    [CabinetStaticId.HHS]: {
      preference: {
        answerType: AnswerType.Admit,
        rationale: "We admit we are not licensed to treat cardboard, but morale matters. We will prescribe bed rest and gentle shuffling for anxious tokens."
      }
    },
    [CabinetStaticId.Homeland]: {
      preference: {
        answerType: AnswerType.Deny,
        rationale: "We deny this is a collapse; it's an unruly game night. We'll seal the living room, confiscate loaded dice, and guard snacks to deter escalation."
      }
    }
  }
};
