import React from 'react';
import { View } from 'react-native';

import { Newspaper } from '~/components/icons/Newspaper';
import InfoTooltip from '~/components/shared/InfoTooltip';
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card';
import { Separator } from '~/components/ui/separator';

import type Publication from '~/types/view-models/Publication';

interface MediaStateCardViewProps {
  publications: Publication[];
  renderPublicationStateItem: (publication: Publication) => React.ReactNode;
}

export function MediaStateCardView({
  publications,
  renderPublicationStateItem,
}: MediaStateCardViewProps) {
  return (
    <Card
      accessible={true}
      accessibilityLabel={`Media outlets: ${publications.length} publications tracked`}
    >
      <CardHeader className="pb-4 flex-row items-center gap-2">
        <Newspaper className="text-primary" />
        <CardTitle>Media Outlets</CardTitle>
        <View className="ml-auto">
          <InfoTooltip tooltipId="state.media" />
        </View>
      </CardHeader>

      <CardContent>
        {publications.map((publication, idx) => (
          <View key={publication.id} className="gap-2">
            {renderPublicationStateItem(publication)}

            {idx !== publications.length - 1 && <Separator className="my-4" />}
          </View>
        ))}
      </CardContent>
    </Card>
  );
}
