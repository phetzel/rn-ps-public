import React from 'react';

import { ThemedView } from '~/components/shared/layout/ThemedView';

interface CurrentTabScreenViewProps {
  currentLevelCard: React.ReactNode;
  mainContent: React.ReactNode;
}

export function CurrentTabScreenView({ currentLevelCard, mainContent }: CurrentTabScreenViewProps) {
  return (
    <ThemedView className="p-4 gap-4">
      {currentLevelCard}
      {mainContent}
    </ThemedView>
  );
}
