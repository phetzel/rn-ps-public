import {
  CabinetStaticId,
  SubgroupStaticId,
  SituationConsequenceWeight,
  SituationOutcome,
} from "~/types";

export const reallyfarawaystanAllianceOutcomes: SituationOutcome[] = [
  {
    id: "rfa_micro_bases_praised",
    title: "Goodwill Micro-Bases Win Press",
    description:
      "Media applaud the creative alliance. Tiny outposts boost rescue readiness and the micro-nation gains tourism buzz.",
    weight: 40,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Defense]: SituationConsequenceWeight.SlightlyPositive,
        },
        subgroups: {
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.SlightlyPositive,
        },
      },
    },
  },
  {
    id: "rfa_wasteful_ridiculed",
    title: "Wasteful Alliance Ridiculed",
    description:
      "Critics mock the deal as a vanity project. Commentators ask why tax dollars fund bases for a population smaller than most street bands.",
    weight: 35,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Defense]: SituationConsequenceWeight.Negative,
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.SlightlyNegative,
        },
        subgroups: {
          [SubgroupStaticId.RightWingBase]: SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.SlightlyNegative,
        },
      },
    },
  },
  {
    id: "rfa_treaty_cancelled",
    title: "Treaty Cancelled Quietly",
    description:
      "Facing ridicule and budget questions, the administration lets the pact lapse. The micro-nation shrugs and signs with a regional rival.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Defense]: SituationConsequenceWeight.SlightlyNegative,
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.SlightlyNegative,
        },
        subgroups: {
          [SubgroupStaticId.BusinessLeaders]: SituationConsequenceWeight.SlightlyNegative,
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.SlightlyNegative,
        },
      },
    },
  },
];
