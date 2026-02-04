import { View } from 'react-native';

import { Text } from '~/components/ui/text';

import type { Situation } from '~/types/view-models';

interface ConferenceInfoSituationItemProps {
  situation: Situation;
  renderSituationPreferences: (situation: Situation) => React.ReactNode;
}

const ConferenceInfoSituationItem = ({
  situation,
  renderSituationPreferences,
}: ConferenceInfoSituationItemProps) => {
  return (
    <View
      className="gap-4 mb-6 px-8 pb-8 border-b border-border"
      accessible={true}
      accessibilityLabel={`Situation: ${situation.title}. ${situation.description}`}
    >
      <View className="gap-4" accessible={false}>
        <Text
          className="text-2xl font-bold text-center"
          accessibilityRole="header"
          accessibilityLabel={`Situation title: ${situation.title}`}
        >
          {situation.title}
        </Text>
        <Text
          className="text-base text-muted-foreground text-center"
          accessibilityLabel={`Situation description: ${situation.description}`}
        >
          {situation.description}
        </Text>
      </View>

      {renderSituationPreferences(situation)}
    </View>
  );
};

export default ConferenceInfoSituationItem;
