import { withObservables } from '@nozbe/watermelondb/react';
import { View, ScrollView } from 'react-native';

import ConferenceInfoSituationItem from '~/components/screens/level-press-conference/ConferenceInfoSituationItem';
import { Text } from '~/components/ui/text';
import { observeSituationsByLevelId } from '~/lib/db/helpers/observations';

import type { Situation } from '~/lib/db/models';

interface ConferenceInfoProps {
  levelId: string;
  situations: Situation[];
}

const ConferenceInfo = ({ levelId, situations }: ConferenceInfoProps) => {
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
          <ConferenceInfoSituationItem key={situation.id} situation={situation} />
        ))}
      </ScrollView>
    </View>
  );
};

const enhance = withObservables(['levelId'], ({ levelId }) => ({
  situations: observeSituationsByLevelId(levelId),
}));

export default enhance(ConferenceInfo);
