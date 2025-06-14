import {
  CabinetStaticId,
  SubgroupStaticId,
  SituationConsequenceWeight,
  SituationOutcome,
} from "~/types";

export const defenseContractorKickbacksOutcomes: SituationOutcome[] = [
  {
    id: "kickbacks_contracts_voided",
    title: "Contracts Voided, Refunds",
    description:
      "The administration cancels the shady deals and recoups much of the money, promising tighter oversight going forward.",
    weight: 40,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Defense]: SituationConsequenceWeight.SlightlyNegative,
          [CabinetStaticId.Justice]: SituationConsequenceWeight.SlightlyPositive,
        },
        subgroups: {
          [SubgroupStaticId.BusinessLeaders]: SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.SlightlyPositive,
        },
      },
    },
  },
  {
    id: "kickbacks_criminal_scandal",
    title: "Criminal Charges & Scandal",
    description:
      "Justice Department indictments trigger a major scandal and months of damning headlines about corruption.",
    weight: 35,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Defense]: SituationConsequenceWeight.Negative,
        },
        subgroups: {
          [SubgroupStaticId.RightWingBase]: SituationConsequenceWeight.Negative,
          [SubgroupStaticId.LeftWingBase]: SituationConsequenceWeight.Negative,
        },
      },
    },
  },
  {
    id: "kickbacks_inquiry_fizzles",
    title: "Inquiry Fizzles, No Reforms",
    description:
      "Investigations stall and reforms never materialize, leaving watchdogs frustrated and the status quo intact.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Defense]: SituationConsequenceWeight.SlightlyNegative,
        },
        subgroups: {
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.SlightlyNegative,
          [SubgroupStaticId.LaborUnions]: SituationConsequenceWeight.SlightlyNegative,
        },
      },
    },
  },
];
