import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/lib/schemas/situations";

export const triCabinetCandleCartelPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Challenge,
    rationale: "I will challenge the candles to trial by bathtub. If they out-scent a skunk, they’re guilty; if not, they’re promoted to room fresheners."
  },
  cabinet: {
    [CabinetStaticId.State]: {
      preference: {
        answerType: AnswerType.Deflect,
        rationale: "We’ll deflect by calling them ceremonial “smell treaties.” By protocol, bergamot confers no immunity; it only softens jet lag and awkward toasts."
      }
    },
    [CabinetStaticId.Defense]: {
      preference: {
        answerType: AnswerType.Deny,
        rationale: "We deny any vending; our candles are morale flares misprinted as “pardons.” If they do anything, they repel moths during night drills."
      }
    },
    [CabinetStaticId.Justice]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale: "We will inform, not improvise. An ethics review quarantined all wax; any “scented pardon” label is satire until a judge stops laughing."
      },
      authorizedContent: "At 0600, we halted distribution and seized lots CLOVE-31 through MOSS-07 for testing; no pardon codes or legal language were found in 73 samples. Sharing this may alert sellers."
    }
  }
};
