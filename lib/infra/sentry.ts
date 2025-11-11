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
        // Scrub or mutate event here if needed
        return event;
      },
    });
  } catch {
    // Sentry not installed or environment not ready; noop
  }
}
