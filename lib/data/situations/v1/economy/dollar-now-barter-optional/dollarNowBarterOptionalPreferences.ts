import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/lib/schemas/situations";

export const dollarNowBarterOptionalPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Challenge,
    rationale: "I relish goading markets into pricing the unpriceable; chaos flushes truth. If lattes get prices, so can goat hugs."
  },
  cabinet: {
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale: "Business leaders crave goat-indexed clarity; rural residents deserve hay credit; youth voters want meme rebates. I trade in data, not vibes."
      },
      authorizedContent: "Pilot launches Monday in 12 districts: goods under 50 lbs, favors capped at 2 hours, and verified-author memes only. Early coverage may trigger hoarding of small items."
    },
    [CabinetStaticId.Justice]: {
      preference: {
        answerType: AnswerType.Deny,
        rationale: "We deny that casseroles, tractor rides, or artisanal memes can buy innocence. Equal-opportunity prosecution includes goats with bowties."
      }
    }
  }
};
