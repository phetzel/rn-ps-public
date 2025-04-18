import { useState, useMemo } from "react";
import { View } from "react-native";
import { withObservables } from "@nozbe/watermelondb/react";

import { observeQuestionsForLevel } from "~/lib/db/helpers/observations";
import { Question } from "~/lib/db/models";
import { QUESTIONS_PER_PRESS_CONFERENCE } from "~/lib/constants";
import ConferenceProgress from "~/components/press-conference/ConferenceProgress";
import ConferenceQuestionAnswer from "~/components/press-conference/ConferenceQuestionAnswer";
import ConferenceJournalistSelect from "~/components/press-conference/ConferenceJournalistSelect";
import { QuestionStatus } from "~/types";
import { Text } from "~/components/ui/text";

interface ConferenceContentProps {
  levelId: string;
  questions: Question[];
}

const ConferenceContent = ({ levelId, questions }: ConferenceContentProps) => {
  const [selectedQuestion, setSelectedQuestion] = useState<Question | null>(
    null
  );

  const questionsTakenCount = questions.reduce((count, question) => {
    const status = question.status;

    // If question is Skipped or Answered, count as 1
    if (
      status === QuestionStatus.Skipped ||
      status === QuestionStatus.Answered
    ) {
      return count + 1;
    }

    // If question is FollowUpAnswered or FollowUpSkipped, count as 2
    if (
      status === QuestionStatus.FollowUpAnswered ||
      status === QuestionStatus.FollowUpSkipped
    ) {
      return count + 2;
    }

    return count;
  }, 0);

  // Check if there are any pending questions or questions with unanswered follow-ups
  const hasMoreQuestions = useMemo(() => {
    // Count Pending questions
    const hasPendingQuestions = questions.some(
      (q) => q.status === QuestionStatus.Pending
    );

    // Count Answered questions with follow-ups
    const hasUnansweredFollowUps = questions.some(
      (q) => q.status === QuestionStatus.Answered && q.hasFollowUp
    );

    return hasPendingQuestions || hasUnansweredFollowUps;
  }, [questions]);

  // Determine if the press conference is complete
  const isPressConferenceComplete = useMemo(() => {
    return (
      questionsTakenCount >= QUESTIONS_PER_PRESS_CONFERENCE || !hasMoreQuestions
    );
  }, [questionsTakenCount, hasMoreQuestions]);

  const handleSelectQuestion = (question: Question) => {
    setSelectedQuestion(question);
  };

  const handleAnswerQuestion = async (
    questionId: string,
    answerIndex: number
  ) => {
    const question = questions.find((q) => q.id === questionId);
    if (!question) return;

    try {
      await question.answerQuestion(answerIndex);
      setSelectedQuestion(null); // Go back to journalist selection
    } catch (error) {
      console.error("Error answering question:", error);
    }
  };

  const handleSkipQuestion = async (questionId: string) => {
    const question = questions.find((q) => q.id === questionId);
    if (!question) return;

    try {
      await question.skipQuestion();
      setSelectedQuestion(null); // Go back to journalist selection
    } catch (error) {
      console.error("Error skipping question:", error);
    }
  };

  return (
    <View className="gap-4">
      {isPressConferenceComplete ? (
        <View className="flex-1 justify-center items-center">
          <Text>Press Conference Complete</Text>
        </View>
      ) : (
        <View className="gap-4">
          <ConferenceProgress
            maxQuestions={QUESTIONS_PER_PRESS_CONFERENCE}
            answeredCount={questionsTakenCount}
          />
          {!selectedQuestion ? (
            <ConferenceJournalistSelect
              questions={questions}
              onSelectQuestion={handleSelectQuestion}
            />
          ) : (
            <View>
              <ConferenceQuestionAnswer
                question={selectedQuestion}
                onAnswerQuestion={handleAnswerQuestion}
                onSkipQuestion={handleSkipQuestion}
              />
            </View>
          )}
        </View>
      )}
    </View>
  );
};

const enhance = withObservables(["levelId"], ({ levelId }) => ({
  questions: observeQuestionsForLevel(levelId),
}));

export default enhance(ConferenceContent);
