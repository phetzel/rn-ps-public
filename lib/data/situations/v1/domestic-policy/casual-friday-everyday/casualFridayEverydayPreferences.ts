import { AnswerType, CabinetStaticId, SituationPreferences } from "~/types";

export const casualFridayEverydayPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deflect,
    rationale:
      "Comfy staff are happy staff! Let’s celebrate productivity-in-pajamas and ignore fashion gripes from stuffed shirts.",
  },
  cabinet: {
    [CabinetStaticId.Homeland]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "Stress that casual wear doesn’t weaken security; badge checks and protocols stay unchanged.",
      },
    },
    [CabinetStaticId.HHS]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "Explain ergonomic and mental-health benefits of relaxed attire while outlining clear hygiene guidelines.",
      },
      authorizedContent:
        "Internal study shows a 6% drop in repetitive-strain complaints when staff wear athleisure. Pilot data from three agencies underpins the recommendation.",
    },
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Deflect,
        rationale:
          "Downplay cost fears; morale boosts may raise productivity and offset any dress-code confusion.",
      },
    },
  },
};
