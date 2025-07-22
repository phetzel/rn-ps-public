#!/usr/bin/env tsx

import path from "path";
import { LLMClient } from "./gen-situation/llm/client";
import { SituationGenerator } from "./gen-situation/generator";
import { displayGenerationSuccess } from "./gen-situation/utils/display-generation-success";

/**
 * Main situation generation command
 * Single linear flow: analysis → planning → preferences → outcomes
 */
async function main(): Promise<void> {
  console.log("🎮 Press Secretary Situation Generator v3.0");
  console.log(`📅 Generation Date: ${new Date().toLocaleString()}`);
  console.log("============================================================");

  try {
    console.log("🤖 Initializing LLM-powered situation generator...");

    const llmClient = new LLMClient();
    const generator = new SituationGenerator(llmClient);

    console.log("🎯 Starting situation generation pipeline...");
    const result = await generator.generateComplete();

    if (result.success) {
      displayGenerationSuccess(result);
    } else {
      console.error("❌ Generation failed:", result.error);
      process.exit(1);
    }
  } catch (error) {
    console.error("❌ Fatal error:", error);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}
