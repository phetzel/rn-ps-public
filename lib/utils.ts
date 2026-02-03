import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

import { RiskLevel } from '~/types';

// Tailwind Merge
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Table Column Width Helpers
export function calculateTableColumnWidths(columnCount: number) {
  switch (columnCount) {
    case 4:
      return { name: '40%' as const, data: '20%' as const };
    case 3:
      return { name: '50%' as const, data: '25%' as const };
    case 2:
      return { name: '60%' as const, data: '40%' as const };
    default:
      return { name: '50%' as const, data: '25%' as const };
  }
}

// UI Display Helpers
export function getRiskTextColor(risk: RiskLevel): string {
  const colors = {
    safe: 'text-green-700',
    low: 'text-yellow-700',
    medium: 'text-orange-700',
    high: 'text-red-700',
  };
  return colors[risk];
}

export const getRiskDescription = (riskLevel: RiskLevel): string => {
  switch (riskLevel) {
    case 'safe':
      return 'No risk';
    case 'low':
      return 'Low risk';
    case 'medium':
      return 'Medium risk';
    case 'high':
      return 'High risk';
    default:
      return 'Unknown risk';
  }
};

export function formatRiskProbability(probability: number): string {
  return `${Math.round(probability * 100)}%`;
}

// Date Formatting Helper
export function formatDate(month: number, year: number): string {
  return `Month ${month}, Year ${year}`;
}
