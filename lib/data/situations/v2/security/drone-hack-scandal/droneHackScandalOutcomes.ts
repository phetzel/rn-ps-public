import {
  SituationConsequenceWeight,
  CabinetStaticId,
  SubgroupStaticId,
} from "~/types";
import type { SituationOutcome } from "~/types";

export const droneHackScandalOutcomes: SituationOutcome[] = [
  {
    id: "outcome_hack_traced",
    title: "Hack Traced, System Secured",
    description:
      "Cybersecurity teams quickly identify the vulnerability, patch the system, and trace the hack to a lone-wolf actor, restoring confidence.",
    weight: 35,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Homeland]:
            SituationConsequenceWeight.SlightlyPositive,
          [CabinetStaticId.Defense]: SituationConsequenceWeight.Positive,
          [CabinetStaticId.Justice]:
            SituationConsequenceWeight.SlightlyPositive,
        },
        subgroups: {
          [SubgroupStaticId.TechIndustry]:
            SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.IndependentBase]:
            SituationConsequenceWeight.SlightlyPositive,
        },
      },
    },
  },
  {
    id: "outcome_hack_foreign_power",
    title: "Foreign Power Suspected in Hack",
    description:
      "The sophistication of the hack points toward a rival nation-state, escalating the incident from a prank into a serious international cyber-conflict.",
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
          [SubgroupStaticId.BusinessLeaders]:
            SituationConsequenceWeight.SlightlyNegative,
          [SubgroupStaticId.IndependentBase]:
            SituationConsequenceWeight.SlightlyNegative,
        },
      },
    },
  },
  {
    id: "outcome_hack_public_ridicule",
    title: "Drone Chaos Leads to Public Ridicule",
    description:
      "The military is mocked for losing control of its high-tech drones to 'rubber chicken' hackers. The story becomes a symbol of incompetence.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Defense]:
            SituationConsequenceWeight.SlightlyNegative,
        },
        subgroups: {
          [SubgroupStaticId.YouthVoters]:
            SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.RightWingBase]:
            SituationConsequenceWeight.SlightlyNegative,
          [SubgroupStaticId.TechIndustry]:
            SituationConsequenceWeight.SlightlyNegative,
        },
      },
    },
  },
];
