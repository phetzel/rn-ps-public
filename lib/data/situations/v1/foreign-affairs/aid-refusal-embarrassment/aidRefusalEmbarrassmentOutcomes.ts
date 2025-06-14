import {
  CabinetStaticId,
  SubgroupStaticId,
  SituationConsequenceWeight,
  SituationOutcome,
} from "~/types";

export const aidRefusalEmbarrassmentOutcomes: SituationOutcome[] = [
  {
    id: "are_aid_sent",
    title: "Aid Sent, Image Restored",
    description:
      "After backlash, the administration sends aid and apologizes. Relations rebound and the disaster relief effort becomes a goodwill story.",
    weight: 40,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.Positive,
        },
        subgroups: {
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.LeftWingBase]: SituationConsequenceWeight.SlightlyPositive,
        },
      },
    },
  },
  {
    id: "are_condemnation",
    title: "International Condemnation",
    description:
      "Allies slam the refusal as petty. Sanctions and scathing editorials paint the administration as heartless during crisis.",
    weight: 35,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.Negative,
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.SlightlyNegative,
        },
        subgroups: {
          [SubgroupStaticId.RightWingBase]: SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.Negative,
        },
      },
    },
  },
  {
    id: "are_rival_fills",
    title: "Rival Nation Fills Aid Vacuum",
    description:
      "Another power swoops in with supplies, gaining influence in Dramastan while our standing plummets for letting a TV insult dictate policy.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.SlightlyNegative,
        },
        subgroups: {
          [SubgroupStaticId.BusinessLeaders]: SituationConsequenceWeight.SlightlyNegative,
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.SlightlyNegative,
        },
      },
    },
  },
];
