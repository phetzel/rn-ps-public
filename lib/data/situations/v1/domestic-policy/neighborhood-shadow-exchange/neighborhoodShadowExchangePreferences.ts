import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/lib/schemas/situations";

export const neighborhoodShadowExchangePreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Challenge,
    rationale: "I challenge the notion that shadows are hoarded property. Empathy blooms when outlines are shared like neighborhood tools."
  },
  cabinet: {
    [CabinetStaticId.HHS]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale: "We reassure residents that borrowed silhouettes are hygienic and mood-safe. Routine swaps reduce envy-squints and civic glare among neighbors."
      }
    },
    [CabinetStaticId.Justice]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale: "We will inform the public that shadow custody law is untested. Courts may treat silhouettes like umbrellas, not identities, pending rulings."
      },
      authorizedContent: "A preliminary injunction hearing is set for Thursday at 10 a.m. in the Mirrored District Court. If the pilot pauses, residents keep their original silhouettes until a ruling."
    },
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Deny,
        rationale: "We deny any plan to levy a 'shadow tax' or float silhouette bonds. Markets spook if they think light itself is collateral, so we won’t draft such mems"
      }
    }
  }
};
