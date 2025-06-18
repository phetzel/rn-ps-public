import { Database } from "@nozbe/watermelondb";
import { createGameScenario } from "~/__tests__/support/scenarios/game";
import { createCabinetMember } from "~/__tests__/support/factories/cabinetMemberFactory";
import { createSubgroupApproval } from "~/__tests__/support/factories/subgroupApprovalFactory";
import { CabinetStaticId, SubgroupStaticId } from "~/types";

export async function createConsequenceTestScenario(
  database: Database,
  options: {
    presApprovalRating?: number;
    presPsRelationship?: number;
    cabinetApprovals?: { staticId: CabinetStaticId; approvalRating: number }[];
    subgroupApprovals?: {
      staticId: SubgroupStaticId;
      approvalRating: number;
    }[];
  } = {},
  mockFetchGameEntities?: jest.MockedFunction<any>
) {
  const { game, cabinetMembers, subgroups } = await createGameScenario(
    database,
    {
      gameOptions: {
        presPsRelationship: options.presPsRelationship ?? 50,
      },
      cabinetMemberCount: 0, // We'll create specific ones
      subgroupCount: 0, // We'll create specific ones
    }
  );

  // Create cabinet members with specific approval ratings
  const testCabinetMembers = [];
  const defaultCabinetApprovals = [
    { staticId: CabinetStaticId.State, approvalRating: 60 },
    { staticId: CabinetStaticId.Defense, approvalRating: 55 },
    { staticId: CabinetStaticId.Treasury, approvalRating: 65 },
  ];

  const cabinetApprovals = options.cabinetApprovals ?? defaultCabinetApprovals;

  for (const { staticId, approvalRating } of cabinetApprovals) {
    const member = await createCabinetMember(database, {
      gameId: game.id,
      staticId,
      approvalRating,
      psRelationship: 50,
      isActive: true,
    });
    testCabinetMembers.push(member);
  }

  // Create subgroups with specific approval ratings
  const testSubgroups = [];
  const defaultSubgroupApprovals = [
    {
      staticId: SubgroupStaticId.LeftWingBase,
      approvalRating: options.presApprovalRating ?? 50,
    },
    {
      staticId: SubgroupStaticId.RightWingBase,
      approvalRating: options.presApprovalRating ?? 50,
    },
    {
      staticId: SubgroupStaticId.IndependentBase,
      approvalRating: options.presApprovalRating ?? 50,
    },
  ];

  const subgroupApprovals =
    options.subgroupApprovals ?? defaultSubgroupApprovals;

  for (const { staticId, approvalRating } of subgroupApprovals) {
    const subgroup = await createSubgroupApproval(database, {
      gameId: game.id,
      staticId,
      approvalRating,
    });
    testSubgroups.push(subgroup);
  }

  // Mock fetchGameEntities to return our test data if mock is provided
  if (mockFetchGameEntities) {
    mockFetchGameEntities.mockResolvedValue({
      game,
      cabinetMembers: testCabinetMembers,
      publications: [],
      journalists: [],
      subgroups: testSubgroups,
    });
  }

  return {
    game,
    cabinetMembers: testCabinetMembers,
    subgroups: testSubgroups,
  };
}

// ... existing code ...

// ═══════════════════════════════════════════════════════════════════════════════
// CONSEQUENCE-SPECIFIC SCENARIO BUILDERS
// ═══════════════════════════════════════════════════════════════════════════════

export async function createImpeachmentScenario(
  database: Database,
  presApprovalRating: number = 15,
  mockFetchGameEntities?: jest.MockedFunction<any>
) {
  return createConsequenceTestScenario(
    database,
    {
      presApprovalRating,
      presPsRelationship: 60, // Safe from firing
    },
    mockFetchGameEntities
  );
}

export async function createFiringScenario(
  database: Database,
  presPsRelationship: number = 10,
  mockFetchGameEntities?: jest.MockedFunction<any>
) {
  return createConsequenceTestScenario(
    database,
    {
      presApprovalRating: 60, // Safe from impeachment
      presPsRelationship,
    },
    mockFetchGameEntities
  );
}

export async function createCabinetCrisisScenario(
  database: Database,
  mockFetchGameEntities?: jest.MockedFunction<any>
) {
  return createConsequenceTestScenario(
    database,
    {
      presApprovalRating: 60, // Safe from impeachment
      presPsRelationship: 60, // Safe from firing
      cabinetApprovals: [
        { staticId: CabinetStaticId.State, approvalRating: 20 }, // Will fire
        { staticId: CabinetStaticId.Defense, approvalRating: 30 }, // Safe
        { staticId: CabinetStaticId.Treasury, approvalRating: 15 }, // Will fire
      ],
    },
    mockFetchGameEntities
  );
}

export async function createStableGameScenario(
  database: Database,
  mockFetchGameEntities?: jest.MockedFunction<any>
) {
  return createConsequenceTestScenario(
    database,
    {
      presApprovalRating: 65,
      presPsRelationship: 75,
      cabinetApprovals: [
        { staticId: CabinetStaticId.State, approvalRating: 60 },
        { staticId: CabinetStaticId.Defense, approvalRating: 55 },
        { staticId: CabinetStaticId.Treasury, approvalRating: 70 },
      ],
    },
    mockFetchGameEntities
  );
}

export async function createBoundaryTestScenario(
  database: Database,
  mockFetchGameEntities?: jest.MockedFunction<any>
) {
  return createConsequenceTestScenario(
    database,
    {
      presApprovalRating: 25, // Exactly at threshold, no risk
      presPsRelationship: 25, // Exactly at threshold, no risk
      cabinetApprovals: [
        { staticId: CabinetStaticId.State, approvalRating: 25 }, // Exactly at threshold
      ],
    },
    mockFetchGameEntities
  );
}

export async function createSubgroupPenaltyScenario(
  database: Database,
  mockFetchGameEntities?: jest.MockedFunction<any>
) {
  return createConsequenceTestScenario(
    database,
    {
      presApprovalRating: 60,
      presPsRelationship: 60,
      cabinetApprovals: [
        { staticId: CabinetStaticId.State, approvalRating: 15 }, // Will fire
        { staticId: CabinetStaticId.Defense, approvalRating: 10 }, // Will fire
      ],
      subgroupApprovals: [
        { staticId: SubgroupStaticId.LeftWingBase, approvalRating: 70 },
        { staticId: SubgroupStaticId.RightWingBase, approvalRating: 80 },
      ],
    },
    mockFetchGameEntities
  );
}

export async function createSubgroupFloorScenario(
  database: Database,
  mockFetchGameEntities?: jest.MockedFunction<any>
) {
  return createConsequenceTestScenario(
    database,
    {
      presApprovalRating: 60,
      presPsRelationship: 60,
      cabinetApprovals: [
        { staticId: CabinetStaticId.State, approvalRating: 15 },
        { staticId: CabinetStaticId.Defense, approvalRating: 10 },
        { staticId: CabinetStaticId.Treasury, approvalRating: 5 },
      ],
      subgroupApprovals: [
        { staticId: SubgroupStaticId.LeftWingBase, approvalRating: 15 }, // Will go below 0
      ],
    },
    mockFetchGameEntities
  );
}

export async function createCompletionScenario(
  database: Database,
  options: {
    currentYear?: number;
    currentMonth?: number;
    presApprovalRating?: number;
    presPsRelationship?: number;
    cabinetApprovals?: { staticId: CabinetStaticId; approvalRating: number }[];
  } = {},
  mockFetchGameEntities?: jest.MockedFunction<any>
) {
  const { game, cabinetMembers, subgroups } =
    await createConsequenceTestScenario(
      database,
      {
        presApprovalRating: options.presApprovalRating ?? 60, // Safe from impeachment
        presPsRelationship: options.presPsRelationship ?? 70, // Safe from firing
        cabinetApprovals: options.cabinetApprovals ?? [
          { staticId: CabinetStaticId.State, approvalRating: 50 }, // Safe
          { staticId: CabinetStaticId.Defense, approvalRating: 45 }, // Safe
        ],
      },
      mockFetchGameEntities
    );

  // Set the game to the specified year/month (defaults to term limit)
  await database.write(async () => {
    await game.update((g) => {
      g.currentYear = options.currentYear ?? 4;
      g.currentMonth = options.currentMonth ?? 12;
    });
  });

  return { game, cabinetMembers, subgroups };
}

export async function createTermLimitCompletionScenario(
  database: Database,
  mockFetchGameEntities?: jest.MockedFunction<any>
) {
  return createCompletionScenario(
    database,
    {
      currentYear: 4,
      currentMonth: 12,
      presApprovalRating: 60, // Safe from impeachment
      presPsRelationship: 70, // Safe from firing
      cabinetApprovals: [
        { staticId: CabinetStaticId.State, approvalRating: 50 }, // Safe
        { staticId: CabinetStaticId.Defense, approvalRating: 45 }, // Safe
      ],
    },
    mockFetchGameEntities
  );
}

export async function createTermLimitImpeachmentScenario(
  database: Database,
  mockFetchGameEntities?: jest.MockedFunction<any>
) {
  return createCompletionScenario(
    database,
    {
      currentYear: 4,
      currentMonth: 12,
      presApprovalRating: 10, // High impeachment risk
      presPsRelationship: 70, // Safe from firing
      cabinetApprovals: [
        { staticId: CabinetStaticId.State, approvalRating: 50 },
      ],
    },
    mockFetchGameEntities
  );
}

export async function createTermLimitFiringScenario(
  database: Database,
  mockFetchGameEntities?: jest.MockedFunction<any>
) {
  return createCompletionScenario(
    database,
    {
      currentYear: 4,
      currentMonth: 12,
      presApprovalRating: 60, // Safe from impeachment
      presPsRelationship: 10, // High firing risk
      cabinetApprovals: [
        { staticId: CabinetStaticId.State, approvalRating: 50 },
      ],
    },
    mockFetchGameEntities
  );
}

export async function createNonTermLimitScenario(
  database: Database,
  mockFetchGameEntities?: jest.MockedFunction<any>
) {
  return createCompletionScenario(
    database,
    {
      currentYear: 4,
      currentMonth: 11, // Not December - not at term limit
      presApprovalRating: 60, // Safe from impeachment
      presPsRelationship: 70, // Safe from firing
      cabinetApprovals: [
        { staticId: CabinetStaticId.State, approvalRating: 50 },
      ],
    },
    mockFetchGameEntities
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// RANDOM PROVIDER HELPERS
// ═══════════════════════════════════════════════════════════════════════════════

export function createDeterministicRandom(values: number[]) {
  let index = 0;
  return () => {
    if (index >= values.length) {
      throw new Error(`Random called more than ${values.length} times`);
    }
    return values[index++];
  };
}

export function createPredictableRandom(baseValue: number) {
  return () => baseValue;
}

// ═══════════════════════════════════════════════════════════════════════════════
// TEST CASE GENERATORS
// ═══════════════════════════════════════════════════════════════════════════════

export interface ConsequenceTestCase {
  name: string;
  presApprovalRating: number;
  presPsRelationship: number;
  randomValue: number;
  expectedGameEnded: boolean;
  expectedReason?: "impeached" | "fired";
}

export const IMPEACHMENT_TEST_CASES: ConsequenceTestCase[] = [
  {
    name: "should impeach with low approval and successful roll",
    presApprovalRating: 15, // Risk = 0.4
    presPsRelationship: 60,
    randomValue: 0.3, // < 0.4
    expectedGameEnded: true,
    expectedReason: "impeached",
  },
  {
    name: "should not impeach with failed roll",
    presApprovalRating: 20, // Risk = 0.2
    presPsRelationship: 60,
    randomValue: 0.5, // > 0.2
    expectedGameEnded: false,
  },
  {
    name: "should not impeach with safe approval",
    presApprovalRating: 30, // No risk
    presPsRelationship: 60,
    randomValue: 0.1,
    expectedGameEnded: false,
  },
];

export const FIRING_TEST_CASES: ConsequenceTestCase[] = [
  {
    name: "should fire with low relationship and successful roll",
    presApprovalRating: 60,
    presPsRelationship: 10, // Risk = 0.6
    randomValue: 0.4, // < 0.6
    expectedGameEnded: true,
    expectedReason: "fired",
  },
  {
    name: "should not fire with failed roll",
    presApprovalRating: 60,
    presPsRelationship: 20, // Risk = 0.2
    randomValue: 0.5, // > 0.2
    expectedGameEnded: false,
  },
];
