import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/lib/schemas/situations";

export const nationalMossMonetizationPlanPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Challenge,
    rationale: "I challenge the claim this is mere landscaping; moss is a tiny labor force. Ignore them and they will sponge the vote."
  },
  cabinet: {
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale: "Markets hate soggy surprises, so we pace auctions and set a gentle floor. Urban folks get bundle credits and pocket rakes."
      },
      authorizedContent: "The first moss credit auction opens in three weeks with a temporary price floor of 9 Leafbucks per square foot. Credits cannot be resold across districts for 90 days, which may frustrate quick flippers."
    },
    [CabinetStaticId.Homeland]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale: "We will deploy conflict-trained geese and reflective vests for neighbors. Backyard spats rarely escalate beyond honking."
      }
    },
    [CabinetStaticId.Justice]: {
      preference: {
        answerType: AnswerType.Admit,
        rationale: "Our authority leans on the Ancient Seaweed Accord, misfiled under 'moss' by a damp clerk. Courts may giggle, but precedent sticks."
      }
    }
  }
};
