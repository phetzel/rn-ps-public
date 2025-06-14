import {
  CabinetStaticId,
  SubgroupStaticId,
  SituationConsequenceWeight,
  SituationOutcome,
} from "~/types";

export const treasuryInsiderTradingOutcomes: SituationOutcome[] = [
  {
    id: "insider_cleared_by_board",
    title: "Cleared by Ethics Board",
    description:
      "An internal review finds the trades coincidental. Officials keep their jobs, and outrage subsides quickly.",
    weight: 40,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.SlightlyPositive,
          [CabinetStaticId.Justice]: SituationConsequenceWeight.SlightlyNegative,
        },
        subgroups: {
          [SubgroupStaticId.BusinessLeaders]: SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.Neutral,
        },
      },
    },
  },
  {
    id: "insider_guilty_resignation",
    title: "Guilty Verdict, Resignation",
    description:
      "Court findings lead to a guilty verdict and a high-profile resignation, fueling public distrust and partisan bickering.",
    weight: 35,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.Negative,
        },
        subgroups: {
          [SubgroupStaticId.LeftWingBase]: SituationConsequenceWeight.Negative,
          [SubgroupStaticId.RightWingBase]: SituationConsequenceWeight.Negative,
        },
      },
    },
  },
  {
    id: "insider_hung_jury",
    title: "Hung Jury, Trust Erodes",
    description:
      "A mistrial leaves the public suspicious. The administration struggles to shake perceptions of insider advantage.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.SlightlyNegative,
        },
        subgroups: {
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.SlightlyNegative,
          [SubgroupStaticId.TechIndustry]: SituationConsequenceWeight.SlightlyNegative,
        },
      },
    },
  },
];
