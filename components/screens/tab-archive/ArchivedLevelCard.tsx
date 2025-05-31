import React from "react";
import { View } from "react-native";
import { withObservables } from "@nozbe/watermelondb/react";
import { useRouter } from "expo-router";

import {
  AlertCircle,
  ArrowRight,
  CalendarClock,
  CheckCircle2,
} from "~/lib/icons";
import { observeLevel, observeSituationsByLevelId } from "~/lib/db/helpers";
import { Level, Situation } from "~/lib/db/models";
// Components
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { Text } from "~/components/ui/text";
import { Button } from "~/components/ui/button";

interface ArchivedLevelCardProps {
  level: Level | undefined;
  situations: Situation[];
  levelId: string;
}

const ArchivedLevelCard = ({
  level,
  situations,
  levelId,
}: ArchivedLevelCardProps) => {
  const router = useRouter();

  if (!level) return null;

  const outcomeSnapshot = level.parseOutcomeSnapshot;

  // Calculate president approval rating change

  const finalApproval = outcomeSnapshot?.final?.president.approvalRating;
  const finalPresRelationship =
    outcomeSnapshot?.final?.president.psRelationship;

  // Check if level had consequences
  const hasConsequences = outcomeSnapshot?.consequences
    ? outcomeSnapshot.consequences.gameEnded ||
      outcomeSnapshot.consequences.cabinetMembersFired.length > 0
    : false;

  const handleViewDetails = () => {
    router.push(`./archive/${levelId}`);
  };

  const cardAccessibilityLabel = `Archived month ${level.month}, year ${
    level.year
  }. President approval: ${finalApproval}%. President relationship: ${finalPresRelationship}%. ${
    situations.length
  } situations. ${hasConsequences ? "Had consequences" : "No consequences"}.`;

  return (
    <Card
      className="border-l-4 border-l-muted"
      accessible={true}
      accessibilityLabel={cardAccessibilityLabel}
      accessibilityHint="Double tap to view detailed breakdown of this month"
    >
      <CardHeader className="flex-row items-center justify-between gap-2">
        <View
          className="flex-row items-center gap-2"
          accessible={true}
          accessibilityLabel={`Month ${level.month}, Year ${level.year}`}
        >
          <CalendarClock className="text-muted-foreground" />
          <CardTitle>
            Month: {level.month} Year: {level.year}
          </CardTitle>
        </View>
      </CardHeader>

      <CardContent className="gap-2">
        <View
          className="flex-row gap-2 justify-between"
          accessible={true}
          accessibilityLabel={`President approval rating: ${finalApproval}%. President relationship with you: ${finalPresRelationship}%`}
        >
          <View>
            <Text className="text-sm font-medium">President Approval:</Text>
            <Text
              className="text-xl text-center font-bold"
              accessibilityLabel={`${finalApproval} percent`}
            >
              {finalApproval}
            </Text>
          </View>
          <View>
            <Text className="text-sm font-medium">President Relationship:</Text>
            <Text
              className="text-xl text-center font-bold"
              accessibilityLabel={`${finalPresRelationship} percent`}
            >
              {finalPresRelationship}
            </Text>
          </View>
        </View>

        <View className="flex-row gap-2 justify-between">
          <View
            className="flex-1 items-center gap-2 p-3 bg-muted/30 rounded-md"
            accessible={true}
            accessibilityLabel={`${situations.length} situations occurred this month`}
          >
            <Text className="text-lg font-medium">Situations</Text>
            <Text className="text-2xl font-bold">{situations.length}</Text>
          </View>

          <View
            className="flex-1 items-center gap-2 p-3 bg-muted/30 rounded-md"
            accessible={true}
            accessibilityLabel={
              hasConsequences
                ? "This month had serious consequences"
                : "This month had no major consequences"
            }
          >
            <Text className="text-lg font-medium">Consequences</Text>
            <View className="items-center">
              {hasConsequences ? (
                <AlertCircle className="text-amber-500" size={28} />
              ) : (
                <CheckCircle2 className="text-green-500" size={28} />
              )}
              <Text className="text-sm font-bold text-muted-foreground">
                {hasConsequences ? "Had consequences" : "No consequences"}
              </Text>
            </View>
          </View>
        </View>
      </CardContent>

      <CardFooter className="bg-muted p-3 border-t border-border justify-end">
        <Button
          onPress={handleViewDetails}
          variant="ghost"
          className="flex-row gap-2"
          accessibilityLabel={`View detailed breakdown for month ${level.month}, year ${level.year}`}
          accessibilityHint="Shows press exchanges, situation outcomes, and media coverage for this month"
        >
          <Text className="text-sm font-bold">View Details</Text>
          <ArrowRight className="text-foreground" />
        </Button>
      </CardFooter>
    </Card>
  );
};

const enhance = withObservables(["levelId"], ({ levelId }) => ({
  level: observeLevel(levelId),
  situations: observeSituationsByLevelId(levelId),
}));

export default enhance(ArchivedLevelCard);
