import React from 'react';
import { View } from 'react-native';

import { Separator } from '~/components/ui/separator';
import { Text } from '~/components/ui/text';
import { AnswerType } from '~/types';

import type { Preference } from '~/types';

interface PreferenceDisplayProps {
  preference: Preference;
  cabinetMemberName?: string;
  relationship?: number;
}

const PreferenceDisplay = ({ preference }: PreferenceDisplayProps) => {
  // Helper function to get approach label
  const getApproachLabel = (answerType?: AnswerType): string => {
    if (!answerType) return 'No Recommendation';

    switch (answerType) {
      case AnswerType.Deflect:
        return 'Deflect';
      case AnswerType.Reassure:
        return 'Reassure';
      case AnswerType.Challenge:
        return 'Challenge';
      case AnswerType.Admit:
        return 'Admit';
      case AnswerType.Deny:
        return 'Deny';
      case AnswerType.Inform:
        return 'Inform';
      case AnswerType.Authorized:
        return 'Authorized';
      default:
        return 'No Recommendation';
    }
  };

  // Helper function to get approach color
  const getApproachColor = (answerType?: AnswerType): string => {
    if (!answerType) return 'text-gray-500 bg-gray-100';

    switch (answerType) {
      case AnswerType.Deflect:
        return 'text-purple-600 bg-purple-50';
      case AnswerType.Reassure:
        return 'text-blue-600 bg-blue-50';
      case AnswerType.Challenge:
        return 'text-red-600 bg-red-50';
      case AnswerType.Admit:
        return 'text-amber-600 bg-amber-50';
      case AnswerType.Deny:
        return 'text-orange-600 bg-orange-50';
      case AnswerType.Inform:
        return 'text-teal-600 bg-teal-50';
      case AnswerType.Authorized:
        return 'text-emerald-600 bg-emerald-50';
      default:
        return 'text-gray-500 bg-gray-100';
    }
  };

  const approachLabel = getApproachLabel(preference.answerType);

  return (
    <View
      className="bg-muted/30 p-3 rounded-md gap-2"
      accessible={true}
      accessibilityLabel={`Preferred approach: ${approachLabel}. Rationale: ${preference.rationale}`}
    >
      <View className="gap-2" accessible={false}>
        <View className="flex-row justify-between items-center" accessible={false}>
          <Text className="text-base font-medium font-bold" accessible={false}>
            Approach:
          </Text>

          <Text
            className={`text-sm font-medium px-2 py-0.5 rounded-full ${getApproachColor(
              preference.answerType,
            )}`}
            accessible={false}
          >
            {approachLabel}
          </Text>
        </View>
      </View>

      <Separator />

      <Text className="text-sm" accessible={false}>
        {preference.rationale}
      </Text>
    </View>
  );
};

export default PreferenceDisplay;
