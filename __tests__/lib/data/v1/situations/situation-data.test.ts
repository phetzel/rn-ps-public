import { situationsData } from "~/lib/data/situations/v1";

describe("Static Situation Data", () => {
  test("situations data is properly exported", () => {
    expect(Array.isArray(situationsData)).toBe(true);
    expect(situationsData.length).toBeGreaterThan(0);
  });

  test("no duplicate situation data objects", () => {
    const seen = new Set();
    situationsData.forEach((situation, index) => {
      const key = `${situation.trigger.staticKey}-${situation.type}`;
      expect(seen.has(key)).toBe(false);
      seen.add(key);
    });
  });

  // Import and run other test suites
  require("./schema-validation.test");
  // We'll add these in follow-up files:
  require("./business-rules.test");
  require("./cross-reference.test");
});
