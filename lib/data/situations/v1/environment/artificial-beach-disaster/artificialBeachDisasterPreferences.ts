import { AnswerType, CabinetStaticId, SituationPreferences } from "~/types";

export const artificialBeachDisasterPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deflect,
    rationale:
      "Crack jokes about unexpected tides, praise short-term tourist boosts, and dodge responsibility for faulty designs.",
  },
  cabinet: {
    [CabinetStaticId.Interior]: {
      preference: {
        answerType: AnswerType.Admit,
        rationale:
          "Acknowledge erosion miscalculations, outline remediation plans, and own up to oversight failures without blaming others.",
      },
      authorizedContent:
        "Internal erosion report reveals shoddy sand compaction and ignored engineer warnings about seasonal storms undermining new beaches.",
    },
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "Promise that disaster funds cover repairs, stress fiscal discipline, and calm fears of endless tax hikes for more sand.",
      },
    },
  },
};
