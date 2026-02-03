import { View } from 'react-native';

import { AlertCircle } from '~/components/icons/AlertCircle';
import { Text } from '~/components/ui/text';

export function ErrorDisplay({ message }: { message: string }) {
  return (
    <View
      className="flex-row items-center bg-destructive/10 p-3 rounded-md border border-destructive"
      accessible={true}
      accessibilityRole="alert"
      accessibilityLiveRegion="polite"
      accessibilityLabel={`Error: ${message}`}
    >
      <AlertCircle className="text-destructive mr-2" size={20} />
      <Text className="text-destructive flex-shrink">{message}</Text>
    </View>
  );
}
