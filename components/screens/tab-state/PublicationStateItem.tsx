// components/screens/tab-state/PublicationStateItem.tsx
import React from "react";
import { View } from "react-native";
import { withObservables } from "@nozbe/watermelondb/react";

import { observeJournalistsForPublication } from "~/lib/db/helpers";
import type Publication from "~/lib/db/models/Publication";
import type Journalist from "~/lib/db/models/Journalist";
import PoliticalLeaningBadge from "~/components/shared/PoliticalLeaningBadge";
import { Text, TextClassContext } from "~/components/ui/text";
import {
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

  if (!publication) {
    return null;
  }

  return (
    <AccordionItem value={publication.id}>
      <AccordionTrigger className="py-3">
        <View className="flex flex-col items-start text-left">
          <View className="flex-row items-center gap-2">
            <Text className="font-medium">{pubStaticData.name}</Text>
            <PoliticalLeaningBadge
              politicalLeaning={pubStaticData.politicalLeaning}
            />
          </View>
        </View>
      </AccordionTrigger>

      <AccordionContent>
        <View className="gap-4">
          {/* Journalists */}
          {journalists?.length > 0 ? (
            <View className="gap-2">
              <TextClassContext.Provider value="text-xl font-medium">
                <Text>Journalists</Text>
              </TextClassContext.Provider>

              {journalists.map((journalist, idx) => {
                const journoStaticData = journalist.staticData;
                return (
                  <View key={journalist.id} className="gap-2">
                    <View>
                      <TextClassContext.Provider value="text-xl font-bold leading-tight">
                        <Text>{journoStaticData.name}</Text>
                      </TextClassContext.Provider>
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
  );
}

const enhance = withObservables(["publication"], ({ publication }) => ({
  publication,
  journalists: observeJournalistsForPublication(publication),
}));

export default enhance(PublicationStateItem);
