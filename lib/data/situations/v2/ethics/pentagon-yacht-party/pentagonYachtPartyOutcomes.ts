import {
  SituationConsequenceWeight,
  CabinetStaticId,
  SubgroupStaticId,
} from "~/types";
import type { SituationOutcome } from "~/types";

export const pentagonYachtPartyOutcomes: SituationOutcome[] = [
  {
    id: "outcome_yacht_house_hearings",
    title: "House Hearings Explode into Major Scandal",
    description:
      "The story escalates. The House launches a full investigation into waste, fraud, and abuse at the Pentagon, dominating news for weeks.",
    weight: 40,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Defense]: SituationConsequenceWeight.Negative,
          [CabinetStaticId.Treasury]:
            SituationConsequenceWeight.SlightlyNegative,
        },
        subgroups: {
          [SubgroupStaticId.RightWingBase]: SituationConsequenceWeight.Negative,
          [SubgroupStaticId.LeftWingBase]:
            SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.IndependentBase]:
            SituationConsequenceWeight.SlightlyNegative,
        },
      },
    },
  },
  {
    id: "outcome_yacht_repayment_warning",
    title: "Repayment & Warning Letter Ends Story",
    description:
      "The involved officials repay costs, and the Pentagon issues a stern warning. The swift, low-key resolution keeps the story from escalating.",
    weight: 35,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Defense]:
            SituationConsequenceWeight.SlightlyPositive,
        },
        subgroups: {
          [SubgroupStaticId.IndependentBase]:
            SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.BusinessLeaders]:
            SituationConsequenceWeight.SlightlyNegative,
        },
      },
    },
  },
  {
    id: "outcome_yacht_memes_flourish",
    title: "Public Shrugs, 'Admiral Bubbles' Meme Born",
    description:
      "The public seems unfazed by the spending, instead focusing on a viral photo of an admiral in a hot tub. The scandal fizzles into a joke.",
    weight: 25,
    consequences: {
      approvalChanges: {
        subgroups: {
          [SubgroupStaticId.YouthVoters]:
            SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.SeniorsCitizens]:
            SituationConsequenceWeight.SlightlyNegative,
        },
      },
    },
  },
];
