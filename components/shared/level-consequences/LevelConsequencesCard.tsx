import { View } from 'react-native';

import { UserX, CheckCircle2, AlertCircle, Trophy } from '~/components/icons';
import ConsequenceCabinetMembersFired from '~/components/shared/level-consequences/ConsequenceCabinetMembersFired';
import ConsequenceGameOver from '~/components/shared/level-consequences/ConsequenceGameOver';
import ConsequenceNoNegative from '~/components/shared/level-consequences/ConsequenceNoNegative';
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card';
import { Text } from '~/components/ui/text';

import type { ReactNode } from 'react';
import type { ConsequenceResult } from '~/types';
import type { CabinetMember } from '~/types/view-models';

interface LevelConsequencesCardProps {
  gameId: string;
  consequences?: ConsequenceResult;
  cabinetMembers: CabinetMember[];
  renderConsequenceGameComplete: (gameId: string) => React.ReactNode;
}

export default function LevelConsequencesCard({
  gameId,
  consequences,
  cabinetMembers,
  renderConsequenceGameComplete,
}: LevelConsequencesCardProps) {
  const getConsequenceIcon = (consequences?: ConsequenceResult) => {
    if (consequences?.gameEnded) {
      if (consequences.gameEndReason === 'completed') {
        return <Trophy className="text-green-500" size={20} />;
      }
      return <UserX className="text-red-500" size={20} />;
    }

    if (consequences && consequences.cabinetMembersFired.length > 0) {
      return <AlertCircle className="text-amber-500" size={20} />;
    }

    return <CheckCircle2 className="text-green-500" size={20} />;
  };

  if (!consequences) {
    return (
      <View
        className="p-4 rounded-lg bg-gray-50 border border-gray-200"
        accessible={true}
        accessibilityLabel="Consequence data not available"
      >
        <Text className="text-sm text-muted-foreground">Consequence data not available.</Text>
      </View>
    );
  }

  const isGameEnded = consequences.gameEnded;
  const isGameCompleted = consequences.gameEndReason === 'completed';
  const cabinetMembersFired = consequences.cabinetMembersFired.length > 0;
  let headerLabel = 'Month completion results';
  let content: ReactNode = <ConsequenceNoNegative />;

  if (isGameEnded) {
    if (isGameCompleted) {
      content = renderConsequenceGameComplete(gameId);
      headerLabel = 'Term completion results';
    } else {
      content = <ConsequenceGameOver consequences={consequences} />;
      headerLabel = 'Game Over results';
    }
  } else if (cabinetMembersFired) {
    content = (
      <ConsequenceCabinetMembersFired consequences={consequences} cabinetMembers={cabinetMembers} />
    );
  }

  // Generate main card accessibility label
  const getMainAccessibilityLabel = () => {
    if (isGameEnded) {
      if (isGameCompleted) {
        return 'Term successfully completed';
      }
      const reason = consequences.gameEndReason === 'impeached' ? 'impeachment' : 'firing';
      return `Game Over due to ${reason}`;
    }
    if (cabinetMembersFired) {
      return `Month complete with consequences: ${consequences.cabinetMembersFired.length} cabinet members fired`;
    }
    return 'Month complete with no negative consequences';
  };

  const getCardTitle = () => {
    if (isGameEnded) {
      return isGameCompleted ? 'Term Complete' : 'Game Over';
    }
    return 'Month Complete';
  };

  return (
    <Card accessible={true} accessibilityLabel={getMainAccessibilityLabel()}>
      <CardHeader
        className="flex-row items-center gap-2"
        accessible={true}
        accessibilityRole="header"
        accessibilityLabel={headerLabel}
      >
        {getConsequenceIcon(consequences)}
        <CardTitle className="text-lg">{getCardTitle()}</CardTitle>
      </CardHeader>
      <CardContent accessible={false}>{content}</CardContent>
    </Card>
  );
}
