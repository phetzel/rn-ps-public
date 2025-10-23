import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/lib/schemas/situations";

export const nationGetsOfficialScentPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Challenge,
    rationale: "I challenge critics to a dawn sniff duel; the nose that cries first writes the rule. We govern by nostril now."
  },
  cabinet: {
    [CabinetStaticId.State]: {
      preference: {
        answerType: AnswerType.Deflect,
        rationale: "We’ll rebrand it as aroma diplomacy and convene a summit of noses. Until suits pause, we issue nasal visas, not apologies."
      },
      authorizedContent: "Pilot diffusion starts Thursday at 05:00 in five transit hubs at 0.7 ppm of “Civic Fog.” A 24-hour pause triggers if complaints exceed 500 or bee counts drop by 10%."
    }
  }
};
