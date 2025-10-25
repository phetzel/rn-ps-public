import {
  SituationConsequenceWeight,
  CabinetStaticId,
  SubgroupStaticId,
} from "~/types";
import type { SituationOutcome } from "~/lib/schemas/situations";

export const moralityCreditSwapScandalOutcomes: SituationOutcome[] = [
  {
    id: "o1",
    title: "Apology Coin Becomes Legal Tender, Somehow",
    description: "The Ministry of Coincidence deems it emotion-backed, sparking a run on remorse while Just-Us bans premium hugs as insider empathy.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.StronglyPositive
        },
        subgroups: {
          [SubgroupStaticId.TechIndustry]: SituationConsequenceWeight.StronglyPositive,
          [SubgroupStaticId.SeniorsCitizens]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  },
  {
    id: "o2",
    title: "Health Ministry Prescribes Daily Regret",
    description: "The House of Healthful Shenanigans approves 'Vitamin Why' and clinics bill insurers for deluxe contrition screenings and follow-up sighs.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.HHS]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.TechIndustry]: SituationConsequenceWeight.StronglyPositive,
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  },
  {
    id: "o3",
    title: "Sin Buyback Implodes the Virtue Economy",
    description: "The President’s buyback vacuums up wrongdoing, tanking virtue prices as traders short decency futures and Just-Us subpoenas hypocrisy.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Justice]: SituationConsequenceWeight.StronglyPositive,
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.TechIndustry]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  },
  {
    id: "o4",
    title: "Ethics Commission Nationalizes Forgiveness",
    description: "Agents seize absolution, open Vehicular Waiting-style Pardonplexes as lines spill into next fiscal year and the Queue Bureau issues Q-Bonds.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.HHS]: SituationConsequenceWeight.StronglyPositive,
          [CabinetStaticId.Justice]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  }
];
