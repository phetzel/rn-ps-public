import {
  CabinetStaticId,
  SubgroupStaticId,
  SituationConsequenceWeight,
  SituationOutcome,
} from "~/types";

/**
 * droneHackScandalOutcomes.ts
 * — All descriptions ≤ 140 chars
 * — Weights still 40 / 35 / 25 (sum = 100)
 */
export const droneHackScandalOutcomes: SituationOutcome[] = [
  {
    id: "dhs_hack_traced_secured",
    title: "Hack Traced, System Secured",
    description:
      "Hack traced, drones patched; only a few surprise pizzas landed. Public laughs, but cybersecurity gaps draw scrutiny.",
    weight: 40,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Homeland]:
            SituationConsequenceWeight.SlightlyPositive,
          [CabinetStaticId.Defense]:
            SituationConsequenceWeight.SlightlyPositive,
        },
        subgroups: {
          [SubgroupStaticId.TechIndustry]:
            SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.YouthVoters]: SituationConsequenceWeight.Neutral,
          [SubgroupStaticId.IndependentBase]:
            SituationConsequenceWeight.Neutral,
        },
      },
    },
  },
  {
    id: "dhs_drone_chaos_ridicule",
    title: "Drone Chaos, Public Ridicule",
    description:
      "Drones crash into birdbaths and cars, dropping pizzas and making the administration an international punch-line.",
    weight: 35,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Homeland]: SituationConsequenceWeight.Negative,
          [CabinetStaticId.Defense]: SituationConsequenceWeight.Negative,
          [CabinetStaticId.Treasury]:
            SituationConsequenceWeight.SlightlyNegative,
        },
        subgroups: {
          [SubgroupStaticId.RightWingBase]: SituationConsequenceWeight.Negative,
          [SubgroupStaticId.IndependentBase]:
            SituationConsequenceWeight.Negative,
          [SubgroupStaticId.TechIndustry]:
            SituationConsequenceWeight.SlightlyNegative,
        },
      },
    },
  },
  {
    id: "dhs_foreign_power_suspected",
    title: "Foreign Power Suspected in Hack",
    description:
      "Intel hints a rival state ran the hack as a cyber test, triggering security alarms despite the absurd pizza payload.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Homeland]: SituationConsequenceWeight.Negative,
          [CabinetStaticId.Defense]:
            SituationConsequenceWeight.StronglyNegative,
          [CabinetStaticId.State]: SituationConsequenceWeight.SlightlyNegative,
        },
        subgroups: {
          [SubgroupStaticId.RightWingBase]:
            SituationConsequenceWeight.StronglyNegative,
          [SubgroupStaticId.LeftWingBase]:
            SituationConsequenceWeight.SlightlyNegative,
          [SubgroupStaticId.BusinessLeaders]:
            SituationConsequenceWeight.Negative,
        },
      },
    },
  },
];
