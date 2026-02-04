import { withObservables } from '@nozbe/watermelondb/react';

import SituationPreferences from '~/components/connected/preference/SituationPreferences';
import { ConferenceInfoView } from '~/components/screens/level-press-conference/ConferenceInfoView';
import { observeSituationsByLevelId } from '~/lib/db/helpers/observations';

import type { Situation } from '~/lib/db/models';

interface ConferenceInfoProps {
  levelId: string;
  situations: Situation[];
}

function ConferenceInfo({ levelId, situations }: ConferenceInfoProps) {
  return (
    <ConferenceInfoView
      levelId={levelId}
      situations={situations}
      renderSituationPreferences={(situation) => <SituationPreferences situation={situation} />}
    />
  );
}

export default withObservables(['levelId'], ({ levelId }: { levelId: string }) => ({
  situations: observeSituationsByLevelId(levelId),
}))(ConferenceInfo);
