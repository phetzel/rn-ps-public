import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/lib/schemas/situations";

export const stateRecognizesImaginaryAllyPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Challenge,
    rationale: "If they’re real enough to demand embassies, they can also explain next week’s lunar tariffs. Prove it with crayons."
  },
  cabinet: {
    [CabinetStaticId.State]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale: "Recognition follows the Treaty of Make-Believe, notarized in invisible ink. We will honor sandbox borders, pending nap-time audits."
      },
      authorizedContent: "At 4 p.m. today, we will issue provisional Play Passes instead of passports to 12 accredited imaginary envoys. No U.S. funds move. If widely reported, some partners may freeze talks."
    }
  }
};
