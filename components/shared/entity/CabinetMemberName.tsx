import React from "react";
import { View } from "react-native";

import { CabinetMember } from "~/lib/db/models";
import { Text } from "~/components/ui/text";

interface CabinetMemberNameProps {
  cabinetMember: CabinetMember;
}

export function CabinetMemberName({ cabinetMember }: CabinetMemberNameProps) {
  const { name } = cabinetMember;
  const { cabinetName } = cabinetMember.staticData;

  return (
    <View>
      <Text className="text-lg font-bold">{name}</Text>
      <Text className="text-base text-muted-foreground leading-none">
        {cabinetName}
      </Text>
    </View>
  );
}
