import React from 'react';
import { View } from 'react-native';

import { PublicationStateHeader } from '~/components/shared/entity/PublicationStateHeader';
import LevelProgress from '~/components/shared/level-state/LevelProgress';
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card';
import { Separator } from '~/components/ui/separator';
import { Text } from '~/components/ui/text';
import { staticPublications, staticJournalists } from '~/lib/data/staticMedia';
import { Newspaper } from '~/lib/icons';
import { PublicationStaticId, JournalistStaticId } from '~/types';

import type { OutcomeSnapshotType } from '~/types';

interface MediaLevelStateProps {
  outcomeSnapshot: OutcomeSnapshotType;
}

const MediaLevelState = ({ outcomeSnapshot }: MediaLevelStateProps) => {
  const { initial, final } = outcomeSnapshot;

  if (!initial || !final) {
    return null;
  }

  // Group journalists by publication
  const journalistsByPublication = Object.entries(staticJournalists).reduce(
    (acc, [journalistId, journalist]) => {
      const pubId = journalist.publicationStaticId;
      if (!acc[pubId]) {
        acc[pubId] = [];
      }
      acc[pubId].push({
        id: journalistId as JournalistStaticId,
        ...journalist,
      });
      return acc;
    },
    {} as Record<PublicationStaticId, { id: JournalistStaticId; name: string }[]>,
  );

  // Get publications with data (either approval ratings or journalist data)
  const publicationsWithData = Object.entries(staticPublications)
    .filter(([pubId]) => {
      // Include if we have approval data OR journalist data
      const hasApprovalData =
        initial.publications?.[pubId as PublicationStaticId] ||
        final.publications?.[pubId as PublicationStaticId];

      if (hasApprovalData) return true;

      // Fallback to journalist data check
      const pubJournalists = journalistsByPublication[pubId as PublicationStaticId] || [];
      return pubJournalists.some(
        (journalist) => initial.journalists[journalist.id] && final.journalists[journalist.id],
      );
    })
    .map(([id, pub]) => ({
      id: id as PublicationStaticId,
      ...pub,
      initialApproval: initial.publications?.[id as PublicationStaticId]?.approvalRating ?? 0,
      finalApproval: final.publications?.[id as PublicationStaticId]?.approvalRating ?? 0,
      hasApprovalData: !!(
        initial.publications?.[id as PublicationStaticId] ||
        final.publications?.[id as PublicationStaticId]
      ),
    }));

  return (
    <Card>
      <CardHeader className="flex-row items-center gap-2">
        <Newspaper className="text-primary" size={20} />
        <CardTitle>Media Monthly Update</CardTitle>
      </CardHeader>
      <CardContent>
        <View
          className="gap-2"
          accessible={true}
          accessibilityLabel={`Media monthly update: ${publicationsWithData.length} publications`}
        >
          {publicationsWithData.map((publication, pubIndex) => {
            const publicationJournalists = journalistsByPublication[publication.id] || [];

            const approvalChange = publication.finalApproval - publication.initialApproval;

            return (
              <View
                key={publication.id}
                className="gap-4"
                accessible={true}
                accessibilityLabel={`${publication.name}. ${
                  publication.hasApprovalData
                    ? `Approval changed by ${approvalChange > 0 ? '+' : ''}${approvalChange}%.`
                    : ''
                } ${publicationJournalists.length} journalists.`}
              >
                <View className="gap-2" accessible={false}>
                  {/* Publication Header */}
                  <PublicationStateHeader
                    name={publication.name}
                    politicalLeaning={publication.politicalLeaning}
                  />

                  {/* Publication Approval Rating Progress */}
                  {publication.hasApprovalData && (
                    <LevelProgress
                      label="Approval Rating"
                      initialValue={publication.initialApproval}
                      finalValue={publication.finalApproval}
                    />
                  )}

                  {/* Journalists Section - Always Visible */}
                  {publicationJournalists.length > 0 && (
                    <View className="gap-4">
                      <Text className="text-lg font-medium" accessibilityRole="header">
                        Journalists ({publicationJournalists.length})
                      </Text>

                      <View className="gap-2">
                        {publicationJournalists.map((journalist, journoIdx) => {
                          const initialValues = initial.journalists[journalist.id];
                          const finalValues = final.journalists[journalist.id];

                          if (!initialValues || !finalValues) return null;

                          const relationshipChange =
                            finalValues.psRelationship - initialValues.psRelationship;

                          return (
                            <View
                              key={journalist.id}
                              className=""
                              accessible={true}
                              accessibilityLabel={`${journalist.name}. Relationship changed by ${
                                relationshipChange > 0 ? '+' : ''
                              }${relationshipChange}%.`}
                            >
                              <Text className="text-lg font-bold leading-tight">
                                {journalist.name}
                              </Text>

                              <LevelProgress
                                label="Relationship with You"
                                initialValue={initialValues.psRelationship}
                                finalValue={finalValues.psRelationship}
                              />

                              {journoIdx !== publicationJournalists.length - 1 && (
                                <Separator className="mt-2" />
                              )}
                            </View>
                          );
                        })}
                      </View>
                    </View>
                  )}
                </View>
                {/* Add separator between publications */}
                {publication !== publicationsWithData[publicationsWithData.length - 1] && (
                  <Separator className="my-4" />
                )}
              </View>
            );
          })}
        </View>
      </CardContent>
    </Card>
  );
};

export default MediaLevelState;
