import {
  CabinetStaticId,
  SubgroupStaticId,
  SituationConsequenceWeight,
  SituationOutcome,
} from "~/types";

export const electionCongratsMishapOutcomes: SituationOutcome[] = [
  {
    id: "ecm_correction_ties_hold",
    title: "Quick Correction, Ties Hold",
    description:
      "The President publicly clarifies the mistake and affirms the real winner. The host nation accepts the gaffe and relations continue.",
    weight: 40,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.Positive,
        },
        subgroups: {
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.SlightlyPositive,
        },
      },
    },
  },
  {
    id: "ecm_ambassador_recalled",
    title: "Ambassador Recalled in Protest",
    description:
      "The insulted nation recalls its ambassador for consultations, putting talks on ice and increasing regional tensions.",
    weight: 35,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.Negative,
        },
        subgroups: {
          [SubgroupStaticId.RightWingBase]: SituationConsequenceWeight.SlightlyNegative,
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.Negative,
        },
      },
    },
  },
  {
    id: "ecm_disinfo_spreads",
    title: "Disinfo Scandal Spreads Abroad",
    description:
      "Conspiracy theorists abroad seize on the blunder to promote election fraud claims, eroding trust in democratic processes.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Justice]: SituationConsequenceWeight.SlightlyNegative,
        },
        subgroups: {
          [SubgroupStaticId.LeftWingBase]: SituationConsequenceWeight.SlightlyNegative,
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.SlightlyNegative,
        },
      },
    },
  },
];
