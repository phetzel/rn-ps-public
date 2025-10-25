import {
  SituationConsequenceWeight,
  CabinetStaticId,
  SubgroupStaticId,
} from "~/types";
import type { SituationOutcome } from "~/lib/schemas/situations";

export const treasuryIssuesDebtCardsOutcomes: SituationOutcome[] = [
  {
    id: "outcome_foil_standard",
    title: "Shiny Foil Standard Replaces the Money Supply.",
    description: "Markets peg value to holographic sheen, and lawmakers argue over minting 'Ultra-Rare Balanced Budget' cards in the Carpeted Chamber.",
    weight: 35,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.StronglyPositive
        },
        subgroups: {
          [SubgroupStaticId.LaborUnions]: SituationConsequenceWeight.StronglyNegative,
          [SubgroupStaticId.TechIndustry]: SituationConsequenceWeight.StronglyPositive
        }
      }
    }
  },
  {
    id: "outcome_kindergarten",
    title: "Kindergarten Traders Seize the Yield Curve.",
    description: "Lunchbox swaps dictate rates as tiny oligarchs hoard 'Legendary 10-Year' cards, and parents demand fiscal naps between auctions.",
    weight: 35,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.LaborUnions]: SituationConsequenceWeight.StronglyPositive,
          [SubgroupStaticId.TechIndustry]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  },
  {
    id: "outcome_oracle",
    title: "Oracle Bond Card Begins Setting Real Rates.",
    description: "A misprinted card whispers APRs at midnight, so markets camp outside Treasury like fans, and policy is determined by pack luck.",
    weight: 30,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.LaborUnions]: SituationConsequenceWeight.StronglyNegative,
          [SubgroupStaticId.TechIndustry]: SituationConsequenceWeight.StronglyPositive
        }
      }
    }
  }
];
