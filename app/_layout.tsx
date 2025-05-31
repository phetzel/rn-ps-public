import "~/global.css";

import {
  DarkTheme,
  DefaultTheme,
  Theme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack, SplashScreen } from "expo-router";
import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { Platform, View } from "react-native";
import { PortalHost } from "@rn-primitives/portal";
import { DatabaseProvider } from "@nozbe/watermelondb/DatabaseProvider";

import { BottomSheetModalProvider } from "~/components/ui/bottom-sheet";
import { database } from "~/lib/db";
import { useGameManagerStore } from "~/lib/stores/gameManagerStore";
import { NAV_THEME } from "~/lib/constants";
import { useColorScheme } from "~/lib/useColorScheme";
import { setAndroidNavigationBar } from "~/lib/android-navigation-bar";
import { Text } from "~/components/ui/text";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const LIGHT_THEME: Theme = {
  ...DefaultTheme,
  colors: NAV_THEME.light,
};
const DARK_THEME: Theme = {
  ...DarkTheme,
  colors: NAV_THEME.dark,
};

export { ErrorBoundary } from "expo-router";

export default function RootLayout() {
  const { colorScheme, isDarkColorScheme } = useColorScheme();
  const [isColorSchemeLoaded, setIsColorSchemeLoaded] = React.useState(false);

  // Zustand state for DB initialization
  const { isDbReady, initializeDb, dbError } = useGameManagerStore((state) => ({
    isDbReady: state.isDbReady,
    initializeDb: state.initialize,
    dbError: state.error,
  }));

  React.useEffect(() => {
    if (!isDbReady) {
      initializeDb();
    }
  }, [isDbReady, initializeDb]);

  React.useEffect(() => {
    if (Platform.OS === "android") {
      setAndroidNavigationBar("light");
    }
    if (Platform.OS === "web") {
      document.documentElement.classList.add("bg-background");
    }

    setIsColorSchemeLoaded(true);
  }, [colorScheme]);

  // Hide splash screen once DB is initialized (or errored) and color scheme is ready
  React.useEffect(() => {
    if ((isDbReady || dbError) && isColorSchemeLoaded) {
      SplashScreen.hideAsync();
    }
  }, [isDbReady, dbError, isColorSchemeLoaded]);

  if ((!isDbReady && !dbError) || !isColorSchemeLoaded) {
    return null;
  }

  // If DB initialization failed critically, show an error message
  if (dbError && !isDbReady) {
    return (
      <ThemeProvider value={LIGHT_THEME}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            padding: 20,
          }}
        >
          <Text accessibilityRole="alert" accessibilityLiveRegion="assertive">
            Critical Error:
          </Text>
          <Text>{dbError}</Text>
          <Text accessibilityHint="Please restart the application to resolve this issue">
            Please restart the application.
          </Text>
        </View>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider value={LIGHT_THEME}>
      <DatabaseProvider database={database}>
        <BottomSheetModalProvider>
          <StatusBar style={isDarkColorScheme ? "light" : "dark"} />
          <Stack>
            <Stack.Screen
              name="index"
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="games"
              options={{
                headerShown: false,
              }}
            />
          </Stack>
          <PortalHost />
        </BottomSheetModalProvider>
      </DatabaseProvider>
    </ThemeProvider>
  );
}
