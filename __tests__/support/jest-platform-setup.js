/* global jest */
// This file runs BEFORE modules are loaded (via setupFiles, not setupFilesAfterEnv)
// It ensures Platform.select is available before any component code loads

jest.mock('react-native/Libraries/Utilities/Platform', () => ({
  OS: 'ios',
  Version: 18,
  isTV: false,
  isTesting: true,
  select: (obj) => obj.ios ?? obj.default ?? obj.native,
  constants: {
    reactNativeVersion: { major: 0, minor: 81, patch: 5 },
  },
}));

// Mock react-native-css-interop to avoid NativeWind compatibility issues in tests
jest.mock('react-native-css-interop', () => ({
  cssInterop: jest.fn(),
  remapProps: jest.fn(),
  createInteropElement: jest.fn((Component) => Component),
  useColorScheme: jest.fn(() => ({ colorScheme: 'light' })),
  vars: jest.fn(() => ({})),
}));

// Mock NativeWind's third-party lib wrappers
jest.mock(
  'react-native-css-interop/dist/runtime/third-party-libs/react-native-safe-area-context.native',
  () => ({
    __esModule: true,
    maybeHijackSafeAreaProvider: jest.fn(),
    default: jest.fn(),
  }),
);

jest.mock('react-native-css-interop/dist/runtime/wrap-jsx', () => ({
  __esModule: true,
  default: jest.fn((Component) => Component),
}));
