# Situation Data Validation Tests

This directory contains comprehensive tests for validating static situation data used in the Press Secretary simulation game.

## Overview

These tests ensure that all situation data is structurally valid, mathematically balanced, and provides engaging gameplay experiences. The validation suite covers everything from basic schema compliance to sophisticated game balance analysis.

## Test Architecture

The validation suite is organized into two main categories:

### **Core Data Validation** (Structural & Logical)

Ensures data integrity and basic game mechanics compliance.

### **Game Balance Validation** (Strategic & Experiential)

Ensures balanced, challenging, and engaging gameplay through comprehensive balance analysis.

## Test Files

### Core Data Validation

#### `situation-data.test.ts`

Main orchestrator file that imports and runs all test suites. Contains basic data export validation.

#### `schema-validation.test.ts`

Validates that all situation data conforms to TypeScript interfaces and Zod schemas.

**Key Validations:**

- Schema compliance using Zod
- ID uniqueness (static keys, outcome IDs, question IDs, answer IDs)
- Type consistency (enums, references)
- Structural integrity (required fields, array lengths)

#### `business-rules.test.ts`

Validates game mechanics and mathematical constraints.

**Key Validations:**

- Outcome weights sum to exactly 100 per situation
- Outcome modifiers sum to 0 per answer (game balance)
- Cabinet authorization logic
- Trigger requirement ranges (years, months, approval ratings)
- Reasonable counts (outcomes per situation, questions per exchange, answers per question)

#### `cross-reference.test.ts`

Validates relationships and references between data elements.

**Key Validations:**

- Follow-up situation references
- Question flow and depth progression
- Outcome modifier references
- Data consistency across related fields

### Game Balance Validation

#### `game-balance-entities.test.ts`

Validates entity-focused balance rules for relationships, approval ratings, and preferences.

**Key Validations:**

- **Impact Ratios**: Positive:negative ratios (0.30-0.80) for all entities
- **Impact Rates**: Average impact ranges (-3 to -1.5) per situation
- **Distribution Balance**: Entity coverage (20%-80%) and hit-count distribution
- **Preference Diversity**: Answer type variety (≥4 types, ≤40% max share)
- **Plus/Minus Spread**: Every entity has both positive and negative impacts

#### `game-balance-global.test.ts`

Validates cross-cutting global patterns and overall game balance.

**Key Validations:**

- **Situation Type Balance**: Each type appears ≥1 time, no single type >30%
- **Answer Distribution**: ≥6 distinct types, 8%-25% per common type, ≤10% Authorized
- **Mixed Outcomes**: ≥25% outcomes have both positive and negative effects
- **Entity Coverage**: Every cabinet member and subgroup has positive/negative effects

#### `game-balance-situations.test.ts`

Validates per-situation balance requirements for preferences and outcomes.

**Key Validations:**

- **Global Preferences**: ≥5% share for each non-Authorized answer type
- **Preference Consistency**: Entities in preferences appear in outcomes with positive impacts
- **Outcome Balance**: Each situation has ≥1 positive and ≥1 negative outcome
- **Entity Impact Scope**: Each outcome affects 1-3 entities, ≤70% single outcome weight

#### `game-balance-exchanges.test.ts`

Validates exchange, question, and answer structure for engaging gameplay.

**Key Validations:**

- **Exchange Structure**: 2-4 exchanges per situation
- **Question Depth**: ≥70% questions with depth ≥1, maximum depth ≤3
- **Answer Variety**: 2-5 answers per question, ≥2 distinct types, ≤50% dominance
- **Impact Balance**: Each question has both positive and negative net impact answers
- **Entity Coverage**: Each answer affects ≥1 entity

## Support Utilities

Located in `~/__tests__/support/utils/`, these provide reusable analysis functions:

- **`entity-analysis.ts`**: Entity impact, distribution, and preference analysis
- **`global-analysis.ts`**: Global patterns, coverage, and type distribution analysis
- **`situation-analysis.ts`**: Situation-level preference and outcome analysis
- **`exchange-analysis.ts`**: Exchange structure and answer pattern analysis

## Running Tests

### All Tests

```bash
# Run all situation data tests (recommended)
npm test __tests__/lib/data/v1/situations/

# Run with coverage
npm test -- --coverage __tests__/lib/data/v1/situations/
```

### Core Data Validation Only

```bash
# Run structural validation tests
npm test -- --testPathPattern="schema-validation|business-rules|cross-reference|situation-data"

# Run specific test file
npm test __tests__/lib/data/v1/situations/schema-validation.test.ts
```

### Game Balance Validation Only

```bash
# Run all game balance tests
npm test -- --testPathPattern="game-balance"

# Run specific balance category
npm test __tests__/lib/data/v1/situations/game-balance-entities.test.ts
npm test __tests__/lib/data/v1/situations/game-balance-global.test.ts
```

### Development Workflow

```bash
# Quick validation during development
npm test -- --testPathPattern="schema-validation|business-rules" --watchAll

# Full balance analysis (slower, for final validation)
npm test -- --testPathPattern="game-balance" --verbose
```

## Test Philosophy

This validation suite follows a **comprehensive quality assurance** approach:

### **Fail-Fast Detection**

- Tests fail immediately when data issues are detected
- Detailed error logging helps identify specific problems
- Each test focuses on a single validation concern

### **Balance-Driven Development**

- Game balance tests provide **actionable metrics** for content improvement
- **Expected failures** during initial development guide iterative balancing
- **Data-driven insights** help create engaging gameplay experiences

### **Development vs. Production**

- **Core validation** tests must pass before deployment
- **Balance validation** tests guide content quality improvements
- Tests catch issues during development, not runtime

## Development Workflow

### Adding New Situations

1. **Start with core validation** - ensure basic structure is correct
2. **Run balance tests** to understand current state
3. **Iterate on content** using balance metrics as guidance
4. **Verify improvements** with subsequent test runs
5. **Commit only when core tests pass** (balance tests may still show improvement opportunities)

### Content Balancing Process

1. **Run full balance suite**: `npm test -- --testPathPattern="game-balance" --verbose`
2. **Review console output** for specific violations and metrics
3. **Prioritize fixes** based on game design goals
4. **Make targeted improvements** to address violations
5. **Re-run tests** to measure progress
6. **Iterate** until desired balance is achieved

## Common Issues & Solutions

### Core Data Validation Failures

#### Schema Validation

- Check TypeScript interfaces match your data structure
- Ensure all required fields are present
- Verify enum values are correct

#### Business Rules

- Outcome weights must sum to exactly 100
- Outcome modifiers must sum to 0 for game balance
- Check approval rating ranges (0-100)

#### Cross-Reference

- Ensure follow-up IDs reference existing situations
- Verify question follow-ups exist within the same exchange
- Check outcome modifier IDs match actual outcomes

### Game Balance Validation Issues

#### Entity Balance Problems

- **Unbalanced ratios**: Add more positive or negative impacts to achieve 0.30-0.80 ratio
- **Poor distribution**: Ensure entities appear in 20%-80% of situations
- **Preference monotony**: Use diverse answer types (≥4 types per entity)

#### Global Pattern Issues

- **Type imbalance**: Add situations for underrepresented types
- **Answer homogeneity**: Diversify answer types across all content
- **Missing coverage**: Ensure every entity has both positive and negative effects

#### Situation Structure Issues

- **Outcome imbalance**: Each situation needs both positive and negative outcomes
- **Preference inconsistency**: Preferred answer types must have positive impacts
- **Structural problems**: Follow exchange count (2-4) and question depth (≥70% depth ≥1) guidelines

#### Exchange Quality Issues

- **Answer variety**: Use 2-5 answers with ≥2 distinct types per question
- **Impact balance**: Each question needs both positive and negative impact answers
- **Entity coverage**: Every answer must affect at least one entity

## Interpreting Balance Test Results

Balance tests are **designed to fail initially** and provide improvement guidance:

- **Console output** shows specific violations with entity/situation details
- **Percentage metrics** indicate how far from target balance you are
- **Violation counts** help prioritize which areas need most attention
- **Error details** provide actionable information for targeted improvements

Use these results as a **roadmap for iterative content improvement** rather than blockers to development progress.
