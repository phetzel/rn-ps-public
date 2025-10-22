import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/lib/schemas/situations";

export const mandatoryBackyardGlacierPlanPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Challenge,
    rationale: "Picking a fight with the sun thrills youth voters and melts doubts. Spectacle beats spreadsheets when ice goes door-to-door."
  },
  cabinet: {
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale: "Calming lenders beats wrestling snowmen. We'll sweeten the chill with credits, frost-backed bonds, and a merciful thaw schedule."
      }
    },
    [CabinetStaticId.Justice]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale: "We favor crisp rules to prevent a blizzard of suits. Define who slips, who pays, and whether a penguin counts as a guest."
      },
      authorizedContent: "The Department will pause fines and private lawsuits over micro-glacier injuries for 60 days starting Friday. It buys time to set safety rules but will likely upset insurers."
    }
  }
};
