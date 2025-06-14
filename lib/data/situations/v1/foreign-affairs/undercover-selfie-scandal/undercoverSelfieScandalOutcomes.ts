import {
  CabinetStaticId,
  SubgroupStaticId,
  SituationConsequenceWeight,
  SituationOutcome,
} from "~/types";

export const undercoverSelfieScandalOutcomes: SituationOutcome[] = [
  {
    id: "selfie_base_relocated",
    title: "Base Relocated, Minimal Harm",
    description:
      "The base moves overnight with only minor delays. Allies accept apologies, and security reviews tighten protocols.",
    weight: 40,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Defense]: SituationConsequenceWeight.Positive,
          [CabinetStaticId.Homeland]: SituationConsequenceWeight.SlightlyPositive,
        },
        subgroups: {
          [SubgroupStaticId.TechIndustry]: SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.SlightlyPositive,
        },
      },
    },
  },
  {
    id: "selfie_ops_compromised",
    title: "Operations Compromised, Allies Angry",
    description:
      "Enemy forces intercept the selfie, jeopardizing missions. Allies criticize lax discipline, straining joint ops.",
    weight: 35,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Defense]: SituationConsequenceWeight.Negative,
          [CabinetStaticId.Homeland]: SituationConsequenceWeight.SlightlyNegative,
        },
        subgroups: {
          [SubgroupStaticId.BusinessLeaders]: SituationConsequenceWeight.SlightlyNegative,
          [SubgroupStaticId.RightWingBase]: SituationConsequenceWeight.Negative,
        },
      },
    },
  },
  {
    id: "selfie_scrubbed_fast",
    title: "Tech Firms Scrub Images Quickly",
    description:
      "Major platforms swiftly remove the selfie and help trace copies. Public praises cooperation but questions oversight.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Homeland]: SituationConsequenceWeight.SlightlyPositive,
        },
        subgroups: {
          [SubgroupStaticId.TechIndustry]: SituationConsequenceWeight.Positive,
          [SubgroupStaticId.LeftWingBase]: SituationConsequenceWeight.SlightlyPositive,
        },
      },
    },
  },
];
