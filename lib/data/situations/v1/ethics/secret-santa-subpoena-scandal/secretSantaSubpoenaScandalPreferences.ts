import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/lib/schemas/situations";

export const secretSantaSubpoenaScandalPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deflect,
    rationale: "I will not be lured into condiment gossip; presidents tackle mustards, not pickles. Santa disputes belong to the Elf Oversight Board."
  },
  cabinet: {
    [CabinetStaticId.State]: {
      preference: {
        answerType: AnswerType.Deny,
        rationale: "We deny swapping secrets for snacks; those pickles were ceremonial brine tokens. The memos were decoy sheets used in morale drills."
      }
    },
    [CabinetStaticId.Justice]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale: "We follow the brine, not the buzz; subpoenas speak louder than carols. Chain-of-custody beats any festive alibi."
      },
      authorizedContent: "Subpoenas were served for Secret Santa logs, pickle jars, and note templates at 7:30 a.m. Five staff interviews are set for Thursday at 9 a.m; public hype could chill cooperation."
    },
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Challenge,
        rationale: "Unlabeled pickle swaps can spook the Fermented Commodities Index. We challenge any jar economy that hides memo-based derivatives."
      }
    }
  }
};
