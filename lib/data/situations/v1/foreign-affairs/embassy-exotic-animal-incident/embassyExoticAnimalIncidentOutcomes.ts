import {
  CabinetStaticId,
  SubgroupStaticId,
  SituationConsequenceWeight,
  SituationOutcome,
} from "~/types";

export const embassyExoticAnimalIncidentOutcomes: SituationOutcome[] = [
  {
    id: "embassy_animal_returned",
    title: "Calf Returned, Goodwill",
    description:
      "The calf is swiftly returned to its home country. Apologies exchanged and joint conservation programs are announced.",
    weight: 40,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.Positive,
          [CabinetStaticId.Interior]: SituationConsequenceWeight.SlightlyPositive,
        },
        subgroups: {
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.SlightlyPositive,
        },
      },
    },
  },
  {
    id: "embassy_animal_uproar",
    title: "Animal-Rights Uproar",
    description:
      "Activists decry the illegal gift. Demonstrations erupt outside several embassies, pressuring both nations to strengthen wildlife laws.",
    weight: 35,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.SlightlyNegative,
          [CabinetStaticId.Interior]: SituationConsequenceWeight.Negative,
        },
        subgroups: {
          [SubgroupStaticId.LeftWingBase]: SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.RightWingBase]: SituationConsequenceWeight.SlightlyNegative,
        },
      },
    },
  },
  {
    id: "embassy_animal_conservation_win",
    title: "Calf Breeds, Joint Conservation Win",
    description:
      "The calf remains abroad and successfully breeds with a local herd, sparking a celebrated joint conservation project between the two nations.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Interior]: SituationConsequenceWeight.Positive,
        },
        subgroups: {
          [SubgroupStaticId.YouthVoters]: SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.Neutral,
        },
      },
    },
  },
];
