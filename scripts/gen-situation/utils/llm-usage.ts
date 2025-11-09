import type { ResponseUsage } from 'openai/resources/responses/responses';

export type PriceEntry = {
  inputPerM: number;
  outputPerM: number;
  cachedInputPerM?: number;
  reasoningOutputPerM?: number;
};

// Central price table (update as needed)
export const PRICES: Record<string, PriceEntry> = {
  // GPT‑5 family
  'gpt-5': { inputPerM: 1.25, outputPerM: 10.0, cachedInputPerM: 0.125 },
  'gpt-5-mini': { inputPerM: 0.25, outputPerM: 2.0, cachedInputPerM: 0.025 },
  'gpt-5-nano': { inputPerM: 0.05, outputPerM: 0.4, cachedInputPerM: 0.005 },

  // GPT‑4o family (Standard tier)
  'gpt-4o': { inputPerM: 2.5, outputPerM: 10.0, cachedInputPerM: 1.25 },
  'gpt-4o-mini': { inputPerM: 0.15, outputPerM: 0.6, cachedInputPerM: 0.075 },
};

export function normalizeModelForPricing(model: string): keyof typeof PRICES {
  const m = (model || '').toLowerCase();
  if (m.startsWith('gpt-5-nano')) return 'gpt-5-nano';
  if (m.startsWith('gpt-5-mini')) return 'gpt-5-mini';
  if (m.startsWith('gpt-5')) return 'gpt-5';
  if (m.startsWith('gpt-4o-mini')) return 'gpt-4o-mini';
  if (m.startsWith('gpt-4o')) return 'gpt-4o';
  return 'gpt-5';
}

export function computeUsageCost(usage: ResponseUsage | undefined, model: string) {
  if (!usage) return { inputCost: 0, outputCost: 0, total: 0 };
  const key = normalizeModelForPricing(model);
  const p = PRICES[key];

  const input = usage.input_tokens ?? 0;
  const output = usage.output_tokens ?? 0;
  const cached = usage.input_tokens_details?.cached_tokens ?? 0;
  const uncached = Math.max(0, input - cached);

  const inputCost =
    (uncached / 1_000_000) * p.inputPerM +
    (cached / 1_000_000) * (p.cachedInputPerM ?? p.inputPerM);

  const outputCost = (output / 1_000_000) * p.outputPerM;
  const total = inputCost + outputCost;

  return { inputCost, outputCost, total };
}
