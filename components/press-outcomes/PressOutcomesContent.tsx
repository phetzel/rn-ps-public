import { useState } from "react";
import { withObservables } from "@nozbe/watermelondb/react";

import { observeLevel } from "~/lib/db/helpers/observations";
import type { Level } from "~/lib/db/models";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "~/components/ui/tabs";
import { Text } from "~/components/ui/text";

import ExchangesOutcomes from "~/components/press-outcomes/ExchangesOutcomes";
import PressResults from "~/components/press-outcomes/PressResults";

interface PressOutcomesContentProps {
  gameId: string;
  levelId: string;
  level: Level;
}

const PressOutcomesContent = ({
  gameId,
  levelId,
  level,
}: PressOutcomesContentProps) => {
  const [currentTab, setCurrentTab] = useState<string>("exchanges");

  return (
    <Tabs
      value={currentTab}
      onValueChange={setCurrentTab}
      className="w-full max-w-[600px] mx-auto flex-col gap-4"
    >
      <TabsList className="flex-row w-full">
        <TabsTrigger value="exchanges" className="flex-1">
          <Text>Exchanges</Text>
        </TabsTrigger>
        <TabsTrigger value="results" className="flex-1">
          <Text>Results</Text>
        </TabsTrigger>
      </TabsList>

      <TabsContent value="exchanges" className="mt-4">
        <ExchangesOutcomes levelId={levelId} />
      </TabsContent>

      <TabsContent value="results" className="gap-4">
        <PressResults gameId={gameId} level={level} />
      </TabsContent>
    </Tabs>
  );
};

const enhance = withObservables(["gameId", "levelId"], ({ levelId }) => ({
  level: observeLevel(levelId),
}));

export default enhance(PressOutcomesContent);
