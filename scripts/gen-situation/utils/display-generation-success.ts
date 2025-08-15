import type { GenerationResult } from "../types";
import type { SituationDataType } from "~/lib/schemas/situations";

/**
 * Display the generation results in a clean, formatted way
 */
export function displayGenerationSuccess(result: GenerationResult): void {
  if (!result.success || !result.situation) {
    return;
  }

  const situation = result.situation;

  console.log("\n✅ Complete Situation Generated!");
  console.log("==================================================");

  // ═══ SITUATION DETAILS ═══
  console.log("📋 SITUATION");
  console.log("──────────────────");
  console.log(`📋 Title: ${situation.title}`);
  console.log(`🏷️  Type: ${situation.type}`);
  console.log(`📖 Description: ${situation.description}`);
  console.log(`🔑 Static Key: ${situation.trigger.staticKey}`);

  // ═══ ENTITY PREFERENCES ═══
  console.log("\n🎯 ENTITY PREFERENCES");
  console.log("─────────────────────");
  
  // President preference
  console.log(`👔 President: ${situation.content.preferences.president.answerType}`);
  console.log(`   Rationale: ${situation.content.preferences.president.rationale}`);

  // Cabinet preferences
  if (situation.content.preferences.cabinet) {
    console.log(`🏛️  Cabinet Members:`);
    Object.entries(situation.content.preferences.cabinet).forEach(([member, pref]) => {
      const authorizedIndicator = pref.authorizedContent ? " 🔒" : "";
      console.log(`   ${member}: ${pref.preference.answerType}${authorizedIndicator}`);
      console.log(`     Rationale: ${pref.preference.rationale}`);
    });
  }

  // ═══ SITUATION OUTCOMES ═══
  console.log("\n🎲 SITUATION OUTCOMES");
  console.log("─────────────────────");

  situation.content.outcomes.forEach((outcome, index) => {
    console.log(`${index + 1}. ${outcome.title} (${outcome.weight}%)`);
    console.log(`   ${outcome.description}`);

    // Show impacts
    const impacts: string[] = [];
    if (outcome.consequences.approvalChanges.cabinet) {
      Object.entries(outcome.consequences.approvalChanges.cabinet).forEach(([member, weight]) => {
        const sign = weight.toString().startsWith("-") ? "" : "+";
        impacts.push(`${member}: ${sign}${weight}`);
      });
    }
    if (outcome.consequences.approvalChanges.subgroups) {
      Object.entries(outcome.consequences.approvalChanges.subgroups).forEach(([group, weight]) => {
        const sign = weight.toString().startsWith("-") ? "" : "+";
        impacts.push(`${group}: ${sign}${weight}`);
      });
    }
    if (impacts.length > 0) {
      console.log(`   Impacts: ${impacts.join(", ")}`);
    }
    console.log("");
  });

  // ═══ PRESS EXCHANGES ═══
  console.log("\n🎤 PRESS EXCHANGES");
  console.log("─────────────────");

  situation.exchanges.forEach((exchange, index) => {
    console.log(`${index + 1}. ${exchange.publication.toUpperCase()}`);
    console.log(`   Structure: 1 root → 2 secondary → 2 tertiary (5 total questions)`);
    
    // Check for authorized answers
    const hasAuthorized = checkForAuthorizedAnswers(exchange.content);
    if (hasAuthorized) {
      console.log(`   🔒 Contains authorized answers`);
    }
    console.log("");
  });

  // ═══ GENERATED FILES ═══
  if (result.files) {
    console.log("\n📁 GENERATED FILES");
    console.log("──────────────────");
    console.log(`📂 Directory: ${result.files.directoryPath}`);
    console.log(`📄 Files generated: ${result.files.files.length}`);
    result.files.files.forEach((file) => {
      console.log(`   • ${file}`);
    });
    console.log(`🔗 Type index automatically updated`);
  }

  if (result.usage) {
    console.log(`\n💰 GENERATION USAGE`);
    console.log("───────────────────");
    console.log(`   Requests: ${result.usage.requests}`);
    console.log(`   Tokens: ${result.usage.totalTokens}`);
    console.log(`   Cost: $${result.usage.totalCost.toFixed(4)}`);
  }
}

/**
 * Helper function to check if exchange content has authorized answers
 */
function checkForAuthorizedAnswers(content: any): boolean {
  try {
    // Check all answers in all questions for authorized type
    const allAnswers = [
      ...(content.rootQuestion?.answers || []),
      ...(content.secondaryQuestions?.flatMap((q: any) => q.answers || []) || []),
      ...(content.tertiaryQuestions?.flatMap((q: any) => q.answers || []) || [])
    ];
    
    return allAnswers.some((answer: any) => 
      answer?.type === "authorized" || answer?.answerType === "authorized"
    );
  } catch (error) {
    return false;
  }
}
