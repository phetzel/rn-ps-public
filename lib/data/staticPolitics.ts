import {
  CabinetStaticId,
  type StaticCabinetMember,
  SubgroupStaticId,
  type StaticSubgroup,
  SubgroupCategory,
  PoliticalLeaning,
  PressOfficeBackground,
  AlignmentWeight,
} from '~/types';

export const staticCabinetMembers: Record<CabinetStaticId, StaticCabinetMember> = {
  [CabinetStaticId.State]: {
    cabinetName: 'Secretary of State',
  },
  [CabinetStaticId.Defense]: {
    cabinetName: 'Secretary of Defense',
  },
  [CabinetStaticId.Treasury]: {
    cabinetName: 'Secretary of the Treasury',
  },

  [CabinetStaticId.Justice]: {
    cabinetName: 'Attorney General',
  },
  [CabinetStaticId.HHS]: {
    cabinetName: 'Secretary of Health and Human Services',
  },
  [CabinetStaticId.Homeland]: {
    cabinetName: 'Secretary of Homeland Security',
  },
};

export const staticSubgroups: Record<SubgroupStaticId, StaticSubgroup> = {
  // ── Political ───────────────────────────────────────────────
  [SubgroupStaticId.LeftWingBase]: {
    category: SubgroupCategory.Political,
    name: 'Left Wing Base',
    defaultPoliticalLeaning: PoliticalLeaning.Liberal,
    weight: AlignmentWeight.DoublePositive,
  },
  [SubgroupStaticId.RightWingBase]: {
    category: SubgroupCategory.Political,
    name: 'Right Wing Base',
    defaultPoliticalLeaning: PoliticalLeaning.Conservative,
    weight: AlignmentWeight.DoublePositive,
  },
  [SubgroupStaticId.IndependentBase]: {
    category: SubgroupCategory.Political,
    name: 'Independent Base',
  },
  // ── Demographic ───────────────────────────────────────────────
  [SubgroupStaticId.YouthVoters]: {
    category: SubgroupCategory.Demographic,
    name: 'Youth Voters',
    defaultPoliticalLeaning: PoliticalLeaning.Liberal,
  },
  [SubgroupStaticId.SeniorsCitizens]: {
    category: SubgroupCategory.Demographic,
    name: 'Seniors Citizens',
    defaultPoliticalLeaning: PoliticalLeaning.Conservative,
  },
  [SubgroupStaticId.RuralResidents]: {
    category: SubgroupCategory.Demographic,
    name: 'Rural Residents',
    defaultPoliticalLeaning: PoliticalLeaning.Conservative,
    weight: AlignmentWeight.DoublePositive,
  },
  [SubgroupStaticId.UrbanResidents]: {
    category: SubgroupCategory.Demographic,
    name: 'Urban Residents',
    defaultPoliticalLeaning: PoliticalLeaning.Liberal,
    weight: AlignmentWeight.DoublePositive,
  },
  // ── Economic ───────────────────────────────────────────────
  [SubgroupStaticId.LaborUnions]: {
    category: SubgroupCategory.Economic,
    name: 'Labor Unions',
    defaultPoliticalLeaning: PoliticalLeaning.Liberal,
  },
  [SubgroupStaticId.BusinessLeaders]: {
    category: SubgroupCategory.Economic,
    name: 'Business Leaders',
    defaultPoliticalLeaning: PoliticalLeaning.Conservative,
  },
  [SubgroupStaticId.TechIndustry]: {
    category: SubgroupCategory.Economic,
    name: 'Tech Industry',
  },
};

// ── Alignment Weights and Effects Config ───────────────────────────
// Presidential leaning effects: choose magnitude (multiplier) for aligned vs opposite
export const presidentialLeaningEffects: Record<
  PoliticalLeaning,
  { aligned: AlignmentWeight; opposite: AlignmentWeight }
> = {
  [PoliticalLeaning.Conservative]: {
    aligned: AlignmentWeight.Positive,
    opposite: AlignmentWeight.Negative,
  },
  [PoliticalLeaning.Liberal]: {
    aligned: AlignmentWeight.Positive,
    opposite: AlignmentWeight.Negative,
  },
  [PoliticalLeaning.Neutral]: {
    aligned: AlignmentWeight.Zero,
    opposite: AlignmentWeight.Zero,
  },
} as const;

// Press Office Background effects on initial cabinet relationships (multipliers)
export const pressBackgroundCabinetEffects: Record<
  PressOfficeBackground,
  Partial<Record<CabinetStaticId, AlignmentWeight>>
> = {
  // Each background has one of each: ++, +, -, -- (others omitted)
  [PressOfficeBackground.Journalist]: {
    [CabinetStaticId.State]: AlignmentWeight.DoublePositive, // diplomacy/media savvy
    [CabinetStaticId.Justice]: AlignmentWeight.Positive, // transparency/process
    [CabinetStaticId.Defense]: AlignmentWeight.Negative, // messaging friction
    [CabinetStaticId.Homeland]: AlignmentWeight.DoubleNegative, // opsec tension
  },
  [PressOfficeBackground.PolicyAide]: {
    [CabinetStaticId.Treasury]: AlignmentWeight.DoublePositive, // budgets/policy detail
    [CabinetStaticId.State]: AlignmentWeight.Positive, // process alignment
    [CabinetStaticId.Justice]: AlignmentWeight.Negative, // legal pacing friction
    [CabinetStaticId.Homeland]: AlignmentWeight.DoubleNegative, // field pragmatics vs process
  },
  [PressOfficeBackground.CampaignSpokes]: {
    [CabinetStaticId.Defense]: AlignmentWeight.DoublePositive, // strong posture messaging
    [CabinetStaticId.Homeland]: AlignmentWeight.Positive, // public safety framing
    [CabinetStaticId.Justice]: AlignmentWeight.Negative, // rhetoric vs due process
    [CabinetStaticId.Treasury]: AlignmentWeight.DoubleNegative, // budget realism friction
  },
  [PressOfficeBackground.CrisisComms]: {
    [CabinetStaticId.Homeland]: AlignmentWeight.DoublePositive, // incident comms
    [CabinetStaticId.HHS]: AlignmentWeight.Positive, // public health comms
    [CabinetStaticId.State]: AlignmentWeight.Negative, // measured diplomacy tensions
    [CabinetStaticId.Treasury]: AlignmentWeight.DoubleNegative, // cost sensitivities
  },
  [PressOfficeBackground.CorporatePR]: {
    [CabinetStaticId.Treasury]: AlignmentWeight.DoublePositive, // business/finance
    [CabinetStaticId.State]: AlignmentWeight.Positive, // stakeholder management
    [CabinetStaticId.HHS]: AlignmentWeight.Negative, // equity/cost optics
    [CabinetStaticId.Justice]: AlignmentWeight.DoubleNegative, // legal scrutiny
  },
  [PressOfficeBackground.MilitaryPAO]: {
    [CabinetStaticId.Defense]: AlignmentWeight.DoublePositive, // chain of command
    [CabinetStaticId.Homeland]: AlignmentWeight.Positive, // coordination
    [CabinetStaticId.State]: AlignmentWeight.Negative, // diplomatic nuance
    [CabinetStaticId.Treasury]: AlignmentWeight.DoubleNegative, // cost discipline
  },
} as const;
