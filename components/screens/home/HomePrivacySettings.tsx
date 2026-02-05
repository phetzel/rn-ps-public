import { useRouter } from 'expo-router';
import * as React from 'react';
import { View } from 'react-native';

import { Settings } from '~/components/icons';
import { Button } from '~/components/ui/button';
import { Text } from '~/components/ui/text';

export function HomePrivacySettings() {
  const router = useRouter();

  const handleNavigate = React.useCallback(() => {
    router.push('/privacy');
  }, [router]);

  return (
    <View className="flex-row justify-center">
      <Button
        variant="outline"
        onPress={handleNavigate}
        className="flex-row"
        accessibilityLabel="Privacy controls"
        accessibilityHint="Open privacy controls to manage analytics, diagnostics and data"
      >
        <Settings className="mr-1 text-foreground" size={18} />
        <Text>Privacy</Text>
      </Button>
    </View>
  );
}
