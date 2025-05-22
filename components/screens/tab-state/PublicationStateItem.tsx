import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { withObservables } from "@nozbe/watermelondb/react";

import { observeJournalistsForPublication } from "~/lib/db/helpers";
import type Publication from "~/lib/db/models/Publication";
import type Journalist from "~/lib/db/models/Journalist";
import PoliticalLeaningBadge from "~/components/shared/PoliticalLeaningBadge";
import { Text } from "~/components/ui/text";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { Separator } from "~/components/ui/separator";
import { StateProgress } from "~/components/screens/tab-state/StateProgress";

interface PublicationStateItemProps {
  publication: Publication;
  journalists: Journalist[];
}

export function PublicationStateItem({
  publication,
  journalists,
}: PublicationStateItemProps) {
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

  return (
    <View className="gap-2 px-4">
      <View className="flex-row items-center justify-between">
        <Text className="text-lg font-bold">{pubStaticData.name}</Text>
        <PoliticalLeaningBadge
          politicalLeaning={pubStaticData.politicalLeaning}
        />
      </View>

      {/* Description */}
      <Text className="text-sm text-muted-foreground">
        {pubStaticData.description}
      </Text>

      {/* Approval Rating */}
      {approvalRating && (
        <StateProgress label="Approval Rating" value={approvalRating} />
      )}

      {/* Journalists */}
      <Accordion type="single" className="w-full">
        <AccordionItem value={publication.id}>
          <AccordionTrigger className="py-3">
            <Text>Journalists ({journalists?.length})</Text>
          </AccordionTrigger>

          <AccordionContent>
            <View className="gap-4">
              {/* Journalists */}
              {journalists?.length > 0 ? (
                <View className="gap-2">
                  <Text className="text-xl font-medium">Journalists</Text>

                  {journalists.map((journalist, idx) => {
                    const journoStaticData = journalist.staticData;
                    return (
                      <View key={journalist.id} className="gap-2">
                        <View>
                          <Text className="text-xl font-bold leading-tight">
                            {journoStaticData.name}
                          </Text>
                        </View>

                        <StateProgress
                          label="Relationship with You"
                          value={journalist.psRelationship}
                        />

                        {idx !== journalists.length - 1 && (
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
      </Accordion>
    </View>
  );
}

const enhance = withObservables(["publication"], ({ publication }) => ({
  publication,
  journalists: observeJournalistsForPublication(publication),
}));

export default enhance(PublicationStateItem);
