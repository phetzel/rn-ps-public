import {
  CabinetStaticId,
  SubgroupStaticId,
  SituationConsequenceWeight,
  SituationOutcome,
} from "~/types";

export const mysteryDroneSwarmsOutcomes: SituationOutcome[] = [
  {
    id: "mds_hobbyists_fined",
    title: "Swarms Linked to Hobbyists",
    description:
      "Investigators find the drones belong to an overzealous fan club. Fines are issued and public nerves settle down quickly.",
    weight: 40,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Homeland]: SituationConsequenceWeight.Positive,
          [CabinetStaticId.Defense]: SituationConsequenceWeight.SlightlyPositive,
        },
        subgroups: {
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.UrbanResidents]: SituationConsequenceWeight.SlightlyPositive,
        },
      },
    },
  },
  {
    id: "mds_foreign_probe_revealed",
    title: "Foreign Probe Revealed",
    description:
      "Evidence ties some drones to a rival nation’s tech scouts, escalating diplomatic tensions and calls for tougher air defenses.",
    weight: 35,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Defense]: SituationConsequenceWeight.Positive,
          [CabinetStaticId.Homeland]: SituationConsequenceWeight.Negative,
        },
        subgroups: {
          [SubgroupStaticId.RightWingBase]: SituationConsequenceWeight.Negative,
          [SubgroupStaticId.BusinessLeaders]: SituationConsequenceWeight.SlightlyNegative,
        },
      },
    },
  },
  {
    id: "mds_tech_demo_fail",
    title: "Tech Firm Demo Gone Wrong",
    description:
      "A startup admits its autonomous drone demo lost control, embarrassing officials and sparking debate over commercial drone rules.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Homeland]: SituationConsequenceWeight.SlightlyNegative,
          [CabinetStaticId.Defense]: SituationConsequenceWeight.SlightlyNegative,
        },
        subgroups: {
          [SubgroupStaticId.TechIndustry]: SituationConsequenceWeight.SlightlyNegative,
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.SlightlyNegative,
        },
      },
    },
  },
];
