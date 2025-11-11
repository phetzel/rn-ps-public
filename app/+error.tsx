import { router } from 'expo-router';
import * as React from 'react';
import { View } from 'react-native';

import { Button } from '~/components/ui/button';
import { Text } from '~/components/ui/text';
import { reportError } from '~/lib/infra/errorReporter';

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  React.useEffect(() => {
    reportError(error, { level: 'error', tags: { boundary: 'global' } });
  }, [error]);

  return (
    <View className="flex-1 items-center justify-center p-6">
      <Text className="text-lg font-semibold mb-2">Something went wrong</Text>
      <Text className="mb-4 opacity-70">{error?.message ?? 'Unexpected error'}</Text>
      <View className="flex-row gap-3">
        <Button onPress={reset}>
          <Text>Try again</Text>
        </Button>
        <Button variant="secondary" onPress={() => router.replace('/')}>
          <Text>Go Home</Text>
        </Button>
      </View>
    </View>
  );
}
