import type { CabinetStaticId, StaticCabinetMember } from '~/types';

export default interface CabinetMember {
  id: string;
  name: string;
  staticId: CabinetStaticId;
  approvalRating: number;
  psRelationship: number;
  staticData: StaticCabinetMember;
}
