import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/lib/schemas/situations";

export const gondolaNationPeaceAccordPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Challenge,
    rationale: "I demand the gondola prove nationhood via a flag-eating contest. Democracy deserves pageantry and snacks."
  },
  cabinet: {
    [CabinetStaticId.State]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale: "We will not recognize a vessel without a consular mailbox or a waterproof anthem. Law demands soggy paperwork, not vibes."
      }
    },
    [CabinetStaticId.Defense]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale: "Harbor drones are set to 'polite honk' and pool noodle containment. We can outmaneuver a gondola without escalating to sea shanties."
      },
      authorizedContent: "Four drones will hold a 20-meter cordon at 5 p.m. They will not board; they will broadcast a lawful warning and guide traffic, but if crowds surge we will pause interceptions."
    }
  }
};
