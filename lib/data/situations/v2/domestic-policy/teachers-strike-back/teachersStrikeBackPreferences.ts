import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/types";

export const teachersStrikeBackPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deflect,
    rationale:
      "The President wants to deflect from the bizarre karaoke rule and reframe the debate around broader issues of teacher pay and school funding.",
  },
  cabinet: {
    [CabinetStaticId.HHS]: {
      preference: {
        answerType: AnswerType.Challenge,
        rationale:
          "The HHS Secretary who championed the rule feels defensive and wants to challenge the teachers' opposition to this 'innovative' teaching method.",
      },
    },
    [CabinetStaticId.Justice]: {
      preference: {
        answerType: AnswerType.Admit,
        rationale:
          "The Attorney General sees the mandate as a legal overreach and believes admitting the mistake is the fastest way to end the illegal strike.",
      },
    },
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "Treasury is concerned about the economic impact of the strike and wants to reassure the public that they are working on a fiscally sound solution.",
      },
    },
  },
};
