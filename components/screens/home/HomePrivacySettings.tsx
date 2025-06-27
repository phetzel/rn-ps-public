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
      variant="ghost"
      onPress={showPrivacyOptions}
      className="flex-row justify-center"
      accessibilityLabel="Privacy and consent settings"
      accessibilityHint="Update your advertising and data tracking preferences"
    >
      <Settings className="mr-1 text-foreground" size={18} />
      <Text>Privacy Settings</Text>
    </Button>
  );
}
