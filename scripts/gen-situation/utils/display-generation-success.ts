import { GenerationResult } from "../generator";

/**
 * Display the generation results in a clean, formatted way
 */
export function displayGenerationSuccess(result: GenerationResult): void {
  if (!result.success || !result.situation) {
    return;
  }

  console.log("\n✅ Complete Situation Generated!");
  console.log("==================================================");
  console.log(`📋 Title: ${result.situation.plan.title}`);
  console.log(`🏷️  Type: ${result.situation.plan.type}`);
  console.log(`📖 Description: ${result.situation.plan.description}`);
  console.log(`🎯 Reasoning: ${result.situation.plan.reasoning}`);
  console.log(`📦 Involved Entities:`);
  console.log(
    `   Cabinet: ${result.situation.plan.involvedEntities.cabinetMembers.join(
      ", "
    )}`
  );
  console.log(
    `   Subgroups: ${result.situation.plan.involvedEntities.subgroups.join(
      ", "
    )}`
  );
  console.log(
    `   Publications: ${result.situation.plan.involvedEntities.publications.join(
      ", "
    )}`
  );

  if (result.usage) {
    console.log(`\n💰 Total Usage:`);
    console.log(`   Requests: ${result.usage.requests}`);
    console.log(`   Tokens: ${result.usage.totalTokens}`);
    console.log(`   Cost: $${result.usage.totalCost.toFixed(4)}`);
  }
}
