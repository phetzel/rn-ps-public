import React from 'react';
import { View } from 'react-native';

import { ResultsEntityRow } from '~/components/shared/results/ResultsEntityRow';
import { Text } from '~/components/ui/text';
import { calculateTableColumnWidths } from '~/lib/utils';

import type { EntityWithDelta, EntityWithMediaDelta } from '~/types';

interface ResultsTableProps {
  entities: (EntityWithDelta | EntityWithMediaDelta)[];
  title: string;
  isAdWatched: boolean;
  showAdColumn?: boolean;
}

export function ResultsTable({
  entities,
  title,
  isAdWatched,
  showAdColumn = true,
}: ResultsTableProps) {
  if (!entities || entities.length === 0) {
    return null;
  }

  // Check if any entity has media data and should show base column
  const hasMediaData = entities.some((entity) => 'preMediaDelta' in entity);
  const showBaseColumn = hasMediaData && !showAdColumn;

  // Calculate column count and get widths
  const columnCount = 2 + (showBaseColumn ? 1 : 0) + 1 + (showAdColumn ? 1 : 0); // Name + Start + Base? + Change + Boosted?
  const { name: nameWidth, data: dataWidth } = calculateTableColumnWidths(columnCount);

  // Build accessibility label for table header
  const buildHeaderAccessibilityLabel = () => {
    const columns = ['Entity name', 'Start value'];
    if (showBaseColumn) columns.push('Base change');
    columns.push('Change');
    if (showAdColumn) columns.push('Ad boosted change');
    return `Table columns: ${columns.join(', ')}`;
  };

  return (
    <View className="gap-2">
      {/* Section Title */}
      <Text
        className="text-2xl font-bold"
        accessibilityRole="header"
        accessible={true}
        accessibilityLabel={`${title} section with ${entities.length} entities`}
      >
        {title}
      </Text>

      {/* Table Header */}
      <View
        className="flex-row border-b-2 pb-2"
        accessible={true}
        accessibilityLabel={buildHeaderAccessibilityLabel()}
      >
        <View style={{ width: nameWidth }} accessible={false}>
          <Text className="text-sm font-bold" accessible={false}>
            Name
          </Text>
        </View>
        <View style={{ width: dataWidth }} className="items-center" accessible={false}>
          <Text className="text-sm font-bold" accessible={false}>
            Start
          </Text>
        </View>
        {showBaseColumn && (
          <View style={{ width: dataWidth }} className="items-center" accessible={false}>
            <Text className="text-sm font-bold" accessible={false}>
              Base
            </Text>
          </View>
        )}
        <View style={{ width: dataWidth }} className="items-center" accessible={false}>
          <Text className="text-sm font-bold" accessible={false}>
            Change
          </Text>
        </View>
        {showAdColumn && (
          <View style={{ width: dataWidth }} className="items-center" accessible={false}>
            <Text className="text-sm font-bold" accessible={false}>
              Boosted
            </Text>
          </View>
        )}
      </View>

      {/* Table Rows */}
      {entities.map((entity) => (
        <ResultsEntityRow
          key={entity.id}
          entity={entity}
          isAdWatched={isAdWatched}
          showAdColumn={showAdColumn}
        />
      ))}
    </View>
  );
}
