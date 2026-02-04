import { isDiagnosticsEnabled } from '~/lib/infra/diagnosticsGate';
import { optionalRequire } from '~/lib/infra/optionalModule';

import type * as SentryModule from '@sentry/react-native';
import type * as ExpoApplicationModule from 'expo-application';
import type * as ExpoConstantsModule from 'expo-constants';

const EMAIL_RE = /\b[A-Za-z0-9._%+-]{1,64}@[A-Za-z0-9.-]{1,253}\.[A-Za-z]{2,24}\b/g;
const PHONE_RE = /\+?\d[\d().\-\s]{7,}\d/g;

const sanitizeString = (value: string): string =>
  value.replace(EMAIL_RE, '[redacted]').replace(PHONE_RE, '[redacted]');

const redactObject = (value: unknown, visited = new WeakSet<object>()): void => {
  if (!value || typeof value !== 'object') return;
  if (visited.has(value)) return;
  visited.add(value);

  const record = value as Record<string, unknown>;
  for (const key of Object.keys(record)) {
    const entry = record[key];
    if (typeof entry === 'string') {
      record[key] = sanitizeString(entry);
    } else if (typeof entry === 'object') {
      redactObject(entry, visited);
    }
  }
};

const scrubBreadcrumb = (breadcrumb: unknown): unknown => {
  if (!breadcrumb || typeof breadcrumb !== 'object') return breadcrumb;
  const record = breadcrumb as Record<string, unknown>;

  if (typeof record.message === 'string') {
    record.message = sanitizeString(record.message);
  }
  if (record.data) {
    redactObject(record.data);
  }

  return record;
};

const scrubEvent = (event: unknown): unknown => {
  if (!event || typeof event !== 'object') return event;
  const record = event as Record<string, unknown>;

  const user = record.user;
  if (user && typeof user === 'object') {
    const userRecord = user as Record<string, unknown>;
    delete userRecord.email;
    delete userRecord.username;
    delete userRecord.ip_address;
  }

  const request = record.request;
  if (request && typeof request === 'object') {
    const requestRecord = request as Record<string, unknown>;
    const headers = requestRecord.headers;
    if (headers && typeof headers === 'object') {
      const headerRecord = headers as Record<string, unknown>;
      delete headerRecord.Authorization;
      delete headerRecord.Cookie;
    }
    delete requestRecord.cookies;
  }

  const breadcrumbs = record.breadcrumbs;
  if (Array.isArray(breadcrumbs)) {
    for (const breadcrumb of breadcrumbs) {
      scrubBreadcrumb(breadcrumb);
    }
  }

  if (record.extra) redactObject(record.extra);
  if (record.tags) redactObject(record.tags);

  return record;
};

export function initSentry(): void {
  const Sentry = optionalRequire<typeof SentryModule>('@sentry/react-native');
  const constantsModule = optionalRequire<typeof ExpoConstantsModule>('expo-constants');
  const Application = optionalRequire<typeof ExpoApplicationModule>('expo-application');
  const Constants = constantsModule?.default;

  if (!Sentry || !Constants) {
    return;
  }

  try {
    const manifest = Constants?.manifest as { extra?: unknown } | undefined;
    const extra = (Constants?.expoConfig?.extra ?? manifest?.extra ?? {}) as {
      sentryDsn?: string;
      env?: string;
    };
    const expoConfig = Constants?.expoConfig as { ios?: { bundleIdentifier?: string } } | undefined;

    const appVersion: string =
      (Constants?.expoConfig?.version as string | undefined) ||
      Application?.nativeApplicationVersion ||
      '0.0.0';
    const appId: string =
      Application?.applicationId || expoConfig?.ios?.bundleIdentifier || 'unknown.app';
    const nativeBuildVersion: string = Application?.nativeBuildVersion || '0';
    const environment: string = extra?.env || 'development';
    const release = `${appId}@${appVersion}+${nativeBuildVersion}`;

    Sentry.init({
      dsn: extra?.sentryDsn,
      debug: __DEV__,
      tracesSampleRate: 1.0,
      environment,
      release,
      dist: nativeBuildVersion,
      beforeBreadcrumb(breadcrumb: unknown): unknown {
        try {
          return scrubBreadcrumb(breadcrumb);
        } catch {
          return breadcrumb;
        }
      },
      beforeSend(event: unknown): unknown {
        try {
          if (!isDiagnosticsEnabled()) {
            return null;
          }
        } catch {
          // ignore and continue to scrub
        }
        try {
          return scrubEvent(event);
        } catch {
          return event;
        }
      },
    });
  } catch {
    // Sentry not installed or environment not ready; noop
  }
}
