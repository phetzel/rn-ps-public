import React from "react";
import { View } from "react-native";

// Components
import { Text } from "~/components/ui/text";
import { Separator } from "~/components/ui/separator";
import { Badge } from "~/components/ui/badge";
import ImpactList from "~/components/outcome/ImpactList";
// Icons
import { CheckCircle2 } from "~/lib/icons/CheckCircle2";
import { AlertCircle } from "~/lib/icons/AlertCircle";
import { MessageSquare } from "~/lib/icons/MessageSquare";
import { SkipForward } from "~/lib/icons/SkipForward";
// Types
import type { Question, ExchangeHistoryItem } from "~/types";

interface ConversationQuestionItemProps {
  question: Question;
  interaction?: ExchangeHistoryItem;
  isFirstQuestion: boolean;
}

export default function ConversationQuestionItem({
  question,
  interaction,
  isFirstQuestion,
}: ConversationQuestionItemProps) {
  const answer = interaction?.answerId
    ? question.answers.find((a) => a.id === interaction.answerId)
    : null;

  // Determine if this is a question that was skipped or answered
  const isAsked = !!interaction;
  const isSkipped = interaction?.skipped;

  const renderHeader = () => {
    if (!isAsked && isFirstQuestion) {
      // Journalist was completely ignored
      return (
        <View className="flex-row items-center gap-2">
          <View className="bg-red-100 rounded-full p-2">
            <AlertCircle className="h-5 w-5 text-red-600" />
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
        <View className="flex-row items-center  gap-2">
          <View className="bg-red-100 rounded-full p-2">
            <AlertCircle className="h-5 w-5 text-red-600" />
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
        <View className="flex-row items-center  gap-2">
          <View className="bg-primary/10 rounded-full p-2">
            <MessageSquare className="h-5 w-5 text-primary" />
          </View>
          <View className="flex-1">
            <Text className="text-base font-medium">{question.text}</Text>
            {!isFirstQuestion && (
              <Badge className="mt-1" variant="outline">
                <Text className="text-xs">Follow-up Question</Text>
              </Badge>
            )}
          </View>
        </View>
      );
    }
  };

  const renderAnswer = () => {
    if (!isAsked) {
      return null;
    }

    if (isSkipped) {
      // Question was skipped
      return (
        <View className="flex-row items-center">
          <View className="bg-amber-100 rounded-full p-2 mr-3">
            <SkipForward className="h-5 w-5 text-amber-500" />
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
            <CheckCircle2 className="h-5 w-5 text-green-600" />
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
  };

  return (
    <View className="border border-border rounded-md p-2 gap-2">
      {/* Header */}
      <View>{renderHeader()}</View>

      {/* Answer */}
      {isAsked && <Separator />}
      {isAsked && <View>{renderAnswer()}</View>}

      {/* Impacts */}
      {isAsked && answer && <ImpactList impacts={answer.impacts} />}
    </View>
  );
}
