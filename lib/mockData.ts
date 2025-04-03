// --- START OF FILE mockData.ts ---

import type Game from "~/lib/db/models/Game";
import type CabinetMember from "~/lib/db/models/CabinetMember";
import type Publication from "~/lib/db/models/Publication";
import type Journalist from "~/lib/db/models/Journalist";
import type SubgroupApproval from "~/lib/db/models/SubgroupApproval";

export const DEFAULT_SUBGROUPS: string[] = [
  "left_wing_base",
  "right_wing_base",
  "middle_class",
  "wealthy",
  "lower_class",
  "military_community",
  "tech_sector",
  "financial_market",
];

// --- Mock Cabinet Member Data ---
export interface NewCabinetMemberData {
  role: string;
  name: string;
  influenceArea: string; // Use camelCase
  approvalRating: number; // Use camelCase
  isActive: boolean; // Use camelCase (matches model)
}

export const DEFAULT_CABINET_MEMBERS: NewCabinetMemberData[] = [
  {
    role: "state",
    name: "Alice Albright",
    influenceArea: "foreign_relations",
    approvalRating: 0.55,
    isActive: true,
  },
  {
    role: "treasury",
    name: "Bob Banker",
    influenceArea: "economy",
    approvalRating: 0.5,
    isActive: true,
  },
  {
    role: "defense",
    name: "General Carl Command",
    influenceArea: "military",
    approvalRating: 0.6,
    isActive: true,
  },
  {
    role: "justice",
    name: "Judge Diana Decree",
    influenceArea: "legal",
    approvalRating: 0.52,
    isActive: true,
  },
  {
    role: "hhs",
    name: "Dr. Evelyn Epidemic",
    influenceArea: "health",
    approvalRating: 0.48,
    isActive: true,
  },
  {
    role: "homeland",
    name: "Frank Fortress",
    influenceArea: "homeland_security",
    approvalRating: 0.5,
    isActive: true,
  },
];

// --- Mock Publication Data ---
export interface NewPublicationData {
  name: string;
  politicalLeaning: string; // Use camelCase
  reach: number;
}

export const generateMockPublications = (): NewPublicationData[] => [
  { name: "Capital Chronicle", politicalLeaning: "liberal", reach: 0.6 },
  { name: "Liberty Ledger", politicalLeaning: "conservative", reach: 0.55 },
  { name: "Metro Monitor", politicalLeaning: "neutral", reach: 0.7 },
  { name: "Digital Dispatch", politicalLeaning: "liberal", reach: 0.4 },
  { name: "Wall Street Wire", politicalLeaning: "conservative", reach: 0.5 },
];

// --- Mock Journalist Data ---

export interface NewJournalistData {
  publication: Publication; // Use camelCase (represents the foreign key)
  name: string;
  bias: string | null;
  aggressiveness: number;
  reputation: number;
  relationship: number;
  isActive: boolean; // Use camelCase
}

export const generateMockJournalists = (
  publications: Publication[]
): NewJournalistData[] => {
  if (publications.length === 0) return [];

  const mockJournalists: NewJournalistData[] = [
    {
      publication: publications[0 % publications.length],
      name: "Sarah Inquiry",
      bias: "liberal",
      aggressiveness: 0.7,
      reputation: 0.7,
      relationship: 0.5,
      isActive: true,
    },
    {
      publication: publications[1 % publications.length],
      name: "Mark Statement",
      bias: "conservative",
      aggressiveness: 0.6,
      reputation: 0.65,
      relationship: 0.5,
      isActive: true,
    },
    {
      publication: publications[2 % publications.length],
      name: "Alex Objective",
      bias: "neutral",
      aggressiveness: 0.5,
      reputation: 0.8,
      relationship: 0.5,
      isActive: true,
    },
    {
      publication: publications[3 % publications.length],
      name: "Brenda Beat",
      bias: "neutral",
      aggressiveness: 0.8,
      reputation: 0.6,
      relationship: 0.5,
      isActive: true,
    },
    {
      publication: publications[4 % publications.length],
      name: "Chris Coder",
      bias: "liberal",
      aggressiveness: 0.4,
      reputation: 0.5,
      relationship: 0.5,
      isActive: true,
    },
    {
      publication: publications[5 % publications.length],
      name: "Penny Profit",
      bias: "conservative",
      aggressiveness: 0.6,
      reputation: 0.7,
      relationship: 0.5,
      isActive: true,
    },
  ];

  return mockJournalists;
};
// --- END OF FILE mockData.ts ---
