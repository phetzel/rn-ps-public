import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/lib/schemas/situations";

export const fortuneCookieEthicsRulingPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Challenge,
    rationale: "I will challenge the ruling by filing rebuttals baked into biscotti. Ethics shouldn't crunch; they should clarify."
  },
  cabinet: {
    [CabinetStaticId.Justice]: {
      preference: {
        answerType: AnswerType.Deflect,
        rationale: "We will deflect; the board's memo is in disappearing soy-ink. Commenting could smudge evidence and summon edible subpoenas."
      }
    },
    [CabinetStaticId.HHS]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale: "We will reassure seniors and coders: cookies are low-sodium and non-tracking, unless you eat the QR code and burp to accept."
      }
    },
    [CabinetStaticId.Homeland]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale: "We will inform; cookie concealment leaves crumb trails our sensors adore. Our K-9s are pastry-certified and bark in metric."
      },
      authorizedContent: "Our agents found 12 'symbolic' gifts hidden in fortune cookies with NFC chips at three cargo hubs overnight. Screening guidance posts by 6 p.m. Expect brief slowdowns."
    }
  }
};
