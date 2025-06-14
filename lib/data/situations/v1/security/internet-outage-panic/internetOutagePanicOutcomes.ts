import {
  CabinetStaticId,
  SubgroupStaticId,
  SituationConsequenceWeight,
  SituationOutcome,
} from "~/types";

export const internetOutagePanicOutcomes: SituationOutcome[] = [
  {
    id: "iop_glitch_found",
    title: "Outage Traced to Glitch",
    description:
      "Engineers quickly find a faulty router chain and restore access. Public relief grows as operations return to normal.",
    weight: 40,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Homeland]: SituationConsequenceWeight.Positive,
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.SlightlyPositive,
        },
        subgroups: {
          [SubgroupStaticId.TechIndustry]: SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.SlightlyPositive,
        },
      },
    },
  },
  {
    id: "iop_attack_confirmed",
    title: "Attack Confirmed, Stocks Dive",
    description:
      "Forensic teams uncover malware, confirming a deliberate attack. Markets tumble and panic spreads over digital vulnerabilities.",
    weight: 35,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Homeland]: SituationConsequenceWeight.Negative,
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.Negative,
        },
        subgroups: {
          [SubgroupStaticId.BusinessLeaders]: SituationConsequenceWeight.Negative,
          [SubgroupStaticId.TechIndustry]: SituationConsequenceWeight.Negative,
        },
      },
    },
  },
  {
    id: "iop_telecoms_blamed",
    title: "Telecoms Blamed for Lapses",
    description:
      "Officials blame telecom firms for weak infrastructure, leading to partial restoration and heated hearings over accountability.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Homeland]: SituationConsequenceWeight.SlightlyNegative,
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.SlightlyNegative,
        },
        subgroups: {
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.SlightlyNegative,
          [SubgroupStaticId.UrbanResidents]: SituationConsequenceWeight.SlightlyNegative,
        },
      },
    },
  },
];
