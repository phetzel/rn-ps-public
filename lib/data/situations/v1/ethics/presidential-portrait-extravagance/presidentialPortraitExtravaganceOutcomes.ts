import {
  CabinetStaticId,
  SubgroupStaticId,
  SituationConsequenceWeight,
  SituationOutcome,
} from "~/types";

export const presidentialPortraitExtravaganceOutcomes: SituationOutcome[] = [
  {
    id: "ppe_refund_secured",
    title: "Refund Secured After Audit",
    description:
      "Treasury orders refunds for the pricey portraits and touts strict purchasing reviews, calming fiscal watchdogs.",
    weight: 40,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.SlightlyPositive,
        },
        subgroups: {
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.SlightlyPositive,
        },
      },
    },
  },
  {
    id: "ppe_hearings_ridicule",
    title: "House Hearings & Ridicule",
    description:
      "Lawmakers hold hearings mocking the extravagance. Weeks of memes and late-night jokes drown out policy news.",
    weight: 35,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.SlightlyNegative,
        },
        subgroups: {
          [SubgroupStaticId.LeftWingBase]: SituationConsequenceWeight.Negative,
          [SubgroupStaticId.RightWingBase]: SituationConsequenceWeight.Negative,
        },
      },
    },
  },
  {
    id: "ppe_portraits_stay",
    title: "Portraits Stay, Other Cuts",
    description:
      "Other budgets tighten while the lavish portraits remain on display, leaving critics fuming over misplaced priorities.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.SlightlyNegative,
        },
        subgroups: {
          [SubgroupStaticId.BusinessLeaders]: SituationConsequenceWeight.SlightlyNegative,
        },
      },
    },
  },
];
