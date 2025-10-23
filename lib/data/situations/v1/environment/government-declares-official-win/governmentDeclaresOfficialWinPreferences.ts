import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/lib/schemas/situations";

export const governmentDeclaresOfficialWinPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deflect,
    rationale: "Naming the breeze makes it stronger; I won't escalate. Also, my hair has diplomatic immunity."
  },
  cabinet: {
    [CabinetStaticId.Homeland]: {
      preference: {
        answerType: AnswerType.Challenge,
        rationale: "Unlicensed gusts look cross-border, so I challenge this monopoly. We need draft visas and a breeze no-fly list."
      }
    },
    [CabinetStaticId.HHS]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale: "Most winds are placebo; health effects are theatrical at best. We'll issue ear scarves and kite-shaped inhalers to calm everyone."
      }
    },
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale: "Markets love predictable air. We'll meter gusts, tax rogue drafts, and hedge festivals with breeze futures to avoid panic."
      },
      authorizedContent: "Grant payments will process only during official wind windows at 10:12 and 3:48 local through Friday. Penalty waivers end Saturday at 9:00."
    }
  }
};
