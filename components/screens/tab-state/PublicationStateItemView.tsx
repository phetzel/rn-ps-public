import React from 'react';
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

import type Journalist from '~/types/view-models/Journalist';
import type Publication from '~/types/view-models/Publication';

interface PublicationStateItemViewProps {
  publication: Publication;
  journalists: Journalist[];
}

export function PublicationStateItemView({
  publication,
  journalists,
}: PublicationStateItemViewProps) {
  const pubStaticData = publication.staticData;
  const approvalRating = publication.approvalRating ?? null;

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

      {approvalRating !== null && <StateProgress label="Approval Rating" value={approvalRating} />}

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
