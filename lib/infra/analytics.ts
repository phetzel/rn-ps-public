import Constants from 'expo-constants';

import { optionalRequire } from '~/lib/infra/optionalModule';

type AmplitudeModule = typeof import('@amplitude/analytics-react-native');
type AmplitudeClient = ReturnType<AmplitudeModule['createInstance']> & {
  shutdown?: () => void;
  setOptOut?: (optOut: boolean) => void;
  flush?: () => void;
};
type IdentifyConstructor = AmplitudeModule['Identify'];
type IdentifyInstance = IdentifyConstructor extends new (...args: unknown[]) => infer R ? R : never;
type IdentifyValue = IdentifyInstance extends {
  set: (key: string, value: infer V) => unknown;
}
  ? V
  : unknown;

let analyticsEnabledInMemory = false;
let isInitialized = false;
let amplitudeRef: AmplitudeClient | null = null;
let amplitudeModule: AmplitudeModule | null = null;

function loadAmplitudeModule(): AmplitudeModule | null {
  if (amplitudeModule) return amplitudeModule;
  amplitudeModule = optionalRequire<AmplitudeModule>('@amplitude/analytics-react-native');
  return amplitudeModule;
}

function readExtraValue(source: unknown, key: string): string | undefined {
  if (!source || typeof source !== 'object') return undefined;
  const value = (source as Record<string, unknown>)[key];
  return typeof value === 'string' ? value : undefined;
}

function getExtra(key: string): string | undefined {
  const manifest = (Constants as { manifest?: { extra?: unknown } }).manifest;
  return readExtraValue(Constants.expoConfig?.extra, key) ?? readExtraValue(manifest?.extra, key);
}

export function setEnabled(enabled: boolean): void {
  if (!enabled && isInitialized && amplitudeRef) {
    try {
      amplitudeRef.setOptOut?.(true);
      amplitudeRef.flush?.();
      amplitudeRef.shutdown?.();
    } catch {
      // ignore
    } finally {
      analyticsEnabledInMemory = false;
      isInitialized = false;
      amplitudeRef = null;
    }
  } else {
    analyticsEnabledInMemory = enabled;
  }
}

export function initIfEnabled(): void {
  if (isInitialized) return;
  if (!analyticsEnabledInMemory) return;

  const analyticsKey = getExtra('analyticsKey');
  const analyticsHost = getExtra('analyticsHost');

  if (!analyticsKey) return;

  const module = loadAmplitudeModule();
  if (!module?.createInstance) return;

  try {
    const instance = module.createInstance();
    instance.init(analyticsKey, undefined, {
      serverUrl: analyticsHost,
    });
    amplitudeRef = instance;
    isInitialized = true;
  } catch {
    amplitudeRef = null;
    isInitialized = false;
  }
}

export function track(event: string, props?: Record<string, unknown>): void {
  if (!analyticsEnabledInMemory || !isInitialized || !amplitudeRef) return;
  try {
    amplitudeRef.logEvent?.(event, props ?? {});
  } catch {
    // ignore
  }
}

export function setUser(id?: string, props?: Record<string, unknown>): void {
  if (!analyticsEnabledInMemory || !isInitialized || !amplitudeRef) return;
  try {
    amplitudeRef.setUserId?.(id);

    if (props && Object.keys(props).length > 0) {
      const module = loadAmplitudeModule();
      const IdentifyCtor = module?.Identify as IdentifyConstructor | undefined;
      if (!IdentifyCtor) return;

      const identify = new IdentifyCtor() as IdentifyInstance;
      Object.entries(props).forEach(([key, value]) => {
        if (value !== undefined) {
          identify.set?.(key, value as IdentifyValue);
        }
      });
      amplitudeRef.identify?.(identify);
    }
  } catch {
    // ignore
  }
}

export function flush(): void {
  if (!analyticsEnabledInMemory || !isInitialized || !amplitudeRef) return;
  try {
    amplitudeRef.flush?.();
  } catch {
    // ignore
  }
}
