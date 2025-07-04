import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/types";

export const teachersStrikeBackPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Admit,
    rationale:
      "Realizes the karaoke rule was a mistake and wants to admit the error while reframing around broader teacher support issues.",
  },
  cabinet: {
    [CabinetStaticId.HHS]: {
      preference: {
        answerType: AnswerType.Challenge,
        rationale:
          "Secretary who championed the rule feels defensive and wants to challenge teachers' opposition to this method.",
      },
    },
    [CabinetStaticId.Justice]: {
      preference: {
        answerType: AnswerType.Admit,
        rationale:
          "Sees the mandate as legal overreach and believes admitting the mistake is the fastest way to end the illegal strike.",
      },
    },
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "Concerned about the economic impact of the strike and wants to reassure they are working on a fiscally sound solution.",
      },
    },
  },
};
