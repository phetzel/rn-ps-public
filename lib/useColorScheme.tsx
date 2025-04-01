import * as React from "react";
import { useColorScheme as useNativewindColorScheme } from "nativewind";

// Disabled dark color scheme for now
export function useColorScheme() {
  const { colorScheme, setColorScheme, toggleColorScheme } =
    useNativewindColorScheme();

  React.useEffect(() => {
    setColorScheme("light");
  }, [setColorScheme]);

  return {
    colorScheme: "light",
    isDarkColorScheme: false,
    setColorScheme: () => {},
    toggleColorScheme: () => {},
  };
}
