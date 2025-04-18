// components/press-conference/ConferenceQuestionAnswer.tsx
import React from "react";
import { View, Pressable } from "react-native";
import { withObservables } from "@nozbe/watermelondb/react";

import {
  observeJournalist,
  observePublicationForJournalistId,
} from "~/lib/db/helpers/observations";
import { Question, Journalist } from "~/lib/db/models";
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

interface ConferenceQuestionAnswerProps {
  question: Question;
  journalist: Journalist | null;
  publication: Publication | null;
  onAnswerQuestion: (questionId: string, answerIndex: number) => void;
  onSkipQuestion: (questionId: string) => void;
}

const ConferenceQuestionAnswer = ({
  question,
  journalist,
  publication,
  onAnswerQuestion,
  onSkipQuestion,
}: ConferenceQuestionAnswerProps) => {
  if (!question || !journalist) return null;

  const questionData = question.parseData;

  if (!questionData) return null;

  return (
    <Card className="border-l-4 border-l-primary">
      <CardHeader className="pb-2">
        <View className="flex-row items-center gap-3">
          <View className="bg-primary/10 rounded-full p-2 mt-1">
            <MessageSquare className="h-5 w-5 text-primary" />
          </View>
          <View className="gap-2">
            <CardTitle className="text-base">{journalist.name}</CardTitle>

            <View className="flex-row items-center gap-2 mb-1">
              {journalist.bias && (
                <PoliticalLeaningBadge politicalLeaning={journalist.bias} />
              )}
              <Text className="text-xs text-muted-foreground">
                {publication ? publication.name : "Independent"}
              </Text>
            </View>
          </View>
        </View>
      </CardHeader>

      <CardContent className="gap-4">
        <Text className="font-semibold text-center">
          {question.questionText}
        </Text>

        <View className="gap-2">
          {questionData.answers.map((answer, index) => (
            <Pressable
              key={index}
              onPress={() => onAnswerQuestion(question.id, index)}
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
          onPress={() => onSkipQuestion(question.id)}
          className="text-muted-foreground"
        >
          <Text className="text-muted-foreground">Skip Question</Text>
        </Button>
      </CardFooter>
    </Card>
  );
};

// Enhance with observables
const enhance = withObservables(["question"], ({ question }) => ({
  question,
  journalist: observeJournalist(question.journalist_id),
  publication: observePublicationForJournalistId(question.journalist_id),
}));

export default enhance(ConferenceQuestionAnswer);
