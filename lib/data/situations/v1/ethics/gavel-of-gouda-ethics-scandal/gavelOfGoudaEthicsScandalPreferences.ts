import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/lib/schemas/situations";

export const gavelOfGoudaEthicsScandalPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Challenge,
    rationale: "He challenges critics to a televised fondue tribunal against the Gouda gavel. Spectacle, not sorrow, will cleanse ethics."
  },
  cabinet: {
    [CabinetStaticId.Justice]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale: "We will treat the Gouda like plutonium: triple-bagged, logged, and never licked. Process first, penance later; the rind has rights."
      },
      authorizedContent: "Our log shows the original cheese gavel remains sealed in Evidence Locker M-9; the gifted gavel was a foam-and-wax replica cut on 10/18. Sharing this may anger unions who say replicas still break rules."
    },
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale: "We reassure markets: offloading surplus dairy reduces spoilage liability and butterfat volatility. Seniors' pensions stay solid, if fragrant."
      }
    },
    [CabinetStaticId.HHS]: {
      preference: {
        answerType: AnswerType.Admit,
        rationale: "We admit the cheese optics curdled trust with seniors and unions. We'll offer calcium credits and union-approved nose clips."
      }
    }
  }
};
