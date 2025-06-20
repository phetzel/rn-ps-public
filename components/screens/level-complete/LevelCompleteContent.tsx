import { useState } from "react";
import { View } from "react-native";
import { withObservables } from "@nozbe/watermelondb/react";

import { observeLevel } from "~/lib/db/helpers/observations";
import type { Level } from "~/lib/db/models";
import { useLevelNavigation } from "~/lib/hooks/useLevelNavigation";
// Components
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { Button } from "~/components/ui/button";
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
import LevelConsequences from "~/components/shared/level-consequences/LevelConsequences";
// Icons
import { Award, Briefcase, Newspaper, Users, Shield } from "~/lib/icons";
// Types
import { LevelStatus } from "~/types";

interface LevelCompleteContentProps {
  gameId: string;
  levelId: string;
  level: Level;
}

const LevelCompleteContent = ({
  gameId,
  levelId,
  level,
}: LevelCompleteContentProps) => {
  const [currentTab, setCurrentTab] = useState<string>("consequences");

  const {
    progressAndNavigate,
    navigateToCurrentLevelScreen,
    navigateToCurrentTab,
  } = useLevelNavigation();

  const snapshot = level.parseOutcomeSnapshot;

  if (!snapshot) {
    return null;
  }

  const isLevelGameOver = snapshot.consequences?.gameEnded || false;

  const handleComplete = async () => {
    try {
      if (isLevelGameOver) {
        return await navigateToCurrentTab();
      } else {
        if (level.status == LevelStatus.Completed) {
          await progressAndNavigate();
          await navigateToCurrentTab();
        } else {
          await navigateToCurrentLevelScreen();
        }
      }
    } catch (error) {
      console.error("Failed to complete level:", error);
    }
  };

  return (
    <View className="gap-4">
      <Tabs
        value={currentTab}
        onValueChange={setCurrentTab}
        accessibilityLabel="Level complete sections"
      >
        <TabsList className="flex-row">
          <TabsTrigger
            value="consequences"
            className="flex-1"
            accessibilityLabel="Level consequences"
          >
            <Text>Consequences</Text>
          </TabsTrigger>
          <TabsTrigger
            value="administration"
            className="flex-1"
            accessibilityLabel="Administration updates"
          >
            <Text>Administration</Text>
          </TabsTrigger>
          <TabsTrigger
            value="external"
            className="flex-1"
            accessibilityLabel="External relations"
          >
            <Text>External</Text>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="consequences" className="mt-4">
          <LevelConsequences levelId={levelId} />
        </TabsContent>

        <TabsContent value="administration" className="mt-4">
          <View className="gap-4">
            <Accordion type="multiple" defaultValue={["president"]}>
              <AccordionItem value="president">
                <AccordionTrigger>
                  <View className="flex-row items-center gap-2">
                    <Award className="text-primary" size={16} />
                    <Text>President Update</Text>
                  </View>
                </AccordionTrigger>
                <AccordionContent>
                  <PresidentLevelState
                    gameId={gameId}
                    outcomeSnapshot={snapshot}
                  />
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="cabinet">
                <AccordionTrigger>
                  <View className="flex-row items-center gap-2">
                    <Briefcase className="text-primary" size={16} />
                    <Text>Cabinet Update</Text>
                  </View>
                </AccordionTrigger>
                <AccordionContent>
                  <CabinetLevelState
                    levelId={levelId}
                    outcomeSnapshot={snapshot}
                  />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </View>
        </TabsContent>

        <TabsContent value="external" className="mt-4">
          <View className="gap-4">
            <Accordion type="multiple">
              <AccordionItem value="media">
                <AccordionTrigger>
                  <View className="flex-row items-center gap-2">
                    <Newspaper className="text-primary" size={16} />
                    <Text>Media & Press</Text>
                  </View>
                </AccordionTrigger>
                <AccordionContent>
                  <MediaLevelState outcomeSnapshot={snapshot} />
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="subgroups">
                <AccordionTrigger>
                  <View className="flex-row items-center gap-2">
                    <Users className="text-primary" size={16} />
                    <Text>Political Groups</Text>
                  </View>
                </AccordionTrigger>
                <AccordionContent>
                  <SubgroupLevelState
                    gameId={gameId}
                    levelId={levelId}
                    outcomeSnapshot={snapshot}
                  />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </View>
        </TabsContent>
      </Tabs>

      {/* Completion Button - only show if game is not over */}
      {!isLevelGameOver && (
        <View className="pt-4 border-t border-border">
          <Button
            onPress={handleComplete}
            className="w-full"
            accessible={true}
            accessibilityRole="button"
            accessibilityLabel="Continue to next month"
            accessibilityHint="Proceed to the next month after reviewing level results"
          >
            <Text accessible={false}>Proceed to next month</Text>
          </Button>
        </View>
      )}
    </View>
  );
};

const enhance = withObservables(["gameId", "levelId"], ({ levelId }) => ({
  level: observeLevel(levelId),
}));

export default enhance(LevelCompleteContent);
