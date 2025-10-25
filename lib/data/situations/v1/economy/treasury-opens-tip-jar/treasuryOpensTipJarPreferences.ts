import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/lib/schemas/situations";

export const treasuryOpensTipJarPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Challenge,
    rationale: "Dare everyone to out-tip the nation's couch cushions. Chaos favors leaders who juggle quarters while humming the anthem."
  },
  cabinet: {
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale: "Explain the jar as a velocity-of-money accelerator and national morale instrument. Note coins are sterilized by patriotic lasers."
      },
      authorizedContent: "At 4 p.m. tomorrow, a private foundation will match the first $10 million dropped into the jar, two-to-one, for 24 hours. If this timing is published now, the foundation may withdraw."
    }
  }
};
