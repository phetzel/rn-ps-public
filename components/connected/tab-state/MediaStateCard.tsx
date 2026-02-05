import { withObservables } from '@nozbe/watermelondb/react';

import PublicationStateItem from '~/components/connected/tab-state/PublicationStateItem';
import { MediaStateCardView } from '~/components/screens/tab-state/MediaStateCardView';
import { observePublications } from '~/lib/db/helpers';

import type Publication from '~/lib/db/models/Publication';

interface MediaStateCardProps {
  gameId: string;
  publications: Publication[];
}

function MediaStateCard({ publications }: MediaStateCardProps) {
  return (
    <MediaStateCardView
      publications={publications}
      renderPublicationStateItem={(publication) => (
        <PublicationStateItem publication={publication} />
      )}
    />
  );
}

export default withObservables(['gameId'], ({ gameId }: { gameId: string }) => ({
  publications: observePublications(gameId),
}))(MediaStateCard);
