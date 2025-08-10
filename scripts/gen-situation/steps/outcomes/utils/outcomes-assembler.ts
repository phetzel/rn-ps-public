import { CabinetStaticId, SubgroupStaticId } from "~/types";
import type { SituationPlan, ApiOutcomes } from "../../../schemas";
import type {
  OutcomesNarrativesResult,
  ImpactMatrixResult,
} from "../../../schemas";

// ═══════════════════════════════════════════════════════════════════════════════
// OUTCOMES ASSEMBLER UTILITY
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * Assemble final outcomes from narratives and impact matrix
 *
 * Takes the narrative outcomes and impact matrix from the 3-phase generation
 * and combines them into the final ApiOutcomes format that's compatible with
 * the existing system.
 */
export function assembleOutcomes(
  plan: SituationPlan,
  narratives: OutcomesNarrativesResult,
  impactMatrix: ImpactMatrixResult
): ApiOutcomes {
  const outcomes = narratives.outcomes.map((narrative) => {
    // Build consequences from impact matrix
    const cabinetImpacts: Array<{
      member: CabinetStaticId;
      impact: "15" | "10" | "5" | "0" | "-5" | "-10" | "-15";
    }> = [];
    const subgroupImpacts: Array<{
      group: SubgroupStaticId;
      impact: "15" | "10" | "5" | "0" | "-5" | "-10" | "-15";
    }> = [];

    // Extract impacts for this outcome from the matrix
    impactMatrix.entityImpacts.forEach((entityImpact) => {
      const outcomeImpact = entityImpact.outcomeImpacts.find(
        (impact) => impact.outcomeId === narrative.id
      );
      if (outcomeImpact && outcomeImpact.impact !== "0") {
        // Determine if this is a cabinet member or subgroup
        if (
          plan.involvedEntities.cabinetMembers.includes(
            entityImpact.entityId as CabinetStaticId
          )
        ) {
          cabinetImpacts.push({
            member: entityImpact.entityId as CabinetStaticId,
            impact: outcomeImpact.impact,
          });
        } else if (
          plan.involvedEntities.subgroups.includes(
            entityImpact.entityId as SubgroupStaticId
          )
        ) {
          subgroupImpacts.push({
            group: entityImpact.entityId as SubgroupStaticId,
            impact: outcomeImpact.impact,
          });
        }
      }
    });

    return {
      id: narrative.id,
      title: narrative.title,
      description: narrative.description,
      weight: narrative.weight,
      consequences: {
        cabinet: cabinetImpacts,
        subgroups: subgroupImpacts,
      },
    };
  });

  return { outcomes };
}
