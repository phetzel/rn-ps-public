import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/lib/schemas/situations";

export const ethicsCommissionSellsMoralityPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deflect,
    rationale: "Turn the fiasco into vaudeville so the auction scans as art. Keep cameras on shiny tokens while I conduct a press kazoo orchestra."
  },
  cabinet: {
    [CabinetStaticId.Justice]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale: "We will spell out the statutes and freeze the virtue vending machines. Investigative outlets crave receipts; we bring labels and locks."
      },
      authorizedContent: "As of 6 a.m., we secured the panel's payment ledger showing 137 licenses and 482 apology tokens sold since May 1. Refunds are paused under an evidence hold until a judge rules."
    },
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale: "Calm the contrition markets by downgrading apology tokens to novelty chits. Tech wants clarity; we price remorse at zero until audits finish."
      }
    },
    [CabinetStaticId.HHS]: {
      preference: {
        answerType: AnswerType.Challenge,
        rationale: "Warn the public not to eat, vape, or microdose apology tokens; ethics is not a supplement. Independent voters love cartoons on safety posters."
      }
    }
  }
};
