import Constants from 'expo-constants';
import { useRouter } from 'expo-router';
import * as React from 'react';
import { Linking, Platform, ScrollView, View } from 'react-native';

import { Info } from '~/components/icons/Info';
import { Settings } from '~/components/icons/Settings';
import { Shield } from '~/components/icons/Shield';
import { Trash2 } from '~/components/icons/Trash2';
import { Users } from '~/components/icons/Users';
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
import {
  initIfEnabled as analyticsInitIfEnabled,
  setEnabled as analyticsSetEnabled,
} from '~/lib/infra/analytics';
import { setDiagnosticsEnabled as gateSetDiagnosticsEnabled } from '~/lib/infra/diagnosticsGate';
import { useConsentStore } from '~/lib/stores/consentStore';
import { useDisclaimerDialogStore } from '~/lib/stores/disclaimerDialogStore';
import { useGameManagerStore } from '~/lib/stores/gameManagerStore';

// --- Subcomponents ---

function DataSharingSection({
  diagnosticsEnabled,
  setDiagnosticsEnabled,
  analyticsEnabled,
  setAnalyticsEnabled,
}: {
  diagnosticsEnabled: boolean;
  setDiagnosticsEnabled: (val: boolean) => void;
  analyticsEnabled: boolean;
  setAnalyticsEnabled: (val: boolean) => void;
}) {
  const toggleDiagnostics = async () => {
    const next = !diagnosticsEnabled;
    setDiagnosticsEnabled(next);
    try {
      await persistDiagnosticsEnabled(next);
      gateSetDiagnosticsEnabled(next);
    } catch {
      setDiagnosticsEnabled(!next);
    }
  };

  const toggleAnalytics = async () => {
    const next = !analyticsEnabled;
    setAnalyticsEnabled(next);
    try {
      await persistAnalyticsEnabled(next);
      analyticsSetEnabled(next);
      if (next) analyticsInitIfEnabled();
    } catch {
      setAnalyticsEnabled(!next);
    }
  };

  return (
    <View className="gap-2">
      <Text className="font-semibold">Data sharing</Text>
      <View className="gap-2">
        <Button
          variant={diagnosticsEnabled ? 'default' : 'outline'}
          className="w-full flex-row justify-start"
          onPress={toggleDiagnostics}
          accessibilityLabel="Share diagnostics and crash reports"
          accessibilityState={{ checked: diagnosticsEnabled }}
        >
          <Shield
            className={`mr-2 ${diagnosticsEnabled ? 'text-background' : 'text-foreground'}`}
          />
          <Text>{diagnosticsEnabled ? 'Diagnostics: On' : 'Diagnostics: Off'}</Text>
        </Button>
        <Button
          variant={analyticsEnabled ? 'default' : 'outline'}
          className="w-full flex-row justify-start"
          onPress={toggleAnalytics}
          accessibilityLabel="Share anonymous analytics"
          accessibilityState={{ checked: analyticsEnabled }}
        >
          <Users className={`mr-2 ${analyticsEnabled ? 'text-background' : 'text-foreground'}`} />
          <Text>{analyticsEnabled ? 'Analytics: On' : 'Analytics: Off'}</Text>
        </Button>
      </View>
    </View>
  );
}

function AdvertisingSection({
  showPrivacyOptions,
  formAvailable,
  loadFlags,
}: {
  showPrivacyOptions: () => Promise<void>;
  formAvailable: boolean;
  loadFlags: () => Promise<void>;
}) {
  const openIosPrivacySettings = async () => {
    if (Platform.OS === 'ios') {
      try {
        await Linking.openSettings();
      } catch {
        // no-op
      }
    }
  };

  return (
    <View className="gap-2">
      <Text className="font-semibold">Advertising & tracking</Text>
      <View className="gap-2">
        <Button
          variant="secondary"
          className="w-full flex-row justify-start"
          onPress={async () => {
            await showPrivacyOptions();
            await loadFlags();
          }}
          disabled={!formAvailable}
          accessibilityLabel="Manage ad and tracking consent"
          accessibilityState={{ disabled: !formAvailable }}
        >
          <Settings className="mr-2 text-secondary-foreground" />
          <Text>Manage ad & tracking consent</Text>
        </Button>

        {Platform.OS === 'ios' && (
          <Button
            variant="outline"
            className="w-full flex-row justify-start"
            onPress={openIosPrivacySettings}
            accessibilityLabel="Open iOS Privacy settings"
          >
            <Info className="mr-2 text-foreground" />
            <Text>iOS Privacy settings</Text>
          </Button>
        )}

        {!formAvailable && (
          <Text className="text-xs text-muted-foreground">
            Consent options are unavailable in your region right now. We&apos;ll show them here as
            soon as Google UMP provides the form.
          </Text>
        )}
      </View>
    </View>
  );
}

function ManageDataSection({ onReset }: { onReset: () => void }) {
  const [isResetOpen, setIsResetOpen] = React.useState(false);

  return (
    <View className="gap-2">
      <Text className="font-semibold">Manage data</Text>
      <Button
        variant="destructive"
        className="w-full flex-row justify-start"
        onPress={() => setIsResetOpen(true)}
        accessibilityLabel="Reset game data"
      >
        <Trash2 className="mr-2 text-background" />
        <Text>Reset game data</Text>
      </Button>

      <AlertDialog open={isResetOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Reset game data?</AlertDialogTitle>
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
                setIsResetOpen(false);
                onReset();
              }}
            >
              <Text>Delete data</Text>
            </AlertDialogAction>
          </View>
        </AlertDialogContent>
      </AlertDialog>
    </View>
  );
}

function DocumentsSection({
  openDisclaimer,
  privacyPolicyUrl,
  termsUrl,
}: {
  openDisclaimer: () => void;
  privacyPolicyUrl: string;
  termsUrl: string;
}) {
  const openUrl = async (url: string) => {
    try {
      await Linking.openURL(url);
    } catch {
      // no-op
    }
  };

  return (
    <View className="gap-2">
      <Text className="font-semibold">Documents</Text>
      <View className="gap-2">
        <Button
          variant="ghost"
          className="w-full flex-row justify-start"
          onPress={openDisclaimer}
          accessibilityLabel="View Legal Disclaimer"
        >
          <Text>Legal Disclaimer</Text>
        </Button>
        <Button
          variant="ghost"
          className="w-full flex-row justify-start"
          onPress={() => openUrl(privacyPolicyUrl)}
          accessibilityLabel="Open Privacy Policy"
        >
          <Text>Privacy Policy</Text>
        </Button>
        <Button
          variant="ghost"
          className="w-full flex-row justify-start"
          onPress={() => openUrl(termsUrl)}
          accessibilityLabel="Open Terms of Service"
        >
          <Text>Terms of Service</Text>
        </Button>
      </View>
    </View>
  );
}

// --- Main Component ---

export function PrivacyScreen() {
  const { showPrivacyOptions, formAvailable } = useConsentStore();
  const { open: openDisclaimer } = useDisclaimerDialogStore();
  const router = useRouter();
  const { initialize } = useGameManagerStore((s) => ({ initialize: s.initialize }));

  const [diagnosticsEnabled, setDiagnosticsEnabled] = React.useState<boolean>(true);
  const [analyticsEnabled, setAnalyticsEnabled] = React.useState<boolean>(false);

  // Fix for TS error by safely accessing extra
  const extra = (Constants.expoConfig?.extra ?? (Constants.manifest as any)?.extra ?? {}) as {
    privacyPolicyUrl?: string;
    termsUrl?: string;
  };
  const privacyPolicyUrl = extra?.privacyPolicyUrl || 'https://example.com/privacy';
  const termsUrl = extra?.termsUrl || 'https://example.com/terms';

  const loadFlags = React.useCallback(async () => {
    try {
      const flags = await getPrivacyFlags();
      setDiagnosticsEnabled(flags.diagnosticsEnabled);
      setAnalyticsEnabled(flags.analyticsEnabled);
    } catch {
      // no-op
    }
  }, []);

  React.useEffect(() => {
    void loadFlags();
  }, [loadFlags]);

  const handleReset = async () => {
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
    } catch (e) {
      console.error('Reset failed', e);
    }
  };

  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <Card className="mb-4">
        <CardHeader>
          <CardTitle accessibilityRole="header">Privacy controls</CardTitle>
          <CardDescription>Manage data sharing, consent, and local game data</CardDescription>
        </CardHeader>
        <CardContent className="gap-4">
          <DataSharingSection
            diagnosticsEnabled={diagnosticsEnabled}
            setDiagnosticsEnabled={setDiagnosticsEnabled}
            analyticsEnabled={analyticsEnabled}
            setAnalyticsEnabled={setAnalyticsEnabled}
          />

          <Separator />

          <AdvertisingSection
            showPrivacyOptions={showPrivacyOptions}
            formAvailable={formAvailable}
            loadFlags={loadFlags}
          />

          <Separator />

          <ManageDataSection onReset={handleReset} />

          <Separator />

          <DocumentsSection
            openDisclaimer={openDisclaimer}
            privacyPolicyUrl={privacyPolicyUrl}
            termsUrl={termsUrl}
          />
        </CardContent>
      </Card>
    </ScrollView>
  );
}
