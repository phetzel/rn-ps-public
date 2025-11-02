import { database } from "~/lib/db";
import { appSettingsCollection } from "~/lib/db/helpers/collections";
import type AppSetting from "~/lib/db/models/AppSetting";

export async function getOrCreateAppSettings(): Promise<AppSetting> {
  const all = await appSettingsCollection.query().fetch();
  if (all.length > 0) return all[0];

  return await database.write(async () => {
    const created = await appSettingsCollection.create((s) => {
      s.hasFictionDisclaimerAck = false;
      s.fictionDisclaimerAcknowledgedAt = null;
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


