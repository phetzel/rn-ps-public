// Platform is mocked in jest-platform-setup.js (runs via setupFiles before modules load)

// Mock the native SQLite dispatcher to use Node.js version
jest.mock('@nozbe/watermelondb/adapters/sqlite/makeDispatcher/index.native.js', () => {
  return jest.requireActual('@nozbe/watermelondb/adapters/sqlite/makeDispatcher/index.js');
});

// Add global fail function for older Jest compatibility
global.fail = (message?: string) => {
  throw new Error(message || 'Test failed');
};

// ═══════════════════════════════════════════════════════════════════════════════
// Safe Area Context Mock
// ═══════════════════════════════════════════════════════════════════════════════

jest.mock('react-native-safe-area-context', () => {
  const React = require('react');
  const { View } = require('react-native');

  const insets = { top: 0, right: 0, bottom: 0, left: 0 };
  const frame = { x: 0, y: 0, width: 390, height: 844 };

  return {
    SafeAreaProvider: ({ children }: { children: React.ReactNode }) =>
      React.createElement(View, { style: { flex: 1 } }, children),
    SafeAreaView: ({ children, ...props }: any) => React.createElement(View, props, children),
    useSafeAreaInsets: () => insets,
    useSafeAreaFrame: () => frame,
    initialWindowMetrics: { insets, frame },
    SafeAreaInsetsContext: React.createContext(insets),
    SafeAreaFrameContext: React.createContext(frame),
  };
});

// ═══════════════════════════════════════════════════════════════════════════════
// AdMob and Tracking Mocks
// ═══════════════════════════════════════════════════════════════════════════════

// Mock react-native-google-mobile-ads
jest.mock('react-native-google-mobile-ads', () => ({
  useRewardedAd: jest.fn(() => ({
    isLoaded: false,
    load: jest.fn(),
    show: jest.fn(),
    reward: null,
    isEarnedReward: false,
  })),
  TestIds: {
    REWARDED: 'ca-app-pub-3940256099942544/5224354917',
  },
  AdsConsent: {
    requestInfoUpdate: jest.fn(() =>
      Promise.resolve({
        status: 'NOT_REQUIRED',
        isConsentFormAvailable: false,
      }),
    ),
    getGdprApplies: jest.fn(() => Promise.resolve(false)),
    getConsentInfo: jest.fn(() =>
      Promise.resolve({
        status: 'NOT_REQUIRED',
        canRequestAds: true,
      }),
    ),
    getUserChoices: jest.fn(() =>
      Promise.resolve({
        storeAndAccessInformationOnDevice: true,
        selectBasicAds: true,
      }),
    ),
    gatherConsent: jest.fn(() => Promise.resolve()),
    getPurposeConsents: jest.fn(() => Promise.resolve('1')),
    showForm: jest.fn(() => Promise.resolve()),
  },
  AdsConsentStatus: {
    NOT_REQUIRED: 'NOT_REQUIRED',
    OBTAINED: 'OBTAINED',
    REQUIRED: 'REQUIRED',
    UNKNOWN: 'UNKNOWN',
  },
  default: jest.fn(() => ({
    initialize: jest.fn(() => Promise.resolve()),
  })),
}));

// Mock expo-tracking-transparency
jest.mock('expo-tracking-transparency', () => ({
  requestTrackingPermissionsAsync: jest.fn(() =>
    Promise.resolve({
      status: 'granted',
      canAskAgain: true,
    }),
  ),
  getTrackingPermissionsAsync: jest.fn(() =>
    Promise.resolve({
      status: 'granted',
      canAskAgain: true,
    }),
  ),
}));

// Mock nativewind for tests to avoid _ReactNativeCSSInterop access errors
jest.mock('nativewind', () => ({
  styled: (Component: any) => Component,
  useColorScheme: jest.fn().mockReturnValue({ colorScheme: 'light', toggleColorScheme: jest.fn() }),
  verifyInstallation: jest.fn(),
  cssInterop: jest.fn(),
  createElement: require('react').createElement,
}));

// ═══════════════════════════════════════════════════════════════════════════════
// Suppress WatermelonDB setup + Model Invalid JSON logs
// ═══════════════════════════════════════════════════════════════════════════════

// Store original console.log
const originalConsoleLog = console.log;
const originalConsoleWarn = console.warn;
const originalConsoleError = console.error;

// Suppress only WatermelonDB setup logs
console.log = (...args: any[]) => {
  const message = args.join(' ');

  // Filter out WatermelonDB logs (they start with 🍉)
  if (message.includes('[🍉]')) {
    return;
  }

  originalConsoleLog(...args);
};

// Suppress expected validation warnings during tests
console.warn = (...args: any[]) => {
  const message = args.join(' ');
  if (
    message.includes('Invalid data structure found in DB') ||
    message.includes('Situation.content getter:')
  ) {
    return;
  }
  originalConsoleWarn(...args);
};

// Suppress expected parsing errors during tests
console.error = (...args: any[]) => {
  const message = args.join(' ');
  if (
    message.includes('Error parsing') ||
    message.includes('Invalid JSON string:') ||
    message.includes('Invalid OutcomeSnapshot data:')
  ) {
    return;
  }
  originalConsoleError(...args);
};

// Restore after tests
afterAll(() => {
  console.log = originalConsoleLog;
  console.warn = originalConsoleWarn;
  console.error = originalConsoleError;
});
