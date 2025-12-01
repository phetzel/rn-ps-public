#!/usr/bin/env tsx

import { SituationGenerator } from './gen-situation/generator';
import { LLMClient } from './gen-situation/llm/client';

/**
 * Main situation generation command
 * Generates a single situation with comprehensive error handling
 */
async function main(): Promise<void> {
  console.log('🎮 Press Secretary Situation Generator');
  console.log(`📅 Generation Date: ${new Date().toLocaleString()}`);
  console.log('============================================================');

  // Get command line arguments
  const args = process.argv.slice(2);
  const debugMode = args.includes('--debug') || process.env.LLM_DEBUG_MODE === 'true';
  const traceMode = args.includes('--trace-llm') || process.env.LLM_TRACE_MODE === 'true';

  if (args.some((arg) => arg.startsWith('--count'))) {
    console.warn(
      '⚠️  Batch generation is no longer supported. Generating a single situation instead.',
    );
  }

  try {
    console.log('🤖 Initializing situation generator...');
    if (debugMode) {
      console.log('🔍 Debug mode enabled - step-level logging active');
    }
    if (traceMode) {
      console.log('🛰️ LLM trace enabled - raw model outputs will be logged');
    }

    const llmClient = new LLMClient({ debugMode, traceResponses: traceMode });
    const generator = new SituationGenerator(llmClient);

    console.log('🎯 Starting single situation generation...');
    const result = await generator.generateComplete();

    if (result.success) {
      console.log('✅ Generation completed successfully!');
      console.log(`📁 Files written to: ${result.files?.directoryPath}`);
      if (result.files?.files) {
        console.log(`📄 Generated files: ${result.files.files.join(', ')}`);
      }
      if (result.usage) {
        console.log(
          `💰 Usage: ${result.usage.requests} requests, ${result.usage.totalTokens} tokens, $${result.usage.totalCost.toFixed(4)}`,
        );
      }
    } else {
      console.error('❌ Generation failed:', result.error);
      process.exit(1);
    }
  } catch (error) {
    console.error('❌ Fatal error:', error);
    process.exit(1);
  }
}

// Show usage if help is requested
if (process.argv.includes('--help') || process.argv.includes('-h')) {
  console.log(`
Usage: npm run gen-situation [options]

Options:
  --debug       Enable verbose step logging
  --trace-llm   Log raw model responses (very noisy)
  --help, -h    Show this help message

Environment Variables:
  LLM_DEBUG_MODE=true   Enable debug mode globally
  LLM_TRACE_MODE=true   Enable raw LLM response logging globally

Examples:
  npm run gen-situation                        # Generate single situation (clean output)
  npm run gen-situation -- --debug            # Generate with debug logging
  npm run gen-situation -- --trace-llm        # Generate with raw LLM output
  LLM_DEBUG_MODE=true npm run gen-situation   # Generate with debug via env var
  LLM_TRACE_MODE=true npm run gen-situation   # Generate with raw output via env var
`);
  process.exit(0);
}

// Run if called directly
if (require.main === module) {
  main();
}
