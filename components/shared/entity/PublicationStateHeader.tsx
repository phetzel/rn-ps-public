import React from "react";
import { View } from "react-native";
import { Text } from "~/components/ui/text";
import PoliticalLeaningBadge from "~/components/shared/entity/PoliticalLeaningBadge";
import { PoliticalLeaning } from "~/types";

interface PublicationStateHeaderProps {
  name: string;
  politicalLeaning: PoliticalLeaning;
  description?: string;
}

export function PublicationStateHeader({
  name,
  politicalLeaning,
  description,
}: PublicationStateHeaderProps) {
  return (
    <View className="gap-2">
      <View className="flex-row items-center justify-between">
        <Text className="text-lg font-bold">{name}</Text>
        <PoliticalLeaningBadge politicalLeaning={politicalLeaning} />
      </View>

      {description && (
        <Text className="text-sm text-muted-foreground">{description}</Text>
      )}
    </View>
  );
}
