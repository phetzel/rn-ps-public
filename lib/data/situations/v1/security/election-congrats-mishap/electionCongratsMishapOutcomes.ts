import {
  CabinetStaticId,
  SubgroupStaticId,
  SituationConsequenceWeight,
  SituationOutcome,
} from "~/types";

export const electionCongratsMishapOutcomes: SituationOutcome[] = [
  {
    id: "ecm_apology_quells_chaos",
    title: "Apology Broadcast Quells Chaos",
    description:
      "Public relations teams clarify the error and issue an official apology. News cycle moves on with minimal damage.",
    weight: 40,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.SlightlyPositive,
          [CabinetStaticId.Justice]: SituationConsequenceWeight.SlightlyPositive,
        },
        subgroups: {
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.UrbanResidents]: SituationConsequenceWeight.SlightlyPositive,
        },
      },
    },
  },
  {
    id: "ecm_messages_breed_suspicion",
    title: "Mixed Messages Breed Suspicion",
    description:
      "Conflicting messages persist online, leading to questions about election integrity and possible bias from the administration.",
    weight: 35,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.SlightlyNegative,
          [CabinetStaticId.Justice]: SituationConsequenceWeight.SlightlyNegative,
        },
        subgroups: {
          [SubgroupStaticId.LeftWingBase]: SituationConsequenceWeight.SlightlyNegative,
          [SubgroupStaticId.RightWingBase]: SituationConsequenceWeight.SlightlyNegative,
        },
      },
    },
  },
  {
    id: "ecm_foreign_allies_upset",
    title: "Foreign Allies Demand Explanation",
    description:
      "Foreign governments express outrage at being dragged into domestic politics, straining diplomatic ties and fueling conspiracy theories.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.Negative,
          [CabinetStaticId.Justice]: SituationConsequenceWeight.SlightlyNegative,
        },
        subgroups: {
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.Negative,
          [SubgroupStaticId.BusinessLeaders]: SituationConsequenceWeight.SlightlyNegative,
        },
      },
    },
  },
];
