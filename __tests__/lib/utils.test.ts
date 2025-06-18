import { formatDate } from "~/lib/utils";

describe("formatDate", () => {
  it("formats date correctly with consistent format", () => {
    expect(formatDate(3, 2024)).toBe("Month 3, Year 2024");
    expect(formatDate(12, 2025)).toBe("Month 12, Year 2025");
    expect(formatDate(1, 1)).toBe("Month 1, Year 1");
  });

  it("handles edge cases", () => {
    expect(formatDate(1, 2024)).toBe("Month 1, Year 2024");
    expect(formatDate(12, 2024)).toBe("Month 12, Year 2024");
  });
});
