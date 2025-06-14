import {
  CabinetStaticId,
  SubgroupStaticId,
  SituationConsequenceWeight,
  SituationOutcome,
} from "~/types";

export const fakeWeatherAlertHackOutcomes: SituationOutcome[] = [
  {
    id: "fwah_alerts_corrected",
    title: "Alerts Corrected Quickly",
    description:
      "Technicians remove the bogus warnings within minutes and apologize, restoring confidence in the system and minimizing disruptions.",
    weight: 40,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Homeland]: SituationConsequenceWeight.Positive,
          [CabinetStaticId.HHS]: SituationConsequenceWeight.SlightlyPositive,
        },
        subgroups: {
          [SubgroupStaticId.UrbanResidents]: SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.SlightlyPositive,
        },
      },
    },
  },
  {
    id: "fwah_evac_chaos_lawsuits",
    title: "Evacuation Chaos and Lawsuits",
    description:
      "False alerts cause costly evacuations and injuries, leading to lawsuits and criticism of government preparedness and tech oversight.",
    weight: 35,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Homeland]: SituationConsequenceWeight.Negative,
          [CabinetStaticId.HHS]: SituationConsequenceWeight.SlightlyNegative,
        },
        subgroups: {
          [SubgroupStaticId.RightWingBase]: SituationConsequenceWeight.Negative,
          [SubgroupStaticId.RuralResidents]: SituationConsequenceWeight.SlightlyNegative,
        },
      },
    },
  },
  {
    id: "fwah_trust_declines",
    title: "Public Trust in Alerts Drops",
    description:
      "Though no one is hurt, skepticism toward future warnings grows, pushing officials to overhaul systems at great expense.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Homeland]: SituationConsequenceWeight.SlightlyNegative,
          [CabinetStaticId.HHS]: SituationConsequenceWeight.SlightlyNegative,
        },
        subgroups: {
          [SubgroupStaticId.SeniorsCitizens]: SituationConsequenceWeight.SlightlyNegative,
          [SubgroupStaticId.BusinessLeaders]: SituationConsequenceWeight.SlightlyNegative,
        },
      },
    },
  },
];
