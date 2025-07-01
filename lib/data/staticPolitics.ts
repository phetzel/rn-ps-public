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
  // ── Political ───────────────────────────────────────────────
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
  // ── Demographic ───────────────────────────────────────────────
  [SubgroupStaticId.YouthVoters]: {
    category: SubgroupCategory.Demographic,
    name: "Youth Voters",
    defaultPoliticalLeaning: PoliticalLeaning.Liberal,
  },
  [SubgroupStaticId.SeniorsCitizens]: {
    category: SubgroupCategory.Demographic,
    name: "Seniors Citizens",
    defaultPoliticalLeaning: PoliticalLeaning.Conservative,
  },
  [SubgroupStaticId.RuralResidents]: {
    category: SubgroupCategory.Demographic,
    name: "Rural Residents",
    defaultPoliticalLeaning: PoliticalLeaning.Conservative,
  },
  [SubgroupStaticId.UrbanResidents]: {
    category: SubgroupCategory.Demographic,
    name: "Urban Residents",
    defaultPoliticalLeaning: PoliticalLeaning.Liberal,
  },
  // ── Economic ───────────────────────────────────────────────
  [SubgroupStaticId.LaborUnions]: {
    category: SubgroupCategory.Economic,
    name: "Labor Unions",
    defaultPoliticalLeaning: PoliticalLeaning.Liberal,
  },
  [SubgroupStaticId.BusinessLeaders]: {
    category: SubgroupCategory.Economic,
    name: "Business Leaders",
    defaultPoliticalLeaning: PoliticalLeaning.Conservative,
  },
  [SubgroupStaticId.TechIndustry]: {
    category: SubgroupCategory.Economic,
    name: "Tech Industry",
  },
};
