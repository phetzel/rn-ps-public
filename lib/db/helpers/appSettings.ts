import { database } from '~/lib/db';
import { appSettingsCollection } from '~/lib/db/helpers/collections';

import type AppSetting from '~/lib/db/models/AppSetting';

export async function getOrCreateAppSettings(): Promise<AppSetting> {
  const all = await appSettingsCollection.query().fetch();
  if (all.length > 0) return all[0];

  return await database.write(async () => {
    const created = await appSettingsCollection.create((s) => {
      s.hasFictionDisclaimerAck = false;
      s.fictionDisclaimerAcknowledgedAt = null;
      // Defaults for new installs:
      // Diagnostics enabled (crash reports) on; Analytics off until provider chosen
      // These may be overridden by UI toggles later.
      s.diagnosticsEnabled = true;
      s.analyticsEnabled = false;
    });
    return created;
  });
}

export async function acknowledgeFictionDisclaimer(): Promise<void> {
  await database.write(async () => {
    const settings = await getOrCreateAppSettings();
    await settings.update((s) => {
      s.hasFictionDisclaimerAck = true;
      s.fictionDisclaimerAcknowledgedAt = Math.floor(Date.now() / 1000);
    });
  });
}

export async function getPrivacyFlags(): Promise<{
  diagnosticsEnabled: boolean;
  analyticsEnabled: boolean;
}> {
  const settings = await getOrCreateAppSettings();
  const diagnosticsEnabled =
    settings.diagnosticsEnabled === null || settings.diagnosticsEnabled === undefined
      ? true
      : !!settings.diagnosticsEnabled;
  const analyticsEnabled =
    settings.analyticsEnabled === null || settings.analyticsEnabled === undefined
      ? false
      : !!settings.analyticsEnabled;
  return { diagnosticsEnabled, analyticsEnabled };
}

export async function setDiagnosticsEnabled(value: boolean): Promise<void> {
  await database.write(async () => {
    const settings = await getOrCreateAppSettings();
    await settings.update((s) => {
      s.diagnosticsEnabled = value;
    });
  });
}

export async function setAnalyticsEnabled(value: boolean): Promise<void> {
  await database.write(async () => {
    const settings = await getOrCreateAppSettings();
    await settings.update((s) => {
      s.analyticsEnabled = value;
    });
  });
}
