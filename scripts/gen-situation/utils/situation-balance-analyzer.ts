import {
  SituationType,
  CabinetStaticId,
  SubgroupStaticId,
  PublicationStaticId,
} from "~/types";
import { GenerationAnalysis } from "./generation-analysis";

// ═══════════════════════════════════════════════════════════════════════════════
// SITUATION BALANCE ANALYZER - TRANSFORMS RAW ANALYSIS INTO STRATEGIC REQUIREMENTS
// ═══════════════════════════════════════════════════════════════════════════════

export interface StrategicRequirements {
  targetSituationType: SituationType;
  existingSituationsOfType: Array<{
    id: string;
    title: string;
    description: string;
  }>;
  entityBalance: {
    cabinet: {
      underRepresented: CabinetStaticId[];
      overRepresented: CabinetStaticId[];
    };
    subgroups: {
      underRepresented: SubgroupStaticId[];
      overRepresented: SubgroupStaticId[];
    };
    publications: {
      underRepresented: PublicationStaticId[];
    };
  };
}

/**
 * Analyzes raw generation data and returns strategic requirements
 */
export function analyzeStrategicRequirements(
  analysis: GenerationAnalysis
): StrategicRequirements {
  // Find situation type with lowest count (excluding governance)
  const validTypes = Object.entries(analysis.situations.byType).filter(
    ([type]) => type !== SituationType.Governance
  );

  const minCount = Math.min(...validTypes.map(([, count]) => count));
  const targetType = validTypes.find(
    ([, count]) => count === minCount
  )![0] as SituationType;

  // Get all situations of target type
  const existingSituationsOfType = analysis.situations.list
    .filter((situation) => situation.type === targetType)
    .map((situation) => ({
      id: situation.id,
      title: situation.title,
      description: situation.description,
    }));

  // Calculate entity balance
  const entityBalance = calculateEntityBalance(analysis);

  return {
    targetSituationType: targetType,
    existingSituationsOfType,
    entityBalance,
  };
}

/**
 * Calculate under/over represented entities based on averages
 */
function calculateEntityBalance(analysis: GenerationAnalysis) {
  // Cabinet balance
  const cabinetCounts = Object.values(analysis.entityOutcomes.cabinet).map(
    (entity) => entity.appearanceCount
  );
  const cabinetAverage =
    cabinetCounts.reduce((sum, count) => sum + count, 0) / cabinetCounts.length;

  const underRepresentedCabinet: CabinetStaticId[] = [];
  const overRepresentedCabinet: CabinetStaticId[] = [];

  Object.entries(analysis.entityOutcomes.cabinet).forEach(([id, data]) => {
    const cabinetId = id as CabinetStaticId;
    if (data.appearanceCount < cabinetAverage * 0.8) {
      underRepresentedCabinet.push(cabinetId);
    } else if (data.appearanceCount > cabinetAverage * 1.2) {
      overRepresentedCabinet.push(cabinetId);
    }
  });

  // Subgroup balance
  const subgroupCounts = Object.values(analysis.entityOutcomes.subgroups).map(
    (entity) => entity.appearanceCount
  );
  const subgroupAverage =
    subgroupCounts.reduce((sum, count) => sum + count, 0) /
    subgroupCounts.length;

  const underRepresentedSubgroups: SubgroupStaticId[] = [];
  const overRepresentedSubgroups: SubgroupStaticId[] = [];

  Object.entries(analysis.entityOutcomes.subgroups).forEach(([id, data]) => {
    const subgroupId = id as SubgroupStaticId;
    if (data.appearanceCount < subgroupAverage * 0.8) {
      underRepresentedSubgroups.push(subgroupId);
    } else if (data.appearanceCount > subgroupAverage * 1.2) {
      overRepresentedSubgroups.push(subgroupId);
    }
  });

  // Publication balance (only under-represented)
  const publicationCounts = Object.values(analysis.publications).map(
    (pub) => pub.appearanceCount
  );
  const publicationAverage =
    publicationCounts.reduce((sum, count) => sum + count, 0) /
    publicationCounts.length;

  const underRepresentedPublications: PublicationStaticId[] = [];

  Object.entries(analysis.publications).forEach(([id, data]) => {
    const publicationId = id as PublicationStaticId;
    if (data.appearanceCount < publicationAverage * 0.8) {
      underRepresentedPublications.push(publicationId);
    }
  });

  return {
    cabinet: {
      underRepresented: underRepresentedCabinet,
      overRepresented: overRepresentedCabinet,
    },
    subgroups: {
      underRepresented: underRepresentedSubgroups,
      overRepresented: overRepresentedSubgroups,
    },
    publications: {
      underRepresented: underRepresentedPublications,
    },
  };
}
