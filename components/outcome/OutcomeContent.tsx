import { useState, useMemo } from "react";
import { View } from "react-native";
import { withObservables } from "@nozbe/watermelondb/react";

import { observeLevel } from "~/lib/db/helpers/observations";
import type { Level } from "~/lib/db/models";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "~/components/ui/tabs";
import { Text } from "~/components/ui/text";
import OutcomeExchanges from "~/components/outcome/OutcomeExchanges";
import RelationshipsAdministrationCard from "./RelationshipsAdminCard";
import RelationshipsCabinetCard from "./RelationshipsCabinetCard";

interface OutcomeContentProps {
  gameId: string;
  levelId: string;
  level: Level;
}

const OutcomeContent = ({ gameId, levelId, level }: OutcomeContentProps) => {
  const [currentTab, setCurrentTab] = useState<string>("exchanges");
  const outcomeSnapshot = level.parseOutcomeSnapshot;

  if (!outcomeSnapshot) {
    return null;
  }

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
        <TabsTrigger value="admin" className="flex-1">
          <Text>Admin</Text>
        </TabsTrigger>
      </TabsList>

      <TabsContent value="exchanges" className="mt-4">
        <OutcomeExchanges levelId={levelId} />
      </TabsContent>

      <TabsContent value="admin" className="gap-4">
        <RelationshipsAdministrationCard outcomeSnapshot={outcomeSnapshot} />
        <RelationshipsCabinetCard
          gameId={gameId}
          outcomeSnapshot={outcomeSnapshot}
        />
      </TabsContent>
    </Tabs>
  );
};

const enhance = withObservables(["gameId", "levelId"], ({ levelId }) => ({
  level: observeLevel(levelId),
}));

export default enhance(OutcomeContent);
