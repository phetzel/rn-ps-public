// components/shared/outcomes/OutcomesContent.tsx
import { useEffect, useState } from "react";
import { View } from "react-native";

import { useLevelNavigation } from "~/lib/hooks/useLevelNavigation";
// Components
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/text";
// Types
import { LevelStatus } from "~/types";
import type { Level } from "~/lib/db/models";

interface TabConfig {
  value: string;
  label: string;
  accessibilityLabel: string;
  accessibilityHint: string;
  content: React.ReactNode;
}

interface OutcomesContentProps {
  level: Level;
  tabs: TabConfig[];
  defaultTab: string;
  accessibilityLabel: string;
  expectedLevelStatus: LevelStatus;
  adWatched: boolean;
  onAdComplete: () => Promise<void>;
}

export function OutcomesContent({
  level,
  tabs,
  defaultTab,
  accessibilityLabel,
  expectedLevelStatus,
  adWatched,
  onAdComplete,
}: OutcomesContentProps) {
  const [currentTab, setCurrentTab] = useState<string>(defaultTab);

  const { progressAndNavigate, navigateToCurrentLevelScreen } =
    useLevelNavigation();

  const handleComplete = async () => {
    try {
      if (level.status === expectedLevelStatus) {
        await progressAndNavigate();
      } else {
        await navigateToCurrentLevelScreen();
      }
    } catch (error) {
      console.error("Failed to complete outcomes:", error);
    }
  };

  // Find current tab index
  const currentTabIndex = tabs.findIndex((tab) => tab.value === currentTab);
  const isLastTab = currentTabIndex === tabs.length - 1;
  const nextTab = isLastTab ? null : tabs[currentTabIndex + 1];

  const getButtonText = () => {
    if (isLastTab) {
      return "Continue";
    }
    return `Continue to ${nextTab?.label}`;
  };

  const handleBottomButtonPress = async () => {
    if (isLastTab) {
      await handleComplete();
    } else if (nextTab) {
      setCurrentTab(nextTab.value);
    }
  };

  return (
    <View className="flex-1 gap-4" accessibilityLabel={accessibilityLabel}>
      <Tabs
        value={currentTab}
        onValueChange={setCurrentTab}
        accessibilityLabel="Results sections"
      >
        <TabsList className="flex-row w-full">
          {tabs.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className="flex-1"
              accessibilityLabel={tab.accessibilityLabel}
              accessibilityHint={tab.accessibilityHint}
            >
              <Text>{tab.label}</Text>
            </TabsTrigger>
          ))}
        </TabsList>

        <View className="flex-1">
          {tabs.map((tab) => (
            <TabsContent
              key={tab.value}
              value={tab.value}
              className="mt-4 flex-1"
            >
              {tab.content}
            </TabsContent>
          ))}
        </View>
      </Tabs>

      {/* Bottom Navigation Button */}
      <View className="pt-4">
        <Button
          onPress={handleBottomButtonPress}
          className="w-full gap-2 flex-row"
          accessible={true}
          accessibilityRole="button"
          accessibilityLabel={getButtonText()}
          accessibilityHint={
            isLastTab
              ? "Complete outcomes and proceed to next screen"
              : `Navigate to ${nextTab?.label} tab`
          }
        >
          <Text accessible={false}>{getButtonText()}</Text>
        </Button>
      </View>
    </View>
  );
}
