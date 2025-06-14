import {
  CabinetStaticId,
  SubgroupStaticId,
  SituationConsequenceWeight,
  SituationOutcome,
} from "~/types";

export const protocolHugIncidentOutcomes: SituationOutcome[] = [
  {
    id: "protocol_hug_emperor_laughs",
    title: "Emperor Chuckles, Relations Warm",
    description:
      "The Emperor publicly jokes about the hug, calling it a spirited surprise. Protocol officials sigh in relief, and scheduled talks proceed.",
    weight: 40,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.SlightlyPositive,
        },
        subgroups: {
          [SubgroupStaticId.YouthVoters]: SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.Neutral,
        },
      },
    },
  },
  {
    id: "protocol_hug_media_frenzy",
    title: "Media Frenzy; Envoy Recalled",
    description:
      "Foreign press lambasts the hug as barbaric. Coldshoulderia recalls its envoy for 'retraining' and trade discussions stall.",
    weight: 35,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.Negative,
          [CabinetStaticId.Homeland]: SituationConsequenceWeight.SlightlyNegative,
        },
        subgroups: {
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.Negative,
          [SubgroupStaticId.BusinessLeaders]: SituationConsequenceWeight.SlightlyNegative,
        },
      },
    },
  },
  {
    id: "protocol_hug_memes",
    title: "Hug Trend Improves Image",
    description:
      "Clips of the awkward embrace explode on social media. Youth worldwide mimic it, surprisingly softening the President’s stiff reputation.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.SlightlyNegative,
        },
        subgroups: {
          [SubgroupStaticId.YouthVoters]: SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.SeniorsCitizens]: SituationConsequenceWeight.SlightlyNegative,
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.SlightlyNegative,
        },
      },
    },
  },
];
