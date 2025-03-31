import "~/global.css";

import {
  DarkTheme,
  DefaultTheme,
  Theme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack, SplashScreen, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { Platform, View } from "react-native";
import { PortalHost } from "@rn-primitives/portal";

import { NAV_THEME } from "~/lib/constants";
import { useColorScheme } from "~/lib/useColorScheme";
import { setAndroidNavigationBar } from "~/lib/android-navigation-bar";
import { useGameStore } from "~/lib/stores/gameStore";
import { Text } from "~/components/ui/text";
import { ThemeToggle } from "~/components/ThemeToggle";

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
  const router = useRouter();

  const { colorScheme, isDarkColorScheme } = useColorScheme();
  const [isColorSchemeLoaded, setIsColorSchemeLoaded] = React.useState(false);

  // Zustand state for DB initialization
  const {
    isDbInitialized,
    initDb,
    isLoading: isDbLoading,
    error: dbError,
  } = useGameStore((state) => ({
    isDbInitialized: state.isDbInitialized,
    initDb: state.initDb,
    isLoading: state.isLoading, // Get general loading state initially tied to DB init
    error: state.error,
  }));

  React.useEffect(() => {
    // Initialize DB only if not already done
    if (!isDbInitialized) {
      initDb();
    }
  }, [isDbInitialized, initDb]); // Depend on initDb reference and init status

  React.useEffect(() => {
    if (Platform.OS === "android") {
      setAndroidNavigationBar(colorScheme);
    }
    if (Platform.OS === "web") {
      document.documentElement.classList.add("bg-background");
    }

    setIsColorSchemeLoaded(true);
  }, [colorScheme]);

  // Hide splash screen once DB is initialized (or errored) and color scheme is ready
  React.useEffect(() => {
    if ((isDbInitialized || dbError) && isColorSchemeLoaded) {
      SplashScreen.hideAsync();
    }
  }, [isDbInitialized, dbError, isColorSchemeLoaded]);

  if ((!isDbInitialized && !dbError) || !isColorSchemeLoaded) {
    return null;
  }

  // If DB initialization failed critically, show an error message
  if (dbError && !isDbInitialized) {
    return (
      <ThemeProvider value={isDarkColorScheme ? DARK_THEME : LIGHT_THEME}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            padding: 20,
          }}
        >
          <Text>Critical Error:</Text>
          <Text>{dbError}</Text>
          <Text>Please restart the application.</Text>
        </View>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider value={isDarkColorScheme ? DARK_THEME : LIGHT_THEME}>
      <StatusBar style={isDarkColorScheme ? "light" : "dark"} />
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            title: "Press Secretary",
            headerRight: () => <ThemeToggle />,
          }}
        />
        <Stack.Screen
          name="games"
          options={{
            title: "Saved Games",
            headerRight: () => <ThemeToggle />,
          }}
        />
        <Stack.Screen
          name="create"
          options={{
            title: "New Game",
            headerRight: () => <ThemeToggle />,
          }}
        />
      </Stack>
      <PortalHost />
    </ThemeProvider>
  );
}
