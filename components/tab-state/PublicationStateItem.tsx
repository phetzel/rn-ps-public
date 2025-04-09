import { View } from "react-native";
import { withObservables } from "@nozbe/watermelondb/react";

import { observeJournalistsForPublication } from "~/lib/db/helpers";
import type Publication from "~/lib/db/models/Publication";
import type Journalist from "~/lib/db/models/Journalist";
import { Text } from "~/components/ui/text";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { Badge } from "~/components/ui/badge";
import { Separator } from "~/components/ui/separator";
import { Progress } from "~/components/ui/progress";
import { PoliticalLeaning } from "~/types";
import { TrendingUp } from "~/lib/icons/TrendingUp";
import { Users } from "~/lib/icons/Users";

interface PublicationStateItemProps {
  publication: Publication;
  journalists: Journalist[];
}

const PublicationStateItem = ({
  publication,
  journalists,
}: PublicationStateItemProps) => {
  const getPoliticalLeaningBGColor = (leaning: PoliticalLeaning): string => {
    switch (leaning) {
      case PoliticalLeaning.Liberal:
        return "bg-blue-100";
      case PoliticalLeaning.Conservative:
        return "bg-red-100";
      case PoliticalLeaning.Neutral:
      default:
        return "bg-gray-100";
    }
  };

  const getPoliticalLeaningTextColor = (leaning: PoliticalLeaning): string => {
    switch (leaning) {
      case PoliticalLeaning.Liberal:
        return "text-blue-800";
      case PoliticalLeaning.Conservative:
        return "text-red-800";
      case PoliticalLeaning.Neutral:
      default:
        return "text-gray-800";
    }
  };

  const formatPoliticalLeaning = (leaning: PoliticalLeaning): string => {
    return leaning.charAt(0).toUpperCase() + leaning.slice(1);
  };

  return (
    <AccordionItem key={publication.id} value={publication.id}>
      <AccordionTrigger className="py-3">
        <View className="flex flex-col items-start text-left">
          <View className="flex-row items-center gap-2">
            <Text className="font-medium">{publication.name}</Text>
            <Badge
              className={getPoliticalLeaningBGColor(
                publication.politicalLeaning
              )}
            >
              <Text
                className={getPoliticalLeaningTextColor(
                  publication.politicalLeaning
                )}
              >
                {formatPoliticalLeaning(publication.politicalLeaning)}
              </Text>
            </Badge>
          </View>
        </View>
      </AccordionTrigger>

      {/* Content */}
      <AccordionContent>
        <View className="gap-4">
          <View className="gap-2">
            <View className="flex-row justify-between items-center">
              <View className="flex-row items-center gap-1.5">
                <TrendingUp className="h-3.5 w-3.5 text-muted-foreground" />
                <Text className="text-sm">Reach</Text>
              </View>
              <Text className="text-sm font-medium">{publication.reach}%</Text>
            </View>
            <Progress value={publication.reach} className="h-2" />
          </View>

          <View className="gap-2">
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

          <Separator className="mt-2" />

          {/* Journalists */}
          {journalists.length > 0 && (
            <View className="gap-2">
              <Text className="font-medium">Journalists</Text>

              {journalists.map((journalist, idx) => (
                <View key={journalist.id} className="gap-2">
                  <View>
                    <Text className="text-sm font-medium">
                      {journalist.name}
                    </Text>
                    {journalist.bias && (
                      <Text className="text-xs text-muted-foreground">
                        {formatPoliticalLeaning(journalist.bias)} Bias
                      </Text>
                    )}
                  </View>

                  <View className="gap-2">
                    <View className="flex-row justify-between items-center">
                      <Text className="text-sm">Reputation</Text>
                      <Text className="text-sm font-medium">
                        {journalist.reputation}%
                      </Text>
                    </View>
                    <Progress value={journalist.reputation} className="h-1.5" />
                  </View>

                  <View className="gap-2">
                    <View className="flex-row justify-between items-center">
                      <Text className="text-sm">Relationship with You</Text>
                      <Text className="text-sm font-medium">
                        {journalist.relationship}%
                      </Text>
                    </View>
                    <Progress
                      value={journalist.relationship}
                      className="h-1.5"
                    />
                  </View>

                  {idx !== journalists.length - 1 && (
                    <Separator className="mt-2" />
                  )}
                </View>
              ))}
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
