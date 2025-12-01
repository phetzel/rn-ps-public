import { View } from 'react-native';

import { Text } from '~/components/ui/text';

export function EmptyState({ message }: { message: string }) {
  return (
    <View
      className="flex-1 justify-center items-center"
      accessible={true}
      accessibilityRole="text"
      accessibilityLabel={`Empty state: ${message}`}
    >
      <Text className="text-xl text-muted-foreground" accessible={false}>
        {message}
      </Text>
    </View>
  );
}
