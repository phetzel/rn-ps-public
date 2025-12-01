import { withObservables } from '@nozbe/watermelondb/react';
import React from 'react';
import { View } from 'react-native';

import { CabinetMemberName } from '~/components/shared/entity/CabinetMemberName';
import LevelProgress from '~/components/shared/level-state/LevelProgress';
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card';
import { Separator } from '~/components/ui/separator';
import { observeCabinetMembersByLevel } from '~/lib/db/helpers';
import { Briefcase } from '~/lib/icons';

import type CabinetMember from '~/lib/db/models/CabinetMember';
import type { OutcomeSnapshotType } from '~/types';

interface CabinetLevelStateProps {
  levelId: string;
  outcomeSnapshot: OutcomeSnapshotType;
  cabinetMembers: CabinetMember[];
}

const CabinetLevelState = ({
  levelId,
  outcomeSnapshot,
  cabinetMembers,
}: CabinetLevelStateProps) => {
  const { initial, final } = outcomeSnapshot;

  if (!final) {
    return null;
  }

  return (
    <Card>
      <CardHeader className="flex-row items-center gap-2">
        <Briefcase className="text-primary" size={20} />
        <CardTitle>Cabinet Monthly Update</CardTitle>
      </CardHeader>
      <CardContent>
        <View
          className="gap-4"
          accessible={true}
          accessibilityLabel={`Cabinet members monthly update: ${cabinetMembers.length} members`}
        >
          {cabinetMembers.map((member, idx) => {
            const initialValues = initial.cabinetMembers[member.staticId];
            const finalValues = final.cabinetMembers[member.staticId];

            if (!initialValues || !finalValues) return null;

            const approvalChange = finalValues.approvalRating - initialValues.approvalRating;
            const relationshipChange = finalValues.psRelationship - initialValues.psRelationship;

            return (
              <View
                key={member.id}
                className="gap-2"
                accessible={true}
                accessibilityLabel={`${member.staticData.cabinetName}. Approval changed by ${
                  approvalChange > 0 ? '+' : ''
                }${approvalChange}%. Relationship changed by ${
                  relationshipChange > 0 ? '+' : ''
                }${relationshipChange}%.`}
              >
                <CabinetMemberName cabinetMember={member} />

                <View className="gap-2" accessible={false}>
                  <LevelProgress
                    label="Approval Rating"
                    initialValue={initialValues.approvalRating}
                    finalValue={finalValues.approvalRating}
                  />

                  <LevelProgress
                    label="Relationship with You"
                    initialValue={initialValues.psRelationship}
                    finalValue={finalValues.psRelationship}
                  />
                </View>

                {idx !== cabinetMembers.length - 1 && <Separator className="mt-4" />}
              </View>
            );
          })}
        </View>
      </CardContent>
    </Card>
  );
};

const enhance = withObservables(['levelId'], ({ levelId }) => ({
  cabinetMembers: observeCabinetMembersByLevel(levelId),
}));

export default enhance(CabinetLevelState);
