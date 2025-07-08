import {
  SituationConsequenceWeight,
  CabinetStaticId,
  SubgroupStaticId,
} from "~/types";
import type { SituationOutcome } from "~/types";

export const biometricDataLeakOutcomes: SituationOutcome[] = [
  {
    id: "outcome_leak_contained",
    title: "Rapid Patch & Credit Freeze Stop Fraud",
    description:
      "The government acts decisively, patching the vulnerability and offering free credit monitoring, largely preventing identity fraud.",
    weight: 30,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Homeland]:
            SituationConsequenceWeight.SlightlyPositive,
          [CabinetStaticId.Justice]: SituationConsequenceWeight.Positive,
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
    id: "outcome_leak_fraud_wave",
    title: "ID Fraud Wave Causes Public Outrage",
    description:
      "The leaked data is immediately exploited by criminals. A massive wave of identity theft sweeps the nation, blaming government incompetence.",
    weight: 45,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Homeland]: SituationConsequenceWeight.Negative,
          [CabinetStaticId.Justice]: SituationConsequenceWeight.Negative,
        },
        subgroups: {
          [SubgroupStaticId.IndependentBase]:
            SituationConsequenceWeight.StronglyNegative,
          [SubgroupStaticId.SeniorsCitizens]:
            SituationConsequenceWeight.Negative,
          [SubgroupStaticId.BusinessLeaders]:
            SituationConsequenceWeight.SlightlyNegative,
          [SubgroupStaticId.LeftWingBase]:
            SituationConsequenceWeight.SlightlyNegative,
          [SubgroupStaticId.RightWingBase]:
            SituationConsequenceWeight.SlightlyNegative,
        },
      },
    },
  },
  {
    id: "outcome_leak_congress_stalls",
    title: "Congress Stalls on Reform, Trust Erodes",
    description:
      "The administration's response is hampered by congressional inaction. No new funding or laws are passed, and public trust erodes.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Homeland]:
            SituationConsequenceWeight.SlightlyNegative,
          [CabinetStaticId.Justice]:
            SituationConsequenceWeight.SlightlyNegative,
        },
        subgroups: {
          [SubgroupStaticId.LeftWingBase]:
            SituationConsequenceWeight.SlightlyNegative,
          [SubgroupStaticId.RightWingBase]:
            SituationConsequenceWeight.SlightlyNegative,
        },
      },
    },
  },
];
