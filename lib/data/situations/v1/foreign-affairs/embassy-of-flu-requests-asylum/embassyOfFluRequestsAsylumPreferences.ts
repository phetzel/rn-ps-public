import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/lib/schemas/situations";

export const embassyOfFluRequestsAsylumPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Challenge,
    rationale: "Spectacle beats panic; I will challenge the barge to a public health decathlon for recognition. It buys time, confuses pirates, and keeps leverage."
  },
  cabinet: {
    [CabinetStaticId.HHS]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale: "We'll calmly explain doses, cold chains, and consent, even if their flag is sneezing. Science first; glitter treaties second."
      }
    },
    [CabinetStaticId.Homeland]: {
      preference: {
        answerType: AnswerType.Deny,
        rationale: "Ports, not parliaments: we deny barge-statehood while screening every crate and gull. Lawful lanes yes; sovereign splash zones no."
      },
      authorizedContent: "At 0500, our patrol confirmed the 'Embassy of Flu' barge lacks vaccine storage and carries 14 healthy occupants. We set a 12-hour floating screening lane; broadcasting this could invite copycat flotillas."
    }
  }
};
