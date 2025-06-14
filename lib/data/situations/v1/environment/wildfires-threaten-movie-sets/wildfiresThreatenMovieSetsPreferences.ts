import { AnswerType, CabinetStaticId, SituationPreferences } from "~/types";

export const wildfiresThreatenMovieSetsPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deflect,
    rationale:
      "Crack jokes about pyrotechnic budgets, highlight state-level firefighting, skirt federal funding questions.",
  },
  cabinet: {
    [CabinetStaticId.Homeland]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "Outline containment steps using satellite maps, coordinate with studios, and reassure crews evacuation plans are ready.",
      },
      authorizedContent:
        "Classified satellite map pinpoints hot spots near major backlots. Rapid-deployment teams positioned at each, with aerial tankers on standby. Disclosure limited to avoid mass studio panic.",
    },
    [CabinetStaticId.State]: {
      preference: {
        answerType: AnswerType.Deflect,
        rationale:
          "Downplay international filming impact, redirect to local authorities, emphasize no effect on foreign relations.",
      },
    },
  },
};
