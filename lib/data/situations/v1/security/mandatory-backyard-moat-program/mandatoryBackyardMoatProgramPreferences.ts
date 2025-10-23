import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/lib/schemas/situations";

export const mandatoryBackyardMoatProgramPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Challenge,
    rationale: "I'll out-paddle panic with pageantry; meet me at noon for a cul-de-sac canoe sprint. Any critic may wave a pool noodle."
  },
  cabinet: {
    [CabinetStaticId.Homeland]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale: "We soothe yard jitters with cheerful specs; standard width is three geese, depth two raccoons. It is a patriotic puddle, not a shark trench."
      },
      authorizedContent: "Effective today, enforcement is paused 72 hours for safety checks. No citations this week, and seniors get temporary plank waivers while unions meet."
    },
    [CabinetStaticId.Defense]: {
      preference: {
        answerType: AnswerType.Deny,
        rationale: "We did not request crocodile reserves. Our submarines are not HOA-compliant; keep amphibious chaos off our budget."
      }
    },
    [CabinetStaticId.Justice]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale: "We must inventory every statute a ditch might trip, from turtle tenancy to mailbox egress. Expect brisk injunctions while we define 'yard moat'."
      }
    }
  }
};
