import type { PublicationStaticId, StaticPublication } from '~/types';

export default interface Publication {
  id: string;
  staticId: PublicationStaticId;
  staticData: StaticPublication;
  approvalRating?: number | null;
}
