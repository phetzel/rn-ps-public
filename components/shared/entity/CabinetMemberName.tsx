import React from 'react';
import { View } from 'react-native';

import { Text } from '~/components/ui/text';
import { CabinetMember } from '~/lib/db/models';

interface CabinetMemberNameProps {
  cabinetMember: CabinetMember;
}

export function CabinetMemberName({ cabinetMember }: CabinetMemberNameProps) {
  const { name } = cabinetMember;
  const { cabinetName } = cabinetMember.staticData;

  return (
    <View
      accessible={true}
      accessibilityLabel={`${name}, ${cabinetName}`}
      accessibilityRole="header"
    >
      <Text className="text-lg font-bold" accessible={false}>
        {name}
      </Text>
      <Text className="text-base text-muted-foreground leading-none" accessible={false}>
        {cabinetName}
      </Text>
    </View>
  );
}
