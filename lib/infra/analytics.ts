import Constants from 'expo-constants';

let analyticsEnabledInMemory = false;
let isInitialized = false;
let posthogRef: any | null = null;

export function setEnabled(enabled: boolean): void {
  analyticsEnabledInMemory = enabled;
  // If disabling after init, attempt to shutdown/reset the SDK
  if (!enabled && isInitialized && posthogRef) {
    try {
      if (typeof posthogRef.shutdown === 'function') {
        posthogRef.shutdown();
      } else if (typeof posthogRef.reset === 'function') {
        posthogRef.reset();
      } else if (typeof posthogRef.optOut === 'function') {
        posthogRef.optOut();
      }
    } catch {
      // ignore
    } finally {
      isInitialized = false;
      posthogRef = null;
    }
  }
}

export function initIfEnabled(): void {
  if (isInitialized) return;
  if (!analyticsEnabledInMemory) return;
  const analyticsKey =
    (Constants as any)?.expoConfig?.extra?.analyticsKey ??
    (Constants as any)?.manifest?.extra?.analyticsKey;
  const analyticsHost =
    (Constants as any)?.expoConfig?.extra?.analyticsHost ??
    (Constants as any)?.manifest?.extra?.analyticsHost;
  if (!analyticsKey) return;

  // Load PostHog RN SDK safely to avoid crashes if not installed locally
  let lib: any;
  try {
    lib = require('posthog-react-native');
  } catch {
    return; // SDK not installed in this environment; skip
  }
  const PH: any = lib?.default ?? lib?.PostHog ?? lib;
  if (!PH || typeof PH.init !== 'function') return;

  try {
    PH.init(analyticsKey, {
      host: analyticsHost || 'https://us.i.posthog.com',
      // Keep autocapture/session replay off by default for privacy and performance
      autocapture: false,
      enableSessionReplay: false,
      captureApplicationLifecycleEvents: true,
      enable: true,
    });
    posthogRef = PH;
    isInitialized = true;
  } catch {
    posthogRef = null;
    isInitialized = false;
  }
}

export function track(_event: string, _props?: Record<string, unknown>): void {
  if (!analyticsEnabledInMemory || !isInitialized) return;
  try {
    posthogRef?.capture?.(_event, _props ?? {});
  } catch {
    // ignore
  }
}

export function setUser(_id?: string, _props?: Record<string, unknown>): void {
  if (!analyticsEnabledInMemory || !isInitialized) return;
  try {
    if (_id) {
      posthogRef?.identify?.(_id, _props ?? {});
    }
  } catch {
    // ignore
  }
}

export function flush(): void {
  if (!analyticsEnabledInMemory || !isInitialized) return;
  try {
    posthogRef?.flush?.();
  } catch {
    // ignore
  }
}
