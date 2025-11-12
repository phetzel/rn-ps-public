export function initSentry(): void {
  try {
    const Sentry = require('sentry-expo');

    const Constants = require('expo-constants').default;

    const Application = require('expo-application');
    const extra = (Constants?.expoConfig?.extra ?? Constants?.manifest?.extra ?? {}) as {
      sentryDsn?: string;
      env?: string;
    };
    const appVersion: string =
      (Constants?.expoConfig?.version as string | undefined) ||
      Application?.nativeApplicationVersion ||
      '0.0.0';
    const appId: string =
      Application?.applicationId ||
      // Fallback to bundle identifier if available in config at runtime
      ((Constants?.expoConfig as any)?.ios?.bundleIdentifier as string | undefined) ||
      'unknown.app';
    const nativeBuildVersion: string = Application?.nativeBuildVersion || '0';
    const environment: string = extra?.env || 'development';
    const release = `${appId}@${appVersion}+${nativeBuildVersion}`;

    Sentry.init({
      dsn: extra?.sentryDsn,
      enableInExpoDevelopment: true,
      debug: __DEV__,
      tracesSampleRate: 1.0,
      environment,
      release,
      dist: nativeBuildVersion,
      beforeSend(event: unknown): unknown {
        // Basic PII scrubbing for user-entered text and identifiers
        try {
          const e = event as any;
          // Remove direct user identification
          if (e.user) {
            delete e.user.email;
            delete e.user.username;
            delete e.user.ip_address;
          }
          // Remove request headers/cookies if present
          if (e.request) {
            if (e.request.headers) {
              delete e.request.headers.Authorization;
              delete e.request.headers.Cookie;
            }
            delete e.request.cookies;
          }
          // Redact values matching email/phone patterns in breadcrumbs and extras
          const emailRe = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi;
          const phoneRe = /\+?\d[\d\s().-]{7,}\d/g;
          const redactString = (val: unknown) =>
            typeof val === 'string'
              ? val.replace(emailRe, '[redacted]').replace(phoneRe, '[redacted]')
              : val;
          const redactObject = (obj: any) => {
            if (!obj || typeof obj !== 'object') return;
            for (const key of Object.keys(obj)) {
              const v = obj[key];
              if (typeof v === 'string') obj[key] = redactString(v);
              else if (typeof v === 'object') redactObject(v);
            }
          };
          if (Array.isArray(e.breadcrumbs)) {
            for (const b of e.breadcrumbs) {
              if (b?.message) b.message = redactString(b.message);
              if (b?.data) redactObject(b.data);
            }
          }
          if (e.extra) redactObject(e.extra);
          if (e.tags) redactObject(e.tags);
          return e;
        } catch {
          return event;
        }
      },
    });
  } catch {
    // Sentry not installed or environment not ready; noop
  }
}
