import { situationsData } from "~/lib/data/situations";
import {
  SituationType,
  CabinetStaticId,
  SubgroupStaticId,
  PublicationStaticId,
  AnswerType,
} from "~/types";

// ═══════════════════════════════════════════════════════════════════════════════
// GENERATION-SPECIFIC DISTRIBUTION ANALYSIS
// ═══════════════════════════════════════════════════════════════════════════════

// Types moved to root types.ts
import type {
  SituationOverview,
  EntityPreferenceAnalysis,
  EntityOutcomeAnalysis,
  PublicationAnalysis,
  GenerationAnalysis
} from "./types";

/**
 * Analyzes distribution specifically for generation context
 * - Filters out governance situations
 * - Filters out authorized preferences
 * - Includes publication distribution
 * - Removes situation lists from entity analysis for cleaner output
 */
export function generationAnalysis(): GenerationAnalysis {
  // Initialize situation analysis (filtering out governance)
  const situationsByType: Record<SituationType, number> = {} as Record<
    SituationType,
    number
  >;
  const situationsList: SituationOverview[] = [];

  // Initialize all situation types with 0 (excluding governance)
  (Object.keys(SituationType) as Array<keyof typeof SituationType>).forEach(
    (key) => {
      const type = SituationType[key];
      if (type !== SituationType.Governance) {
        situationsByType[type] = 0;
      }
    }
  );

  // Initialize entity preference tracking
  const presidentPreferences: EntityPreferenceAnalysis = {
    appearanceCount: 0,
    preferenceTypes: {} as Record<AnswerType, number>,
  };

  const cabinetPreferences: Record<CabinetStaticId, EntityPreferenceAnalysis> =
    {} as Record<CabinetStaticId, EntityPreferenceAnalysis>;
  Object.values(CabinetStaticId).forEach((id) => {
    cabinetPreferences[id] = {
      appearanceCount: 0,
      preferenceTypes: {} as Record<AnswerType, number>,
    };
  });

  // Initialize entity outcome tracking
  const cabinetOutcomes: Record<CabinetStaticId, EntityOutcomeAnalysis> =
    {} as Record<CabinetStaticId, EntityOutcomeAnalysis>;
  Object.values(CabinetStaticId).forEach((id) => {
    cabinetOutcomes[id] = {
      appearanceCount: 0,
    };
  });

  const subgroupOutcomes: Record<SubgroupStaticId, EntityOutcomeAnalysis> =
    {} as Record<SubgroupStaticId, EntityOutcomeAnalysis>;
  Object.values(SubgroupStaticId).forEach((id) => {
    subgroupOutcomes[id] = {
      appearanceCount: 0,
    };
  });

  // Initialize publication tracking
  const publicationCounts: Record<PublicationStaticId, number> = {} as Record<
    PublicationStaticId,
    number
  >;
  Object.values(PublicationStaticId).forEach((id) => {
    publicationCounts[id] = 0;
  });

  // Initialize all answer types with 0 for preferences (excluding authorized)
  Object.values(AnswerType).forEach((answerType) => {
    if (answerType !== AnswerType.Authorized) {
      presidentPreferences.preferenceTypes[answerType] = 0;
      Object.values(CabinetStaticId).forEach((id) => {
        cabinetPreferences[id].preferenceTypes[answerType] = 0;
      });
    }
  });

  // Process each situation (filtering out governance)
  situationsData.forEach((situation) => {
    // Skip governance situations as requested
    if (situation.type === SituationType.Governance) return;

    // Count situation types
    const currentCount = situationsByType[situation.type as SituationType] ?? 0;
    situationsByType[situation.type as SituationType] = currentCount + 1;

    // Add to situations list
    situationsList.push({
      id: situation.trigger.staticKey,
      title: situation.title,
      description: situation.description,
      type: situation.type as SituationType,
    });

    // Analyze president preferences (excluding authorized)
    if (
      situation.content.preferences.president &&
      situation.content.preferences.president.answerType !==
        AnswerType.Authorized
    ) {
      presidentPreferences.appearanceCount++;
      const answerType = situation.content.preferences.president.answerType;
      presidentPreferences.preferenceTypes[answerType]++;
    }

    // Analyze cabinet preferences (excluding authorized)
    if (situation.content.preferences.cabinet) {
      Object.entries(situation.content.preferences.cabinet).forEach(
        ([cabinetId, pref]) => {
          const id = cabinetId as CabinetStaticId;
          if (
            pref?.preference &&
            pref.preference.answerType !== AnswerType.Authorized
          ) {
            cabinetPreferences[id].appearanceCount++;
            const answerType = pref.preference.answerType;
            cabinetPreferences[id].preferenceTypes[answerType]++;
          }
        }
      );
    }

    // Analyze outcomes - track which entities are affected
    const cabinetInSituation = new Set<CabinetStaticId>();
    const subgroupsInSituation = new Set<SubgroupStaticId>();

    situation.content.outcomes.forEach((outcome) => {
      // Check cabinet members in approval changes
      if (outcome.consequences.approvalChanges.cabinet) {
        Object.keys(outcome.consequences.approvalChanges.cabinet).forEach(
          (cabinetId) => {
            const id = cabinetId as CabinetStaticId;
            cabinetInSituation.add(id);
          }
        );
      }

      // Check subgroups in approval changes
      if (outcome.consequences.approvalChanges.subgroups) {
        Object.keys(outcome.consequences.approvalChanges.subgroups).forEach(
          (subgroupId) => {
            const id = subgroupId as SubgroupStaticId;
            subgroupsInSituation.add(id);
          }
        );
      }
    });

    // Update cabinet outcome tracking (only count once per situation)
    cabinetInSituation.forEach((cabinetId) => {
      cabinetOutcomes[cabinetId].appearanceCount++;
    });

    // Update subgroup outcome tracking (only count once per situation)
    subgroupsInSituation.forEach((subgroupId) => {
      subgroupOutcomes[subgroupId].appearanceCount++;
    });

    // Analyze publication distribution from exchanges
    situation.exchanges.forEach((exchange) => {
      const publicationId = exchange.publication as PublicationStaticId;
      if (publicationCounts[publicationId] !== undefined) {
        publicationCounts[publicationId]++;
      }
    });
  });

  // Calculate publication percentages
  const totalExchanges = Object.values(publicationCounts).reduce(
    (sum, count) => sum + count,
    0
  );

  const publications: Record<PublicationStaticId, PublicationAnalysis> =
    {} as Record<PublicationStaticId, PublicationAnalysis>;
  Object.entries(publicationCounts).forEach(([publicationId, count]) => {
    const id = publicationId as PublicationStaticId;
    publications[id] = {
      appearanceCount: count,
      percentage: totalExchanges > 0 ? (count / totalExchanges) * 100 : 0,
    };
  });

  return {
    situations: {
      totalCount: situationsList.length,
      byType: situationsByType as Record<SituationType, number>,
      list: situationsList,
    },
    entityPreferences: {
      president: presidentPreferences,
      cabinet: cabinetPreferences,
    },
    entityOutcomes: {
      cabinet: cabinetOutcomes,
      subgroups: subgroupOutcomes,
    },
    publications,
  };
}
