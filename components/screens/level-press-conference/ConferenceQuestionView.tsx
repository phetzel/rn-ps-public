import React, { useMemo } from 'react';
import { View } from 'react-native';

import ConferenceAnswer from '~/components/screens/level-press-conference/ConferenceAnswer';
import { JournalistDisplayView } from '~/components/shared/entity/JournalistDisplayView';
import { QuestionDisplay } from '~/components/shared/entity/QuestionDisplay';
import { Button } from '~/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '~/components/ui/card';
import { Separator } from '~/components/ui/separator';
import { Text } from '~/components/ui/text';
import { AnswerType, PoliticalLeaning } from '~/types';

import type { CabinetStaticId } from '~/types';
import type { CabinetMember, Journalist, PressExchange, Publication } from '~/types/view-models';

interface ConferenceQuestionViewProps {
  pressExchange: PressExchange;
  journalist: Journalist | null;
  publication: Publication | null;
  cabinetMembers: CabinetMember[];
  handleClear: () => void;
  onAnswerQuestion: (answerId: string) => Promise<void>;
  onSkipQuestion: () => Promise<void>;
}

export function ConferenceQuestionView({
  pressExchange,
  journalist,
  publication,
  cabinetMembers,
  handleClear,
  onAnswerQuestion,
  onSkipQuestion,
}: ConferenceQuestionViewProps) {
  const cabinetMemberMap = useMemo(() => {
    const map = new Map<CabinetStaticId, CabinetMember>();
    for (const member of cabinetMembers) {
      map.set(member.staticId, member);
    }
    return map;
  }, [cabinetMembers]);

  const currentQuestion = pressExchange.currentQuestion;
  if (!currentQuestion || !journalist) return null;

  const { text, answers } = currentQuestion;

  const handleAnswerQuestion = async (answerId: string) => {
    try {
      await onAnswerQuestion(answerId);
      handleClear();
    } catch (error) {
      console.error('Error answering question:', error);
    }
  };

  const handleSkipQuestion = async () => {
    try {
      await onSkipQuestion();
      handleClear();
    } catch (error) {
      console.error('Error skipping question:', error);
    }
  };

  return (
    <Card
      className="border-l-4 border-l-primary"
      accessible={true}
      accessibilityLabel={`Question from ${journalist.staticData.name}.`}
    >
      <CardHeader
        className="pb-2"
        accessible={true}
        accessibilityRole="header"
        accessibilityLabel={`Question from journalist: ${journalist.staticData.name}`}
      >
        <JournalistDisplayView
          journalistName={journalist.staticData.name}
          publicationName={
            publication?.staticData.name ?? journalist.staticData.publicationStaticId
          }
          publicationLeaning={publication?.staticData.politicalLeaning ?? PoliticalLeaning.Neutral}
        />
      </CardHeader>

      <CardContent className="gap-4" accessible={false}>
        <Separator className="mt-4" />

        <View accessible={true} accessibilityLabel={`Question: ${text}`} accessibilityRole="text">
          <QuestionDisplay question={text} />
        </View>

        <View
          className="gap-2"
          accessible={true}
          accessibilityLabel={`Answer options: ${answers.length} available`}
          accessibilityHint="Select an answer to respond to the question"
        >
          {answers.map((answer) => {
            let cabinetMember;

            if (answer.type === AnswerType.Authorized && answer.authorizedCabinetMemberId) {
              cabinetMember = cabinetMemberMap.get(answer.authorizedCabinetMemberId);
            }

            return (
              <ConferenceAnswer
                key={answer.id}
                answer={answer}
                onPress={handleAnswerQuestion}
                authorizedCabinetMember={cabinetMember}
              />
            );
          })}
        </View>
      </CardContent>
      <CardFooter className="justify-center" accessible={false}>
        <Button
          variant="ghost"
          onPress={handleSkipQuestion}
          className="text-muted-foreground"
          accessibilityLabel="Skip this question"
          accessibilityHint="Move to the next journalist without answering this question"
        >
          <Text className="text-muted-foreground">Skip Question</Text>
        </Button>
      </CardFooter>
    </Card>
  );
}
