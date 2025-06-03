import { AnswerType, CabinetStaticId, SituationPreferences } from "~/types";

export const cowEmissionRegulationsPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deflect,
    rationale:
      "Green cows are the future! Laugh off ‘bovine-backpack’ jokes and tout bold climate leadership.",
  },
  cabinet: {
    [CabinetStaticId.HHS]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "Explain health and climate benefits, cite peer-reviewed data, and outline safety testing of devices.",
      },
      authorizedContent:
        "Pilot study in Moo County cut barn methane 27 %. Backpacks weigh under 2 lbs, auto-vent when full. USDA veterinarians cleared design; subsidy covers 80 % of farmer cost.",
    },
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "Emphasize tax credits and export branding boost outweigh transition costs to agriculture sector.",
      },
    },
  },
};
