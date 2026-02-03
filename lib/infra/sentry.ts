// eslint-disable-next-line sonarjs/slow-regex -- simple redaction heuristic on internal strings
const EMAIL_RE = /\b[^\s@]+@[^\s@]+\.[^\s@]+\b/g;
const PHONE_RE = /\+?\d[\d\s().-]{7,}\d/g;

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
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports -- optional dependency at runtime
    const Sentry = require('@sentry/react-native');
    // eslint-disable-next-line @typescript-eslint/no-require-imports -- optional dependency at runtime
    const Constants = require('expo-constants').default;
    // eslint-disable-next-line @typescript-eslint/no-require-imports -- optional dependency at runtime
    const { isDiagnosticsEnabled } = require('./diagnosticsGate') as {
      isDiagnosticsEnabled: () => boolean;
    };
    // eslint-disable-next-line @typescript-eslint/no-require-imports -- optional dependency at runtime
    const Application = require('expo-application');

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
