import '~/global.css';

import { DatabaseProvider } from '@nozbe/watermelondb/DatabaseProvider';
import { DarkTheme, DefaultTheme, Theme, ThemeProvider } from '@react-navigation/native';
import { PortalHost } from '@rn-primitives/portal';
import { Stack, SplashScreen } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Platform, View } from 'react-native';

import { DisclaimerModal } from '~/components/shared/DisclaimerModal';
import { GlobalErrorBoundary } from '~/components/shared/GlobalErrorBoundary';
import { BottomSheetModalProvider } from '~/components/ui/bottom-sheet';
import { Text } from '~/components/ui/text';
import { setAndroidNavigationBar } from '~/lib/android-navigation-bar';
import { NAV_THEME } from '~/lib/constants';
import { database } from '~/lib/db';
import { getOrCreateAppSettings } from '~/lib/db/helpers';
import { getPrivacyFlags } from '~/lib/db/helpers/appSettings';
import {
  setEnabled as analyticsSetEnabled,
  initIfEnabled as analyticsInitIfEnabled,
} from '~/lib/infra/analytics';
import { setDiagnosticsEnabled as gateSetDiagnosticsEnabled } from '~/lib/infra/diagnosticsGate';
import { useConsentStore } from '~/lib/stores/consentStore';
import { useDisclaimerDialogStore } from '~/lib/stores/disclaimerDialogStore';
import { useGameManagerStore } from '~/lib/stores/gameManagerStore';
import { useColorScheme } from '~/lib/useColorScheme';

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

export { GlobalErrorBoundary as ErrorBoundary };

export default function RootLayout() {
  const { colorScheme, isDarkColorScheme } = useColorScheme();
  const [isColorSchemeLoaded, setIsColorSchemeLoaded] = React.useState(false);
  const { open } = useDisclaimerDialogStore();

  // Zustand state for DB initialization
  const { isDbReady, initializeDb, dbError } = useGameManagerStore((state) => ({
    isDbReady: state.isDbReady,
    initializeDb: state.initialize,
    dbError: state.error,
  }));

  // Consent management
  const { isSdkInitialized, prepareConsentInfo } = useConsentStore();

  React.useEffect(() => {
    if (!isDbReady) {
      initializeDb();
    }
  }, [isDbReady, initializeDb]);

  React.useEffect(() => {
    if (Platform.OS === 'android') {
      setAndroidNavigationBar('light');
    }
    if (Platform.OS === 'web') {
      document.documentElement.classList.add('bg-background');
    }

    setIsColorSchemeLoaded(true);
  }, [colorScheme]);

  // Hide splash screen once DB is initialized (or errored) and color scheme is ready
  React.useEffect(() => {
    if ((isDbReady || dbError) && isColorSchemeLoaded) {
      SplashScreen.hideAsync();
    }
  }, [isDbReady, dbError, isColorSchemeLoaded]);

  // Initialize consent management
  React.useEffect(() => {
    if (!isSdkInitialized && isDbReady) {
      prepareConsentInfo();
    }
  }, [isSdkInitialized, isDbReady, prepareConsentInfo]);

  // Show disclaimer on first launch after DB and SDK are ready
  React.useEffect(() => {
    let cancelled = false;
    const maybeShowDisclaimer = async () => {
      try {
        if (isDbReady && isSdkInitialized) {
          const settings = await getOrCreateAppSettings();
          if (!cancelled && !settings.hasFictionDisclaimerAck) {
            open();
          }
        }
      } catch {
        // Fail silently; we'll try again next session
      }
    };
    void maybeShowDisclaimer();
    return () => {
      cancelled = true;
    };
  }, [isDbReady, isSdkInitialized, open]);

  // Initialize diagnostics gate from persisted flags when ready
  React.useEffect(() => {
    let cancelled = false;
    const initDiagnostics = async () => {
      try {
        if (isDbReady) {
          const { diagnosticsEnabled, analyticsEnabled } = await getPrivacyFlags();
          if (!cancelled) {
            gateSetDiagnosticsEnabled(diagnosticsEnabled);
            analyticsSetEnabled(analyticsEnabled);
            analyticsInitIfEnabled();
          }
        }
      } catch {
        // no-op
      }
    };
    void initDiagnostics();
    return () => {
      cancelled = true;
    };
  }, [isDbReady]);

  if ((!isDbReady && !dbError) || !isColorSchemeLoaded || !isSdkInitialized) {
    return null;
  }

  // If DB initialization failed critically, show an error message
  if (dbError && !isDbReady) {
    return (
      <ThemeProvider value={isDarkColorScheme ? DARK_THEME : LIGHT_THEME}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
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
    <ThemeProvider value={isDarkColorScheme ? DARK_THEME : LIGHT_THEME}>
      <DatabaseProvider database={database}>
        <BottomSheetModalProvider>
          <StatusBar style={isDarkColorScheme ? 'light' : 'dark'} />
          <DisclaimerModal />
          <Stack>
            <Stack.Screen
              name="index"
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="privacy"
              options={{
                title: 'Privacy',
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
