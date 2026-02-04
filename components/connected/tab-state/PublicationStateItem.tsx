import { withObservables } from '@nozbe/watermelondb/react';

import { PublicationStateItemView } from '~/components/screens/tab-state/PublicationStateItemView';
import { observeJournalistsForPublication } from '~/lib/db/helpers';

import type Journalist from '~/lib/db/models/Journalist';
import type Publication from '~/lib/db/models/Publication';

interface PublicationStateItemProps {
  publication: Publication;
  journalists: Journalist[];
}

function PublicationStateItem({ publication, journalists }: PublicationStateItemProps) {
  return <PublicationStateItemView publication={publication} journalists={journalists} />;
}

export default withObservables(
  ['publication'],
  ({ publication }: { publication: Publication }) => ({
    publication,
    journalists: observeJournalistsForPublication(publication),
  }),
)(PublicationStateItem);
