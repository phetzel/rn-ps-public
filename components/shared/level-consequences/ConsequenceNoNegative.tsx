import { View } from "react-native";

import { Text } from "~/components/ui/text";
import { CheckCircle2 } from "~/lib/icons";

export default function ConsequenceNoNegative() {
  return (
    <View
      className="p-4 rounded-lg bg-green-50 border border-green-200"
      accessible={true}
      accessibilityLabel="No negative consequences this month - performance maintained sufficient approval ratings"
    >
      <View className="flex-row items-center mb-2" accessible={false}>
        <CheckCircle2 className="text-green-500 mr-2" size={16} />
        <Text className="text-base font-semibold">
          No Negative Consequences
        </Text>
      </View>
      <Text className="text-sm text-muted-foreground">
        Your performance maintained sufficient approval ratings. No significant
        consequences occurred this month.
      </Text>
    </View>
  );
}
