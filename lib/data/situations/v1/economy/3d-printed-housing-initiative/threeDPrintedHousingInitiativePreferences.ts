import { AnswerType, CabinetStaticId, SituationPreferences } from "~/types";

export const threeDPrintedHousingInitiativePreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Inform,
    rationale:
      "Pitch it as moon-shot housing relief: fast, green, cheaper. Hammer the innovation angle and cite early rent drops.",
  },
  cabinet: {
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "Stress public-private cost-share, 30-year bonds, and payback via land-lease fees—minimal fiscal risk.",
      },
      authorizedContent:
        "CBO sheet: average printed unit $91 K vs $165 K traditional. Break-even in 7 yrs if vacancy <8 %. Contingency fund covers printer recall up to $3 B.",
    },
    [CabinetStaticId.HHS]: {
      preference: {
        answerType: AnswerType.Deflect,
        rationale:
          "Redirect to health gains: mold-free materials cut asthma rates; focus on well-being, not zoning fights.",
      },
    },
  },
};
