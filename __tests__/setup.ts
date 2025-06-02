// Mock the native SQLite dispatcher to use Node.js version
jest.mock(
  "@nozbe/watermelondb/adapters/sqlite/makeDispatcher/index.native.js",
  () => {
    return jest.requireActual(
      "@nozbe/watermelondb/adapters/sqlite/makeDispatcher/index.js"
    );
  }
);

// Add global fail function for older Jest compatibility
global.fail = (message?: string) => {
  throw new Error(message || "Test failed");
};

// ═══════════════════════════════════════════════════════════════════════════════
// Suppress WatermelonDB setup + Model Invalid JSON logs
// ═══════════════════════════════════════════════════════════════════════════════

// Store original console.log
const originalConsoleLog = console.log;
const originalConsoleWarn = console.warn;
const originalConsoleError = console.error;

// Suppress only WatermelonDB setup logs
console.log = (...args: any[]) => {
  const message = args.join(" ");

  // Filter out WatermelonDB logs (they start with 🍉)
  if (message.includes("[🍉]")) {
    return;
  }

  originalConsoleLog(...args);
};

// Suppress expected validation warnings during tests
console.warn = (...args: any[]) => {
  const message = args.join(" ");
  if (
    message.includes("Invalid data structure found in DB") ||
    message.includes("Situation.content getter:")
  ) {
    return;
  }
  originalConsoleWarn(...args);
};

// Suppress expected parsing errors during tests
console.error = (...args: any[]) => {
  const message = args.join(" ");
  if (
    message.includes("Error parsing") ||
    message.includes("Invalid JSON string:") ||
    message.includes("Invalid OutcomeSnapshot data:")
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
