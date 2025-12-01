import { faker } from '@faker-js/faker';
import { Database } from '@nozbe/watermelondb';

import { SubgroupApproval } from '~/lib/db/models';
import { SubgroupStaticId } from '~/types';

type SubgroupApprovalOverrides = {
  gameId: string; // Required association
} & Partial<{
  staticId: SubgroupStaticId;
  approvalRating: number;
}>;

export async function createSubgroupApproval(
  database: Database,
  overrides: SubgroupApprovalOverrides,
): Promise<SubgroupApproval> {
  const defaultValues = {
    staticId: faker.helpers.enumValue(SubgroupStaticId),
    approvalRating: faker.number.int({ min: 0, max: 100 }),
  };

  const subgroupData = { ...defaultValues, ...overrides };

  return await database.write(async () => {
    return await database.get<SubgroupApproval>('subgroup_approvals').create((subgroup) => {
      subgroup.game_id = subgroupData.gameId;
      subgroup.staticId = subgroupData.staticId;
      subgroup.approvalRating = subgroupData.approvalRating;
    });
  });
}
