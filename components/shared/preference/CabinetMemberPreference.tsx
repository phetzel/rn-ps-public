import React from "react";
import { View } from "react-native";

import type { CabinetMember } from "~/lib/db/models";
import { CABINET_PREFERENCE_THRESHOLD } from "~/lib/constants";
import PreferenceDisplay from "~/components/shared/preference/PreferenceDisplay";
import PreferenceLocked from "~/components/shared/preference/PreferenceLocked";
import AuthorizedIntel from "~/components/shared/preference/AuthorizedIntel";
import { CabinetMemberName } from "~/components/shared/CabinetMemberName";
import { CabinetPreference } from "~/types";

interface CabinetMemberPreferenceProps {
  cabinetMember: CabinetMember;
  cabinetPreference: CabinetPreference;
}

const CabinetMemberPreference = ({
  cabinetMember,
  cabinetPreference,
}: CabinetMemberPreferenceProps) => {
  const isPreferenceLocked =
    cabinetMember.psRelationship < CABINET_PREFERENCE_THRESHOLD;

  return (
    <View className="gap-2">
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
