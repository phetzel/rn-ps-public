import React, { useState } from 'react';
import { View } from 'react-native';

import CabinetStateCard from '~/components/screens/tab-state/CabinetStateCard';
// eslint-disable-next-line import/no-named-as-default
import MediaStateCard from '~/components/screens/tab-state/MediaStateCard';
import PresidentStateCard from '~/components/screens/tab-state/PresidentStateCard';
import SubgroupState from '~/components/screens/tab-state/SubgroupState';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/ui/tabs';
import { Text } from '~/components/ui/text';
import { TabItem } from '~/types';

enum TabStateEnum {
  Admin = 'admin',
  Media = 'media',
  Opinion = 'opinion',
}

interface TabStateContentProps {
  gameId: string;
}

export function TabStateContent({ gameId }: TabStateContentProps) {
  const [currentTab, setCurrentTab] = useState<string>(TabStateEnum.Admin);

  const tabs: TabItem[] = [
    {
      value: TabStateEnum.Admin,
      label: 'Admin',
      content: (
        <View className="gap-4">
          <PresidentStateCard gameId={gameId} />
          <CabinetStateCard gameId={gameId} />
        </View>
      ),
    },
    {
      value: TabStateEnum.Media,
      label: 'Media',
      content: <MediaStateCard gameId={gameId} />,
    },
    {
      value: TabStateEnum.Opinion,
      label: 'Opinion',
      content: <SubgroupState gameId={gameId} />,
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
