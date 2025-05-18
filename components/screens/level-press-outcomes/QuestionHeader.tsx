// components/press-outcomes/QuestionHeader.tsx
import React from "react";
import { View } from "react-native";

import { Text } from "~/components/ui/text";
import { Badge } from "~/components/ui/badge";
import { AlertCircle } from "~/lib/icons/AlertCircle";
import { MessageSquare } from "~/lib/icons/MessageSquare";
import type { Question } from "~/types";

interface QuestionHeaderProps {
  question: Question;
  isFirstQuestion: boolean;
  isAsked: boolean;
}

export default function QuestionHeader({
  question,
  isFirstQuestion,
  isAsked,
}: QuestionHeaderProps) {
  if (!isAsked && isFirstQuestion) {
    // Journalist was completely ignored
    return (
      <View className="flex-row items-center gap-2">
        <View className="bg-red-100 rounded-full p-2">
          <AlertCircle className="text-red-600" />
        </View>
        <View className="flex-1">
          <Text className="text-base font-medium">Journalist Ignored</Text>
          <Text className="text-sm text-muted-foreground">
            You did not call on this journalist during the press conference.
          </Text>
        </View>
      </View>
    );
  } else if (!isAsked) {
    // Unanswered follow-up
    return (
      <View className="flex-row items-center gap-2">
        <View className="bg-red-100 rounded-full p-2">
          <AlertCircle className="text-red-600" />
        </View>
        <View className="flex-1">
          <Text className="text-base font-medium">
            Follow-up Question Ignored
          </Text>
          <Text className="text-sm text-muted-foreground">
            The journalist had a follow-up question that was not addressed.
          </Text>
        </View>
      </View>
    );
  } else {
    // Question was asked
    return (
      <View className="flex-row items-center gap-2">
        <View className="bg-primary/10 rounded-full p-2">
          <MessageSquare className="text-primary" />
        </View>
        <View className="flex-1">
          {!isFirstQuestion && (
            <Badge className="mt-1 self-start" variant="outline">
              <Text className="text-xs">Follow-up Question</Text>
            </Badge>
          )}
          <Text className="text-base font-medium">{question.text}</Text>
        </View>
      </View>
    );
  }
}
