import Constants from 'expo-constants';

let analyticsEnabledInMemory = false;
let isInitialized = false;

export function setEnabled(enabled: boolean): void {
  analyticsEnabledInMemory = enabled;
  // If we had a provider, we'd initialize/teardown here.
}

export function initIfEnabled(): void {
  if (isInitialized) return;
  if (!analyticsEnabledInMemory) return;
  const analyticsKey =
    (Constants?.expoConfig?.extra as any)?.analyticsKey ??
    (Constants?.manifest?.extra as any)?.analyticsKey;
  if (!analyticsKey) return;
  // Initialize provider here in the future (PostHog/Amplitude/Segment)
  isInitialized = true;
}

export function track(_event: string, _props?: Record<string, unknown>): void {
  if (!analyticsEnabledInMemory || !isInitialized) return;
  // send event to provider
}

export function setUser(_id?: string, _props?: Record<string, unknown>): void {
  if (!analyticsEnabledInMemory || !isInitialized) return;
  // set user context
}

export function flush(): void {
  if (!analyticsEnabledInMemory || !isInitialized) return;
  // flush events
}
