import { View } from "react-native";
import { withObservables } from "@nozbe/watermelondb/react";

import { observeJournalistsForPublication } from "~/lib/db/helpers";
import type Publication from "~/lib/db/models/Publication";
import type Journalist from "~/lib/db/models/Journalist";
import PoliticalLeaningBadge from "~/components/shared/PoliticalLeaningBadge";
import { Text } from "~/components/ui/text";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";

import { Separator } from "~/components/ui/separator";
import { Progress } from "~/components/ui/progress";
import { TrendingUp } from "~/lib/icons/TrendingUp";
import { Users } from "~/lib/icons/Users";
import { PoliticalLeaning } from "~/types";

interface PublicationStateItemProps {
  publication: Publication;
  journalists: Journalist[];
}

const PublicationStateItem = ({
  publication,
  journalists,
}: PublicationStateItemProps) => {
  const formatPoliticalLeaning = (leaning: PoliticalLeaning): string => {
    return leaning.charAt(0).toUpperCase() + leaning.slice(1);
  };

  const pubStaticData = publication.staticData;

  return (
    <AccordionItem key={publication.id} value={publication.id}>
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

      {/* Content */}
      <AccordionContent>
        <View className="gap-4">
          {/* <View className="gap-2">
            <View className="flex-row justify-between items-center">
              <View className="flex-row items-center gap-2">
                <Users className="h-3.5 w-3.5 text-muted-foreground" />
                <Text className="text-sm">Approval</Text>
              </View>
              <Text className="text-sm font-medium">
                {publication.approvalRating}%
              </Text>
            </View>
            <Progress value={publication.approvalRating} className="h-2" />
          </View>

          <Separator className="mt-2" /> */}

          {/* Journalists */}
          {journalists.length > 0 && (
            <View className="gap-2">
              <Text className="font-medium">Journalists</Text>

              {journalists.map((journalist, idx) => {
                const journoStaticData = journalist.staticData;
                return (
                  <View key={journalist.id} className="gap-2">
                    <View>
                      <Text className="text-sm font-medium">
                        {journoStaticData.name}
                      </Text>
                    </View>

                    <View className="gap-2">
                      <View className="flex-row justify-between items-center">
                        <Text className="text-sm">Relationship with You</Text>
                        <Text className="text-sm font-medium">
                          {journalist.psRelationship}%
                        </Text>
                      </View>
                      <Progress
                        value={journalist.psRelationship}
                        className="h-1.5"
                      />
                    </View>

                    {idx !== journalists.length - 1 && (
                      <Separator className="mt-2" />
                    )}
                  </View>
                );
              })}
            </View>
          )}
        </View>
      </AccordionContent>
    </AccordionItem>
  );
};

const enhance = withObservables(["publication"], ({ publication }) => ({
  publication,
  journalists: observeJournalistsForPublication(publication),
}));

export default enhance(PublicationStateItem);
