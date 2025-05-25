import React, { useMemo } from "react";
import { View } from "react-native";
import { withObservables } from "@nozbe/watermelondb/react";

import {
  observeJournalist,
  observePublicationForJournalistId,
  observeCabinetMembersByLevel,
} from "~/lib/db/helpers/observations";
import { PressExchange, Journalist, CabinetMember } from "~/lib/db/models";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "~/components/ui/card";
import { Text } from "~/components/ui/text";
import { Button } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";
import JournalistDisplay from "~/components/shared/entity/JournalistDisplay";
import ConferenceAnswer from "~/components/screens/level-press-conference/ConferenceAnswer";
import { QuestionDisplay } from "~/components/shared/entity/QuestionDisplay";
import { CabinetStaticId, AnswerType } from "~/types";

interface ConferenceQuestionProps {
  pressExchange: PressExchange;
  journalist: Journalist | null;
  cabinetMembers: CabinetMember[];
  handleClear: () => void;
}

const ConferenceQuestion = ({
  pressExchange,
  journalist,
  cabinetMembers,
  handleClear,
}: ConferenceQuestionProps) => {
  const currentQuestion = pressExchange.currentQuestion;
  if (!currentQuestion || !journalist) return null;

  // Create cabinet member map for quick lookups
  const cabinetMemberMap = useMemo(() => {
    const map = new Map<CabinetStaticId, CabinetMember>();
    for (const member of cabinetMembers) {
      map.set(member.staticId, member);
    }
    return map;
  }, [cabinetMembers]);

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
        <JournalistDisplay journalistId={journalist.id} />
      </CardHeader>

      <CardContent className="gap-4">
        <Separator className="mt-4" />

        <QuestionDisplay question={text} />

        <View className="gap-2">
          {answers.map((answer, index) => {
            let cabinetMember;

            if (
              answer.type === AnswerType.Authorized &&
              answer.authorizedCabinetMemberId
            ) {
              cabinetMember = cabinetMemberMap.get(
                answer.authorizedCabinetMemberId
              );
            }

            return (
              <ConferenceAnswer
                key={index}
                answer={answer}
                onPress={handleAnswerQuestion}
                authorizedCabinetMember={cabinetMember}
              />
            );
          })}
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
  cabinetMembers: observeCabinetMembersByLevel(pressExchange.level_id),
}));

export default enhance(ConferenceQuestion);
