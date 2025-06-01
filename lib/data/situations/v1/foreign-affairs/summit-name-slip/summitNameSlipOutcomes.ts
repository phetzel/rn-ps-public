import {
  CabinetStaticId,
  SubgroupStaticId,
  SituationConsequenceWeight,
  SituationOutcome,
} from "~/types";

export const summitNameSlipOutcomes: SituationOutcome[] = [
  {
    id: "summit_name_slip_gaffe_overblown",
    title: "Gaffe Overblown, Relations Stable",
    description:
      "Media note the slip but highlight summit deals. Reallyfarawaystan files a mild protest, then moves on.",
    weight: 40,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.SlightlyPositive,
        },
        subgroups: {
          [SubgroupStaticId.IndependentBase]:
            SituationConsequenceWeight.Neutral,
          [SubgroupStaticId.RightWingBase]:
            SituationConsequenceWeight.SlightlyNegative,
        },
      },
    },
  },
  {
    id: "summit_name_slip_diplomatic_chill",
    title: "Diplomatic Chill with Reallyfarawaystan",
    description:
      "Reallyfarawaystan recalls its ambassador for 'consultations' and issues a stern rebuke. A planned trade delegation is postponed.",
    weight: 35,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.Negative,
          [CabinetStaticId.Treasury]:
            SituationConsequenceWeight.SlightlyNegative, // "Trade impact from diplomatic chill."
        },
        subgroups: {
          [SubgroupStaticId.IndependentBase]:
            SituationConsequenceWeight.Negative,
          [SubgroupStaticId.BusinessLeaders]:
            SituationConsequenceWeight.SlightlyNegative, // "Trade uncertainty is bad for business."
        },
      },
    },
  },
  {
    id: "summit_name_slip_meme_gold",
    title: "'Reallyfastvanistan' Becomes a Meme",
    description:
      "The gaffe goes viral, making the President a laughingstock online but surprisingly boosting name recognition for Reallyfarawaystan.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.SlightlyNegative, // "Embarrassing for diplomatic corps."
        },
        subgroups: {
          [SubgroupStaticId.YouthVoters]:
            SituationConsequenceWeight.SlightlyPositive, // "Hilarious! President is so relatable."
          [SubgroupStaticId.SeniorsCitizens]:
            SituationConsequenceWeight.Negative, // "This is unpresidential and foolish."
          [SubgroupStaticId.IndependentBase]:
            SituationConsequenceWeight.SlightlyNegative, // "Looks foolish, erodes confidence."
        },
      },
    },
  },
];
