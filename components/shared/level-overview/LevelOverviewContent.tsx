import React, { useState } from "react";

import { Text } from "~/components/ui/text";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import LevelConsequences from "~/components/shared/level-consequences/LevelConsequences";
import LevelOverviewEvents from "~/components/shared/level-overview/LevelOverviewEvents";
import LevelOverviewState from "~/components/shared/level-overview/LevelOverviewState";

interface LevelOverviewContentProps {
  levelId: string;
  children?: React.ReactNode; // For additional content like completion buttons
}

export default function LevelOverviewContent({
  levelId,
}: LevelOverviewContentProps) {
  const [currentTab, setCurrentTab] = useState<string>("results");

  return (
    <Tabs
      value={currentTab}
      onValueChange={setCurrentTab}
      accessibilityLabel="Level overview sections"
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
          value="changes"
          className="flex-1"
          accessibilityLabel="Monthly state changes"
        >
          <Text>Changes</Text>
        </TabsTrigger>

        <TabsTrigger
          value="events"
          className="flex-1"
          accessibilityLabel="Level events"
        >
          <Text>Events</Text>
        </TabsTrigger>
      </TabsList>

      <TabsContent value="results" className="mt-4">
        <LevelConsequences levelId={levelId} />
      </TabsContent>

      <TabsContent value="changes" className="mt-4">
        <LevelOverviewState levelId={levelId} />
      </TabsContent>

      <TabsContent value="events" className="mt-4">
        <LevelOverviewEvents levelId={levelId} />
      </TabsContent>
    </Tabs>
  );
}
