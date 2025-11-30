// Extend Jest matchers with custom matchers
declare global {
  namespace jest {
    interface Matchers<R> {
      toHavePathname(pathname: string): R;
    }
  }
}

export {};
