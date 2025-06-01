import {
  CabinetStaticId,
  SubgroupStaticId,
  SituationConsequenceWeight,
  SituationOutcome,
} from "~/types";

export const cousinBecomesCzarOutcomes: SituationOutcome[] = [
  {
    id: "cousin_snack_czar_quickly_forgotten",
    title: "Czar Appointment Becomes Minor Joke",
    description:
      "After initial mockery, the story fades as more pressing issues arise. The Snack Czar quietly redesigns vending machine layouts.",
    weight: 45,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Justice]: SituationConsequenceWeight.Neutral,
        },
        subgroups: {
          [SubgroupStaticId.IndependentBase]:
            SituationConsequenceWeight.SlightlyNegative, // "Initial eye-roll, but moved on."
          [SubgroupStaticId.YouthVoters]: SituationConsequenceWeight.Neutral, // "Mildly amusing, whatever."
        },
      },
    },
  },
  {
    id: "cousin_snack_czar_nepotism_scandal",
    title: "Nepotism Cries Dominate News Cycle",
    description:
      "The appointment becomes a symbol of cronyism, fueling ethics investigations and constant media criticism of the administration.",
    weight: 35,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Justice]: SituationConsequenceWeight.Negative, // "Failed to manage ethics perception."
        },
        subgroups: {
          [SubgroupStaticId.IndependentBase]:
            SituationConsequenceWeight.Negative, // "Clear cronyism, unacceptable."
          [SubgroupStaticId.LeftWingBase]: SituationConsequenceWeight.Negative, // "Anti-corruption, this is wrong."
          [SubgroupStaticId.RightWingBase]: SituationConsequenceWeight.Negative, // "Anti-corruption/small government stance."
        },
      },
    },
  },
  {
    id: "cousin_snack_czar_surprise_hit",
    title: "Snack Czar Becomes Unlikely Hero",
    description:
      "Against all odds, the Snack Czar implements wildly popular snack reforms (e.g., free gourmet coffee), boosting federal morale significantly.",
    weight: 20,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Justice]:
            SituationConsequenceWeight.SlightlyPositive, // "Unexpected win from a silly appointment."
        },
        subgroups: {
          [SubgroupStaticId.IndependentBase]:
            SituationConsequenceWeight.SlightlyPositive, // "Amusingly positive outcome, surprisingly."
          [SubgroupStaticId.LaborUnions]: SituationConsequenceWeight.Positive, // "Federal workers are happy with new snacks!"
          [SubgroupStaticId.UrbanResidents]:
            SituationConsequenceWeight.SlightlyPositive, // "Trendy new snacks in fed buildings? Cool."
        },
      },
    },
  },
];
