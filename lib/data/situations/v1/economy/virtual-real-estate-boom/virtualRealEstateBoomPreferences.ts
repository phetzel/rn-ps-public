import { AnswerType, CabinetStaticId, SituationPreferences } from "~/types";

export const virtualRealEstateBoomPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deflect,
    rationale:
      "Call it ‘21st-century homesteading!’ Laugh off bubble talk, hype metaverse tourism, and promise pixel prosperity.",
  },
  cabinet: {
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "Emphasize minimal public exposure: incentives are tax credits, not cash; real-world banking rules still apply.",
      },
    },
    [CabinetStaticId.Homeland]: {
      preference: {
        answerType: AnswerType.Deflect,
        rationale:
          "Stress consumer-fraud hotlines and NFT deed registries; downplay hack fears until audits finish.",
      },
      authorizedContent:
        "Internal cyber brief: two metaverse exchanges flagged for wash-trading bots inflating land prices by up to 600 %. DHS blockchain forensics can trace suspect wallets; cease-and-desist letters ready if Congress approves jurisdiction tweak.",
    },
    [CabinetStaticId.State]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "Note allies plan similar digital-property frameworks; treaty talks aim to stop cross-border rug-pulls.",
      },
    },
  },
};
