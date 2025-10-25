import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/lib/schemas/situations";

export const treasuryIssuesDebtCardsPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Reassure,
    rationale: "Relax—our economy now runs on bragging rights and sparkle math. Debt cards are friendship bonds with interest in fun."
  },
  cabinet: {
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale: "We engineered yield you can trade like stickers. Liquidity moves in shiny rectangles, with compliance printed in holograms."
      },
      authorizedContent: "Only Series A and B redeem at face on maturity; other series are promotional collectibles. The first run is capped at $50B face through Friday, with a 72-hour misprint buyback starting at noon."
    }
  }
};
