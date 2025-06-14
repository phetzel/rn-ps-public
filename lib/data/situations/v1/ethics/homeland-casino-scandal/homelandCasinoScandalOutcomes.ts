import {
  CabinetStaticId,
  SubgroupStaticId,
  SituationConsequenceWeight,
  SituationOutcome,
} from "~/types";

export const homelandCasinoScandalOutcomes: SituationOutcome[] = [
  {
    id: "hcs_suspension_fix",
    title: "Suspension and Policy Fix",
    description:
      "The DHS chief is suspended pending review, and a quick policy overhaul curbs further misuse of security resources.",
    weight: 40,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Homeland]: SituationConsequenceWeight.SlightlyNegative,
          [CabinetStaticId.Justice]: SituationConsequenceWeight.SlightlyPositive,
        },
        subgroups: {
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.SlightlyPositive,
        },
      },
    },
  },
  {
    id: "hcs_resignation_probe",
    title: "Full Resignation and Probe",
    description:
      "Public outrage forces the DHS chief to resign. A sweeping investigation exposes misuse of funds and fuels congressional hearings.",
    weight: 35,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Homeland]: SituationConsequenceWeight.Negative,
        },
        subgroups: {
          [SubgroupStaticId.LeftWingBase]: SituationConsequenceWeight.Negative,
          [SubgroupStaticId.RightWingBase]: SituationConsequenceWeight.Negative,
        },
      },
    },
  },
  {
    id: "hcs_reprimand_morale",
    title: "Bare Reprimand, Morale Sinks",
    description:
      "Investigations stall. The DHS chief only gets a mild reprimand, leaving rank-and-file morale low and questions unanswered.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Homeland]: SituationConsequenceWeight.SlightlyNegative,
        },
        subgroups: {
          [SubgroupStaticId.RuralResidents]: SituationConsequenceWeight.SlightlyNegative,
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.SlightlyNegative,
        },
      },
    },
  },
];
