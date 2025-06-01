import { AnswerType, CabinetStaticId, SituationPreferences } from "~/types";

export const alienBroadcastHijackPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Challenge,
    rationale:
      "Outrageous hoax! We’ll hunt the culprits. This tests our resolve—maybe aliens are real! Stay vigilant, America!",
  },
  cabinet: {
    [CabinetStaticId.Homeland]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "No alien threat—just a hoax. We’re restoring broadcasts, tightening security, and urging calm.",
      },
      authorizedContent:
        "Hijackers exploited an old affiliate EBS flaw. Likely prank group “Cosmic Clowns.” DHS pushing rapid system upgrades.",
    },
    [CabinetStaticId.HHS]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "Broadcast caused alarm. Direct citizens to official info and offer mental-health support for the distressed.",
      },
    },
    [CabinetStaticId.Justice]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "Full probe launched to track and prosecute those behind the illegal hijack and mass panic.",
      },
    },
  },
};
