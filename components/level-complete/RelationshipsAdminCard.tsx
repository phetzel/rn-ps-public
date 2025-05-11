import { View } from "react-native";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Text } from "~/components/ui/text";
import { Award } from "~/lib/icons/Award";
import { User } from "~/lib/icons/User";

import ProgressDifference from "~/components/level-complete/ProgressDifference";
import type { OutcomeSnapshotType } from "~/types";

interface AdministrationRelationshipCardProps {
  outcomeSnapshot: OutcomeSnapshotType;
}

export default function AdministrationRelationshipCard({
  outcomeSnapshot,
}: AdministrationRelationshipCardProps) {
  const { initial, final } = outcomeSnapshot;

  if (!final) {
    return null;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Administration</CardTitle>
      </CardHeader>
      <CardContent className="gap-6">
        {/* President Section */}
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
      </CardContent>
    </Card>
  );
}
