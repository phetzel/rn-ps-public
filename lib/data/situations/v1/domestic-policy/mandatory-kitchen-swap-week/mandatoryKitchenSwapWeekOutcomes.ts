import {
  SituationConsequenceWeight,
  CabinetStaticId,
  SubgroupStaticId,
} from "~/types";
import type { SituationOutcome } from "~/lib/schemas/situations";

export const mandatoryKitchenSwapWeekOutcomes: SituationOutcome[] = [
  {
    id: "o1",
    title: "Homeland Hearth Sets Yeast Threat to Plaid.",
    description: "Sourdough swaps trigger 'starter hoarding' as Homeland Hearth deploys gluten sniffers; knead-ins spread and picklers boost approvals.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Homeland]: SituationConsequenceWeight.StronglyPositive
        },
        subgroups: {
          [SubgroupStaticId.YouthVoters]: SituationConsequenceWeight.StronglyPositive,
          [SubgroupStaticId.SeniorsCitizens]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  },
  {
    id: "o2",
    title: "Justice-ish Busts Oregano Launderers.",
    description: "Agents seize spice tunnels mislabeled 'herbal wellness,' sparking basil panic, curry solidarity, and bipartisan demands for cumin immunity.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Justice]: SituationConsequenceWeight.StronglyPositive,
          [CabinetStaticId.Homeland]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.UrbanResidents]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  },
  {
    id: "o3",
    title: "HHS Declares Fork Amnesty, Sauce Rations.",
    description: "Human Hummus Services rations marinades to calm sink riots; landlords pivot to 'view-only kitchens' while bathtubs become pop-up grills.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.HHS]: SituationConsequenceWeight.StronglyPositive
        },
        subgroups: {
          [SubgroupStaticId.UrbanResidents]: SituationConsequenceWeight.StronglyNegative,
          [SubgroupStaticId.SeniorsCitizens]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  },
  {
    id: "o4",
    title: "Appliance Union Stages a Plug-In Coup.",
    description: "Toasters seize cabinets, fridges demand voting rights; the President bargains with a blender as voters approve 51-49 on puree setting.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.HHS]: SituationConsequenceWeight.StronglyNegative,
          [CabinetStaticId.Justice]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.YouthVoters]: SituationConsequenceWeight.StronglyPositive
        }
      }
    }
  }
];
