import React from "react";
import { View } from "react-native";

import { CabinetMember } from "~/lib/db/models";
import { Text, TextClassContext } from "~/components/ui/text";

interface CabinetMemberNameProps {
  cabinetMember: CabinetMember;
}

export function CabinetMemberName({ cabinetMember }: CabinetMemberNameProps) {
  const { name } = cabinetMember;
  const { cabinetName } = cabinetMember.staticData;

  return (
    <View>
      <TextClassContext.Provider value="text-lg font-bold">
        <Text>{name}</Text>
      </TextClassContext.Provider>
      <TextClassContext.Provider value="text-base text-muted-foreground leading-none">
        <Text>{cabinetName}</Text>
      </TextClassContext.Provider>
    </View>
  );
}
