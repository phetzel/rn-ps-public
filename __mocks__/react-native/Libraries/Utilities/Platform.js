// Mock Platform module for Jest tests
module.exports = {
  OS: 'ios',
  Version: 18,
  isTV: false,
  isTesting: true,
  isPad: false,
  isVision: false,
  select: (obj) => obj.ios ?? obj.default ?? obj.native,
  constants: {
    reactNativeVersion: { major: 0, minor: 81, patch: 5 },
  },
};
