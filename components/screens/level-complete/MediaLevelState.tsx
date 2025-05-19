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
import PoliticalLeaningBadge from "~/components/shared/PoliticalLeaningBadge";
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

  // Get publications that have journalists with data in the snapshot
  const publicationsWithData = Object.entries(staticPublications)
    .filter(([pubId]) => {
      const pubJournalists =
        journalistsByPublication[pubId as PublicationStaticId] || [];
      return pubJournalists.some(
        (journalist) =>
          initial.journalists[journalist.id] && final.journalists[journalist.id]
      );
    })
    .map(([id, pub]) => ({ id: id as PublicationStaticId, ...pub }));

  return (
    <View>
      <Accordion type="multiple" className="w-full">
        {publicationsWithData.map((publication) => {
          const publicationJournalists =
            journalistsByPublication[publication.id] || [];

          return (
            <AccordionItem key={publication.id} value={publication.id}>
              <AccordionTrigger className="py-3">
                <View className="flex flex-col items-start text-left">
                  <View className="flex-row items-center gap-2">
                    <Text>{publication.name}</Text>
                    <PoliticalLeaningBadge
                      politicalLeaning={publication.politicalLeaning}
                    />
                  </View>
                </View>
              </AccordionTrigger>

              <AccordionContent>
                <View className="gap-4">
                  {publicationJournalists.length > 0 ? (
                    <View className="gap-2">
                      <Text className="text-xl font-medium">Journalists</Text>

                      {publicationJournalists.map((journalist, journoIdx) => {
                        const initialValues =
                          initial.journalists[journalist.id];
                        const finalValues = final.journalists[journalist.id];

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
                      })}
                    </View>
                  ) : (
                    <Text className="text-muted-foreground">
                      No journalists available
                    </Text>
                  )}
                </View>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </View>
  );
};

export default MediaLevelState;
