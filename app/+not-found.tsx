import { Link, Stack } from 'expo-router';
import * as React from 'react';
import { View } from 'react-native';

import { Text } from '~/components/ui/text';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View>
        <Text accessibilityRole="header">This screen doesn{"'"}t exist.</Text>

        <Link
          href="/"
          accessibilityRole="link"
          accessibilityLabel="Return to home screen"
          accessibilityHint="Navigate back to the main menu"
        >
          <Text>Go to home screen!</Text>
        </Link>
      </View>
    </>
  );
}
