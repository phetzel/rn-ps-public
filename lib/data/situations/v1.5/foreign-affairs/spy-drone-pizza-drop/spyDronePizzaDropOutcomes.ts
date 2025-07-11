import {
  SituationConsequenceWeight,
  CabinetStaticId,
  SubgroupStaticId,
} from "~/types";
import type { SituationOutcome } from "~/types";

export const spyDronePizzaDropOutcomes: SituationOutcome[] = [
  {
    id: "outcome_pizza_apology",
    title: "Apology & Charity Pizzas Smooth Things Over",
    description:
      "A quick apology and large donation to rival food banks turns disaster into a PR win, praised as 'pizza diplomacy'.",
    weight: 35,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.Positive,
          [CabinetStaticId.Defense]:
            SituationConsequenceWeight.SlightlyPositive,
        },
        subgroups: {
          [SubgroupStaticId.IndependentBase]:
            SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.YouthVoters]:
            SituationConsequenceWeight.SlightlyPositive,
        },
      },
    },
  },
  {
    id: "outcome_pizza_escalation",
    title: "Rival Nation Escalates, Citing 'Airstrike'",
    description:
      "Rival nation condemns the incident as a 'cheesy airstrike,' recalls its ambassador, and suspends joint military exercises.",
    weight: 40,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Defense]: SituationConsequenceWeight.Negative,
          [CabinetStaticId.State]: SituationConsequenceWeight.Negative,
          [CabinetStaticId.Homeland]:
            SituationConsequenceWeight.SlightlyNegative,
        },
        subgroups: {
          [SubgroupStaticId.RightWingBase]: SituationConsequenceWeight.Negative,
          [SubgroupStaticId.IndependentBase]:
            SituationConsequenceWeight.SlightlyNegative,
          [SubgroupStaticId.BusinessLeaders]:
            SituationConsequenceWeight.SlightlyNegative,
        },
      },
    },
  },
  {
    id: "outcome_pizza_meme",
    title: "Pizza Drone Becomes Viral Sensation",
    description:
      "The absurdity makes the drone an internet sensation. Military leans into it, improving its image with younger audiences.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Defense]:
            SituationConsequenceWeight.SlightlyPositive,
        },
        subgroups: {
          [SubgroupStaticId.YouthVoters]: SituationConsequenceWeight.Positive,
          [SubgroupStaticId.TechIndustry]:
            SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.RightWingBase]:
            SituationConsequenceWeight.SlightlyNegative,
        },
      },
    },
  },
];
