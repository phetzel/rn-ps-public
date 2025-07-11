import {
  SituationConsequenceWeight,
  CabinetStaticId,
  SubgroupStaticId,
} from "~/types";
import type { SituationOutcome } from "~/types";

export const robotDelegateDiplomacyOutcomes: SituationOutcome[] = [
  {
    id: "outcome_robot_hailed",
    title: "Robot Hailed as Diplomatic Innovation",
    description:
      "The AI delegate performs flawlessly, analyzing data and proposing novel solutions. It's hailed as a breakthrough in diplomacy.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.Positive,
          [CabinetStaticId.Defense]:
            SituationConsequenceWeight.SlightlyPositive,
        },
        subgroups: {
          [SubgroupStaticId.TechIndustry]:
            SituationConsequenceWeight.StronglyPositive,
          [SubgroupStaticId.YouthVoters]: SituationConsequenceWeight.Positive,
          [SubgroupStaticId.BusinessLeaders]:
            SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.SeniorsCitizens]:
            SituationConsequenceWeight.SlightlyNegative,
        },
      },
    },
  },
  {
    id: "outcome_robot_walkout",
    title: "Delegates Stage Walkout in Protest",
    description:
      "Key allies refuse to negotiate with a machine, calling the move insulting and dehumanizing. The peace talks collapse before they even begin.",
    weight: 40,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.StronglyNegative,
          [CabinetStaticId.Defense]: SituationConsequenceWeight.Negative,
        },
        subgroups: {
          [SubgroupStaticId.RightWingBase]: SituationConsequenceWeight.Negative,
          [SubgroupStaticId.SeniorsCitizens]:
            SituationConsequenceWeight.Negative,
          [SubgroupStaticId.IndependentBase]:
            SituationConsequenceWeight.SlightlyNegative,
          [SubgroupStaticId.TechIndustry]:
            SituationConsequenceWeight.SlightlyNegative,
        },
      },
    },
  },
  {
    id: "outcome_robot_glitch",
    title: "AI Glitch Causes Diplomatic Incident",
    description:
      "A software glitch causes the robot to repeatedly translate 'hello' into a grave insult, creating a major international incident.",
    weight: 35,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.Negative,
          [CabinetStaticId.Justice]:
            SituationConsequenceWeight.SlightlyNegative,
        },
        subgroups: {
          [SubgroupStaticId.TechIndustry]: SituationConsequenceWeight.Negative,
          [SubgroupStaticId.IndependentBase]:
            SituationConsequenceWeight.SlightlyNegative,
          [SubgroupStaticId.YouthVoters]:
            SituationConsequenceWeight.SlightlyPositive,
        },
      },
    },
  },
];
