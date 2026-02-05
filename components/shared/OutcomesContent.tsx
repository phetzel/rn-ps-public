// components/shared/outcomes/OutcomesContent.tsx
import { useState } from 'react';
import { View } from 'react-native';

// Components
import { Button } from '~/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/ui/tabs';
import { Text } from '~/components/ui/text';

// Types
import type { LevelStatus } from '~/types';

interface TabConfig {
  value: string;
  label: string;
  accessibilityLabel: string;
  accessibilityHint: string;
  content: React.ReactNode;
}

interface OutcomesContentProps {
  tabs: TabConfig[];
  defaultTab: string;
  accessibilityLabel: string;
  expectedLevelStatus: LevelStatus;
  adWatched: boolean;
  onAdComplete: () => Promise<void>;
  onComplete: () => Promise<void>;
}

export function OutcomesContent({
  tabs,
  defaultTab,
  accessibilityLabel,
  expectedLevelStatus: _expectedLevelStatus,
  adWatched: _adWatched,
  onAdComplete: _onAdComplete,
  onComplete,
}: OutcomesContentProps) {
  const [currentTab, setCurrentTab] = useState<string>(defaultTab);

  // Find current tab index
  const currentTabIndex = tabs.findIndex((tab) => tab.value === currentTab);
  const isLastTab = currentTabIndex === tabs.length - 1;
  const nextTab = isLastTab ? null : tabs[currentTabIndex + 1];

  const getButtonText = () => {
    if (isLastTab) {
      return 'Complete';
    }
    return `Continue to ${nextTab?.label}`;
  };

  const handleBottomButtonPress = async () => {
    if (isLastTab) {
      await onComplete();
    } else if (nextTab) {
      setCurrentTab(nextTab.value);
    }
  };

  return (
    <View className="flex-1 gap-4" accessibilityLabel={accessibilityLabel}>
      <Tabs value={currentTab} onValueChange={setCurrentTab} accessibilityLabel="Results sections">
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
            <TabsContent key={tab.value} value={tab.value} className="mt-4 flex-1">
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
              ? 'Complete outcomes and proceed to next screen'
              : `Navigate to ${nextTab?.label} tab`
          }
        >
          <Text accessible={false}>{getButtonText()}</Text>
        </Button>
      </View>
    </View>
  );
}
