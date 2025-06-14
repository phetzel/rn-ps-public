import {
  CabinetStaticId,
  SubgroupStaticId,
  SituationConsequenceWeight,
  SituationOutcome,
} from "~/types";

export const conferenceCallChaosOutcomes: SituationOutcome[] = [
  {
    id: "ccc_leaders_laugh",
    title: "Leaders Laugh Off Filter",
    description:
      "Foreign leaders treat the mishap as a lighthearted moment, and diplomatic talks continue unaffected.",
    weight: 40,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.SlightlyPositive,
        },
        subgroups: {
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.SlightlyPositive,
        },
      },
    },
  },
  {
    id: "ccc_markets_jitter",
    title: "Trust Drops, Markets Jitter",
    description:
      "The filter fiasco sparks rumors of hacking. Confidence dips and markets wobble as analysts question cybersecurity.",
    weight: 35,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.Negative,
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.Negative,
        },
        subgroups: {
          [SubgroupStaticId.BusinessLeaders]: SituationConsequenceWeight.Negative,
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.SlightlyNegative,
        },
      },
    },
  },
  {
    id: "ccc_pirate_meme",
    title: "Pirate Meme Softens Image",
    description:
      "Social media loves the pirate look, turning the mishap into viral fun that oddly humanizes the President.",
    weight: 25,
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
];
