import { ScrollView, View } from 'react-native';

import ConferenceInfoSituationItem from '~/components/screens/level-press-conference/ConferenceInfoSituationItem';
import { Text } from '~/components/ui/text';

import type { Situation } from '~/types/view-models';

interface ConferenceInfoViewProps {
  levelId: string;
  situations: Situation[];
  renderSituationPreferences: (situation: Situation) => React.ReactNode;
}

export function ConferenceInfoView({
  levelId,
  situations,
  renderSituationPreferences,
}: ConferenceInfoViewProps) {
  if (!levelId) return null;

  return (
    <View
      className="gap-4"
      accessible={true}
      accessibilityLabel={`Briefing notes: ${situations.length} active situations to review`}
    >
      <Text
        className="text-3xl font-bold text-center"
        accessibilityRole="header"
        accessibilityLabel="Briefing Notes section"
      >
        Briefing Notes
      </Text>

      <ScrollView
        accessible={true}
        accessibilityLabel="Situation details"
        accessibilityHint="Scroll to review all active situations and their details"
      >
        {situations.map((situation) => (
          <ConferenceInfoSituationItem
            key={situation.id}
            situation={situation}
            renderSituationPreferences={renderSituationPreferences}
          />
        ))}
      </ScrollView>
    </View>
  );
}
