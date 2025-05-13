import { View } from "react-native";

import { Text } from "~/components/ui/text";

export function EmptyState({ message }: { message: string }) {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-xl text-muted-foreground">{message}</Text>
    </View>
  );
}
