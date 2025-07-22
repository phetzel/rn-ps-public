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

  // ═══ SITUATION PLAN ═══
  console.log("📋 SITUATION PLAN");
  console.log("──────────────────");
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

  // ═══ ENTITY PREFERENCES ═══
  if (result.situation.preferences) {
    console.log("\n🎯 ENTITY PREFERENCES");
    console.log("─────────────────────");

    // President preference
    console.log(
      `👔 President: ${result.situation.preferences.presidentPreference.answerType}`
    );
    console.log(
      `   Rationale: ${result.situation.preferences.presidentPreference.rationale}`
    );

    // Cabinet preferences
    if (result.situation.preferences.cabinetPreferences.length > 0) {
      console.log(`🏛️  Cabinet Members:`);
      result.situation.preferences.cabinetPreferences.forEach((pref) => {
        const authorizedIndicator = pref.hasAuthorizedContent ? " 🔒" : "";
        console.log(
          `   ${pref.member}: ${pref.answerType}${authorizedIndicator}`
        );
        console.log(`     Rationale: ${pref.rationale}`);
      });
    }
  }

  // ═══ SITUATION OUTCOMES ═══
  if (result.situation.outcomes) {
    console.log("\n🎲 SITUATION OUTCOMES");
    console.log("─────────────────────");

    result.situation.outcomes.outcomes.forEach((outcome, index) => {
      console.log(`${index + 1}. ${outcome.title} (${outcome.weight}%)`);
      console.log(`   ${outcome.description}`);

      // Show impacts
      const impacts: string[] = [];
      if (outcome.consequences.cabinet.length > 0) {
        outcome.consequences.cabinet.forEach((impact) => {
          const sign = impact.impact.startsWith("-") ? "" : "+";
          impacts.push(`${impact.member}: ${sign}${impact.impact}`);
        });
      }
      if (outcome.consequences.subgroups.length > 0) {
        outcome.consequences.subgroups.forEach((impact) => {
          const sign = impact.impact.startsWith("-") ? "" : "+";
          impacts.push(`${impact.group}: ${sign}${impact.impact}`);
        });
      }
      if (impacts.length > 0) {
        console.log(`   Impacts: ${impacts.join(", ")}`);
      }
      console.log("");
    });
  }

  if (result.usage) {
    console.log(`\n💰 GENERATION USAGE`);
    console.log("───────────────────");
    console.log(`   Requests: ${result.usage.requests}`);
    console.log(`   Tokens: ${result.usage.totalTokens}`);
    console.log(`   Cost: $${result.usage.totalCost.toFixed(4)}`);
  }
}
