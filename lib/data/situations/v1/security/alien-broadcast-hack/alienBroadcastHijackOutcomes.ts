import {
  CabinetStaticId,
  SubgroupStaticId,
  SituationConsequenceWeight,
  SituationOutcome,
} from "~/types";

export const alienBroadcastHijackOutcomes: SituationOutcome[] = [
  {
    id: "abh_hoax_quickly_debunked",
    title: "Hoax Quickly Debunked",
    description:
      "Officials swiftly label the alert a hoax. Panic fades, but pundits question broadcast security and gullibility.",
    weight: 45,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Homeland]:
            SituationConsequenceWeight.SlightlyPositive,
          [CabinetStaticId.HHS]: SituationConsequenceWeight.Neutral,
        },
        subgroups: {
          [SubgroupStaticId.TechIndustry]:
            SituationConsequenceWeight.SlightlyNegative,
          [SubgroupStaticId.IndependentBase]:
            SituationConsequenceWeight.SlightlyPositive,
        },
      },
    },
  },
  {
    id: "abh_lingering_paranoia",
    title: "Lingering Paranoia & Conspiracies",
    description:
      "Despite denials, many believe the alert was real or covered up, fueling conspiracies and distrust of officials.",
    weight: 30,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Homeland]: SituationConsequenceWeight.Negative,
          [CabinetStaticId.HHS]: SituationConsequenceWeight.SlightlyNegative, // "Dealing with public anxiety."
        },
        subgroups: {
          [SubgroupStaticId.SeniorsCitizens]:
            SituationConsequenceWeight.Negative, // "More susceptible to fear/misinformation."
          [SubgroupStaticId.RuralResidents]:
            SituationConsequenceWeight.SlightlyNegative, // "Distrust of official narratives."
          [SubgroupStaticId.YouthVoters]:
            SituationConsequenceWeight.SlightlyPositive, // "Spawns great memes and online content."
        },
      },
    },
  },
  {
    id: "abh_broadcast_overhaul_mandated",
    title: "Broadcast System Overhaul Mandated",
    description:
      "The incident forces a costly but necessary nationwide overhaul of emergency broadcast systems and cybersecurity protocols for media outlets.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Homeland]: SituationConsequenceWeight.Positive, // "Taking decisive action for security."
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.Negative, // "This overhaul will be expensive."
        },
        subgroups: {
          [SubgroupStaticId.TechIndustry]: SituationConsequenceWeight.Positive, // "New contracts, improved systems."
          [SubgroupStaticId.BusinessLeaders]:
            SituationConsequenceWeight.SlightlyNegative, // "Media companies face new costs."
          [SubgroupStaticId.RightWingBase]:
            SituationConsequenceWeight.SlightlyPositive, // "Good to see security being taken seriously."
        },
      },
    },
  },
];
