import React, { useMemo } from "react";
import { View } from "react-native";
import { Text } from "~/components/ui/text";
import { AlignmentWeight, PoliticalLeaning } from "~/types";
import { staticSubgroups, presidentialLeaningEffects } from "~/lib/data/staticPolitics";

type Props = { leaning: PoliticalLeaning };

export default function PresidentialLeaningTooltip({ leaning }: Props) {
  const { liberalNames, conservativeNames } = useMemo(() => {
    const liberal: string[] = [];
    const conservative: string[] = [];
    for (const sub of Object.values(staticSubgroups)) {
      if (sub.defaultPoliticalLeaning === PoliticalLeaning.Liberal) liberal.push(sub.name);
      if (sub.defaultPoliticalLeaning === PoliticalLeaning.Conservative) conservative.push(sub.name);
    }
    return { liberalNames: liberal, conservativeNames: conservative };
  }, []);

  const selectedLabel = leaning.charAt(0).toUpperCase() + leaning.slice(1);

  const subgroupEffects = useMemo(() => {
    const { aligned, opposite } = presidentialLeaningEffects[leaning];
    const effects: { name: string; delta: number }[] = [];
    for (const sub of Object.values(staticSubgroups)) {
      if (!sub.defaultPoliticalLeaning) continue;
      const magnitude = Math.abs(sub.weight ?? AlignmentWeight.Positive);
      const isAligned = sub.defaultPoliticalLeaning === leaning;
      const base = isAligned
        ? aligned
        : sub.defaultPoliticalLeaning === PoliticalLeaning.Neutral
          ? 0
          : opposite;
      const delta = Math.sign(base) * magnitude;
      if (delta !== 0) effects.push({ name: sub.name, delta });
    }
    return effects.sort((a, b) => b.delta - a.delta);
  }, [leaning]);

  const symbolFor = (delta: number): { text: string; className: string } | null => {
    if (delta > 0) return { text: delta >= 20 ? "++" : "+", className: "text-emerald-600" };
    if (delta < 0) return { text: delta <= -20 ? "--" : "-", className: "text-destructive" };
    return null;
  };

  return (
    <View className="gap-1">
      <Text className="text-primary font-bold">Presidential Leaning</Text>
      <Text className="text-muted-foreground leading-tight">Shapes where subgroup approvals begin.</Text>
      {/* Selected leaning */}
      <Text className="leading-tight">
        <Text className="font-bold">{selectedLabel}:</Text>
      </Text>
      {/* Effects list (sorted, symbol-only) */}
      {subgroupEffects.map(({ name, delta }) => {
        const sym = symbolFor(delta);
        if (!sym) return null;
        return (
          <Text key={name} className="leading-tight">
            <Text className="text-primary font-medium">{name}</Text>{" "}
            <Text className={`${sym.className} font-bold`}>{sym.text}</Text>
          </Text>
        );
      })}
    </View>
  );
}


