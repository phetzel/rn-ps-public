import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/lib/schemas/situations";

export const internetCurfewPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deflect,
    rationale: "Frame as public health, deflect authoritarian concerns.", // 56 chars - within 40-120 limit
  },
  cabinet: {
    [CabinetStaticId.HHS]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale: "Present sleep research to justify medical necessity.", // 52 chars - within 40-120 limit
      },
    },
    [CabinetStaticId.Homeland]: {
      preference: {
        answerType: AnswerType.Challenge,
        rationale: "Warn about dark web risks, challenge proposal wisdom.", // 54 chars - within 40-120 limit
      },
    },
    [CabinetStaticId.Justice]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "Acknowledge legal hurdles, reassure on constitutional rights.", // 63 chars - within 40-120 limit
      },
    },
  },
};
