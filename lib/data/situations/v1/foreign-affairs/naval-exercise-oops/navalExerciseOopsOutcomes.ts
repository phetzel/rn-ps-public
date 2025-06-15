import {
  CabinetStaticId,
  SubgroupStaticId,
  SituationConsequenceWeight,
  SituationOutcome,
} from "~/types";

export const navalExerciseOopsOutcomes: SituationOutcome[] = [
  {
    id: "naval_oops_compensation",
    title: "Compensation Paid, Forgiven",
    description:
      "The Navy apologizes and pays for lost catch. The ally accepts and drills resume as scheduled.",
    weight: 40,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Defense]: SituationConsequenceWeight.Positive,
          [CabinetStaticId.Homeland]: SituationConsequenceWeight.SlightlyPositive,
        },
        subgroups: {
          [SubgroupStaticId.RuralResidents]: SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.SlightlyPositive,
        },
      },
    },
  },
  {
    id: "naval_oops_drills_suspended",
    title: "Allies Suspend Joint Drills",
    description:
      "Outraged officials suspend joint exercises pending investigation. Fishing families protest and demand more compensation.",
    weight: 35,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Defense]: SituationConsequenceWeight.Negative,
          [CabinetStaticId.Homeland]: SituationConsequenceWeight.SlightlyNegative,
        },
        subgroups: {
          [SubgroupStaticId.RuralResidents]: SituationConsequenceWeight.Negative,
          [SubgroupStaticId.BusinessLeaders]: SituationConsequenceWeight.SlightlyNegative,
        },
      },
    },
  },
  {
    id: "naval_oops_movie_rights",
    title: "Fishermen Sell Movie Rights",
    description:
      "The crew turns the incident into a media deal, selling their story for a slapstick movie. Public sentiment softens despite embarrassment.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Defense]: SituationConsequenceWeight.SlightlyNegative,
        },
        subgroups: {
          [SubgroupStaticId.YouthVoters]: SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.RuralResidents]: SituationConsequenceWeight.Neutral,
        },
      },
    },
  },
];
