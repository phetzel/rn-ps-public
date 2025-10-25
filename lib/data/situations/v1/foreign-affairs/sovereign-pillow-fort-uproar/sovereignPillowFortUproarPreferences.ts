import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/lib/schemas/situations";

export const sovereignPillowFortUproarPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Challenge,
    rationale: "He opts to challenge, calling for a public fort-off to project oomph while dodging tedious maritime clauses."
  },
  cabinet: {
    [CabinetStaticId.State]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale: "They choose to inform, citing plush treaties that require a duvet referendum and three fluff stamps before any fort can be 'sovereign'."
      }
    },
    [CabinetStaticId.Defense]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale: "They want to reassure by promising lullaby-level presence while hiding that the admirals are allergic to goose down."
      },
      authorizedContent: "At 05:00 Federal Quilt Time, our escorts powered down and switched to Hail Channel 9-Lullaby. No feathers fired; vessels idle to de-escalate, but publicizing this may invite fort theatrics."
    }
  }
};
