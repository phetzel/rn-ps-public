# Situation Data Validation Tests

This directory contains comprehensive tests for validating static situation data used in the Press Secretary simulation game.

## Overview

These tests ensure that all situation data is structurally valid, mathematically balanced, and logically consistent before being loaded into the game database.

## Test Files

### `situation-data.test.ts`

Main orchestrator file that imports and runs all test suites. Contains basic data export validation.

### `schema-validation.test.ts`

Validates that all situation data conforms to TypeScript interfaces and Zod schemas.

**Key Validations:**

- Schema compliance using Zod
- ID uniqueness (static keys, outcome IDs, question IDs, answer IDs)
- Type consistency (enums, references)
- Structural integrity (required fields, array lengths)

### `business-rules.test.ts`

Validates game mechanics and mathematical constraints.

**Key Validations:**

- Outcome weights sum to exactly 100 per situation
- Outcome modifiers sum to 0 per answer (game balance)
- Cabinet authorization logic
- Trigger requirement ranges (years, months, approval ratings)
- Reasonable counts (outcomes per situation, questions per exchange, answers per question)

### `cross-reference.test.ts`

Validates relationships and references between data elements.

**Key Validations:**

- Follow-up situation references
- Question flow and depth progression
- Outcome modifier references
- Data consistency across related fields

## Running Tests

```bash
# Run all situation data tests
npm test __tests__/lib/data/v1/situations/

# Run specific test file
npm test __tests__/lib/data/v1/situations/schema-validation.test.ts

# Run with coverage
npm test -- --coverage __tests__/lib/data/v1/situations/
```

## Test Philosophy

These tests follow a **fail-fast** approach:

- Tests fail immediately when data issues are detected
- Detailed error logging helps identify specific problems
- Each test focuses on a single validation concern
- Tests are designed to catch issues during development, not runtime

## Adding New Situations

When adding new situation data:

1. **Run tests frequently** during development
2. **Check console output** for detailed error information
3. **Fix issues immediately** - don't accumulate technical debt
4. **Verify all test suites pass** before committing

## Common Issues & Solutions

### Schema Validation Failures

- Check TypeScript interfaces match your data structure
- Ensure all required fields are present
- Verify enum values are correct

### Business Rule Failures

- Outcome weights must sum to exactly 100
- Outcome modifiers must sum to 0 for game balance
- Check approval rating ranges (0-100)

### Cross-Reference Failures

- Ensure follow-up IDs reference existing situations
- Verify question follow-ups exist within the same exchange
- Check outcome modifier IDs match actual outcomes
