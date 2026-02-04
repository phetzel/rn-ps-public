import { optionalRequire } from '~/lib/infra/optionalModule';

import type { SeverityLevel } from '@sentry/core';
import type * as SentryModule from '@sentry/react-native';

type ReportOptions = {
  level?: SeverityLevel;
  tags?: Record<string, string>;
  extras?: Record<string, unknown>;
};

export function reportError(error: unknown, options?: ReportOptions): void {
  const Sentry = optionalRequire<typeof SentryModule>('@sentry/react-native');
  if (!Sentry) return;

  try {
    if (options?.tags || options?.extras || options?.level) {
      Sentry.withScope(
        (scope: {
          setLevel: (level: SeverityLevel) => void;
          setTags: (tags: Record<string, string>) => void;
          setExtras: (extras: Record<string, unknown>) => void;
        }) => {
          if (options?.level) scope.setLevel(options.level);
          if (options?.tags) scope.setTags(options.tags);
          if (options?.extras) scope.setExtras(options.extras);
          Sentry.captureException(error);
        },
      );
    } else {
      Sentry.captureException(error);
    }
  } catch {
    // Sentry not available; noop
  }
}
