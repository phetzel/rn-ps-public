import {
  CabinetStaticId,
  type StaticCabinetMember,
  SubgroupStaticId,
  type StaticSubgroup,
  SubgroupCategory,
  PoliticalLeaning,
} from "~/types";

export const staticCabinetMembers: Record<
  CabinetStaticId,
  StaticCabinetMember
> = {
  [CabinetStaticId.State]: {
    cabinetName: "Secretary of State",
  },
  [CabinetStaticId.Defense]: {
    cabinetName: "Secretary of Defense",
  },
  [CabinetStaticId.Treasury]: {
    cabinetName: "Secretary of the Treasury",
  },

  [CabinetStaticId.Justice]: {
    cabinetName: "Attorney General",
  },
  [CabinetStaticId.HHS]: {
    cabinetName: "Secretary of Health and Human Services",
  },
  [CabinetStaticId.Homeland]: {
    cabinetName: "Secretary of Homeland Security",
  },
};

export const staticSubgroups: Record<SubgroupStaticId, StaticSubgroup> = {
  [SubgroupStaticId.LeftWingBase]: {
    category: SubgroupCategory.Political,
    name: "Left Wing Base",
    defaultPoliticalLeaning: PoliticalLeaning.Liberal,
  },
  [SubgroupStaticId.RightWingBase]: {
    category: SubgroupCategory.Political,
    name: "Right Wing Base",
    defaultPoliticalLeaning: PoliticalLeaning.Conservative,
  },
  [SubgroupStaticId.IndependentBase]: {
    category: SubgroupCategory.Political,
    name: "Independent Base",
  },
};
