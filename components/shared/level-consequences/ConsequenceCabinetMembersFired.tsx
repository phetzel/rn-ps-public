import { View } from 'react-native';

import { AlertCircle, UserX } from '~/components/icons';
import { Text } from '~/components/ui/text';
import { CABINET_PENALTY_PER_FIRED_MEMBER } from '~/lib/constants';
import { CabinetMember } from '~/lib/db/models';
import { ConsequenceResult } from '~/types';

interface ConsequenceCabinetMembersFiredProps {
  consequences: ConsequenceResult;
  cabinetMembers: CabinetMember[];
}

export default function ConsequenceCabinetMembersFired({
  consequences,
  cabinetMembers,
}: ConsequenceCabinetMembersFiredProps) {
  const totalPenalty = consequences.cabinetMembersFired.length * CABINET_PENALTY_PER_FIRED_MEMBER;

  return (
    <View
      className="gap-3"
      accessible={true}
      accessibilityLabel={`${consequences.cabinetMembersFired.length} cabinet members fired. All voter approval decreased by ${totalPenalty}%.`}
    >
      <View className="p-4 rounded-lg bg-amber-50 border border-amber-200" accessible={false}>
        <View className="flex-row items-center mb-2" accessible={false}>
          <UserX className="text-amber-500 mr-2" size={16} />
          <Text className="text-base font-semibold">Cabinet Members Fired</Text>
        </View>
        <Text className="text-sm text-muted-foreground mb-3">
          The following cabinet members were fired due to low approval ratings:
        </Text>
        <View
          className="gap-1 mb-3"
          accessible={true}
          accessibilityLabel={`Fired cabinet members: ${consequences.cabinetMembersFired.length}`}
        >
          {consequences.cabinetMembersFired.map((staticId) => {
            const firedMember = cabinetMembers?.find((m) => m.staticId === staticId);
            return (
              <View
                key={staticId}
                className="flex-row items-center gap-2"
                accessible={true}
                accessibilityLabel={`${firedMember?.name || 'Unknown'}, ${
                  firedMember?.staticData.cabinetName || staticId
                }`}
              >
                <Text className="text-sm text-amber-700">•</Text>
                <View className="flex-1">
                  <Text className="text-sm text-amber-700 font-medium">
                    {firedMember?.name || 'Unknown'}
                  </Text>
                  <Text className="text-xs text-amber-600">
                    {firedMember?.staticData.cabinetName || staticId}
                  </Text>
                </View>
              </View>
            );
          })}
        </View>
      </View>
      <View
        className="p-3 bg-red-50 rounded-lg border border-red-100 flex-row items-center"
        accessible={true}
        accessibilityLabel={`Cabinet instability penalty: All voter groups lost ${totalPenalty}% approval, affecting President's overall rating`}
      >
        <AlertCircle className="text-red-500 mr-2 flex-shrink-0" size={16} />
        <View className="flex-1">
          <Text className="text-sm text-red-700">
            All voter groups{"'"} approval decreased by{' '}
            <Text className="font-bold">{totalPenalty}%</Text> due to cabinet instability
          </Text>
          <Text className="text-xs text-red-600 mt-1">
            This affects the President{"'"}s overall approval rating
          </Text>
        </View>
      </View>
    </View>
  );
}
