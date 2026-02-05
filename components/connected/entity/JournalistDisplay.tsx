import { withObservables } from '@nozbe/watermelondb/react';

import { JournalistDisplayView } from '~/components/shared/entity/JournalistDisplayView';
import {
  observeJournalist,
  observePublicationForJournalistId,
} from '~/lib/db/helpers/observations';

import type { Journalist, Publication } from '~/lib/db/models';

interface JournalistDisplayProps {
  journalistId: string;
  journalist?: Journalist | null;
  publication?: Publication | null;
}

function JournalistDisplay({ journalist, publication }: JournalistDisplayProps) {
  if (!journalist || !publication) return null;

  const journoStaticData = journalist.staticData;
  const pubStaticData = publication.staticData;

  return (
    <JournalistDisplayView
      journalistName={journoStaticData.name}
      publicationName={pubStaticData.name}
      publicationLeaning={pubStaticData.politicalLeaning}
    />
  );
}

export default withObservables(['journalistId'], ({ journalistId }: { journalistId: string }) => ({
  journalist: observeJournalist(journalistId),
  publication: observePublicationForJournalistId(journalistId),
}))(JournalistDisplay);
