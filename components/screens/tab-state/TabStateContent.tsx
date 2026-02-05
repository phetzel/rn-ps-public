import React, { useState } from 'react';
import { View } from 'react-native';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/ui/tabs';
import { Text } from '~/components/ui/text';

import type { TabItem } from '~/types';

enum TabStateEnum {
  Admin = 'admin',
  Media = 'media',
  Opinion = 'opinion',
}

interface TabStateContentProps {
  gameId: string;
  renderAdminCards: (gameId: string) => React.ReactNode;
  renderMediaCard: (gameId: string) => React.ReactNode;
  renderOpinionCard: (gameId: string) => React.ReactNode;
}

export function TabStateContent({
  gameId,
  renderAdminCards,
  renderMediaCard,
  renderOpinionCard,
}: TabStateContentProps) {
  const [currentTab, setCurrentTab] = useState<string>(TabStateEnum.Admin);

  const tabs: TabItem[] = [
    {
      value: TabStateEnum.Admin,
      label: 'Admin',
      content: <View className="gap-4">{renderAdminCards(gameId)}</View>,
    },
    {
      value: TabStateEnum.Media,
      label: 'Media',
      content: renderMediaCard(gameId),
    },
    {
      value: TabStateEnum.Opinion,
      label: 'Opinion',
      content: renderOpinionCard(gameId),
    },
  ];

  const getTabAccessibilityLabel = (tabValue: string): string => {
    switch (tabValue) {
      case TabStateEnum.Admin:
        return 'Administration tab: President and cabinet relationships';
      case TabStateEnum.Media:
        return 'Media tab: Publications and journalist relationships';
      case TabStateEnum.Opinion:
        return 'Public opinion tab: Approval ratings by demographic groups';
      default:
        return `${tabValue} tab`;
    }
  };

  const getTabAccessibilityHint = (tabValue: string): string => {
    switch (tabValue) {
      case TabStateEnum.Admin:
        return 'View your relationship with the President and cabinet members';
      case TabStateEnum.Media:
        return 'See how media outlets and journalists view you';
      case TabStateEnum.Opinion:
        return 'Check approval ratings across different demographic groups';
      default:
        return `View ${tabValue} information`;
    }
  };
  return (
    <Tabs
      value={currentTab}
      onValueChange={setCurrentTab}
      className="w-full max-w-[400px] mx-auto flex-col gap-2"
      accessibilityLabel="Game state information sections"
    >
      <TabsList className="flex-row w-full">
        {tabs.map((tab) => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
            className="flex-1"
            accessibilityLabel={getTabAccessibilityLabel(tab.value)}
            accessibilityHint={getTabAccessibilityHint(tab.value)}
          >
            <Text>{tab.label}</Text>
          </TabsTrigger>
        ))}
      </TabsList>

      {tabs.map((tab) => (
        <TabsContent key={tab.value} value={tab.value} className="mt-4 gap-4">
          {tab.content}
        </TabsContent>
      ))}
    </Tabs>
  );
}
