import { withObservables } from '@nozbe/watermelondb/react';
import React from 'react';
import { View } from 'react-native';

import { StateProgress } from '~/components/screens/tab-state/StateProgress';
import { CabinetMemberName } from '~/components/shared/entity/CabinetMemberName';
import InfoTooltip from '~/components/shared/InfoTooltip';
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card';
import { Separator } from '~/components/ui/separator';
import { observeActiveCabinetMembers } from '~/lib/db/helpers';
import { Briefcase } from '~/lib/icons/Briefcase';

import type CabinetMember from '~/lib/db/models/CabinetMember';

interface CabinetStateCardProps {
  cabinetMembers: CabinetMember[];
}

const CabinetStateCard = ({ cabinetMembers }: CabinetStateCardProps) => {
  return (
    <Card accessible={true} accessibilityLabel={`Cabinet members: ${cabinetMembers.length} total`}>
      <CardHeader className="pb-4 flex-row items-center gap-2">
        <Briefcase className="text-primary" />
        <CardTitle>Cabinet</CardTitle>
        <View className="ml-auto">
          <InfoTooltip tooltipId="state.cabinet" />
        </View>
      </CardHeader>

      <CardContent className="gap-4">
        {cabinetMembers.map((member, idx) => {
          const memberStaticData = member.staticData;
          return (
            <View
              key={member.id}
              className="gap-2"
              accessible={true}
              accessibilityLabel={`${memberStaticData.cabinetName}. Approval: ${member.approvalRating}%. Relationship: ${member.psRelationship}%`}
            >
              <CabinetMemberName cabinetMember={member} />

              <View className="gap-2">
                <StateProgress label="Approval Rating" value={member.approvalRating} />

                <StateProgress label="Relationship with You" value={member.psRelationship} />
              </View>

              {idx !== cabinetMembers.length - 1 && <Separator className="mt-4" />}
            </View>
          );
        })}
      </CardContent>
    </Card>
  );
};

const enhance = withObservables(['gameId'], ({ gameId }) => ({
  cabinetMembers: observeActiveCabinetMembers(gameId),
}));

export default enhance(CabinetStateCard);
