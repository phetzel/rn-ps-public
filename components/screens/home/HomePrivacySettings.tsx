import { useRouter } from 'expo-router';
import * as React from 'react';
import { View } from 'react-native';

import { Button } from '~/components/ui/button';
import { Text } from '~/components/ui/text';
import { Info, Settings } from '~/lib/icons';
import { useConsentStore } from '~/lib/stores/consentStore';
import { useDisclaimerDialogStore } from '~/lib/stores/disclaimerDialogStore';
// Icons
// Components

export function HomePrivacySettings() {
  const { showPrivacyOptions, formAvailable } = useConsentStore();
  const { open } = useDisclaimerDialogStore();
  const router = useRouter();

  return (
    <View className="flex-row justify-around gap-2">
      <Button
        variant="outline"
        onPress={() => router.push('/privacy')}
        className="flex-row"
        accessibilityLabel="Privacy controls"
        accessibilityHint="Open privacy controls to manage analytics, diagnostics and data"
      >
        <Settings className="mr-1 text-foreground" size={18} />
        <Text>Privacy</Text>
      </Button>

      {formAvailable && (
        <Button
          variant="ghost"
          onPress={showPrivacyOptions}
          className="flex-row"
          accessibilityLabel="Privacy and consent settings"
          accessibilityHint="Update your advertising and data tracking preferences"
        >
          <Settings className="mr-1 text-foreground" size={18} />
          <Text>Consent</Text>
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
