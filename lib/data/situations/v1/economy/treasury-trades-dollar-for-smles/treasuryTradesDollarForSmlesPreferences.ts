import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/lib/schemas/situations";

export const treasuryTradesDollarForSmlesPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deny,
    rationale: "I deny it and frown upon the premise. My face is on no app, and no app is on my face."
  },
  cabinet: {
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale: "We will peg the Smle to the median molar and cap grinflation at 2 chuckles. Incisors are harder than ink, and twice as liquid."
      },
      authorizedContent: "Pilot begins Monday at 7 a.m. in three test towns: New Nap, Grinport, and Mirth Falls. Seniors keep cash for 90 days and retailers get a 5% tax credit; leaks could spur toothpaste hoarding."
    },
    [CabinetStaticId.Justice]: {
      preference: {
        answerType: AnswerType.Challenge,
        rationale: "Compelled smiling strains the First Jaw Principle. We need grin warrants and Grinanda warnings so cheeks don’t self-incriminate."
      }
    },
    [CabinetStaticId.Homeland]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale: "Our Smile Shield flags counterfeit grins from mime syndicates and photogenic raccoons. We spot deepfake dimples at 200 yards and we have nets."
      }
    }
  }
};
