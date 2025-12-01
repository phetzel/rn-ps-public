import { formatDate, calculateTableColumnWidths } from '~/lib/utils';

describe('formatDate', () => {
  it('formats date correctly with consistent format', () => {
    expect(formatDate(3, 2024)).toBe('Month 3, Year 2024');
    expect(formatDate(12, 2025)).toBe('Month 12, Year 2025');
    expect(formatDate(1, 1)).toBe('Month 1, Year 1');
  });

  it('handles edge cases', () => {
    expect(formatDate(1, 2024)).toBe('Month 1, Year 2024');
    expect(formatDate(12, 2024)).toBe('Month 12, Year 2024');
  });
});

describe('calculateTableColumnWidths', () => {
  it('calculates column widths for 3 columns (Name + 2 data)', () => {
    const result = calculateTableColumnWidths(3);
    expect(result.name).toBe('50%');
    expect(result.data).toBe('25%');
  });

  it('calculates column widths for 4 columns (Name + 3 data)', () => {
    const result = calculateTableColumnWidths(4);
    expect(result.name).toBe('40%');
    expect(result.data).toBe('20%');
  });

  it('calculates column widths for 5 columns (Name + 4 data)', () => {
    const result = calculateTableColumnWidths(5);
    expect(result.name).toBe('50%');
    expect(result.data).toBe('25%');
  });

  it('handles minimum column count (2 columns)', () => {
    const result = calculateTableColumnWidths(2);
    expect(result.name).toBe('60%');
    expect(result.data).toBe('40%');
  });

  it('handles large column count (6 columns)', () => {
    const result = calculateTableColumnWidths(6);
    expect(result.name).toBe('50%');
    expect(result.data).toBe('25%');
  });

  it('ensures name column uses expected widths based on column count', () => {
    expect(calculateTableColumnWidths(2).name).toBe('60%');
    expect(calculateTableColumnWidths(3).name).toBe('50%');
    expect(calculateTableColumnWidths(4).name).toBe('40%');
    expect(calculateTableColumnWidths(5).name).toBe('50%');
    expect(calculateTableColumnWidths(6).name).toBe('50%');
  });

  it('returns consistent data column widths for each case', () => {
    // 2 columns case
    const result2 = calculateTableColumnWidths(2);
    expect(result2.data).toBe('40%');

    // 3 columns case
    const result3 = calculateTableColumnWidths(3);
    expect(result3.data).toBe('25%');

    // 4 columns case
    const result4 = calculateTableColumnWidths(4);
    expect(result4.data).toBe('20%');

    // Default case (5+ columns)
    const result5 = calculateTableColumnWidths(5);
    expect(result5.data).toBe('25%');
  });
});
