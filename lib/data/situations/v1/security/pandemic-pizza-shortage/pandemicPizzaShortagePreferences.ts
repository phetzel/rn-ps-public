import { AnswerType, CabinetStaticId, SituationPreferences } from "~/types";

export const pandemicPizzaShortagePreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deflect,
    rationale:
      "Downplay the rumor, joke about pineapple vaccines, and steer conversation away from federal overreach in food safety.",
  },
  cabinet: {
    [CabinetStaticId.HHS]: {
      preference: {
        answerType: AnswerType.Deflect,
        rationale:
          "Avoid speculating on unverified pizza pathogens while emphasizing normal food inspections continue.",
      },
      authorizedContent:
        "Lab tests show no virus. Reports come from a satire blog misinterpreted by social media. Official memo clarifies there’s no foodborne threat.",
    },
    [CabinetStaticId.Homeland]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "Calm supply-chain fears and highlight steps to ensure pizza deliveries remain uninterrupted.",
      },
    },
  },
};
