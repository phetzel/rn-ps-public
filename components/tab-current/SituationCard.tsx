// components/tab-current/SituationCard.tsx
import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { withObservables } from "@nozbe/watermelondb/react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { Text } from "~/components/ui/text";
import { Situation, Level } from "~/lib/db/models";
import { Clock } from "~/lib/icons/Clock";
import {
  getSituationIcon,
  getSituationBadgeVariant,
  formatSituationType,
} from "~/lib/utils";

interface SituationCardProps {
  situation: Situation;
  level: Level;
}

const SituationCard = ({ situation, level }: SituationCardProps) => {
  const Icon = getSituationIcon(situation.type);

  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-2">
        <View className=" flex-row justify-between items-center">
          <View className="flex-1 flex-row items-center gap-2 mr-2">
            <Icon className="h-5 w-5 text-primary flex-shrink-0" />
            <CardTitle className="text-lg flex-shrink">
              {situation.title}
            </CardTitle>
          </View>

          <Badge
            variant={getSituationBadgeVariant(situation.type)}
            className="flex-shrink-0"
          >
            <Text>{formatSituationType(situation.type)}</Text>
          </Badge>
        </View>
      </CardHeader>

      <CardContent className="pb-2">
        <Text className="text-sm text-muted-foreground mb-4">
          {situation.description}
        </Text>
      </CardContent>

      <CardFooter className="pt-2 pb-4 flex-row items-center">
        <View className="flex-row items-center gap-2">
          <Clock className="h-3 w-3 text-primary" />
          <View>
            <Text className="text-xs text-muted-foreground">Started:</Text>
            <Text className="text-xs text-muted-foreground">
              Month {level?.month} Year {level?.year}
            </Text>
          </View>
        </View>
      </CardFooter>
    </Card>
  );
};

const enhance = withObservables(["situation"], ({ situation }) => ({
  situation,
  level: situation.level.observe(),
}));

export default enhance(SituationCard);
