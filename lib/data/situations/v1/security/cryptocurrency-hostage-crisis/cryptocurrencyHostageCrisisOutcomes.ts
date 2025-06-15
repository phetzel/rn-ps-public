import {
  CabinetStaticId,
  SubgroupStaticId,
  SituationConsequenceWeight,
  SituationOutcome,
} from "~/types";

export const cryptocurrencyHostageCrisisOutcomes: SituationOutcome[] = [
  {
    id: "chc_ransom_averted",
    title: "Ransom Averted, Funds Safe",
    description:
      "Authorities block the hackers' wallets and restore transactions, earning praise for quick action and calming jittery markets.",
    weight: 40,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.Positive,
          [CabinetStaticId.Justice]: SituationConsequenceWeight.SlightlyPositive,
        },
        subgroups: {
          [SubgroupStaticId.BusinessLeaders]: SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.TechIndustry]: SituationConsequenceWeight.SlightlyPositive,
        },
      },
    },
  },
  {
    id: "chc_payment_made",
    title: "Payment Made, Moral Hazard",
    description:
      "Government quietly pays part of the ransom to keep systems online, sparking outrage and fears of encouraging future attacks.",
    weight: 35,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.Negative,
          [CabinetStaticId.Justice]: SituationConsequenceWeight.SlightlyNegative,
        },
        subgroups: {
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.Negative,
          [SubgroupStaticId.RightWingBase]: SituationConsequenceWeight.Negative,
        },
      },
    },
  },
  {
    id: "chc_partial_meltdown",
    title: "Partial Meltdown Spurs New Rules",
    description:
      "Systems limp back online after major losses, prompting emergency regulations on crypto exchanges and digital security standards.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.SlightlyNegative,
          [CabinetStaticId.Justice]: SituationConsequenceWeight.SlightlyNegative,
        },
        subgroups: {
          [SubgroupStaticId.BusinessLeaders]: SituationConsequenceWeight.SlightlyNegative,
          [SubgroupStaticId.TechIndustry]: SituationConsequenceWeight.Negative,
        },
      },
    },
  },
];
