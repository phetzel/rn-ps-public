import React from "react";
import { View } from "react-native";

import { Text } from "~/components/ui/text";
import { CheckCircle2 } from "~/lib/icons/CheckCircle2";
import { SkipForward } from "~/lib/icons/SkipForward";
import type { Question } from "~/types";

interface QuestionAnswerProps {
  answer: Question["answers"][0] | null;
  isSkipped: boolean;
}

export default function QuestionAnswer({
  answer,
  isSkipped,
}: QuestionAnswerProps) {
  if (isSkipped) {
    // Question was skipped
    return (
      <View className="flex-row items-center">
        <View className="bg-amber-100 rounded-full p-2 mr-3">
          <SkipForward className="text-amber-500" />
        </View>
        <View className="flex-1">
          <Text className="font-medium">Question Skipped</Text>
          <Text className="text-sm text-muted-foreground mt-1">
            You chose to skip this question during the press conference.
          </Text>
        </View>
      </View>
    );
  } else if (answer) {
    // Question was answered
    return (
      <View className="flex-row items-center">
        <View className="bg-green-100 rounded-full p-2 mr-3">
          <CheckCircle2 className="text-green-600" />
        </View>
        <View className="flex-1">
          <Text className="text-sm text-muted-foreground mb-1">
            Your Response
          </Text>
          <Text className="text-base">{answer.text}</Text>
        </View>
      </View>
    );
  }

  return null;
}
