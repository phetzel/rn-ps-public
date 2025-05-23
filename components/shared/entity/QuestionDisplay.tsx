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
    <View className="flex-row items-center gap-2">
      <View className="bg-primary/10 rounded-full p-2">
        <MessageSquare className="text-primary" />
      </View>
      <View className="flex-1">
        {isFollowUpQuestion && (
          <Badge className="mt-1 self-start" variant="outline">
            <Text className="text-xs">Follow-up Question</Text>
          </Badge>
        )}
        <Text className="text-base font-medium">{question}</Text>
      </View>
    </View>
  );
}
