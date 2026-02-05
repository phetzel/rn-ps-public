import { withObservables } from '@nozbe/watermelondb/react';
import React, { useEffect, useMemo, useState } from 'react';

import { PublicationStateItemView } from '~/components/screens/tab-state/PublicationStateItemView';
import { observeJournalistsForPublication } from '~/lib/db/helpers';

import type Journalist from '~/lib/db/models/Journalist';
import type PublicationModel from '~/lib/db/models/Publication';
import type Publication from '~/types/view-models/Publication';

interface PublicationStateItemProps {
  publication: Publication;
  journalists: Journalist[];
}

function PublicationStateItem({ publication, journalists }: PublicationStateItemProps) {
  const publicationModel = publication as PublicationModel;
  const [approvalRating, setApprovalRating] = useState<number | null>(null);

  useEffect(() => {
    let isMounted = true;
    publicationModel
      .getApprovalRating()
      .then((rating) => {
        if (isMounted) {
          setApprovalRating(rating);
        }
      })
      .catch((error) => {
        console.error('Failed to load publication approval rating:', error);
      });

    return () => {
      isMounted = false;
    };
  }, [publicationModel]);

  const publicationView = useMemo(
    () => ({
      id: publicationModel.id,
      staticId: publicationModel.staticId,
      staticData: publicationModel.staticData,
      approvalRating,
    }),
    [publicationModel, approvalRating],
  );

  return <PublicationStateItemView publication={publicationView} journalists={journalists} />;
}

export default withObservables(
  ['publication'],
  ({ publication }: { publication: Publication }) => ({
    publication,
    journalists: observeJournalistsForPublication(publication as PublicationModel),
  }),
)(PublicationStateItem);
