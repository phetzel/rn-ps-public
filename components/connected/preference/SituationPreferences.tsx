import { withObservables } from '@nozbe/watermelondb/react';

import PresidentPreference from '~/components/connected/preference/PresidentPreference';
import { SituationPreferencesView } from '~/components/shared/preference/SituationPreferencesView';
import { observeCabinetMembersByLevel } from '~/lib/db/helpers/observations';

import type { CabinetMember, Situation } from '~/lib/db/models';

interface SituationPreferencesProps {
  situation: Situation;
  cabinetMembers: CabinetMember[];
}

function SituationPreferences({ situation, cabinetMembers }: SituationPreferencesProps) {
  return (
    <SituationPreferencesView
      situation={situation}
      cabinetMembers={cabinetMembers}
      renderPresidentPreference={({ gameId, preference }) => (
        <PresidentPreference gameId={gameId} preference={preference} />
      )}
    />
  );
}

export default withObservables(['situation'], ({ situation }: { situation: Situation }) => ({
  cabinetMembers: observeCabinetMembersByLevel(situation.level_id),
}))(SituationPreferences);
