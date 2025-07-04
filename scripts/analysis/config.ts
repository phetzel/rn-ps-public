// =============================================================================
// ANALYSIS CONFIGURATION
// =============================================================================

export const ANALYSIS_CONFIG = {
  outputDir: "scripts/analysis-output",

  // Control which analysis types run
  reportTypes: {
    entity: ["president", "subgroups", "media"],
    situationData: ["situations", "exchanges", "preferences", "outcomes"],
    balance: ["situation-balance"],
  },
} as const;

// =============================================================================
// ANALYSIS TYPES
// =============================================================================

// Analysis metadata and reporting interfaces
export interface AnalysisMetadata {
  generatedAt: Date;
  totalSituations: number;
  version: string;
  analysisType: string;
}

export interface AnalysisReport {
  metadata: AnalysisMetadata;
  content: string;
  summary?: AnalysisSummary;
}

export interface AnalysisSummary {
  totalItems: number;
  issuesFound: number;
  warningsFound: number;
  status: "healthy" | "warning" | "critical";
  recommendations: string[];
}

// Base interface for all analyzers
export interface BaseAnalyzerInterface {
  analysisType: string;
  run(): AnalysisReport;
}

// Shared analysis result interfaces
export interface DistributionAnalysis {
  total: number;
  distribution: Record<string, number>;
  percentages: Record<string, number>;
  idealPercentage: number;
  variance: Record<string, number>;
}

export interface BalanceAnalysis {
  positiveCount: number;
  negativeCount: number;
  neutralCount: number;
  ratio: number;
  status: "balanced" | "too-positive" | "too-negative";
}

export interface CoverageAnalysis {
  totalPossible: number;
  covered: number;
  uncovered: number;
  percentage: number;
  status: "excellent" | "good" | "moderate" | "poor";
}

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

// Type for analysis report names
export type EntityReportType =
  (typeof ANALYSIS_CONFIG.reportTypes.entity)[number];
export type SituationDataReportType =
  (typeof ANALYSIS_CONFIG.reportTypes.situationData)[number];
export type BalanceReportType =
  (typeof ANALYSIS_CONFIG.reportTypes.balance)[number];

// Helper to check if a specific analysis should run
export function shouldRunAnalysis(
  category: keyof typeof ANALYSIS_CONFIG.reportTypes,
  analysisName: string
): boolean {
  const reportList = ANALYSIS_CONFIG.reportTypes[category];
  return (reportList as readonly string[]).includes(analysisName);
}

// Helper to get all enabled analyses
export function getEnabledAnalyses(): string[] {
  return [
    ...ANALYSIS_CONFIG.reportTypes.entity,
    ...ANALYSIS_CONFIG.reportTypes.situationData,
    ...ANALYSIS_CONFIG.reportTypes.balance,
  ];
}
