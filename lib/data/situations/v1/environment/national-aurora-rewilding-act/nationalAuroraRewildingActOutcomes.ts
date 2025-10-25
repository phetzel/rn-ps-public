import {
  SituationConsequenceWeight,
  CabinetStaticId,
  SubgroupStaticId,
} from "~/types";
import type { SituationOutcome } from "~/lib/schemas/situations";

export const nationalAuroraRewildingActOutcomes: SituationOutcome[] = [
  {
    id: "outcome_1",
    title: "Auroras Unionize; Sky Clocks In With Overtime.",
    description: "After the President politely yells at clouds, auroras form Local 9x5, demanding hazard pay for solar flares and paid moonset breaks.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.StronglyPositive
        },
        subgroups: {
          [SubgroupStaticId.TechIndustry]: SituationConsequenceWeight.StronglyNegative,
          [SubgroupStaticId.UrbanResidents]: SituationConsequenceWeight.StronglyPositive
        }
      }
    }
  },
  {
    id: "outcome_2",
    title: "Patent Court Grants Night Exclusive Greens.",
    description: "Glowtico sues the horizon and wins; the color emerald is paywalled after dusk, and blimps sell subscription skylines with promo codes.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.TechIndustry]: SituationConsequenceWeight.StronglyPositive,
          [SubgroupStaticId.UrbanResidents]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  },
  {
    id: "outcome_3",
    title: "Blimp Embassies Create 8,000 Cloud Nations.",
    description: "Each diplomatic blimp declares sovereignty at 12,000 feet; geese become border agents, and visas are stamped in airborne confetti.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.TechIndustry]: SituationConsequenceWeight.StronglyPositive,
          [SubgroupStaticId.UrbanResidents]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  },
  {
    id: "outcome_4",
    title: "Daylight Accused Of Scabbing On Union Auroras.",
    description: "With 9 a.m. start times, noon refuses to dim; crops are labeled strikebreakers, and the Ministry of Statecraft mediates with weather snacks.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.TechIndustry]: SituationConsequenceWeight.StronglyPositive,
          [SubgroupStaticId.UrbanResidents]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  }
];
