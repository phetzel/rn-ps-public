import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/lib/schemas/situations";

export const stateDepartmentsEthicsOuijaPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Inform,
    rationale: "I will explain the board is retired and the ghosts are furloughed. Voters deserve clarity, not ectoplasm."
  },
  cabinet: {
    [CabinetStaticId.State]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale: "We treated the Ouija as cultural diplomacy, not policy. Any ectoplasmic notes were ceremonial and promptly blow-dried."
      }
    },
    [CabinetStaticId.Justice]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale: "We will ban spectral input, depose the planchette, and timestamp everything. Salt circles and paper trails beat rumors and memes."
      },
      authorizedContent: "Justice secured the board and attendance logs at 8 a.m. Monday. Draft rules banning spirit input in official decisions will post by Friday 6 p.m.; early release may upset some committee chairs."
    },
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Deflect,
        rationale: "Markets fear hauntings more than deficits. We’ll discuss bond stability and a modest séance excise, not wrestle with poltergeist precedent."
      }
    }
  }
};
