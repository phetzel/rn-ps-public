import {
  CabinetStaticId,
  SubgroupStaticId,
  SituationConsequenceWeight,
  SituationOutcome,
} from "~/types";

export const hhsPharmaInsiderTradeOutcomes: SituationOutcome[] = [
  {
    id: "hpit_cleared_review",
    title: "Cleared After Review",
    description:
      "An ethics review finds the trades routine, unrelated to secret drug rulings. Protests fade quickly.",
    weight: 40,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.HHS]: SituationConsequenceWeight.SlightlyPositive,
          [CabinetStaticId.Justice]: SituationConsequenceWeight.SlightlyNegative,
        },
        subgroups: {
          [SubgroupStaticId.BusinessLeaders]: SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.Neutral,
        },
      },
    },
  },
  {
    id: "hpit_sec_resignation",
    title: "SEC Fines and Resignation",
    description:
      "Evidence of insider tips leads to hefty SEC fines and the Health Secretary's resignation, fueling relentless coverage.",
    weight: 35,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.HHS]: SituationConsequenceWeight.Negative,
        },
        subgroups: {
          [SubgroupStaticId.LeftWingBase]: SituationConsequenceWeight.Negative,
          [SubgroupStaticId.RightWingBase]: SituationConsequenceWeight.Negative,
        },
      },
    },
  },
  {
    id: "hpit_case_tossed",
    title: "Case Tossed, Suspicion Lingers",
    description:
      "A judge dismisses charges on technical grounds, but many suspect a cover-up. Polls show lingering mistrust of health regulators.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.HHS]: SituationConsequenceWeight.SlightlyNegative,
        },
        subgroups: {
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.SlightlyNegative,
          [SubgroupStaticId.SeniorsCitizens]: SituationConsequenceWeight.SlightlyNegative,
        },
      },
    },
  },
];
