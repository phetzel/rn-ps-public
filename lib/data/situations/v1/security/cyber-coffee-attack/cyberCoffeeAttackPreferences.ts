import { AnswerType, CabinetStaticId, SituationPreferences } from "~/types";

export const cyberCoffeeAttackPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Inform,
    rationale:
      "Assure jittery citizens that supplies will resume soon and point blame at faceless hackers, not regulators.",
  },
  cabinet: {
    [CabinetStaticId.Homeland]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "Detail cybersecurity steps and outline how logistics are being restored without hype.",
      },
      authorizedContent:
        "Tracking nodes show intrusion via a compromised shipment routing app. DHS teams isolated the servers within an hour and traced IPs to an overseas prank ring.",
    },
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "Calm markets about potential price spikes while promising consumer relief if needed.",
      },
    },
  },
};
