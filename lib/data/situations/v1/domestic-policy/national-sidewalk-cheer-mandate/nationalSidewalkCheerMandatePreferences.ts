import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/lib/schemas/situations";

export const nationalSidewalkCheerMandatePreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Challenge,
    rationale: "I dare every block to out-cheer the parade float of democracy. If sidewalks roar, even potholes will flinch into repair."
  },
  cabinet: {
    [CabinetStaticId.Justice]: {
      preference: {
        answerType: AnswerType.Admit,
        rationale: "Compelled ovations wobble in court like gelatin evidence. We prefer voluntary pep with permitted decibels and zero oaths."
      }
    },
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale: "Clapping fines are a rounding error, but shiny meters devour gold like ducks eat noodles. We urge thrift and fewer brass cymbals."
      },
      authorizedContent: "Internal scoring shows the fines would net under 0.01% of revenue, while meter costs exceed 0.03%. If cited, it weakens the claim that cheering pays for itself."
    },
    [CabinetStaticId.Homeland]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale: "Coordinated applause reduces rogue balloon panics and keeps dignitaries audible. We'll issue wrist metronomes, not batons."
      }
    }
  }
};
