import {
  CabinetStaticId,
  SubgroupStaticId,
  SituationConsequenceWeight,
  SituationOutcome,
} from "~/types";

export const virtualRealEstateBoomOutcomes: SituationOutcome[] = [
  {
    id: "vre_bubble_bursts",
    title: "Metaverse Bubble Pops Spectacularly",
    description:
      "Land prices crash 90 %, bankrupting speculators; headlines dub it ‘Tulipcoin 2.0,’ forcing emergency hearings on digital fraud.",
    weight: 40,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.Negative,
          [CabinetStaticId.Homeland]: SituationConsequenceWeight.Negative,
        },
        subgroups: {
          [SubgroupStaticId.TechIndustry]:
            SituationConsequenceWeight.StronglyNegative,
          [SubgroupStaticId.YouthVoters]: SituationConsequenceWeight.Negative,
          [SubgroupStaticId.IndependentBase]:
            SituationConsequenceWeight.SlightlyNegative,
        },
      },
    },
  },
  {
    id: "vre_regulation_lite",
    title: "Light Regulation, Market Stabilizes",
    description:
      "Congress passes mild disclosure rules; hype cools, values plateau. Critics grumble, but no broad collapse occurs.",
    weight: 35,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Treasury]:
            SituationConsequenceWeight.SlightlyPositive,
          [CabinetStaticId.State]: SituationConsequenceWeight.SlightlyPositive,
        },
        subgroups: {
          [SubgroupStaticId.TechIndustry]:
            SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.BusinessLeaders]:
            SituationConsequenceWeight.Neutral,
          [SubgroupStaticId.IndependentBase]:
            SituationConsequenceWeight.Neutral,
        },
      },
    },
  },
  {
    id: "vre_digital_export_success",
    title: "Digital Property Becomes Export Boom",
    description:
      "Foreign investors snap up virtual districts themed on U.S. landmarks; tax revenue and creative jobs surge unexpectedly.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.Positive,
          [CabinetStaticId.State]: SituationConsequenceWeight.SlightlyPositive,
        },
        subgroups: {
          [SubgroupStaticId.TechIndustry]: SituationConsequenceWeight.Positive,
          [SubgroupStaticId.BusinessLeaders]:
            SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.YouthVoters]:
            SituationConsequenceWeight.SlightlyPositive,
        },
      },
    },
  },
];
