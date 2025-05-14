import React from "react";
import { View } from "react-native";
import { withObservables } from "@nozbe/watermelondb/react";

import { useLevelNavigation } from "~/lib/hooks/useLevelNavigation";
import { CalendarClock } from "~/lib/icons/CalendarClock";
import { ArrowRight } from "~/lib/icons/ArrowRight";
import { observeLevel } from "~/lib/db/helpers";
import { Level } from "~/lib/db/models";
// Components
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { Text } from "~/components/ui/text";
import { Button } from "~/components/ui/button";
import { LevelStatusBadge } from "./LevelStatusBadge";
// Types
import { LevelStatus } from "~/types";

interface CurrentLevelCardProps {
  level: Level | undefined;
}

const CurrentLevelCard = ({ level }: CurrentLevelCardProps) => {
  const { navigateToCurrentLevelScreen, progressAndNavigate } =
    useLevelNavigation();

  if (!level) return null;

  const renderStatusText = (status: LevelStatus) => {
    switch (status) {
      case LevelStatus.Briefing:
        return "Prepare by reviewing ongoing situations and planning your communication strategy.";
      case LevelStatus.PressConference:
        return "Face the press and carefully manage your responses to their questions.";
      case LevelStatus.PressResults:
        return "Review the reactions from the press conference.";
      case LevelStatus.SituationOutcomes:
        return "Watch how the situations unfolded.";
      case LevelStatus.Completed:
        return "Review this month's results.";
      default:
        return "Unknown status";
    }
  };

  const handleNavigate = async () => {
    await navigateToCurrentLevelScreen();
  };

  return (
    <Card className="border-l-4 border-l-primary">
      <CardHeader className="flex-row items-center justify-between gap-2">
        <View className="gap-2">
          <View className="flex-row items-center gap-2">
            <CalendarClock className="h-5 w-5 text-primary" />
            <CardTitle className="text-xl font-bold">
              Month {level.month} Year {level.year}
            </CardTitle>
          </View>
          <LevelStatusBadge status={level.status} />
        </View>

        <Button onPress={handleNavigate} className="flex-row gap-2">
          <Text>
            {level.status === LevelStatus.Briefing
              ? "Start"
              : level.status === LevelStatus.PressConference
              ? "Start"
              : level.status === LevelStatus.PressResults ||
                level.status === LevelStatus.SituationOutcomes
              ? "Review"
              : "Next"}
          </Text>
          <ArrowRight className="h-4 w-4 text-background" />
        </Button>
      </CardHeader>

      <CardContent className="flex-row items-center justify-between gap-2">
        <View className="flex-1 justify-center gap-2">
          <Text className="text-sm text-muted-foreground">
            {renderStatusText(level.status)}
          </Text>
        </View>
      </CardContent>
    </Card>
  );
};

const enhance = withObservables(["levelId"], ({ levelId }) => ({
  level: observeLevel(levelId),
}));

export default enhance(CurrentLevelCard);
