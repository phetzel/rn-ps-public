import React from 'react';
import { View } from 'react-native';

import { SituationStatusBadge } from '~/components/shared/entity/SituationStatusBadge';
import { SituationTypeIcon } from '~/components/shared/entity/SituationTypeIcon';
import { CardHeader, CardTitle, CardDescription } from '~/components/ui/card';

import type { Situation } from '~/lib/db/models';

interface BriefingSituationItemHeaderProps {
  situation: Situation;
}

const BriefingSituationItemHeader = ({ situation }: BriefingSituationItemHeaderProps) => {
  const { title, description, type } = situation;

  return (
    <CardHeader className="gap-2">
      <View
        className="flex-row justify-between items-center"
        accessible={true}
        accessibilityLabel={`${type} situation: ${title}`}
      >
        <View
          className="flex-1 flex-row items-center gap-2 mr-2"
          accessible={true}
          accessibilityLabel={`Situation title: ${title}`}
        >
          <SituationTypeIcon type={type} />
          <CardTitle className="text-xl flex-shrink">{title}</CardTitle>
        </View>
        <SituationStatusBadge status={type} />
      </View>
      <CardDescription accessibilityLabel={`Situation description: ${description}`}>
        {description}
      </CardDescription>
    </CardHeader>
  );
};

export default BriefingSituationItemHeader;
