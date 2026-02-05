import { useColorScheme as useNativewindColorScheme } from 'nativewind';
import * as React from 'react';

// Disabled dark color scheme for now
export function useColorScheme() {
  const { setColorScheme } = useNativewindColorScheme();

  React.useEffect(() => {
    setColorScheme('light');
  }, [setColorScheme]);

  return {
    colorScheme: 'light',
    isDarkColorScheme: false,
    setColorScheme: () => {},
    toggleColorScheme: () => {},
  };
}
