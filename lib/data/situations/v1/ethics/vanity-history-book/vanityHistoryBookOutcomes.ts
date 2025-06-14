import {
  CabinetStaticId,
  SubgroupStaticId,
  SituationConsequenceWeight,
  SituationOutcome,
} from "~/types";

export const vanityHistoryBookOutcomes: SituationOutcome[] = [
  {
    id: "book_pulped_apology",
    title: "Book Pulped After Apology",
    description:
      "Under fire, the administration apologizes and orders all printed copies destroyed, blaming an overzealous aide.",
    weight: 40,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.SlightlyPositive,
          [CabinetStaticId.Justice]: SituationConsequenceWeight.SlightlyPositive,
        },
        subgroups: {
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.LeftWingBase]: SituationConsequenceWeight.SlightlyPositive,
        },
      },
    },
  },
  {
    id: "book_remains_rage",
    title: "History Book Remains, Historians Rage",
    description:
      "Despite criticism, the biography stays in government shops, drawing protests from academics and fueling debate over censorship.",
    weight: 35,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.Negative,
        },
        subgroups: {
          [SubgroupStaticId.LeftWingBase]: SituationConsequenceWeight.Negative,
          [SubgroupStaticId.RightWingBase]: SituationConsequenceWeight.SlightlyPositive,
        },
      },
    },
  },
  {
    id: "satirical_rebuttal_bestseller",
    title: "Satirical Rebuttal Outsells Original",
    description:
      "A parody edition by a rival publisher climbs the charts, overshadowing the official book and embarrassing the administration.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.SlightlyNegative,
        },
        subgroups: {
          [SubgroupStaticId.YouthVoters]: SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.SlightlyNegative,
        },
      },
    },
  },
];
