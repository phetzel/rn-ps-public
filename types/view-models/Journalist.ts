import type { JournalistStaticId, StaticJournalist } from '~/types';

export default interface Journalist {
  id: string;
  staticId: JournalistStaticId;
  psRelationship: number;
  staticData: StaticJournalist;
}
