import React from 'react';
import { View } from 'react-native';

import { Text } from '~/components/ui/text';
import { cn, calculateTableColumnWidths } from '~/lib/utils';

import type { EntityWithDelta, EntityWithMediaDelta } from '~/types';

interface ResultsEntityRowProps {
  entity: EntityWithDelta | EntityWithMediaDelta;
  isAdWatched: boolean;
  showAdColumn?: boolean;
}

export function ResultsEntityRow({
  entity,
  isAdWatched,
  showAdColumn = true,
}: ResultsEntityRowProps) {
  const formatDelta = (value: number) => ({
    sign: value >= 0 ? '+' : '-',
    word: value >= 0 ? 'plus' : 'minus',
    abs: Math.abs(value),
  });
  const getDeltaClassName = (value: number, emphasize: boolean) => {
    if (!emphasize) return 'text-muted-foreground';
    return value >= 0 ? 'text-green-600 font-bold' : 'text-red-600 font-bold';
  };

  // Check if entity has media data and should show base column
  const hasMediaData = 'preMediaDelta' in entity;
  const showBaseColumn = hasMediaData && !showAdColumn;

  // Calculate column count and get widths
  const columnCount = 2 + (showBaseColumn ? 1 : 0) + 1 + (showAdColumn ? 1 : 0); // Name + Start + Base? + Change + Boosted?
  const { name: nameWidth, data: dataWidth } = calculateTableColumnWidths(columnCount);
  const titleSuffix = entity.title ? `, ${entity.title}` : '';
  const nameLabel = `${entity.name}${titleSuffix}`;
  const baseDelta = hasMediaData ? (entity as EntityWithMediaDelta).preMediaDelta : 0;
  const baseDeltaInfo = formatDelta(baseDelta);
  const deltaInfo = formatDelta(entity.delta);
  const adDeltaInfo = formatDelta(entity.adBoostedDelta);

  return (
    <View className="flex-row border-b border-border pb-2">
      {/* Name and title */}
      <View
        style={{ width: nameWidth }}
        accessible={true}
        accessibilityLabel={nameLabel}
        className="gap-1"
      >
        <Text className="text-base font-bold leading-none" accessible={false}>
          {entity.name}
        </Text>
        {entity.title && (
          <Text className="text-sm text-muted-foreground leading-none" accessible={false}>
            {entity.title}
          </Text>
        )}
      </View>

      {/* Start value (current value) */}
      <View
        style={{ width: dataWidth }}
        className="justify-center items-center"
        accessible={true}
        accessibilityLabel={`Start value: ${entity.currentValue}`}
      >
        <Text className="text-lg" accessible={false}>
          {entity.currentValue}
        </Text>
      </View>

      {/* Base (preMediaDelta) - only when media data present and no ad column */}
      {showBaseColumn && (
        <View
          style={{ width: dataWidth }}
          className="justify-center items-center"
          accessible={true}
          accessibilityLabel={`Base change: ${baseDeltaInfo.word} ${baseDeltaInfo.abs}`}
        >
          <Text className={'text-lg text-muted-foreground'} accessible={false}>
            {baseDeltaInfo.sign}
            {baseDeltaInfo.abs}
          </Text>
        </View>
      )}

      {/* Change (delta) */}
      <View
        style={{ width: dataWidth }}
        className="justify-center items-center"
        accessible={true}
        accessibilityLabel={`Change: ${deltaInfo.word} ${deltaInfo.abs}`}
      >
        <Text
          className={cn('text-lg', getDeltaClassName(entity.delta, !showAdColumn || !isAdWatched))}
          accessible={false}
        >
          {deltaInfo.sign}
          {deltaInfo.abs}
        </Text>
      </View>

      {/* Boosted (ad-boosted delta) */}
      {showAdColumn && (
        <View
          style={{ width: dataWidth }}
          className="justify-center items-center"
          accessible={true}
          accessibilityLabel={`${
            isAdWatched ? 'Ad boosted' : 'Potential boost'
          }: ${adDeltaInfo.word} ${adDeltaInfo.abs}`}
        >
          <Text
            className={cn('text-lg', getDeltaClassName(entity.adBoostedDelta, isAdWatched))}
            accessible={false}
          >
            {adDeltaInfo.sign}
            {adDeltaInfo.abs}
          </Text>
        </View>
      )}
    </View>
  );
}
