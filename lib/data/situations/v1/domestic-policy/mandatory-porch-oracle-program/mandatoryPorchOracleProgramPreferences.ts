import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/lib/schemas/situations";

export const mandatoryPorchOracleProgramPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Challenge,
    rationale: "I challenge every block to out-prophecy the government. Shared porch omens will stitch civic nerves and swat rumors before breakfast."
  },
  cabinet: {
    [CabinetStaticId.HHS]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale: "Oracles get splinter-prevention training and empathy boosters; the app emits a calming purr to deter raccoons and neighbor stress."
      }
    },
    [CabinetStaticId.Homeland]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale: "Front stoops are our soft perimeter. Rural porches already scan horizons; we’ll badge them and standardize lantern-based alerts."
      }
    },
    [CabinetStaticId.Justice]: {
      preference: {
        answerType: AnswerType.Admit,
        rationale: "Compelled prophecy tangles with the First Amendment; we prefer opt-in augury, clear appeal steps, and zero porch confiscations."
      },
      authorizedContent: "We issued written guidance today: agencies cannot issue fines for noncompliance for 30 days. Courts will review, which slows rollout and may upset the app contractor."
    }
  }
};
