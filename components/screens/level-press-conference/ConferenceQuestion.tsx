import { withObservables } from '@nozbe/watermelondb/react';
import React, { useMemo } from 'react';
import { View } from 'react-native';

import ConferenceAnswer from '~/components/screens/level-press-conference/ConferenceAnswer';
import JournalistDisplay from '~/components/shared/entity/JournalistDisplay';
import { QuestionDisplay } from '~/components/shared/entity/QuestionDisplay';
import { Button } from '~/components/ui/button';
import { Card, CardHeader, CardContent, CardFooter } from '~/components/ui/card';
import { Separator } from '~/components/ui/separator';
import { Text } from '~/components/ui/text';
import {
  observeJournalist,
  observePublicationForJournalistId,
  observeCabinetMembersByLevel,
} from '~/lib/db/helpers/observations';
import { AnswerType } from '~/types';

import type { PressExchange, Journalist, CabinetMember } from '~/lib/db/models';
import type { CabinetStaticId } from '~/types';

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
  // Create cabinet member map for quick lookups (must be unconditionally called)
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
      await pressExchange.answerQuestion(answerId);
      handleClear();
    } catch (error) {
      console.error('Error answering question:', error);
    }
  };

  const handleSkipQuestion = async () => {
    try {
      await pressExchange.skipQuestion();
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
        <JournalistDisplay journalistId={journalist.id} />
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
          {answers.map((answer, index) => {
            let cabinetMember;

            if (answer.type === AnswerType.Authorized && answer.authorizedCabinetMemberId) {
              cabinetMember = cabinetMemberMap.get(answer.authorizedCabinetMemberId);
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
};

// Enhance with observables
const enhance = withObservables(['pressExchange'], ({ pressExchange }) => ({
  journalist: observeJournalist(pressExchange.journalist_id),
  publication: observePublicationForJournalistId(pressExchange.journalist_id),
  cabinetMembers: observeCabinetMembersByLevel(pressExchange.level_id),
}));

export default enhance(ConferenceQuestion);
