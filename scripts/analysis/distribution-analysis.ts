import { situationsData } from "~/lib/data/situations";
import {
  SituationType,
  CabinetStaticId,
  SubgroupStaticId,
  AnswerType,
} from "~/types";
import { getMetadataSection } from "../util/file-utils";

// ═══════════════════════════════════════════════════════════════════════════════
// INTERFACES
// ═══════════════════════════════════════════════════════════════════════════════

export interface SituationOverview {
  id: string;
  title: string;
  description: string;
  type: SituationType;
}

export interface EntityPreferenceAnalysis {
  appearanceCount: number;
  preferenceTypes: Record<AnswerType, number>;
  situationsList: string[];
}

export interface EntityOutcomeAnalysis {
  appearanceCount: number;
  situationsList: string[];
}

export interface DistributionAnalysis {
  situations: {
    totalCount: number;
    byType: Record<SituationType, number>;
    list: SituationOverview[];
  };
  entityPreferences: {
    president: EntityPreferenceAnalysis;
    cabinet: Record<CabinetStaticId, EntityPreferenceAnalysis>;
  };
  entityOutcomes: {
    cabinet: Record<CabinetStaticId, EntityOutcomeAnalysis>;
    subgroups: Record<SubgroupStaticId, EntityOutcomeAnalysis>;
  };
}

// ═══════════════════════════════════════════════════════════════════════════════
// ANALYSIS FUNCTIONS
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * Analyzes the distribution of situations, entity preferences, and entity outcomes
 */
export function analyzeDistribution(): DistributionAnalysis {
  // Initialize situation analysis
  const situationsByType: Record<SituationType, number> = {} as Record<
    SituationType,
    number
  >;
  const situationsList: SituationOverview[] = [];

  // Initialize all situation types with 0
  (Object.keys(SituationType) as Array<keyof typeof SituationType>).forEach(
    (key) => {
      const type = SituationType[key];
      situationsByType[type] = 0;
    }
  );

  // Initialize entity preference tracking
  const presidentPreferences: EntityPreferenceAnalysis = {
    appearanceCount: 0,
    preferenceTypes: {} as Record<AnswerType, number>,
    situationsList: [],
  };

  const cabinetPreferences: Record<CabinetStaticId, EntityPreferenceAnalysis> =
    {} as Record<CabinetStaticId, EntityPreferenceAnalysis>;
  Object.values(CabinetStaticId).forEach((id) => {
    cabinetPreferences[id] = {
      appearanceCount: 0,
      preferenceTypes: {} as Record<AnswerType, number>,
      situationsList: [],
    };
  });

  // Initialize entity outcome tracking
  const cabinetOutcomes: Record<CabinetStaticId, EntityOutcomeAnalysis> =
    {} as Record<CabinetStaticId, EntityOutcomeAnalysis>;
  Object.values(CabinetStaticId).forEach((id) => {
    cabinetOutcomes[id] = {
      appearanceCount: 0,
      situationsList: [],
    };
  });

  const subgroupOutcomes: Record<SubgroupStaticId, EntityOutcomeAnalysis> =
    {} as Record<SubgroupStaticId, EntityOutcomeAnalysis>;
  Object.values(SubgroupStaticId).forEach((id) => {
    subgroupOutcomes[id] = {
      appearanceCount: 0,
      situationsList: [],
    };
  });

  // Initialize all answer types with 0 for preferences
  Object.values(AnswerType).forEach((answerType) => {
    presidentPreferences.preferenceTypes[answerType] = 0;
    Object.values(CabinetStaticId).forEach((id) => {
      cabinetPreferences[id].preferenceTypes[answerType] = 0;
    });
  });

  // Process each situation
  situationsData.forEach((situation) => {
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

    // Analyze president preferences
    if (situation.content.preferences.president) {
      presidentPreferences.appearanceCount++;
      presidentPreferences.situationsList.push(situation.title);

      const answerType = situation.content.preferences.president.answerType;
      presidentPreferences.preferenceTypes[answerType]++;
    }

    // Analyze cabinet preferences
    if (situation.content.preferences.cabinet) {
      Object.entries(situation.content.preferences.cabinet).forEach(
        ([cabinetId, pref]) => {
          const id = cabinetId as CabinetStaticId;
          if (pref?.preference) {
            cabinetPreferences[id].appearanceCount++;
            cabinetPreferences[id].situationsList.push(situation.title);

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
      cabinetOutcomes[cabinetId].situationsList.push(situation.title);
    });

    // Update subgroup outcome tracking (only count once per situation)
    subgroupsInSituation.forEach((subgroupId) => {
      subgroupOutcomes[subgroupId].appearanceCount++;
      subgroupOutcomes[subgroupId].situationsList.push(situation.title);
    });
  });

  return {
    situations: {
      totalCount: situationsData.length,
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
  };
}

/**
 * Generates markdown content for distribution analysis
 */
export function generateDistributionMarkdown(): string {
  const analysis = analyzeDistribution();
  const metadata = getMetadataSection(analysis.situations.totalCount);

  let content = `${metadata}

# Situation Distribution Analysis

## 📊 Overview

**Total Situations:** ${analysis.situations.totalCount}

### Situations by Type

| Type | Count | Percentage |
|------|-------|------------|`;

  // Add situation type breakdown
  (Object.keys(SituationType) as Array<keyof typeof SituationType>).forEach(
    (key) => {
      const type = SituationType[key];
      const count = analysis.situations.byType[type];
      const percentage =
        analysis.situations.totalCount > 0
          ? ((count / analysis.situations.totalCount) * 100).toFixed(1)
          : "0.0";
      content += `\n| ${type} | ${count} | ${percentage}% |`;
    }
  );

  content += `\n\n### All Situations

| Title | Type | Description | Static Key |
|-------|------|-------------|------------|`;

  analysis.situations.list.forEach((situation) => {
    content += `\n| ${situation.title} | ${situation.type} | ${situation.description} | ${situation.id} |`;
  });

  // Entity Preferences Section
  content += `\n\n## 🏛️ Entity Preference Analysis

### President Preferences

**Appearances:** ${analysis.entityPreferences.president.appearanceCount}/${analysis.situations.totalCount} situations

**Preference Types:**
`;

  Object.entries(analysis.entityPreferences.president.preferenceTypes).forEach(
    ([answerType, count]) => {
      if (count > 0) {
        content += `- **${answerType}:** ${count} times\n`;
      }
    }
  );

  content += `\n### Cabinet Member Preferences

| Cabinet Member | Appearances | Preference Types |
|----------------|-------------|------------------|`;

  Object.entries(analysis.entityPreferences.cabinet).forEach(
    ([cabinetId, data]) => {
      const preferenceTypesStr =
        Object.entries(data.preferenceTypes)
          .filter(([, count]) => count > 0)
          .map(([type, count]) => `${type}(${count})`)
          .join(", ") || "None";

      content += `\n| ${cabinetId} | ${data.appearanceCount} | ${preferenceTypesStr} |`;
    }
  );

  // Entity Outcomes Section
  content += `\n\n## 🎯 Entity Outcome Analysis

### Cabinet Members in Outcomes

| Cabinet Member | Affected In | Percentage | Situations |
|----------------|-------------|------------|------------|`;

  Object.entries(analysis.entityOutcomes.cabinet).forEach(
    ([cabinetId, data]) => {
      const percentage =
        analysis.situations.totalCount > 0
          ? (
              (data.appearanceCount / analysis.situations.totalCount) *
              100
            ).toFixed(1)
          : "0.0";
      const situationsStr = data.situationsList.join(", ") || "None";

      content += `\n| ${cabinetId} | ${data.appearanceCount}/${analysis.situations.totalCount} | ${percentage}% | ${situationsStr} |`;
    }
  );

  content += `\n\n### Subgroups in Outcomes

| Subgroup | Affected In | Percentage | Situations |
|----------|-------------|------------|------------|`;

  Object.entries(analysis.entityOutcomes.subgroups).forEach(
    ([subgroupId, data]) => {
      const percentage =
        analysis.situations.totalCount > 0
          ? (
              (data.appearanceCount / analysis.situations.totalCount) *
              100
            ).toFixed(1)
          : "0.0";
      const situationsStr = data.situationsList.join(", ") || "None";

      content += `\n| ${subgroupId} | ${data.appearanceCount}/${analysis.situations.totalCount} | ${percentage}% | ${situationsStr} |`;
    }
  );

  content += `\n\n---
*Generated on ${new Date().toLocaleString()}*
`;

  return content;
}
