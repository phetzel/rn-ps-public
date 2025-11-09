import { withObservables } from '@nozbe/watermelondb/react';
import React, { useState, useEffect } from 'react';
import { View } from 'react-native';

import { StateProgress } from '~/components/screens/tab-state/StateProgress';
import { PublicationStateHeader } from '~/components/shared/entity/PublicationStateHeader';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '~/components/ui/accordion';
import { Separator } from '~/components/ui/separator';
import { Text } from '~/components/ui/text';
import { observeJournalistsForPublication } from '~/lib/db/helpers';

import type Journalist from '~/lib/db/models/Journalist';
import type Publication from '~/lib/db/models/Publication';

interface PublicationStateItemProps {
  publication: Publication;
  journalists: Journalist[];
}

export function PublicationStateItem({ publication, journalists }: PublicationStateItemProps) {
  const pubStaticData = publication.staticData;
  const [approvalRating, setApprovalRating] = useState<number | null>(null);

  useEffect(() => {
    let isMounted = true;
    // Fetch approval rating asynchronously
    publication.getApprovalRating().then((rating) => {
      if (isMounted) setApprovalRating(rating);
    });

    return () => {
      isMounted = false;
    };
  }, [publication]);

  if (!publication) {
    return null;
  }

  const publicationAccessibilityLabel = `${pubStaticData.name}, ${
    pubStaticData.politicalLeaning
  } leaning publication. ${
    approvalRating ? `Approval rating: ${approvalRating}%.` : ''
  } ${journalists?.length || 0} journalists.`;

  return (
    <View
      className="gap-2 px-4"
      accessible={true}
      accessibilityLabel={publicationAccessibilityLabel}
    >
      <PublicationStateHeader
        name={pubStaticData.name}
        politicalLeaning={pubStaticData.politicalLeaning}
        description={pubStaticData.description}
      />

      {/* Approval Rating */}
      {approvalRating && <StateProgress label="Approval Rating" value={approvalRating} />}

      {/* Journalists */}
      <Accordion type="single" className="w-full">
        <AccordionItem value={publication.id}>
          <AccordionTrigger
            className="py-3"
            accessibilityLabel={`${journalists?.length || 0} journalists from ${
              pubStaticData.name
            }`}
            accessibilityHint="Expand to see individual journalist relationships"
          >
            <Text>Journalists ({journalists?.length})</Text>
          </AccordionTrigger>

          <AccordionContent>
            <View className="gap-4">
              {/* Journalists */}
              {journalists?.length > 0 ? (
                <View className="gap-2">
                  {journalists.map((journalist, idx) => {
                    const journoStaticData = journalist.staticData;
                    return (
                      <View
                        key={journalist.id}
                        className="gap-2"
                        accessible={true}
                        accessibilityLabel={`${journoStaticData.name}, relationship: ${journalist.psRelationship}%`}
                      >
                        <View>
                          <Text className="text-lg font-bold leading-tight">
                            {journoStaticData.name}
                          </Text>
                        </View>

                        <StateProgress
                          label="Relationship with You"
                          value={journalist.psRelationship}
                        />

                        {idx !== journalists.length - 1 && <Separator className="mt-2" />}
                      </View>
                    );
                  })}
                </View>
              ) : (
                <Text
                  className="text-muted-foreground"
                  accessibilityLabel="No journalists available for this publication"
                >
                  No journalists available
                </Text>
              )}
            </View>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </View>
  );
}

const enhance = withObservables(['publication'], ({ publication }) => ({
  publication,
  journalists: observeJournalistsForPublication(publication),
}));

export default enhance(PublicationStateItem);
