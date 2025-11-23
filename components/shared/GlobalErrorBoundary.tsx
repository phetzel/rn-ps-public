import { router, type ErrorBoundaryProps, type Href } from 'expo-router';
import * as React from 'react';
import { View } from 'react-native';

import { Button } from '~/components/ui/button';
import { Text } from '~/components/ui/text';
import { reportError } from '~/lib/infra/errorReporter';

const HOME_ROUTE = '/' satisfies Href;

export function GlobalErrorBoundary({ error, retry }: ErrorBoundaryProps) {
  React.useEffect(() => {
    reportError(error, { level: 'error', tags: { boundary: 'global' } });
  }, [error]);

  const handleGoHome = React.useCallback(() => {
    router.replace(HOME_ROUTE);
  }, []);

  return (
    <View className="flex-1 items-center justify-center p-6">
      <Text className="text-lg font-semibold mb-2">Something went wrong</Text>
      <Text className="mb-4 opacity-70">{error?.message ?? 'Unexpected error'}</Text>
      <View className="flex-row gap-3">
        <Button onPress={retry}>
          <Text>Try again</Text>
        </Button>
        <Button variant="secondary" onPress={handleGoHome}>
          <Text>Go Home</Text>
        </Button>
      </View>
    </View>
  );
}
