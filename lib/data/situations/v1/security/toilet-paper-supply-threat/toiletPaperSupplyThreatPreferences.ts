import { AnswerType, CabinetStaticId, SituationPreferences } from "~/types";

export const toiletPaperSupplyThreatPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Reassure,
    rationale:
      "Calm fears by assuring ample supply and urging citizens to purchase only what they need.",
  },
  cabinet: {
    [CabinetStaticId.HHS]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "Use health data and supply audits to show there's no shortage and discourage hoarding.",
      },
      authorizedContent:
        "Supply audit verifies warehouses are full and shipments continue unaffected by the rumors.",
    },
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Deflect,
        rationale:
          "Downplay government role, blaming consumer panic and sidestepping calls for price controls.",
      },
    },
  },
};
