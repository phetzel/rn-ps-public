import {
  CabinetStaticId,
  SubgroupStaticId,
  SituationConsequenceWeight,
  SituationOutcome,
} from "~/types";

export const pentagonYachtPartyOutcomes: SituationOutcome[] = [
  {
    id: "yacht_repayment_warning",
    title: "Repayment & Warning Letter",
    description:
      "Officials repay the costs and receive formal reprimands, but larger reforms are minimal, easing public anger slightly.",
    weight: 40,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Defense]: SituationConsequenceWeight.SlightlyNegative,
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.SlightlyPositive,
        },
        subgroups: {
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.BusinessLeaders]: SituationConsequenceWeight.SlightlyPositive,
        },
      },
    },
  },
  {
    id: "yacht_house_hearings",
    title: "House Hearings Explode",
    description:
      "Congress holds fiery hearings on the party, making headlines for weeks and damaging the Pentagon's reputation.",
    weight: 35,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Defense]: SituationConsequenceWeight.Negative,
        },
        subgroups: {
          [SubgroupStaticId.LeftWingBase]: SituationConsequenceWeight.Negative,
          [SubgroupStaticId.RightWingBase]: SituationConsequenceWeight.Negative,
        },
      },
    },
  },
  {
    id: "yacht_public_memes",
    title: "Public Shrugs, Memes Flourish",
    description:
      "The party becomes meme fodder. After brief outrage, most people lose interest, though watchdogs complain about lax discipline.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Defense]: SituationConsequenceWeight.SlightlyNegative,
        },
        subgroups: {
          [SubgroupStaticId.YouthVoters]: SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.Neutral,
        },
      },
    },
  },
];
