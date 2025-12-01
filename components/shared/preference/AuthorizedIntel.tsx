import React from 'react';
import { View } from 'react-native';

import AuthorizedIcon from '~/components/shared/preference/AuthorizedIcon';
import AuthorizedTooltip from '~/components/shared/preference/AuthorizedTooltip';
import { Separator } from '~/components/ui/separator';
import { Text } from '~/components/ui/text';
import { CABINET_AUTHORIZED_THRESHOLD } from '~/lib/constants';
import { cn } from '~/lib/utils';

interface AuthorizedIntelProps {
  cabinetMemberName: string;
  relationship: number;
  authorizedContent: string;
}

const AuthorizedIntel: React.FC<AuthorizedIntelProps> = ({
  cabinetMemberName,
  relationship,
  authorizedContent,
}) => {
  const isAuthorized = relationship >= CABINET_AUTHORIZED_THRESHOLD;

  return (
    <View
      className="bg-muted/30 p-3 rounded-md gap-2 items-center"
      accessible={true}
      accessibilityLabel={`Classified information from ${cabinetMemberName}: ${
        isAuthorized
          ? `Authorized and available. ${authorizedContent}`
          : `Withheld due to insufficient relationship. Need ${CABINET_AUTHORIZED_THRESHOLD} relationship, currently ${relationship}.`
      }`}
    >
      <AuthorizedIcon isAuthorized={isAuthorized} />

      <View className="flex-row items-center gap-2" accessible={false}>
        <Text
          className={cn(
            'text-base text-gray-500 font-medium',
            isAuthorized && 'text-primary font-bold',
          )}
          accessible={false}
        >
          Classified Info {isAuthorized ? 'Authorized' : 'Withheld'}
        </Text>

        <AuthorizedTooltip isAuthorized={isAuthorized} cabinetMemberName={cabinetMemberName} />
      </View>

      {isAuthorized && (
        <>
          <Separator />
          <Text className="text-xs text-center" accessible={false}>
            {authorizedContent}
          </Text>
        </>
      )}
    </View>
  );
};

export default AuthorizedIntel;
