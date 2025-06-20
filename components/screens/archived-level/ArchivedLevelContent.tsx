import React, { useState } from "react";
import { View } from "react-native";

import { Text } from "~/components/ui/text";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import LevelConsequences from "~/components/shared/level-consequences/LevelConsequences";
import ArchivedLevelEvents from "~/components/screens/archived-level/ArchivedLevelEvents";
import ArchivedLevelState from "~/components/screens/archived-level/ArchivedLevelState";

interface ArchivedLevelContentProps {
  levelId: string;
}

export default function ArchivedLevelContent({
  levelId,
}: ArchivedLevelContentProps) {
  const [currentTab, setCurrentTab] = useState<string>("results");

  return (
    <View className="gap-4">
      <Tabs
        value={currentTab}
        onValueChange={setCurrentTab}
        accessibilityLabel="Archive sections"
      >
        <TabsList className="flex-row">
          <TabsTrigger
            value="results"
            className="flex-1"
            accessibilityLabel="Level results"
          >
            <Text>Results</Text>
          </TabsTrigger>
          <TabsTrigger
            value="events"
            className="flex-1"
            accessibilityLabel="Level events"
          >
            <Text>Events</Text>
          </TabsTrigger>
          <TabsTrigger
            value="changes"
            className="flex-1"
            accessibilityLabel="Monthly state changes"
          >
            <Text>Changes</Text>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="results" className="mt-4">
          <LevelConsequences levelId={levelId} />
        </TabsContent>

        <TabsContent value="events" className="mt-4">
          <ArchivedLevelEvents levelId={levelId} />
        </TabsContent>

        <TabsContent value="state" className="mt-4">
          <ArchivedLevelState levelId={levelId} />
        </TabsContent>
      </Tabs>
    </View>
  );
}
