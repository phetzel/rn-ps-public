import {
  CabinetStaticId,
  SubgroupStaticId,
  SituationConsequenceWeight,
  SituationOutcome,
} from "~/types";

export const vipZooDiplomacyOutcomes: SituationOutcome[] = [
  {
    id: "vzd_meetings_rescheduled",
    title: "Meetings Rescheduled",
    description:
      "Diplomats accommodate the President's zoo detour, shifting talks by a day. No harm done beyond mild grumbling.",
    weight: 40,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.SlightlyPositive,
        },
        subgroups: {
          [SubgroupStaticId.YouthVoters]: SituationConsequenceWeight.SlightlyPositive,
        },
      },
    },
  },
  {
    id: "vzd_deal_lost",
    title: "Trade Deal Lost Over Snub",
    description:
      "Offended diplomats scrap a planned trade agreement, citing disrespect. Analysts question the President's priorities.",
    weight: 35,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.Negative,
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.SlightlyNegative,
        },
        subgroups: {
          [SubgroupStaticId.BusinessLeaders]: SituationConsequenceWeight.Negative,
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.SlightlyNegative,
        },
      },
    },
  },
  {
    id: "vzd_panda_soft_power",
    title: "Panda Pics Boost Soft Power",
    description:
      "Cute panda shots flood social media, giving the administration an unexpected charm offensive despite the diplomatic hiccup.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.Neutral,
        },
        subgroups: {
          [SubgroupStaticId.YouthVoters]: SituationConsequenceWeight.SlightlyPositive,
        },
      },
    },
  },
];
