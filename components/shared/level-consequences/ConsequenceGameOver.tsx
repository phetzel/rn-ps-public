import { Shield, UserX } from 'lucide-react-native';
import { View } from 'react-native';

import { Badge } from '~/components/ui/badge';
import { Text } from '~/components/ui/text';

import type { ConsequenceResult } from '~/types';

interface ConsequenceGameOverProps {
  consequences: ConsequenceResult;
}

export default function ConsequenceGameOver({ consequences }: ConsequenceGameOverProps) {
  const isImpeached = consequences.gameEndReason === 'impeached';

  return (
    <View
      className={`p-4 rounded-lg ${
        isImpeached ? 'bg-red-50 border border-red-200' : 'bg-amber-50 border border-amber-200'
      }`}
      accessible={true}
      accessibilityLabel={`Game Over: ${
        isImpeached
          ? 'Presidential impeachment due to low approval'
          : 'Press Secretary fired by President'
      }`}
    >
      <View className="flex-row items-center mb-2" accessible={false}>
        {isImpeached ? (
          <Shield className="text-red-500 mr-2" size={16} />
        ) : (
          <UserX className="text-amber-500 mr-2" size={16} />
        )}
        <Text className="text-base font-semibold">
          {isImpeached ? 'Presidential Impeachment' : "You've Been Fired"}
        </Text>
      </View>
      <Text className="text-sm text-muted-foreground mb-3">
        {isImpeached
          ? 'The President has been impeached due to critically low approval ratings.'
          : 'The President has lost confidence in your abilities as Press Secretary.'}
      </Text>
      <Badge className="bg-red-100 border-red-200" accessibilityLabel="Game Over status">
        <Text className="text-red-800">GAME OVER</Text>
      </Badge>
    </View>
  );
}
