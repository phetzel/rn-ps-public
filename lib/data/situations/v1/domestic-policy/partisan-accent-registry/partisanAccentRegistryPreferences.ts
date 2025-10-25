import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/lib/schemas/situations";

export const partisanAccentRegistryPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Challenge,
    rationale: "I challenge both parties to a Neutral Accent Duel at dawn; loser switches to interpretive humming for a week. Democracy loves a spectacle."
  },
  cabinet: {
    [CabinetStaticId.HHS]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale: "Assigned accents are low-sodium and hypoallergenic; we will offer free consonant boosters and emergency vowel shelters. Please hydrate vowels."
      }
    },
    [CabinetStaticId.Justice]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale: "Our statutes guarantee the right to remain unscripted; assigning party vowels is legally spicy and likely flammable. We advise a full cooling period."
      },
      authorizedContent: "We have paused new accent assignments for 72 hours while we review pending lawsuits. Reporters should note agencies must stop collecting voice samples until Monday, delaying planned demos."
    },
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale: "Each assigned accent costs 12,000 syllables, three gold commas, and a truck of punctuation dust; markets hate glitter vowels. Tax rollable r's."
      }
    }
  }
};
