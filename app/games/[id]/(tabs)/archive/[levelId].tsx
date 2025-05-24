import React from "react";
import { View } from "react-native";

import { Level } from "~/lib/db/models";
import { Text } from "~/components/ui/text";

interface ArchiveLevelScreenProps {
  archivedLevel?: Level;
}

function ArchiveLevelScreen({ archivedLevel }: ArchiveLevelScreenProps) {
  return (
    <View>
      <Text>Archive Level</Text>
    </View>
  );
}

export default ArchiveLevelScreen;
