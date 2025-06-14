import { View } from "react-native";
import { Trophy, Crown, Users } from "lucide-react-native";
import { withObservables } from "@nozbe/watermelondb/react";

import { observeGame, observePresidentApprovalRating } from "~/lib/db/helpers";
import { Game } from "~/lib/db/models";
import { Text } from "~/components/ui/text";
import { Badge } from "~/components/ui/badge";

interface ConsequenceGameCompleteProps {
  game: Game | null;
  presApprovalRating: number;
}

const ConsequenceGameComplete = ({
  game,
  presApprovalRating,
}: ConsequenceGameCompleteProps) => {
  if (!game) {
    return null;
  }

  return (
    <View
      className="gap-4"
      accessible={true}
      accessibilityLabel={`Presidential term completed successfully. Final presidential approval: ${presApprovalRating}%. Final relationship: ${presApprovalRating}%.`}
    >
      {/* Main Success Banner */}
      <View
        className="p-4 rounded-lg bg-green-50 border border-green-200"
        accessible={true}
        accessibilityLabel={`Congratulations! Successfully completed 4-year presidential term as Press Secretary ${game.psName}`}
      >
        <View className="flex-row items-center mb-3" accessible={false}>
          <Trophy className="text-green-500 mr-2" size={20} />
          <Text className="text-lg font-bold text-green-700">
            Term Completed!
          </Text>
        </View>

        <Text className="text-sm text-green-700 mb-3">
          Congratulations, {game.psName}! You successfully served as Press
          Secretary for the full 4-year term under President {game.presName}.
        </Text>

        <Badge
          className="bg-green-100 border-green-300"
          accessibilityLabel="Term completion achievement"
        >
          <Crown className="text-green-600 mr-1" size={12} />
          <Text className="text-green-700 font-medium">4-Year Survivor</Text>
        </Badge>
      </View>

      {/* Final Statistics */}
      <View
        className="p-4 rounded-lg bg-blue-50 border border-blue-200"
        accessible={true}
        accessibilityLabel={`Final statistics: President approval ${presApprovalRating}%, Press Secretary relationship ${game.presPsRelationship}%`}
      >
        <View className="flex-row items-center mb-3" accessible={false}>
          <Users className="text-blue-500 mr-2" size={16} />
          <Text className="text-base font-semibold text-blue-700">
            Final Ratings
          </Text>
        </View>

        <View className="gap-3" accessible={false}>
          <View className="flex-row justify-between items-center">
            <Text className="text-sm text-blue-700">
              Presidential Approval:
            </Text>
            <Text
              className={`text-sm font-bold ${
                presApprovalRating >= 50 ? "text-green-600" : "text-orange-600"
              }`}
            >
              {presApprovalRating}%
            </Text>
          </View>

          <View className="flex-row justify-between items-center">
            <Text className="text-sm text-blue-700">
              President-PS Relationship:
            </Text>
            <Text
              className={`text-sm font-bold ${
                game.presPsRelationship >= 50
                  ? "text-green-600"
                  : "text-orange-600"
              }`}
            >
              {game.presPsRelationship}%
            </Text>
          </View>
        </View>
      </View>

      {/* Legacy Message */}
      <View
        className="p-3 rounded-lg bg-purple-50 border border-purple-200"
        accessible={true}
        accessibilityLabel="Presidential legacy summary"
      >
        <Text className="text-sm font-medium text-purple-700 mb-2">
          Your Legacy
        </Text>
        <Text className="text-xs text-purple-600">
          You navigated the complex world of political communication for a full
          presidential term. Your service shaped how the administration
          communicated with the nation.
        </Text>
      </View>
    </View>
  );
};

const enhance = withObservables(["gameId"], ({ gameId }) => ({
  game: observeGame(gameId),
  presApprovalRating: observePresidentApprovalRating(gameId),
}));

export default enhance(ConsequenceGameComplete);
