import React from 'react';
import { View } from 'react-native';

import { Text } from '~/components/ui/text';

interface AuthorizedTooltipProps {
  isAuthorized: boolean;
  cabinetMemberName: string;
  threshold: number;
}

export default function AuthorizedTooltip({
  isAuthorized,
  cabinetMemberName,
  threshold,
}: AuthorizedTooltipProps) {
  return (
    <View
      className="gap-1"
      accessibilityHint="Explains relationship requirements for accessing classified information"
      accessibilityLabel={`Information about ${cabinetMemberName}'s classified intel authorization`}
    >
      {isAuthorized ? (
        <Text className="text-xs text-center leading-tight" accessible={false}>
          <Text className="font-bold" accessible={false}>
            {cabinetMemberName}
          </Text>{' '}
          has authorized you to view their classified intel due to positive relationship.
        </Text>
      ) : (
        <Text className="text-xs text-center leading-tight" accessible={false}>
          <Text className="font-bold" accessible={false}>
            {cabinetMemberName}
          </Text>{' '}
          needs a relationship of at least{' '}
          <Text className="font-bold" accessible={false}>
            {threshold}
          </Text>{' '}
          to share their classified intel with you.
        </Text>
      )}
    </View>
  );
}
