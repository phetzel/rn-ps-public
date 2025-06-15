import { AnswerType, CabinetStaticId, SituationPreferences } from "~/types";

export const socialMediaMindControlFearPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Reassure,
    rationale: "Urge calm and rely on health experts to debunk the rumor.",
  },
  cabinet: {
    [CabinetStaticId.HHS]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "Present medical evidence that the app cannot control minds, dispelling public fear.",
      },
      authorizedContent:
        "Neurology advisory notes no evidence of subliminal control. Lab tests show the app collects data but does not alter brainwaves.",
    },
    [CabinetStaticId.Justice]: {
      preference: {
        answerType: AnswerType.Deflect,
        rationale:
          "Downplay legal angles while steering conversation toward personal responsibility and tech literacy.",
      },
    },
  },
};
