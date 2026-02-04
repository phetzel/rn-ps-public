import { withObservables } from '@nozbe/watermelondb/react';

import ArchivedLevelCard from '~/components/connected/tab-archive/ArchivedLevelCard';
import { ArchiveIndexScreenView } from '~/components/screens/tab-archive/ArchiveIndexScreenView';
import { observeCompletedLevels } from '~/lib/db/helpers';
import { useGameManagerStore } from '~/lib/stores/gameManagerStore';

import type { Level } from '~/lib/db/models';

interface ArchiveIndexScreenProps {
  completedLevels: Level[];
}

function ArchiveIndexScreen({ completedLevels }: ArchiveIndexScreenProps) {
  const currentGameId = useGameManagerStore((state) => state.currentGameId);

  const renderLevelCard = ({ item }: { item: Level }) => <ArchivedLevelCard levelId={item.id} />;

  return (
    <ArchiveIndexScreenView
      completedLevels={completedLevels}
      hasGame={!!currentGameId}
      renderLevelCard={renderLevelCard}
    />
  );
}

export default withObservables([], () => {
  const currentGameId = useGameManagerStore.getState().currentGameId;
  return {
    completedLevels: currentGameId ? observeCompletedLevels(currentGameId) : [],
  };
})(ArchiveIndexScreen);
