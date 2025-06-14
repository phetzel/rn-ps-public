import { AnswerType, CabinetStaticId, SituationPreferences } from "~/types";

export const virtualRealityEspionagePreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Inform,
    rationale:
      "Share details of the espionage case to show swift action and maintain gamer trust.",
  },
  cabinet: {
    [CabinetStaticId.Defense]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "Explain technical evidence of the espionage and outline new security protocols.",
      },
      authorizedContent:
        "Packet captures show the VR servers sending user data to an unidentified foreign network; military cyber units are patching the vulnerability.",
    },
    [CabinetStaticId.Justice]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "Promise investigations and legal action against any corporate wrongdoing while calming public fears.",
      },
    },
  },
};
