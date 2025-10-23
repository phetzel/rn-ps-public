import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/lib/schemas/situations";

export const mailboxesEnlistedForAirWarPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Challenge,
    rationale: "If drones can read your love letters, challenge them to a stamp-licking contest. Our mailboxes are patriots with slot-based courage."
  },
  cabinet: {
    [CabinetStaticId.Defense]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale: "Mailbox Sentries Mk.I shoot biodegradable bubblegum at snoop-drones. Flag-up is a warning mode, not a war cry."
      },
      authorizedContent: "First deployment covers 12 pilot blocks near Hush Harbor Airfield from 04:00-06:00 local, using only non-marking foam bursts. If publicized early, prank fliers may route around and skew results."
    },
    [CabinetStaticId.Justice]: {
      preference: {
        answerType: AnswerType.Deflect,
        rationale: "We are drafting Curbside Combatant Consent forms and tiny Miranda labels for every slot. Courts distrust sticky-gum evidence."
      }
    }
  }
};
