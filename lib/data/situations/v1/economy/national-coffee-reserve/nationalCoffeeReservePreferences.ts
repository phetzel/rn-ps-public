import { AnswerType, CabinetStaticId, SituationPreferences } from "~/types";

export const nationalCoffeeReservePreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deflect,
    rationale:
      "Coffee fuels workers! Call it bean-based energy security, joke that decaf is un-American, and dodge deep cost math.",
  },
  cabinet: {
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "Stress futures-hedge funding: reserve buys are offset by options sales; net budget hit near zero if prices spike.",
      },
    },
    [CabinetStaticId.HHS]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "Highlight caffeine-intake guidance, mold testing, and public health research funded by reserve fees.",
      },
      authorizedContent:
        "FDA lab memo: 0.7 % of sampled imports carried ochratoxin above EU limits. Reserve protocols include infrared sorting and mycotoxin screening; spoiled lots diverted to bio-fuel trials, not retail.",
    },
    [CabinetStaticId.Homeland]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "Present it as insurance against port strikes and crop blight, with beans stored in secure, climate-controlled bunkers.",
      },
    },
  },
};
