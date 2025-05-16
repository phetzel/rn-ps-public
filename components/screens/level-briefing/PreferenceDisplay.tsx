import React from "react";
import { View } from "react-native";

import { Text, TextClassContext } from "~/components/ui/text";
import { Separator } from "~/components/ui/separator";
import { AnswerType, Preference } from "~/types";

interface PreferenceDisplayProps {
  preference: Preference;
  cabinetMemberName?: string;
  relationship?: number;
}

const PreferenceDisplay = ({ preference }: PreferenceDisplayProps) => {
  // Helper function to get approach label
  const getApproachLabel = (answerType?: AnswerType): string => {
    if (!answerType) return "No Recommendation";

    switch (answerType) {
      case AnswerType.Deflect:
        return "Deflect";
      case AnswerType.Reassure:
        return "Reassure";
      case AnswerType.Challenge:
        return "Challenge";
      case AnswerType.Admit:
        return "Admit";
      case AnswerType.Deny:
        return "Deny";
      case AnswerType.Inform:
        return "Inform";
      case AnswerType.Authorized:
        return "Authorized";
      default:
        return "No Recommendation";
    }
  };

  // Helper function to get approach color
  const getApproachColor = (answerType?: AnswerType): string => {
    if (!answerType) return "text-gray-500 bg-gray-100";

    switch (answerType) {
      case AnswerType.Deflect:
        return "text-purple-600 bg-purple-50";
      case AnswerType.Reassure:
        return "text-blue-600 bg-blue-50";
      case AnswerType.Challenge:
        return "text-red-600 bg-red-50";
      case AnswerType.Admit:
        return "text-amber-600 bg-amber-50";
      case AnswerType.Deny:
        return "text-orange-600 bg-orange-50";
      case AnswerType.Inform:
        return "text-teal-600 bg-teal-50";
      case AnswerType.Authorized:
        return "text-emerald-600 bg-emerald-50";
      default:
        return "text-gray-500 bg-gray-100";
    }
  };

  return (
    <View className="bg-muted/30 p-3 rounded-md gap-2">
      <View className="gap-2">
        <View className="flex-row justify-between items-center">
          <TextClassContext.Provider value="text-base font-medium font-bold">
            <Text>Approach:</Text>
          </TextClassContext.Provider>
          <TextClassContext.Provider
            value={`text-sm font-medium px-2 py-0.5 rounded-full ${getApproachColor(
              preference.answerType
            )}`}
          >
            <Text>{getApproachLabel(preference.answerType)}</Text>
          </TextClassContext.Provider>
        </View>
      </View>

      <Separator />

      <TextClassContext.Provider value="text-sm">
        <Text>{preference.rationale}</Text>
      </TextClassContext.Provider>
    </View>
  );
};

export default PreferenceDisplay;
