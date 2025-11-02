import * as React from "react";
import { View } from "react-native";

import { useConsentStore } from "~/lib/stores/consentStore";
import { useDisclaimerDialogStore } from "~/lib/stores/disclaimerDialogStore";
// Icons
import { Info, Settings } from "~/lib/icons";
// Components
import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/text";

export function HomePrivacySettings() {
  const { showPrivacyOptions, formAvailable } = useConsentStore();
  const { open } = useDisclaimerDialogStore();

  return (
    <View className="flex-row justify-around gap-2">
      {formAvailable && (
        <Button
          variant="ghost"
          onPress={showPrivacyOptions}
          className="flex-row"
          accessibilityLabel="Privacy and consent settings"
          accessibilityHint="Update your advertising and data tracking preferences"
        >
          <Settings className="mr-1 text-foreground" size={18} />
          <Text>Privacy</Text>
        </Button>
      )}

      <Button
        variant="ghost"
        onPress={open}
        className="flex-row"
        accessibilityLabel="View legal disclaimer"
        accessibilityHint="Read the app's legal disclaimer"
      >
        <Info className="mr-1 text-foreground" size={18} />
        <Text>Legal</Text>
      </Button>
    </View>
  );
}
