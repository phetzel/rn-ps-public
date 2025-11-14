import Constants from 'expo-constants';
import { useRouter } from 'expo-router';
import * as React from 'react';
import { Linking, Platform, ScrollView, View } from 'react-native';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from '~/components/ui/alert-dialog';
import { Button } from '~/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '~/components/ui/card';
import { Separator } from '~/components/ui/separator';
import { Text } from '~/components/ui/text';
import {
  getPrivacyFlags,
  setAnalyticsEnabled as persistAnalyticsEnabled,
  setDiagnosticsEnabled as persistDiagnosticsEnabled,
} from '~/lib/db/helpers/appSettings';
import { resetAppData } from '~/lib/db/helpers/resetAppData';
import { Info } from '~/lib/icons/Info';
import { Settings } from '~/lib/icons/Settings';
import { Shield } from '~/lib/icons/Shield';
import { Trash2 } from '~/lib/icons/Trash2';
import { Users } from '~/lib/icons/Users';
import {
  initIfEnabled as analyticsInitIfEnabled,
  setEnabled as analyticsSetEnabled,
} from '~/lib/infra/analytics';
import { setDiagnosticsEnabled as gateSetDiagnosticsEnabled } from '~/lib/infra/diagnosticsGate';
import { useConsentStore } from '~/lib/stores/consentStore';
import { useGameManagerStore } from '~/lib/stores/gameManagerStore';

export function PrivacyScreen() {
  const { showPrivacyOptions } = useConsentStore();
  const router = useRouter();
  const { initialize } = useGameManagerStore((s) => ({ initialize: s.initialize }));

  // Local UI state for toggles; persistence is added in a later task
  const [diagnosticsEnabled, setDiagnosticsEnabled] = React.useState<boolean>(true);
  const [analyticsEnabled, setAnalyticsEnabled] = React.useState<boolean>(false);
  const [isResetOpen, setIsResetOpen] = React.useState<boolean>(false);

  const extra = ((Constants?.expoConfig?.extra as any) ??
    (Constants?.manifest?.extra as any) ??
    {}) as { privacyPolicyUrl?: string; termsUrl?: string };
  const privacyPolicyUrl = extra?.privacyPolicyUrl || 'https://example.com/privacy';
  const termsUrl = extra?.termsUrl || 'https://example.com/terms';

  React.useEffect(() => {
    let cancelled = false;
    const load = async () => {
      try {
        const flags = await getPrivacyFlags();
        if (!cancelled) {
          setDiagnosticsEnabled(flags.diagnosticsEnabled);
          setAnalyticsEnabled(flags.analyticsEnabled);
        }
      } catch {
        // no-op
      }
    };
    void load();
    return () => {
      cancelled = true;
    };
  }, []);

  const openIosPrivacySettings = async () => {
    if (Platform.OS === 'ios') {
      try {
        await Linking.openSettings();
      } catch {
        // no-op
      }
    }
  };

  const handleOpenPolicy = async (url: string) => {
    try {
      await Linking.openURL(url);
    } catch {
      // no-op
    }
  };

  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <Card className="mb-4">
        <CardHeader>
          <CardTitle accessibilityRole="header">Privacy controls</CardTitle>
          <CardDescription>Manage data sharing, consent, and local game data</CardDescription>
        </CardHeader>
        <CardContent className="gap-3">
          <View className="gap-2">
            <Text className="font-semibold">Data sharing</Text>
            <View className="flex-row gap-2">
              <Button
                variant={diagnosticsEnabled ? 'default' : 'outline'}
                className="flex-row"
                onPress={async () => {
                  const next = !diagnosticsEnabled;
                  setDiagnosticsEnabled(next);
                  try {
                    await persistDiagnosticsEnabled(next);
                    gateSetDiagnosticsEnabled(next);
                  } catch {
                    // restore previous on failure
                    setDiagnosticsEnabled(!next);
                  }
                }}
                accessibilityLabel="Share diagnostics and crash reports"
                accessibilityState={{ checked: diagnosticsEnabled }}
              >
                <Shield className="mr-2 text-background" />
                <Text>{diagnosticsEnabled ? 'Diagnostics: On' : 'Diagnostics: Off'}</Text>
              </Button>
              <Button
                variant={analyticsEnabled ? 'default' : 'outline'}
                className="flex-row"
                onPress={async () => {
                  const next = !analyticsEnabled;
                  setAnalyticsEnabled(next);
                  try {
                    await persistAnalyticsEnabled(next);
                    analyticsSetEnabled(next);
                    if (next) {
                      analyticsInitIfEnabled();
                    }
                  } catch {
                    setAnalyticsEnabled(!next);
                  }
                }}
                accessibilityLabel="Share anonymous analytics"
                accessibilityState={{ checked: analyticsEnabled }}
              >
                <Users className="mr-2 text-background" />
                <Text>{analyticsEnabled ? 'Analytics: On' : 'Analytics: Off'}</Text>
              </Button>
            </View>
          </View>

          <Separator className="my-2" />

          <View className="gap-2">
            <Text className="font-semibold">Advertising & tracking</Text>
            <View className="flex-row gap-2">
              <Button
                variant="secondary"
                className="flex-row"
                onPress={showPrivacyOptions}
                accessibilityLabel="Manage ad and tracking consent"
                accessibilityHint="Open consent options to update advertising and tracking choices"
              >
                <Settings className="mr-2 text-secondary-foreground" />
                <Text>Manage ad & tracking consent</Text>
              </Button>
              {Platform.OS === 'ios' && (
                <Button
                  variant="outline"
                  className="flex-row"
                  onPress={openIosPrivacySettings}
                  accessibilityLabel="Open iOS Privacy settings"
                  accessibilityHint="Change tracking permission in iOS Settings"
                >
                  <Info className="mr-2 text-foreground" />
                  <Text>iOS Privacy settings</Text>
                </Button>
              )}
            </View>
          </View>

          <Separator className="my-2" />

          <View className="gap-2">
            <Text className="font-semibold">Manage data</Text>
            <Button
              variant="destructive"
              className="flex-row"
              onPress={() => setIsResetOpen(true)}
              accessibilityLabel="Reset game data"
              accessibilityHint="Deletes local game data and settings"
            >
              <Trash2 className="mr-2 text-background" />
              <Text>Reset game data</Text>
            </Button>
            <AlertDialog open={isResetOpen}>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle accessibilityRole="header">Reset game data?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This will permanently delete your local game data and settings on this device.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <View className="flex-row gap-2">
                  <Button variant="outline" onPress={() => setIsResetOpen(false)}>
                    <Text>Cancel</Text>
                  </Button>
                  <AlertDialogAction
                    onPress={async () => {
                      try {
                        await resetAppData();
                        // Refresh gates to defaults after reset
                        const flags = await getPrivacyFlags();
                        gateSetDiagnosticsEnabled(flags.diagnosticsEnabled);
                        analyticsSetEnabled(flags.analyticsEnabled);
                        if (flags.analyticsEnabled) analyticsInitIfEnabled();
                        // Reinitialize DB-connected state and return to home
                        await initialize();
                        router.replace('/');
                      } finally {
                        setIsResetOpen(false);
                      }
                    }}
                  >
                    <Text>Delete data</Text>
                  </AlertDialogAction>
                </View>
              </AlertDialogContent>
            </AlertDialog>
          </View>

          <Separator className="my-2" />

          <View className="gap-2">
            <Text className="font-semibold">Documents</Text>
            <View className="flex-row gap-2">
              <Button
                variant="ghost"
                onPress={() => handleOpenPolicy(privacyPolicyUrl)}
                accessibilityLabel="Open Privacy Policy"
              >
                <Text>Privacy Policy</Text>
              </Button>
              <Button
                variant="ghost"
                onPress={() => handleOpenPolicy(termsUrl)}
                accessibilityLabel="Open Terms of Service"
              >
                <Text>Terms of Service</Text>
              </Button>
            </View>
          </View>
        </CardContent>
      </Card>
    </ScrollView>
  );
}
