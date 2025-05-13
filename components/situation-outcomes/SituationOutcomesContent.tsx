import { useState } from "react";
import { withObservables } from "@nozbe/watermelondb/react";

import { observeLevel } from "~/lib/db/helpers/observations";
import type { Level } from "~/lib/db/models";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "~/components/ui/tabs";
import { Text } from "~/components/ui/text";

import SituationOutcomesList from "~/components/situation-outcomes/SituationOutcomesList";
import SituationResults from "~/components/situation-outcomes/SituationResults";

interface SituationOutcomesContentProps {
  gameId: string;
  levelId: string;
  level: Level;
}

const SituationOutcomesContent = ({
  gameId,
  levelId,
  level,
}: SituationOutcomesContentProps) => {
  const [currentTab, setCurrentTab] = useState<string>("situations");

  return (
    <Tabs
      value={currentTab}
      onValueChange={setCurrentTab}
      className="w-full max-w-[600px] mx-auto flex-col gap-4"
    >
      <TabsList className="flex-row w-full">
        <TabsTrigger value="situations" className="flex-1">
          <Text>Situations</Text>
        </TabsTrigger>
        <TabsTrigger value="results" className="flex-1">
          <Text>Results</Text>
        </TabsTrigger>
      </TabsList>

      <TabsContent value="situations" className="gap-4">
        <SituationOutcomesList gameId={gameId} level={level} />
      </TabsContent>

      <TabsContent value="results" className="gap-4">
        <SituationResults gameId={gameId} level={level} />
      </TabsContent>
    </Tabs>
  );
};

const enhance = withObservables(["gameId", "levelId"], ({ levelId }) => ({
  level: observeLevel(levelId),
}));

export default enhance(SituationOutcomesContent);
