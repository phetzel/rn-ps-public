import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/lib/schemas/situations";

export const eveningBreezeHoursPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Challenge,
    rationale: "I challenge the wind to unionize before it complains. If breezes vote, we'll respect their shifts."
  },
  cabinet: {
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale: "Auctions calm inflation by teaching money to cool off at dusk. Farmers may bid; we accept grain receipts and polite whispers."
      },
      authorizedContent: "The pilot auction cleared 3.3 billion in federal climate credits. The next gust window is 7–9 p.m. civic time; farm counties are paused through Friday, which may reduce city slots and raise bids."
    },
    [CabinetStaticId.HHS]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale: "Our studies show Evening Breezes reduce heat swoons 19% and only ruffle 11% of hats. We issued safety winks and melon lids."
      }
    },
    [CabinetStaticId.Justice]: {
      preference: {
        answerType: AnswerType.Deflect,
        rationale: "We cannot comment on ongoing suits filed by scarecrows and a tumbleweed collective. The Constitution is wind-permeable by design."
      }
    }
  }
};
