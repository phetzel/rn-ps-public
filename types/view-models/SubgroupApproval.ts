import type { StaticSubgroup, SubgroupStaticId } from '~/types';

export default interface SubgroupApproval {
  id: string;
  staticId: SubgroupStaticId;
  approvalRating: number;
  staticData: StaticSubgroup;
}
