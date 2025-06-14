import {
  CabinetStaticId,
  SubgroupStaticId,
  SituationConsequenceWeight,
  SituationOutcome,
} from "~/types";

export const pandemicPizzaShortageOutcomes: SituationOutcome[] = [
  {
    id: "pps_rumor_quashed_relief",
    title: "Rumor Quashed; Supply Relief",
    description:
      "Authorities confirm no virus in toppings. Panic eases, deliveries resume, and citizens laugh off the scare.",
    weight: 40,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.HHS]: SituationConsequenceWeight.SlightlyPositive,
          [CabinetStaticId.Homeland]: SituationConsequenceWeight.Positive,
        },
        subgroups: {
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.UrbanResidents]: SituationConsequenceWeight.SlightlyPositive,
        },
      },
    },
  },
  {
    id: "pps_hoarding_causes_shortage",
    title: "Hoarding Leads to Shortage",
    description:
      "Despite reassurances, panic buying empties shelves, driving up prices and straining delivery workers.",
    weight: 35,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.HHS]: SituationConsequenceWeight.SlightlyNegative,
          [CabinetStaticId.Homeland]: SituationConsequenceWeight.Negative,
        },
        subgroups: {
          [SubgroupStaticId.RightWingBase]: SituationConsequenceWeight.Negative,
          [SubgroupStaticId.LeftWingBase]: SituationConsequenceWeight.SlightlyNegative,
        },
      },
    },
  },
  {
    id: "pps_virus_found_panic",
    title: "Virus Found in Toppings",
    description:
      "Tests unexpectedly detect a mild pathogen on imported toppings, sparking public outrage and calls for drastic measures.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.HHS]: SituationConsequenceWeight.Negative,
          [CabinetStaticId.Homeland]: SituationConsequenceWeight.Negative,
        },
        subgroups: {
          [SubgroupStaticId.SeniorsCitizens]: SituationConsequenceWeight.SlightlyNegative,
          [SubgroupStaticId.RuralResidents]: SituationConsequenceWeight.Negative,
        },
      },
    },
  },
];
