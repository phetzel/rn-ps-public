#!/usr/bin/env tsx

import path from "path";
import { LLMClient } from "./gen-situation/llm/client";
import { SituationGenerator } from "./gen-situation/generator";
import { displayGenerationSuccess } from "./gen-situation/utils";

/**
 * Main situation generation command
 * Supports both single and batch generation with comprehensive error handling
 */
async function main(): Promise<void> {
  console.log("🎮 Press Secretary Situation Generator");
  console.log(`📅 Generation Date: ${new Date().toLocaleString()}`);
  console.log("============================================================");

  // Get command line arguments
  const args = process.argv.slice(2);
  const batchCountArg = args.find(arg => arg.startsWith('--count='));
  const batchCount = batchCountArg ? parseInt(batchCountArg.split('=')[1]) : 1;
  const isBatch = batchCount > 1;
  const debugMode = args.includes('--debug') || process.env.LLM_DEBUG_MODE === 'true';

  try {
    console.log("🤖 Initializing situation generator...");
    if (debugMode) {
      console.log("🔍 Debug mode enabled - verbose logging active");
    }

    const llmClient = new LLMClient({ debugMode });
    const generator = new SituationGenerator(llmClient);

    if (isBatch) {
      console.log(`🎯 Starting batch generation of ${batchCount} situations...`);
      const stats = await generator.generateBatch(batchCount);
      
      // Exit with error code if success rate is below threshold (e.g., 50%)
      if (stats.successRate < 50) {
        console.error(`❌ Batch generation had low success rate: ${stats.successRate.toFixed(1)}%`);
        process.exit(1);
      }
    } else {
      console.log("🎯 Starting single situation generation...");
      const result = await generator.generateComplete();

      if (result.success) {
        displayGenerationSuccess(result);
      } else {
        console.error("❌ Generation failed:", result.error);
        process.exit(1);
      }
    }
  } catch (error) {
    console.error("❌ Fatal error:", error);
    process.exit(1);
  }
}

// Show usage if help is requested
if (process.argv.includes('--help') || process.argv.includes('-h')) {
  console.log(`
Usage: npm run gen-situation [options]

Options:
  --count=N     Generate N situations in batch (default: 1)
  --debug       Enable verbose debug logging
  --help, -h    Show this help message

Environment Variables:
  LLM_DEBUG_MODE=true   Enable debug mode globally

Examples:
  npm run gen-situation                        # Generate single situation (clean output)
  npm run gen-situation -- --debug            # Generate with debug logging
  npm run gen-situation -- --count=5          # Generate 5 situations in batch
  LLM_DEBUG_MODE=true npm run gen-situation   # Generate with debug via env var
`);
  process.exit(0);
}

// Run if called directly
if (require.main === module) {
  main();
}
