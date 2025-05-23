import React from "react";
import { View } from "react-native";

import type Situation from "~/lib/db/models/Situation";
import { Text } from "~/components/ui/text";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { SituationStatusBadge } from "~/components/shared/entity/SituationStatusBadge";
import { SituationTypeIcon } from "~/components/shared/entity/SituationTypeIcon";

interface SituationCardProps {
  situation: Situation;
}

export function SituationCard({ situation }: SituationCardProps) {
  return (
    <Card className="border-l-4 border-l-primary overflow-hidden">
      <CardHeader>
        <View className="flex-row justify-between items-start">
          <View className="flex-row items-center gap-2 flex-1">
            <SituationTypeIcon type={situation.type} />
            <CardTitle className="flex-1">{situation.title}</CardTitle>
          </View>

          <SituationStatusBadge status={situation.type} />
        </View>
      </CardHeader>
      <CardContent className="">
        <Text className="text-muted-foreground text-sm">
          {situation.description}
        </Text>
      </CardContent>
    </Card>
  );
}
