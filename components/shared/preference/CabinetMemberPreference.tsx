import React from 'react';
import { View } from 'react-native';

import { CabinetMemberName } from '~/components/shared/entity/CabinetMemberName';
import AuthorizedIntel from '~/components/shared/preference/AuthorizedIntel';
import PreferenceDisplay from '~/components/shared/preference/PreferenceDisplay';
import PreferenceLocked from '~/components/shared/preference/PreferenceLocked';
import { CABINET_PREFERENCE_THRESHOLD } from '~/lib/constants';
import { CabinetPreference } from '~/types';

import type { CabinetMember } from '~/lib/db/models';

interface CabinetMemberPreferenceProps {
  cabinetMember: CabinetMember;
  cabinetPreference: CabinetPreference;
}

const CabinetMemberPreference = ({
  cabinetMember,
  cabinetPreference,
}: CabinetMemberPreferenceProps) => {
  const isPreferenceLocked = cabinetMember.psRelationship < CABINET_PREFERENCE_THRESHOLD;

  return (
    <View
      className="gap-2"
      accessible={true}
      accessibilityLabel={`${cabinetMember.name}, ${cabinetMember.staticData.cabinetName}. ${
        isPreferenceLocked
          ? `Preference locked due to low relationship (${cabinetMember.psRelationship}). Need ${CABINET_PREFERENCE_THRESHOLD} minimum.`
          : `Preference available: ${cabinetPreference.preference.rationale}${
              cabinetPreference.authorizedContent ? ` Includes classified intel.` : ``
            }`
      }`}
    >
      <CabinetMemberName cabinetMember={cabinetMember} />

      {isPreferenceLocked ? (
        <PreferenceLocked
          cabinetMemberName={cabinetMember.name}
          relationship={cabinetMember.psRelationship}
        />
      ) : (
        <>
          <PreferenceDisplay preference={cabinetPreference.preference} />

          {cabinetPreference.authorizedContent && (
            <AuthorizedIntel
              cabinetMemberName={cabinetMember.name}
              relationship={cabinetMember.psRelationship}
              authorizedContent={cabinetPreference.authorizedContent}
            />
          )}
        </>
      )}
    </View>
  );
};

export default CabinetMemberPreference;
