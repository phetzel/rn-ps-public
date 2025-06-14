import {
  CabinetStaticId,
  SubgroupStaticId,
  SituationConsequenceWeight,
  SituationOutcome,
} from "~/types";

export const unauthorizedSurveillanceOutcomes: SituationOutcome[] = [
  {
    id: "uas_courts_halt",
    title: "Courts Halt Spying, Reform",
    description:
      "Federal judges rule the surveillance illegal, forcing a sweeping reform of homeland operations and temporary oversight.",
    weight: 40,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Homeland]: SituationConsequenceWeight.Negative,
          [CabinetStaticId.Justice]: SituationConsequenceWeight.Positive,
        },
        subgroups: {
          [SubgroupStaticId.LeftWingBase]: SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.SlightlyPositive,
        },
      },
    },
  },
  {
    id: "uas_whistle_chaos",
    title: "Whistle-blower Leak, Chaos",
    description:
      "A leaked memo reveals broad spying; chaos erupts as rival agencies release incriminating messages, fueling public anger.",
    weight: 35,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Homeland]: SituationConsequenceWeight.Negative,
        },
        subgroups: {
          [SubgroupStaticId.RightWingBase]: SituationConsequenceWeight.Negative,
          [SubgroupStaticId.LeftWingBase]: SituationConsequenceWeight.Negative,
        },
      },
    },
  },
  {
    id: "uas_deadlock",
    title: "Congress Deadlocks, No Change",
    description:
      "Lawmakers debate for months but pass nothing. Surveillance quietly continues and trust in oversight plummets.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Homeland]: SituationConsequenceWeight.Negative,
        },
        subgroups: {
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.Negative,
        },
      },
    },
  },
];
