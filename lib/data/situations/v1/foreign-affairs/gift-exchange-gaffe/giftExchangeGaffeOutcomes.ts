import {
  CabinetStaticId,
  SubgroupStaticId,
  SituationConsequenceWeight,
  SituationOutcome,
} from "~/types";

export const giftExchangeGaffeOutcomes: SituationOutcome[] = [
  {
    id: "gift_gaffe_veggistan_apology_accepted",
    title: "Apology Accepted, Crisis Averted",
    description:
      "A swift apology and a culturally appropriate follow-up gift smooth things over. Veggistan accepts, and relations stabilize quickly.",
    weight: 50,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.Positive,
        },
        subgroups: {
          [SubgroupStaticId.IndependentBase]:
            SituationConsequenceWeight.SlightlyPositive, // "Competent recovery from a clear mistake."
          [SubgroupStaticId.LeftWingBase]:
            SituationConsequenceWeight.SlightlyPositive, // "Good to see respect for other cultures."
        },
      },
    },
  },
  {
    id: "gift_gaffe_veggistan_lingering_resentment",
    title: "Lingering Resentment in Veggistan",
    description:
      "Veggistan publicly accepts the apology but relations remain frosty. A planned cultural exchange program is 'indefinitely postponed.'",
    weight: 30,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.SlightlyNegative,
        },
        subgroups: {
          [SubgroupStaticId.IndependentBase]:
            SituationConsequenceWeight.SlightlyNegative, // "Should have handled it better initially."
          [SubgroupStaticId.BusinessLeaders]:
            SituationConsequenceWeight.SlightlyNegative, // "Cultural exchange impacts potential business."
        },
      },
    },
  },
  {
    id: "gift_gaffe_veggistan_bacon_boycott",
    title: "'Bacon Boycott' and Mockery",
    description:
      "Veggistan activists call for a boycott of [Our Country's] pork products. The incident becomes international satirical fodder.",
    weight: 20,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.Negative,
          [CabinetStaticId.Treasury]:
            SituationConsequenceWeight.SlightlyNegative, // "Even a small boycott isn't great."
        },
        subgroups: {
          [SubgroupStaticId.RuralResidents]:
            SituationConsequenceWeight.Negative, // "Our pork farmers are being unfairly targeted!"
          [SubgroupStaticId.YouthVoters]:
            SituationConsequenceWeight.SlightlyNegative, // "So embarrassing, this is meme material."
          [SubgroupStaticId.RightWingBase]: SituationConsequenceWeight.Negative, // "We look weak kowtowing to Veggistan."
        },
      },
    },
  },
];
