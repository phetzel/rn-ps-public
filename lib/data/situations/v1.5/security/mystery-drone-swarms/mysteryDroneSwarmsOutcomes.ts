import {
  SituationConsequenceWeight,
  CabinetStaticId,
  SubgroupStaticId,
} from "~/types";
import type { SituationOutcome } from "~/types";

export const mysteryDroneSwarmsOutcomes: SituationOutcome[] = [
  {
    id: "outcome_swarms_hobbyists",
    title: "Swarms Linked to Advanced Hobbyists",
    description:
      "The FBI traces the swarms to advanced tech hobbyists testing new software. The threat is neutralized but exposes air security gaps.",
    weight: 40,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Homeland]:
            SituationConsequenceWeight.SlightlyPositive,
        },
        subgroups: {
          [SubgroupStaticId.TechIndustry]:
            SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.UrbanResidents]:
            SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.RightWingBase]:
            SituationConsequenceWeight.SlightlyNegative,
        },
      },
    },
  },
  {
    id: "outcome_swarms_foreign_probe",
    title: "Foreign Intelligence Probe Revealed",
    description:
      "Evidence shows the swarms are sophisticated surveillance drones from a rival nation, mapping infrastructure and testing defenses.",
    weight: 40,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Defense]: SituationConsequenceWeight.Negative,
          [CabinetStaticId.Homeland]: SituationConsequenceWeight.Negative,
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
    id: "outcome_swarms_tech_demo_fail",
    title: "Tech Firm's Viral Marketing Demo Fails",
    description:
      "A major tech firm admits the swarms were a miscalculated viral marketing stunt. The company faces massive fines and public condemnation.",
    weight: 20,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Justice]:
            SituationConsequenceWeight.SlightlyPositive,
        },
        subgroups: {
          [SubgroupStaticId.TechIndustry]:
            SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.BusinessLeaders]:
            SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.YouthVoters]:
            SituationConsequenceWeight.SlightlyPositive,
        },
      },
    },
  },
];
