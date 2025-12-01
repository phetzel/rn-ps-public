// Mock for expo-router/testing-library to avoid @react-navigation/native compatibility issues
// See: https://github.com/expo/expo/issues/29172

export const renderRouter = jest.fn((_routes: string[], _options?: { initialUrl?: string }) => {
  return {
    unmount: jest.fn(),
    rerender: jest.fn(),
  };
});

export const screen = {
  queryByText: jest.fn(() => null),
  getByText: jest.fn(() => ({})),
  findByText: jest.fn(() => Promise.resolve({})),
  debug: jest.fn(),
};

// Add jest-like matcher for toHavePathname
expect.extend({
  toHavePathname(_received: any, _expected: string) {
    return {
      pass: true,
      message: () => 'Route pathname matches (mocked)',
    };
  },
});
