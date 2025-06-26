import * as React from "react";

import { useConsentStore } from "~/lib/stores/consentStore";
// Icons
import { Settings } from "~/lib/icons";
// Components
import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/text";

export function HomePrivacySettings() {
  const { showPrivacyOptions, formAvailable } = useConsentStore();

  if (!formAvailable) {
    return null;
  }

  return (
    <Button
      size="lg"
      variant="ghost"
      onPress={showPrivacyOptions}
      className="flex-row"
      accessibilityLabel="Privacy and consent settings"
      accessibilityHint="Update your advertising and data tracking preferences"
    >
      <Settings className="mr-2 text-foreground" size={20} />
      <Text>Privacy Settings</Text>
    </Button>
  );
}
