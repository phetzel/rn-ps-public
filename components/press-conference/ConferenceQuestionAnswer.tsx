// components/press-conference/ConferenceQuestionAnswer.tsx
import React from "react";
import { View, Pressable } from "react-native";
import { withObservables } from "@nozbe/watermelondb/react";

import {
  observeJournalist,
  observePublicationForJournalistId,
} from "~/lib/db/helpers/observations";
import { PressExchange, Journalist } from "~/lib/db/models";
import type Publication from "~/lib/db/models/Publication";
import PoliticalLeaningBadge from "~/components/PoliticalLeaningBadge";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardFooter,
} from "~/components/ui/card";
import { Text } from "~/components/ui/text";
import { Button } from "~/components/ui/button";
import { MessageSquare } from "~/lib/icons/MessageSquare";
import { cn } from "~/lib/utils";
import { Question, Answer, ExchangeContent, ExchangeProgress } from "~/types";

interface ConferenceQuestionAnswerProps {
  pressExchange: PressExchange;
  journalist: Journalist | null;
  publication: Publication | null;
  handleClear: () => void;
}

const ConferenceQuestionAnswer = ({
  pressExchange,
  journalist,
  publication,
  handleClear,
}: ConferenceQuestionAnswerProps) => {
  const currentQuestion = pressExchange.currentQuestion;
  if (!currentQuestion || !journalist || !publication) return null;

  const journoStaticData = journalist.staticData;
  const pubStaticData = publication.staticData;

  const { text, answers } = currentQuestion;

  const handleAnswerQuestion = async (answerId: string) => {
    try {
      await pressExchange.answerQuestion(answerId);
      handleClear();
    } catch (error) {
      console.error("Error answering question:", error);
    }
  };

  const handleSkipQuestion = async () => {
    try {
      await pressExchange.skipQuestion();
      handleClear();
    } catch (error) {
      console.error("Error skipping question:", error);
    }
  };

  return (
    <Card className="border-l-4 border-l-primary">
      <CardHeader className="pb-2">
        <View className="flex-row items-center gap-3">
          <View className="bg-primary/10 rounded-full p-2 mt-1">
            <MessageSquare className="h-5 w-5 text-primary" />
          </View>
          <View className="gap-2">
            <CardTitle className="text-base">{journoStaticData.name}</CardTitle>

            <View className="flex-row items-center gap-2 mb-1">
              {pubStaticData.politicalLeaning && (
                <PoliticalLeaningBadge
                  politicalLeaning={pubStaticData.politicalLeaning}
                />
              )}
              <Text className="text-xs text-muted-foreground">
                {pubStaticData.name}
              </Text>
            </View>
          </View>
        </View>
      </CardHeader>

      <CardContent className="gap-4">
        <Text className="font-semibold text-center">{text}</Text>

        <View className="gap-2">
          {answers.map((answer, index) => (
            <Pressable
              key={index}
              onPress={() => handleAnswerQuestion(answer.id)}
            >
              {({ pressed }) => (
                <View
                  className={cn(
                    "w-full border border-input rounded-md p-4",
                    "bg-background",
                    pressed && "bg-accent"
                  )}
                >
                  <Text className="text-foreground text-left flex-wrap">
                    {answer.text}
                  </Text>
                </View>
              )}
            </Pressable>
          ))}
        </View>
      </CardContent>
      <CardFooter className="justify-center">
        <Button
          variant="ghost"
          onPress={handleSkipQuestion}
          className="text-muted-foreground"
        >
          <Text className="text-muted-foreground">Skip Question</Text>
        </Button>
      </CardFooter>
    </Card>
  );
};

// Enhance with observables
const enhance = withObservables(["pressExchange"], ({ pressExchange }) => ({
  journalist: observeJournalist(pressExchange.journalist_id),
  publication: observePublicationForJournalistId(pressExchange.journalist_id),
}));

export default enhance(ConferenceQuestionAnswer);
