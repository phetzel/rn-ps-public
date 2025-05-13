import React from "react";
import { View } from "react-native";
import { withObservables } from "@nozbe/watermelondb/react";

// Components
import { Text } from "~/components/ui/text";
import { Separator } from "~/components/ui/separator";
import { Badge } from "~/components/ui/badge";
import { Card, CardContent } from "~/components/ui/card";
// Icons
import { CheckCircle2 } from "~/lib/icons/CheckCircle2";
import { MessageSquare } from "~/lib/icons/MessageSquare";
import { TrendingUp } from "~/lib/icons/TrendingUp";
import { TrendingDown } from "~/lib/icons/TrendingDown";
// Types
import type { PressExchange, Journalist, Publication } from "~/lib/db/models";
import type { Question, SituationOutcome } from "~/types";
import { observePublicationForJournalistId } from "~/lib/db/helpers/observations";
import PoliticalLeaningBadge from "~/components/PoliticalLeaningBadge";
// Utils
import { cn } from "~/lib/utils";

interface SituationOutcomeExchangeItemProps {
  exchange: PressExchange;
  outcome: SituationOutcome;
  journalist: Journalist;
  publication: Publication | null;
}

function SituationOutcomeExchangeItem({
  exchange,
  outcome,
  journalist,
  publication,
}: SituationOutcomeExchangeItemProps) {
  if (!journalist || !publication) return null;

  const content = exchange.parseContent;
  const progress = exchange.parseProgress;

  if (!content || !progress) return null;

  const journoStaticData = journalist.staticData;
  const pubStaticData = publication.staticData;

  // Find questions and answers that affected this outcome
  const relevantExchanges = progress.history
    .filter((item) => {
      if (item.skipped || !item.answerId) return false;

      const question = content.questions[item.questionId];
      if (!question) return false;

      const answer = question.answers.find((a) => a.id === item.answerId);
      if (!answer || !answer.outcomeModifiers) return false;

      // Check if this answer affected our outcome
      const modifier = answer.outcomeModifiers[outcome.id];
      return modifier !== undefined && modifier !== 0;
    })
    .map((item) => {
      const question = content.questions[item.questionId];
      const answer = question.answers.find((a) => a.id === item.answerId);
      const outcomeModifier = answer?.outcomeModifiers?.[outcome.id] || 0;

      return { question, answerId: item.answerId, outcomeModifier };
    });

  if (relevantExchanges.length === 0) return null;

  return (
    <View className="p-3 border border-border rounded-md gap-4">
      {/* Journalist info */}
      <View className="gap-2">
        <View className="flex-row items-center gap-2">
          <Text className="font-medium">{journoStaticData.name}</Text>
        </View>
        <View className="flex-row items-center gap-2">
          <Text className="text-sm text-muted-foreground">
            {pubStaticData.name}
          </Text>
          <PoliticalLeaningBadge
            politicalLeaning={pubStaticData.politicalLeaning}
          />
        </View>
      </View>

      <Separator />

      {/* Relevant exchanges */}
      <View className="gap-2">
        {relevantExchanges.map((item, index) => (
          <View key={`${item.question.id}-${index}`} className="gap-2">
            {index > 0 && <Separator />}

            {/* Question */}
            <View className="flex-row items-center gap-2">
              <View className="bg-primary/10 rounded-full p-2 mt-0.5">
                <MessageSquare className="h-4 w-4 text-primary" />
              </View>
              <Text className="flex-1">{item.question.text}</Text>
            </View>

            {/* Answer */}
            <View className="flex-row items-start gap-2">
              <View className="bg-green-100 rounded-full p-2 mt-0.5">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
              </View>
              <View className="flex-1">
                <Text>
                  {
                    item.question.answers.find((a) => a.id === item.answerId)
                      ?.text
                  }
                </Text>
              </View>
            </View>

            {/* Outcome Impact */}
            <View>
              <Text className="text-sm font-medium">Outcome Impact</Text>
              <View className="flex-row items-center justify-between gap-2">
                <Text className="text-sm text-muted-foreground">
                  {item.outcomeModifier > 0 ? "Increased" : "Decreased"}
                </Text>
                <View className="flex-row items-center gap-2">
                  {item.outcomeModifier > 0 ? (
                    <TrendingUp className={cn("h-3 w-3", "text-green-500")} />
                  ) : (
                    <TrendingDown className={cn("h-3 w-3", "text-red-500")} />
                  )}
                  <Text
                    className={cn(
                      "font-medium",
                      item.outcomeModifier > 0
                        ? "text-green-500"
                        : "text-red-500"
                    )}
                  >
                    {item.outcomeModifier}%
                  </Text>
                </View>
              </View>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}

export default withObservables(["exchange"], ({ exchange }) => ({
  exchange,
  journalist: exchange.journalist.observe(),
  publication: observePublicationForJournalistId(exchange.journalist_id),
}))(SituationOutcomeExchangeItem);
