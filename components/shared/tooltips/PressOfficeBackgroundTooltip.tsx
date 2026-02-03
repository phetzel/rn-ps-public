import React, { useMemo } from 'react';
import { View } from 'react-native';

import { Text } from '~/components/ui/text';
import { pressBackgroundCabinetEffects, staticCabinetMembers } from '~/lib/data/staticPolitics';

import type { PressOfficeBackground } from '~/types';

type Props = { background?: PressOfficeBackground };

function titleCase(input?: string) {
  if (!input) return '';
  const str = String(input);
  return str.replace(/_/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
}

function symbolFor(delta: number): { text: string; className: string } | null {
  if (delta > 0) {
    return { text: delta >= 20 ? '++' : '+', className: 'text-emerald-600' };
  }
  if (delta < 0) {
    return { text: delta <= -20 ? '--' : '-', className: 'text-destructive' };
  }
  return null;
}

export default function PressOfficeBackgroundTooltip({ background }: Props) {
  const effectsList = useMemo(() => {
    if (!background) return [] as { name: string; delta: number }[];
    const effects = pressBackgroundCabinetEffects[background] || {};
    const list: { name: string; delta: number }[] = [];
    for (const [cabId, delta] of Object.entries(effects)) {
      const name =
        staticCabinetMembers[cabId as keyof typeof staticCabinetMembers]?.cabinetName || cabId;
      list.push({ name, delta: Number(delta) });
    }
    // Sort positive to negative, stronger first
    return list.sort((a, b) => b.delta - a.delta);
  }, [background]);

  return (
    <View className="gap-1">
      <Text className="text-primary font-bold">Press Office Background</Text>
      <Text className="text-muted-foreground leading-tight">
        Shapes starting relationships with certain cabinet roles.
      </Text>
      {/* Selected name */}
      {background ? (
        <Text className="leading-tight">
          <Text className="font-bold">{titleCase(background)}:</Text>
        </Text>
      ) : null}
      {/* Effects list */}
      {effectsList.map((item) => {
        const sym = symbolFor(item.delta);
        if (!sym) return null;
        return (
          <Text key={item.name} className="leading-tight">
            <Text className="text-primary font-medium">{item.name}</Text>{' '}
            <Text className={`${sym.className} font-bold`}>{sym.text}</Text>
          </Text>
        );
      })}
    </View>
  );
}
