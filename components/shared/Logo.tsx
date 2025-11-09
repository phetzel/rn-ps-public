import * as React from 'react';
import { Image, View } from 'react-native';

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
}

export function Logo({ size = 'medium' }: LogoProps) {
  const dimensions = {
    small: 80,
    medium: 120,
    large: 200,
  };

  const width = dimensions[size];
  const height = dimensions[size];

  return (
    <View
      className="items-center justify-center"
      accessible={true}
      accessibilityLabel={`Press Secretary app logo, ${size} size`}
    >
      <Image
        source={require('../../assets/images/splash-icon.png')}
        style={{ width, height }}
        resizeMode="contain"
        accessible={false}
      />
    </View>
  );
}
