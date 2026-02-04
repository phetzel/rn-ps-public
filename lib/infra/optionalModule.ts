type OptionalModuleId =
  | '@amplitude/analytics-react-native'
  | '@sentry/react-native'
  | 'expo-application'
  | 'expo-constants';

const OPTIONAL_MODULE_IDS = new Set<OptionalModuleId>([
  '@amplitude/analytics-react-native',
  '@sentry/react-native',
  'expo-application',
  'expo-constants',
]);

function isAllowedOptionalModule(moduleId: string): moduleId is OptionalModuleId {
  return OPTIONAL_MODULE_IDS.has(moduleId as OptionalModuleId);
}

export function optionalRequire<T>(moduleId: string): T | null {
  if (!isAllowedOptionalModule(moduleId)) {
    return null;
  }

  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports -- centralized optional dependency loader
    return require(moduleId) as T;
  } catch {
    return null;
  }
}
