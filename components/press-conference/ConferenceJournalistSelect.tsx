import React from "react";
import { View } from "react-native";
import { Text } from "~/components/ui/text";
import { Card, CardContent } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { User } from "~/lib/icons/User";

import ConferenceJournalistItem from "./ConferenceJournalistItem";
import type Question from "~/lib/db/models/Question";
import { QuestionStatus } from "~/types";

interface ConferenceJournalistSelectProps {
  questions: Question[];
  onSelectQuestion: (question: Question) => void;
}

interface ConferenceJournalistSelectProps {
  questions: Question[];
  onSelectQuestion: (question: Question) => void;
}

const ConferenceJournalistSelect = ({
  questions,
  onSelectQuestion,
}: ConferenceJournalistSelectProps) => {
  return (
    <View className="gap-4">
      <Text className="text-xl font-bold mb-2 text-center">
        Select a Journalist
      </Text>
      {Object.values(questions).map((question) => (
        <ConferenceJournalistItem
          key={question.id}
          journalistId={question.journalist_id}
          question={question}
          onSelect={onSelectQuestion}
        />
      ))}
    </View>
  );
};

export default ConferenceJournalistSelect;
