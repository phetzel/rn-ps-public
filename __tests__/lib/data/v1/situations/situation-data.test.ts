import { situationsData } from "~/lib/data/situations";

describe("Static Situation Data", () => {
  test("situations data is properly exported", () => {
    expect(Array.isArray(situationsData)).toBe(true);
    expect(situationsData.length).toBeGreaterThan(0);
  });
});
