import React, { useState } from "react";
import { View } from "react-native";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { Text } from "~/components/ui/text";
import PresidentStateCard from "~/components/screens/tab-state/PresidentStateCard";
import CabinetStateCard from "~/components/screens/tab-state/CabinetStateCard";
import SubgroupState from "~/components/screens/tab-state/SubgroupState";
import MediaStateCard from "~/components/screens/tab-state/MediaStateCard";
import { TabItem } from "~/types";

enum TabStateEnum {
  Admin = "admin",
  Media = "media",
  Opinion = "opinion",
}

interface TabStateContentProps {
  gameId: string;
}

export function TabStateContent({ gameId }: TabStateContentProps) {
  const [currentTab, setCurrentTab] = useState<string>(TabStateEnum.Admin);

  const tabs: TabItem[] = [
    {
      value: TabStateEnum.Admin,
      label: "Admin",
      content: (
        <View className="gap-4">
          <PresidentStateCard gameId={gameId} />
          <CabinetStateCard gameId={gameId} />
        </View>
      ),
    },
    {
      value: TabStateEnum.Media,
      label: "Media",
      content: <MediaStateCard gameId={gameId} />,
    },
    {
      value: TabStateEnum.Opinion,
      label: "Opinion",
      content: <SubgroupState gameId={gameId} />,
    },
  ];

  return (
    <Tabs
      value={currentTab}
      onValueChange={setCurrentTab}
      className="w-full max-w-[400px] mx-auto flex-col gap-2"
    >
      <TabsList className="flex-row w-full">
        {tabs.map((tab) => (
          <TabsTrigger key={tab.value} value={tab.value} className="flex-1">
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
