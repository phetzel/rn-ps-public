import React from "react";
import { Stack, useRouter } from "expo-router";

import { useLevelNavigation } from "~/lib/hooks/useLevelNavigation";
import { HeaderBackIcon } from "~/components/shared/layout/HeaderBackIcon";

export default function ArchiveLayout() {
  const router = useRouter();
  const { navigateToCurrentTab } = useLevelNavigation();

  const handleGoBackToArchive = () => {
    // For detail screen, go back to archive index
    router.back();
  };

  const handleGoToCurrent = () => {
    // For index screen, go back to current tab
    navigateToCurrentTab();
  };

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Archive",
          headerLeft: () => <HeaderBackIcon onPress={handleGoToCurrent} />,
        }}
      />
      <Stack.Screen
        name="[levelId]"
        options={{
          title: "Level Details",
          headerLeft: () => <HeaderBackIcon onPress={handleGoBackToArchive} />,
        }}
      />
    </Stack>
  );
}
