import React from "react";
import { View } from "react-native";

import { staticPublications, staticJournalists } from "~/lib/data/staticMedia";
import { Text } from "~/components/ui/text";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { Separator } from "~/components/ui/separator";
import LevelProgress from "~/components/screens/level-complete/LevelProgress";
import { PublicationStateHeader } from "~/components/shared/PublicationStateHeader";
import { PublicationStaticId, JournalistStaticId } from "~/types";
import type { OutcomeSnapshotType } from "~/types";

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
    {} as Record<
      PublicationStaticId,
      Array<{ id: JournalistStaticId; name: string }>
    >
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
      const pubJournalists =
        journalistsByPublication[pubId as PublicationStaticId] || [];
      return pubJournalists.some(
        (journalist) =>
          initial.journalists[journalist.id] && final.journalists[journalist.id]
      );
    })
    .map(([id, pub]) => ({
      id: id as PublicationStaticId,
      ...pub,
      initialApproval:
        initial.publications?.[id as PublicationStaticId]?.approvalRating ?? 0,
      finalApproval:
        final.publications?.[id as PublicationStaticId]?.approvalRating ?? 0,
      hasApprovalData: !!(
        initial.publications?.[id as PublicationStaticId] ||
        final.publications?.[id as PublicationStaticId]
      ),
    }));

  return (
    <View className="gap-2">
      {publicationsWithData.map((publication) => {
        const publicationJournalists =
          journalistsByPublication[publication.id] || [];

        return (
          <View key={publication.id} className="gap-4">
            <View className="gap-2">
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

              {/* Journalists Accordion */}
              {publicationJournalists.length > 0 && (
                <Accordion type="single">
                  <AccordionItem value={publication.id}>
                    <AccordionTrigger className="py-3">
                      <Text>Journalists ({publicationJournalists.length})</Text>
                    </AccordionTrigger>

                    <AccordionContent>
                      <View className="gap-4">
                        <View className="gap-2">
                          <Text className="text-xl font-medium">
                            Journalists
                          </Text>

                          {publicationJournalists.map(
                            (journalist, journoIdx) => {
                              const initialValues =
                                initial.journalists[journalist.id];
                              const finalValues =
                                final.journalists[journalist.id];

                              if (!initialValues || !finalValues) return null;

                              return (
                                <View key={journalist.id} className="gap-2">
                                  <Text className="text-xl font-bold leading-tight">
                                    {journalist.name}
                                  </Text>

                                  <LevelProgress
                                    label="Relationship with You"
                                    initialValue={initialValues.psRelationship}
                                    finalValue={finalValues.psRelationship}
                                  />

                                  {journoIdx !==
                                    publicationJournalists.length - 1 && (
                                    <Separator className="mt-2" />
                                  )}
                                </View>
                              );
                            }
                          )}
                        </View>
                      </View>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              )}
            </View>
            {/* Add separator between publications */}
            {publication !==
              publicationsWithData[publicationsWithData.length - 1] && (
              <Separator className="my-4" />
            )}
          </View>
        );
      })}
    </View>
  );
};

export default MediaLevelState;
