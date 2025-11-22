import type { SeverityLevel } from '@sentry/core';

type ReportOptions = {
  level?: SeverityLevel;
  tags?: Record<string, string>;
  extras?: Record<string, unknown>;
};

export function reportError(error: unknown, options?: ReportOptions): void {
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const Sentry = require('sentry-expo');
    if (options?.tags || options?.extras || options?.level) {
      Sentry.Native.withScope(
        (scope: {
          setLevel: (level: SeverityLevel) => void;
          setTags: (tags: Record<string, string>) => void;
          setExtras: (extras: Record<string, unknown>) => void;
        }) => {
          if (options?.level) scope.setLevel(options.level);
          if (options?.tags) scope.setTags(options.tags);
          if (options?.extras) scope.setExtras(options.extras);
          Sentry.Native.captureException(error);
        },
      );
    } else {
      Sentry.Native.captureException(error);
    }
  } catch {
    // Sentry not available; noop
  }
}
