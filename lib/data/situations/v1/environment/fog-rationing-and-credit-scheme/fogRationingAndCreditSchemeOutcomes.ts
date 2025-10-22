import {
  SituationConsequenceWeight,
  CabinetStaticId,
  SubgroupStaticId,
} from "~/types";
import type { SituationOutcome } from "~/lib/schemas/situations";

export const fogRationingAndCreditSchemeOutcomes: SituationOutcome[] = [
  {
    id: "o1",
    title: "Fog Unionizes; Strikes Until Coupons Crisp.",
    description: "Mist organizes as Cumulus Local 404 and refuses mornings unless paid in dry coupons; Homeland nets vapor, gets soaked, and files for towels.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.HHS]: SituationConsequenceWeight.StronglyPositive
        },
        subgroups: {
          [SubgroupStaticId.YouthVoters]: SituationConsequenceWeight.StronglyPositive,
          [SubgroupStaticId.RuralResidents]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  },
  {
    id: "o2",
    title: "Auction Awards Fog To Haunted Pier Planter.",
    description: "Algorithm prizes 'wistfulness per liter,' shipping all credits seaside; rooftop gardeners build fog magnets and sue in the Court of Sighs.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Homeland]: SituationConsequenceWeight.StronglyNegative,
          [CabinetStaticId.HHS]: SituationConsequenceWeight.StronglyPositive
        },
        subgroups: {
          [SubgroupStaticId.YouthVoters]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  },
  {
    id: "o3",
    title: "Damp Coupons Trigger Nationwide Swellflation.",
    description: "President's coupon payments absorb humidity, double in size, clog vents; commerce pivots to towel money as dryers go black market.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.HHS]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.RuralResidents]: SituationConsequenceWeight.StronglyNegative,
          [SubgroupStaticId.YouthVoters]: SituationConsequenceWeight.StronglyPositive
        }
      }
    }
  },
  {
    id: "o4",
    title: "Doctors Prescribe Fog; Drizzle Goes Bootleg.",
    description: "Health & Haze Services classifies mist as medicine; citizens microdose clouds while alley humidifiers ladle illicit gloom by the gulp.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Homeland]: SituationConsequenceWeight.StronglyPositive,
          [CabinetStaticId.HHS]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.RuralResidents]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  }
];
