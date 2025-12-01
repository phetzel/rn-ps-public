import React, { useState } from 'react';

import LevelConsequences from '~/components/shared/level-consequences/LevelConsequences';
import LevelOverviewEvents from '~/components/shared/level-overview/LevelOverviewEvents';
import LevelOverviewPress from '~/components/shared/level-overview/LevelOverviewPress';
import LevelOverviewState from '~/components/shared/level-overview/LevelOverviewState';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/ui/tabs';
import { Text } from '~/components/ui/text';

interface LevelOverviewContentProps {
  levelId: string;
  children?: React.ReactNode; // For additional content like completion buttons
}

export default function LevelOverviewContent({ levelId }: LevelOverviewContentProps) {
  const [currentTab, setCurrentTab] = useState<string>('results');

  return (
    <Tabs
      value={currentTab}
      onValueChange={setCurrentTab}
      accessibilityLabel="Level overview sections"
    >
      <TabsList className="flex-row">
        <TabsTrigger value="results" className="flex-1" accessibilityLabel="Level results">
          <Text>Results</Text>
        </TabsTrigger>

        <TabsTrigger value="changes" className="flex-1" accessibilityLabel="Monthly state changes">
          <Text>Changes</Text>
        </TabsTrigger>

        <TabsTrigger value="press" className="flex-1" accessibilityLabel="Level press">
          <Text>Press</Text>
        </TabsTrigger>

        <TabsTrigger value="events" className="flex-1" accessibilityLabel="Level events">
          <Text>Events</Text>
        </TabsTrigger>
      </TabsList>

      <TabsContent value="results" className="mt-4" key={`results-${currentTab}`}>
        <LevelConsequences levelId={levelId} />
      </TabsContent>

      <TabsContent value="changes" className="mt-4" key={`changes-${currentTab}`}>
        <LevelOverviewState levelId={levelId} />
      </TabsContent>

      <TabsContent value="press" className="mt-4" key={`press-${currentTab}`}>
        <LevelOverviewPress levelId={levelId} />
      </TabsContent>

      <TabsContent value="events" className="mt-4" key={`events-${currentTab}`}>
        <LevelOverviewEvents levelId={levelId} />
      </TabsContent>
    </Tabs>
  );
}
