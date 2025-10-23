import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/lib/schemas/situations";

export const marketNapMandatePreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Challenge,
    rationale: "I challenge Index Alley to out-nap me; growth happens in REM. If stocks fear a pillow, they never deserved a blanket."
  },
  cabinet: {
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale: "We will inform with soothing numbers and lab-certified lullabies. Structure reduces jitters; pajamas on prices deter stampedes by sleepwalkers."
      },
      authorizedContent: "Pilot naps run 1:11-1:26 CMT on Tuesdays and Thursdays for four weeks. Early data show trade whiplash down 17%. If rumors trigger runs, we will pause expansion."
    }
  }
};
