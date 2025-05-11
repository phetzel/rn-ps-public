import React from "react";
import { View } from "react-native";
import { useRouter } from "expo-router";
import { withObservables } from "@nozbe/watermelondb/react";

import { CalendarClock } from "~/lib/icons/CalendarClock";
import { observeLevel } from "~/lib/db/helpers";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { Text } from "~/components/ui/text";
import { Level } from "~/lib/db/models";
import { LevelStatus } from "~/types";
import { Button } from "~/components/ui/button";
import { ArrowRight } from "~/lib/icons/ArrowRight";
import { LEVEL_STATUS_DISPLAY_NAMES } from "~/lib/constants";

interface CurrentLevelCardProps {
  level: Level | undefined;
}

const CurrentLevelCard = ({ level }: CurrentLevelCardProps) => {
  const router = useRouter();

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
      default:
        return "Unknown status";
    }
  };

  const handleButtonPress = () => {
    if (level.status === LevelStatus.Briefing) {
      router.push(`/games/${level.game_id}/briefing`);
    } else if (level.status === LevelStatus.PressConference) {
      router.push(`/games/${level.game_id}/press-conference`);
    } else if (level.status === LevelStatus.PressResults) {
      router.push(`/games/${level.game_id}/press-outcomes`);
    } else if (level.status === LevelStatus.SituationOutcomes) {
      router.push(`/games/${level.game_id}/situation-outcomes`);
    } else if (level.status === LevelStatus.Completed) {
      router.push(`/games/${level.game_id}/level-complete`);
    }
  };
  return (
    <Card className="border-l-4 border-l-primary">
      <CardHeader className="flex-row items-center gap-2">
        <CalendarClock className="h-5 w-5 text-primary" />
        <CardTitle className="text-xl">
          Month {level.month} Year {level.year}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-row items-center justify-between gap-2">
        <View className="flex-1 justify-center gap-2">
          <View className="flex-row gap-2">
            <Badge>
              <Text>{LEVEL_STATUS_DISPLAY_NAMES[level.status]}</Text>
            </Badge>
          </View>

          <Text className="text-sm text-muted-foreground">
            {renderStatusText(level.status)}
          </Text>
        </View>

        <View className="flex-col gap-2">
          <Button onPress={handleButtonPress} className="flex-row gap-2">
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
            <ArrowRight className="h-4 w-4 text-muted-foreground" />
          </Button>

          {/* {level.status !== LevelStatus.Briefing && (
            <Button variant="outline" className="w-full md:w-auto">
              <Text>Review Briefing</Text>
            </Button>
          )} */}
        </View>
      </CardContent>
    </Card>
  );
};

const enhance = withObservables(["levelId"], ({ levelId }) => ({
  level: observeLevel(levelId),
}));

export default enhance(CurrentLevelCard);
