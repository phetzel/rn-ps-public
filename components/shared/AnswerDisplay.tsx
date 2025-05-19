import React from "react";
import { View } from "react-native";

import { Text } from "~/components/ui/text";
import { CheckCircle2 } from "~/lib/icons/CheckCircle2";

interface AnswerDisplayProps {
  answer: string;
}

export function AnswerDisplay({ answer }: AnswerDisplayProps) {
  return (
    <View className="flex-row items-center">
      <View className="bg-green-100 rounded-full p-2 mr-3">
        <CheckCircle2 className="text-green-600" />
      </View>
      <View className="flex-1">
        <Text className="text-sm text-muted-foreground mb-1">
          Your Response
        </Text>
        <Text className="text-base">{answer}</Text>
      </View>
    </View>
  );
}
