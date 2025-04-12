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
import { SituationType } from "~/types";
import { AlertCircle } from "~/lib/icons/AlertCircle";
import { Globe } from "~/lib/icons/Globe";
import { DollarSign } from "~/lib/icons/DollarSign";
import { Shield } from "~/lib/icons/Shield";
import { Users } from "~/lib/icons/Users";

interface SituationCardProps {
  situation: Situation;
  startLevel: Level;
}

const SituationCard = ({ situation, startLevel }: SituationCardProps) => {
  const getSituationIcon = (type: SituationType) => {
    switch (type) {
      case SituationType.Domestic:
        return <Users className="h-5 w-5 text-primary" />;
      case SituationType.Foreign:
        return <Globe className="h-5 w-5 text-primary" />;
      case SituationType.Scandal:
        return <AlertCircle className="h-5 w-5 text-primary" />;
      case SituationType.Economic:
        return <DollarSign className="h-5 w-5 text-primary" />;
      case SituationType.Security:
        return <Shield className="h-5 w-5 text-primary" />;
      case SituationType.PublicSentiment:
        return <Users className="h-5 w-5 text-primary" />;
      default:
        return <AlertCircle className="h-5 w-5 text-primary" />;
    }
  };

  const formatSituationType = (type: SituationType) => {
    return type.replace("_", " ").replace(/\b\w/g, (l) => l.toUpperCase());
  };

  const getSituationBadgeVariant = (type: SituationType) => {
    switch (type) {
      case SituationType.Domestic:
        return "default";
      case SituationType.Foreign:
        return "secondary";
      case SituationType.Scandal:
        return "destructive";
      case SituationType.Economic:
        return "outline";
      case SituationType.Security:
        return "destructive";
      case SituationType.PublicSentiment:
        return "default";
      default:
        return "default";
    }
  };

  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-2">
        <View className="flex-row justify-between items-start">
          <View className="flex-row items-center gap-2">
            {getSituationIcon(situation.type)}
            <CardTitle className="text-lg">{situation.title}</CardTitle>
          </View>
          <Badge variant={getSituationBadgeVariant(situation.type)}>
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
              Month {startLevel?.month} Year {startLevel?.year}
            </Text>
          </View>
        </View>
      </CardFooter>
    </Card>
  );
};

const enhance = withObservables(["situation"], ({ situation }) => ({
  situation,
  startLevel: situation.startLevel.observe(),
}));

export default enhance(SituationCard);
