import { View } from "react-native";

import { Award } from "~/lib/icons/Award";
import { Text } from "~/components/ui/text";
import ProgressDifference from "~/components/level-complete/ProgressDifference";
import type { OutcomeSnapshotType } from "~/types";

interface RelationshipsAdminProps {
  outcomeSnapshot: OutcomeSnapshotType;
}

export default function RelationshipsAdmin({
  outcomeSnapshot,
}: RelationshipsAdminProps) {
  const { initial, final } = outcomeSnapshot;

  if (!final) {
    return null;
  }

  return (
    <View className="gap-4">
      <View className="flex-row items-center gap-2">
        <Award className="h-5 w-5 text-primary" />
        <Text className="font-semibold text-lg">President</Text>
      </View>

      <View className="gap-3">
        <ProgressDifference
          label="Approval Rating"
          initialValue={initial.president.approvalRating}
          finalValue={final.president.approvalRating}
          showPercentage={true}
        />

        <ProgressDifference
          label="Relationship with You"
          initialValue={initial.president.psRelationship}
          finalValue={final.president.psRelationship}
          showPercentage={true}
        />
      </View>
    </View>
  );
}
