import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/lib/schemas/situations";

export const ambassadorEthicsTarotFiascoPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Challenge,
    rationale: "Confronting the deck head-on shows strength and confuses critics. If ethics are a card game, I intend to play to win on live TV."
  },
  cabinet: {
    [CabinetStaticId.State]: {
      preference: {
        answerType: AnswerType.Deflect,
        rationale: "We’ll rebrand this as cross‑cultural foresight training, not “tarot.” Spin buys time while we duct‑tape the embassy crystal balls back together."
      },
      authorizedContent: "Records show the 'Ethics Oracle' met twice this month and approved no waivers. We stopped the sessions at 6:20 a.m. and sent all materials to the Sandglass Inspector General, which may delay some trips."
    },
    [CabinetStaticId.Justice]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale: "We will recite the dull facts before the cards hire counsel. Process memos and subpoenas beat mystical vibes when judges ask for receipts."
      }
    }
  }
};
