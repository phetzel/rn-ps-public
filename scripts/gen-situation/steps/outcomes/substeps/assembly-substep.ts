import { assembleOutcomes } from "../../../utils";
import type { AssemblySubStepInput, AssemblySubStepOutput } from "../types";

// ═══════════════════════════════════════════════════════════════════════════════
// ASSEMBLY SUB-STEP IMPLEMENTATION
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * Phase 3: Assemble final outcomes
 * 
 * This sub-step takes the narratives and impact matrix and combines them
 * into the final API-compatible outcomes structure. No LLM generation needed.
 */
export class AssemblySubStep {
  
  /**
   * Execute the assembly step
   */
  async execute(input: AssemblySubStepInput): Promise<AssemblySubStepOutput> {
    this.validateInput(input);
    
    console.log("🎯 Step 3c: Assembling final outcomes...");
    
    const finalOutcomes = assembleOutcomes(
      input.plan,
      input.narratives,
      input.impactMatrix
    );
    
    console.log(`✅ Assembled ${finalOutcomes.outcomes.length} complete outcomes`);
    
    return finalOutcomes;
  }

  /**
   * Validate input
   */
  private validateInput(input: AssemblySubStepInput): void {
    if (!input.plan) {
      throw new Error("Assembly sub-step requires a situation plan");
    }
    
    if (!input.narratives) {
      throw new Error("Assembly sub-step requires narratives result");
    }
    
    if (!input.impactMatrix) {
      throw new Error("Assembly sub-step requires impact matrix result");
    }
    
    if (!input.narratives.outcomes?.length) {
      throw new Error("Assembly sub-step requires outcome narratives");
    }
    
    if (!input.impactMatrix.entityImpacts?.length) {
      throw new Error("Assembly sub-step requires entity impacts");
    }
  }
}