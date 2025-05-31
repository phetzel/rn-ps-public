import React from "react";
import { View } from "react-native";

import { Badge } from "~/components/ui/badge";
import { Text } from "~/components/ui/text";
import { MessageSquare } from "~/lib/icons/MessageSquare";

interface QuestionDisplayProps {
  question: string;
  isFollowUpQuestion?: boolean;
}

export function QuestionDisplay({
  question,
  isFollowUpQuestion = false,
}: QuestionDisplayProps) {
  return (
    <View
      accessible={true}
      accessibilityLabel={`${
        isFollowUpQuestion ? "Follow-up question" : "Question"
      }: ${question}`}
    >
      {isFollowUpQuestion && (
        <Badge
          className="my-2 self-center"
          accessibilityLabel="Follow-up question indicator"
        >
          <Text className="text-xs">Follow-up Question</Text>
        </Badge>
      )}

      <View className="flex-row items-center gap-2" accessible={false}>
        <View className="bg-primary/10 rounded-full p-2">
          <MessageSquare
            className="text-primary"
            accessibilityLabel="Question icon"
          />
        </View>
        <View className="flex-1">
          <Text className="text-base font-medium" accessible={false}>
            {question}
          </Text>
        </View>
      </View>
    </View>
  );
}
