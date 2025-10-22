import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/lib/schemas/situations";

export const treasuryLaunchesNostalgiaCoinPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Admit,
    rationale: "I admit I okayed pegging it to the smell of summer sprinklers. If nostalgia surges, we’ll mop with fiscal towels."
  },
  cabinet: {
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale: "We peg value to audited popsicle sticks and grass-stain indices. Seniors and rural users get simple rules; tech firms get a lullaby API."
      },
      authorizedContent: "First Nostalgia Coin credits post Thursday at 2 p.m. for verified grade-school memories in three pilot counties. Expect brief ATM slowdowns and a small dip in cash use in those towns."
    },
    [CabinetStaticId.Justice]: {
      preference: {
        answerType: AnswerType.Deny,
        rationale: "We deny it is legal tender until courts define Memory Units. Until then, treat it like prize tickets, not wages or bail."
      }
    }
  }
};
