import { withObservables } from '@nozbe/watermelondb/react';
import React from 'react';
import { View } from 'react-native';

import { ArrowRight } from '~/components/icons/ArrowRight';
import { CalendarClock } from '~/components/icons/CalendarClock';
import { Button } from '~/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card';
import { Text } from '~/components/ui/text';
import { observeLevel } from '~/lib/db/helpers';
import { Level } from '~/lib/db/models';
import { useLevelNavigation } from '~/lib/hooks/useLevelNavigation';
import { formatDate } from '~/lib/utils';
// Components
import { LevelStatus } from '~/types';

import { LevelStatusBadge } from './LevelStatusBadge';
// Types

interface CurrentLevelCardProps {
  level: Level | undefined;
}

const CurrentLevelCard = ({ level }: CurrentLevelCardProps) => {
  const { navigateToCurrentLevelScreen } = useLevelNavigation();

  if (!level) return null;

  const renderStatusText = (status: LevelStatus) => {
    switch (status) {
      case LevelStatus.Briefing:
        return 'Prepare by reviewing ongoing situations and planning your communication strategy.';
      case LevelStatus.PressConference:
        return 'Face the press and carefully manage your responses to their questions.';
      case LevelStatus.PressResults:
        return 'Review the reactions from the press conference.';
      case LevelStatus.SituationOutcomes:
        return 'Watch how the situations unfolded.';
      case LevelStatus.Completed:
        return "Review this month's results.";
      default:
        return 'Unknown status';
    }
  };

  const getActionLabel = (status: LevelStatus) => {
    switch (status) {
      case LevelStatus.Briefing:
        return 'Start briefing to review situations and prepare for press conference';
      case LevelStatus.PressConference:
        return 'Start press conference to answer journalist questions';
      case LevelStatus.PressResults:
        return 'Review press conference results and relationship changes';
      case LevelStatus.SituationOutcomes:
        return 'Review situation outcomes and their consequences';
      case LevelStatus.Completed:
        return 'Proceed';
      default:
        return 'Continue current level';
    }
  };

  const handleNavigate = async () => {
    await navigateToCurrentLevelScreen(true);
  };

  return (
    <Card
      className="border-l-4 border-l-primary"
      accessible={true}
      accessibilityLabel={`Current level: ${formatDate(
        level.month,
        level.year,
      )}. Status: ${level.status}`}
    >
      <CardHeader className="flex-row items-center justify-between gap-2">
        <View className="gap-2">
          <View
            className="flex-row items-center gap-2"
            accessible={true}
            accessibilityLabel={formatDate(level.month, level.year)}
          >
            <CalendarClock className="h-5 w-5 text-primary" />
            <CardTitle className="text-xl font-bold">
              {formatDate(level.month, level.year)}
            </CardTitle>
          </View>
          <LevelStatusBadge status={level.status} />
        </View>

        <Button
          onPress={handleNavigate}
          className="flex-row gap-2"
          accessible={true}
          accessibilityLabel={getActionLabel(level.status)}
          accessibilityHint="Navigate to the current step in this month's activities"
          testID="current-level-action-button"
        >
          <Text>
            {level.status === LevelStatus.Briefing
              ? 'Start'
              : level.status === LevelStatus.PressConference
                ? 'Start'
                : level.status === LevelStatus.PressResults ||
                    level.status === LevelStatus.SituationOutcomes
                  ? 'Review'
                  : 'Next'}
          </Text>
          <ArrowRight className="h-4 w-4 text-background" />
        </Button>
      </CardHeader>

      <CardContent className="flex-row items-center justify-between gap-2">
        <View className="flex-1 justify-center gap-2">
          <Text
            className="text-sm text-muted-foreground"
            accessibilityLabel={`Current status: ${renderStatusText(level.status)}`}
          >
            {renderStatusText(level.status)}
          </Text>
        </View>
      </CardContent>
    </Card>
  );
};

const enhance = withObservables(['levelId'], ({ levelId }) => ({
  level: observeLevel(levelId),
}));

export default enhance(CurrentLevelCard);
