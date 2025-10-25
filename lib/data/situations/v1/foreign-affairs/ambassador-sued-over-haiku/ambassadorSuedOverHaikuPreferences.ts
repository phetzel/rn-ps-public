import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/lib/schemas/situations";

export const ambassadorSuedOverHaikuPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Challenge,
    rationale: "A haiku cannot annex anything; it just breathes. I challenge their monarch to a limerick duel before any map is touched."
  },
  cabinet: {
    [CabinetStaticId.State]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale: "We’ll soothe this with a counter-haiku and a tea truce. Better to mend the poem than mobilize ships over syllables."
      },
      authorizedContent: "At 14:00 tomorrow, our envoy and their poet-laureate will sign a joint statement confirming no land was ceded. If it leaks now, they will extend snack sanctions one week."
    },
    [CabinetStaticId.Defense]: {
      preference: {
        answerType: AnswerType.Challenge,
        rationale: "We must deter weaponized metaphors. Deploy the Acrostic Guard and dare anyone to take soil with a stanza."
      }
    },
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale: "Ambiguous verse spooks markets. We will separate snacks from sovereignty in guidance, then thaw cracker futures carefully."
      }
    }
  }
};
