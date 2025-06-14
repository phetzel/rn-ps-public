import {
  CabinetStaticId,
  SubgroupStaticId,
  SituationConsequenceWeight,
  SituationOutcome,
} from "~/types";

export const spyDronePizzaDropOutcomes: SituationOutcome[] = [
  {
    id: "sdpd_charity_apology",
    title: "Apology and Charity Pizzas",
    description:
      "Defense apologizes and funds vegan charities with the pizzas, easing tensions. Summit resumes after comedic mishap.",
    weight: 40,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Homeland]: SituationConsequenceWeight.Positive,
        },
        subgroups: {
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.SlightlyPositive,
        },
      },
    },
  },
  {
    id: "sdpd_summit_walkout",
    title: "Summit Walks Out in Outrage",
    description:
      "Leaders condemn the drone drop as disrespectful and storm out. Talks collapse, leaving a major diplomatic stain on the summit.",
    weight: 35,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Homeland]: SituationConsequenceWeight.Negative,
          [CabinetStaticId.Defense]: SituationConsequenceWeight.Negative,
        },
        subgroups: {
          [SubgroupStaticId.RightWingBase]: SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.Negative,
        },
      },
    },
  },
  {
    id: "sdpd_pizza_meme",
    title: "Pizza Drone Meme Boosts Image",
    description:
      "Clips of vegan delegates ducking pizzas go viral. The public finds the fiasco hilarious, oddly improving the administration’s relatability.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Defense]: SituationConsequenceWeight.SlightlyNegative,
        },
        subgroups: {
          [SubgroupStaticId.YouthVoters]: SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.SeniorsCitizens]: SituationConsequenceWeight.SlightlyNegative,
        },
      },
    },
  },
];
