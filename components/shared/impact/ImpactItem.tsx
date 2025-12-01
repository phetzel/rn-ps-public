import React from 'react';
import { View } from 'react-native';

import { Text } from '~/components/ui/text';
import { Award } from '~/lib/icons/Award';
import { Briefcase } from '~/lib/icons/Briefcase';
import { Landmark } from '~/lib/icons/Landmark';
import { Minus } from '~/lib/icons/Minus';
import { TrendingDown } from '~/lib/icons/TrendingDown';
import { TrendingUp } from '~/lib/icons/TrendingUp';
import { User } from '~/lib/icons/User';

interface ImpactItemProps {
  title: string;
  name: string;
  reaction?: string;
  weight: number;
  entityType?: 'president' | 'cabinet' | 'political' | 'journalist';
}

export default function ImpactItem({ title, name, reaction, weight, entityType }: ImpactItemProps) {
  let icon = null;
  let textColor = '';
  let impactDirection = '';

  if (weight > 0) {
    icon = <TrendingUp className="text-green-500" />;
    textColor = 'text-green-500';
    impactDirection = 'positive';
  } else if (weight < 0) {
    icon = <TrendingDown className="text-red-500" />;
    textColor = 'text-red-500';
    impactDirection = 'negative';
  } else {
    icon = <Minus className="text-muted-foreground" />;
    textColor = 'text-muted-foreground';
    impactDirection = 'no change';
  }

  // Determine the entity icon
  let entityIcon = null;

  switch (entityType) {
    case 'president':
      entityIcon = <Award className="text-primary mr-2" size={28} />;
      break;
    case 'cabinet':
      entityIcon = <Briefcase className="text-primary mr-2" size={28} />;
      break;
    case 'journalist':
      entityIcon = <User className="text-primary mr-2" size={28} />;
      break;
    // subgroup
    case 'political':
      entityIcon = <Landmark className="text-primary mr-2" size={28} />;
      break;
    default:
      entityIcon = <Briefcase className="text-primary mr-2" size={28} />;
  }

  const impactValue = weight > 0 ? `+${weight}` : `${weight}`;
  const accessibilityLabel = `${name}, ${title}. ${impactDirection} impact: ${impactValue} points${
    reaction ? `. Reaction: ${reaction}` : ''
  }`;

  return (
    <View className="gap-1" accessible={true} accessibilityLabel={accessibilityLabel}>
      <View className="flex-row justify-between items-center" accessible={false}>
        <View className="flex-row items-center flex-1" accessible={false}>
          {entityIcon}
          <View className="flex-shrink" accessible={false}>
            <Text className="text-sm text-muted-foreground leading-none" accessible={false}>
              {title}
            </Text>
            <Text className="text-base font-bold" accessible={false}>
              {name}
            </Text>
          </View>
        </View>

        <View className="flex-row items-center gap-2 flex-shrink-0" accessible={false}>
          {icon}
          <Text className={`${textColor} font-medium`} accessible={false}>
            {impactValue}
          </Text>
        </View>
      </View>
      {reaction && (
        <Text className="text-sm italic" accessible={false}>
          {reaction}
        </Text>
      )}
    </View>
  );
}
