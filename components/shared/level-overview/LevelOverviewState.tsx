import React from "react";
import { View } from "react-native";
import { withObservables } from "@nozbe/watermelondb/react";

import { observeLevel } from "~/lib/db/helpers/observations";
import type { Level } from "~/lib/db/models";
import { Text } from "~/components/ui/text";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import PresidentLevelState from "~/components/shared/level-state/PresidentLevelState";
import CabinetLevelState from "~/components/shared/level-state/CabinetLevelState";
import MediaLevelState from "~/components/shared/level-state/MediaLevelState";
import SubgroupLevelState from "~/components/shared/level-state/SubgroupLevelState";
import { Award, Briefcase, Newspaper, Users } from "~/lib/icons";
import { EmptyState } from "~/components/shared/EmptyState";

interface LevelOverviewStateProps {
  levelId: string;
  level: Level | null;
}

const LevelOverviewState = ({ levelId, level }: LevelOverviewStateProps) => {
  if (!level) {
    return <EmptyState message="Level not found" />;
  }

  const outcomeSnapshot = level.parseOutcomeSnapshot;

  if (!outcomeSnapshot) {
    return (
      <View className="p-4">
        <Text className="text-muted-foreground text-center">
          Level outcome data not available
        </Text>
      </View>
    );
  }

  // Extract gameId from level
  const gameId = level.game_id;

  return (
    <View className="gap-4">
      <Accordion
        type="multiple"
        defaultValue={["president"]}
        key={`state-accordion-${levelId}`}
      >
        <AccordionItem value="president">
          <AccordionTrigger>
            <View className="flex-row items-center gap-2">
              <Award className="text-primary" size={16} />
              <Text>President State</Text>
            </View>
          </AccordionTrigger>
          <AccordionContent>
            <PresidentLevelState
              gameId={gameId}
              outcomeSnapshot={outcomeSnapshot}
            />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="cabinet">
          <AccordionTrigger>
            <View className="flex-row items-center gap-2">
              <Briefcase className="text-primary" size={16} />
              <Text>Cabinet State</Text>
            </View>
          </AccordionTrigger>
          <AccordionContent>
            <CabinetLevelState
              levelId={levelId}
              outcomeSnapshot={outcomeSnapshot}
            />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="media">
          <AccordionTrigger>
            <View className="flex-row items-center gap-2">
              <Newspaper className="text-primary" size={16} />
              <Text>Media State</Text>
            </View>
          </AccordionTrigger>
          <AccordionContent>
            <MediaLevelState outcomeSnapshot={outcomeSnapshot} />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="subgroups">
          <AccordionTrigger>
            <View className="flex-row items-center gap-2">
              <Users className="text-primary" size={16} />
              <Text>Political Groups State</Text>
            </View>
          </AccordionTrigger>
          <AccordionContent>
            <SubgroupLevelState
              gameId={gameId}
              levelId={levelId}
              outcomeSnapshot={outcomeSnapshot}
            />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </View>
  );
};

const enhance = withObservables(["levelId"], ({ levelId }) => ({
  level: observeLevel(levelId),
}));

export default enhance(LevelOverviewState);
