import { AnswerType, CabinetStaticId, SituationPreferences } from "~/types";

export const whiteHouseThemeParkPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deflect,
    rationale:
      "Deflect by joking about tourism potential while claiming details are still being studied, ignoring cost questions.",
  },
  cabinet: {
    [CabinetStaticId.Interior]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "Provide details from the draft Environmental Impact Statement to show due diligence and limit rumors.",
      },
      authorizedContent:
        "EIS draft notes the park would include a scaled replica of the Oval Office roller coaster, estimated to generate $50M annually with private sponsorships.",
    },
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Deflect,
        rationale:
          "Deflect by highlighting expected tourism revenue and minimize upfront spending details.",
      },
    },
  },
};
