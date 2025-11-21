import Constants from 'expo-constants';

type AmplitudeModule = typeof import('@amplitude/analytics-react-native');
type AmplitudeClient = ReturnType<AmplitudeModule['createInstance']>;
type IdentifyConstructor = AmplitudeModule['Identify'];
type IdentifyInstance = IdentifyConstructor extends new (...args: any) => infer R ? R : never;
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
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    amplitudeModule = require('@amplitude/analytics-react-native') as AmplitudeModule;
  } catch {
    amplitudeModule = null;
  }
  return amplitudeModule;
}

function getExtra(key: string): string | undefined {
  return (Constants as any)?.expoConfig?.extra?.[key] ?? (Constants as any)?.manifest?.extra?.[key];
}

export function setEnabled(enabled: boolean): void {
  analyticsEnabledInMemory = enabled;
  if (!enabled && isInitialized && amplitudeRef) {
    try {
      amplitudeRef.setOptOut?.(true);
      amplitudeRef.flush?.();
      amplitudeRef.shutdown?.();
    } catch {
      // ignore
    } finally {
      isInitialized = false;
      amplitudeRef = null;
    }
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
