# Situation Data Validation Tests

This directory contains comprehensive tests for validating static situation data used in the Press Secretary simulation game.

## Overview

The validation system uses a **schema-first approach** where all structural and business rules are enforced through Zod schemas, with tests focusing on cross-entity analysis and game balance metrics. This ensures immediate feedback during development and eliminates redundant validation logic.

## Validation Architecture

### **Schema-First Validation** (Primary)

All structural, mathematical, and business rule validation is handled by comprehensive Zod schemas in `~/lib/schemas/`. This provides:

- ✅ **Compile-time validation** - Errors caught immediately during development
- ✅ **Single source of truth** - All rules defined once in schemas
- ✅ **Type safety** - Full TypeScript integration with detailed error messages
- ✅ **Cross-validation** - Complex relationships validated automatically

### **Test-Based Analysis** (Secondary)

Tests focus on areas schemas cannot easily handle:

- 🎯 **Cross-entity uniqueness** - ID uniqueness across multiple situations
- 🎯 **Statistical game balance** - Complex multi-dimensional analysis
- 🎯 **Global patterns** - Distribution and coverage analysis

## Test Files

### Core Data Validation

#### `situation-data.test.ts`

Basic data export validation - ensures situations data array is properly exported.

#### `schema-validation.test.ts`

**Primary validation orchestrator** - validates all data through comprehensive schemas.

**Key Validations:**

- **Master Schema Compliance**: All situations conform to `situationDataSchema`
- **Cross-Entity Uniqueness**: Static keys, outcome IDs, question IDs, answer IDs

**Schema handles automatically:**

- Outcome weights sum to exactly 100
- Outcome modifiers sum to 0 per answer
- Cabinet authorization logic (authorized answers have required fields)
- Trigger requirement ranges and logic
- Structural integrity (required fields, array lengths, enum values)
- Entity balance rules (no entity can have more positive than negative impacts)
- Question balance (positive/negative relationship impacts required)
- Reference validation (follow-ups, root questions, outcome modifiers)

#### `cross-reference.test.ts`

Validates complex relationships and references between data elements.

**Key Validations:**

- Follow-up situation chains and circular reference detection
- Question flow and depth progression logic
- Outcome modifier cross-references
- Data consistency across related fields

### Game Balance Validation

#### `game-balance-entities.test.ts`

Validates entity-focused balance rules for relationships, approval ratings, and preferences.

**Key Validations:**

- **Impact Ratios**: Positive:negative ratios (0.30-0.80) for all entities
- **Impact Rates**: Average impact ranges (-3 to -1.5) per situation
- **Distribution Balance**: Entity coverage (20%-80%) and appearance distribution
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
- **Outcome Weight Distribution**: No single outcome dominates (≤70% weight)

#### `game-balance-exchanges.test.ts`

Validates exchange, question, and answer structure for engaging gameplay.

**Key Validations:**

- **Exchange Structure**: 2-4 exchanges per situation
- **Question Depth**: ≥70% questions with depth ≥1, maximum depth ≤3
- **Answer Variety**: 2-5 answers per question, ≥2 distinct types, ≤50% dominance

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
npm test __tests__/lib/data/situations/

# Run with coverage
npm test -- --coverage __tests__/lib/data/situations/
```

### Core Data Validation Only

```bash
# Run structural validation tests
npm test -- --testPathPattern="schema-validation|cross-reference|situation-data"

# Quick schema validation (fastest)
npm test __tests__/lib/data/situations/schema-validation.test.ts
```

### Game Balance Validation Only

```bash
# Run all game balance tests
npm test -- --testPathPattern="game-balance"

# Run specific balance category
npm test __tests__/lib/data/situations/game-balance-entities.test.ts
npm test __tests__/lib/data/situations/game-balance-global.test.ts
```

### Development Workflow

```bash
# Quick validation during development (schema-first)
npm test __tests__/lib/data/situations/schema-validation.test.ts --watchAll

# Full balance analysis (slower, for final validation)
npm test -- --testPathPattern="game-balance" --verbose
```

## Test Philosophy

This validation suite follows a **schema-first quality assurance** approach:

### **Immediate Feedback**

- **Schema validation** catches 95% of issues at compile-time
- **TypeScript integration** provides IDE feedback during development
- **Detailed error messages** show exact location and nature of problems
- **Zero runtime surprises** - problems caught before deployment

### **Balance-Driven Development**

- **Game balance tests** provide actionable metrics for content improvement
- **Expected failures** during initial development guide iterative balancing
- **Data-driven insights** help create engaging gameplay experiences
- **Statistical analysis** reveals patterns invisible to manual review

### **Development vs. Production**

- **Schema validation** must pass before development can proceed
- **Balance validation** guides content quality improvements
- **Zero tolerance** for structural issues (caught by schemas)
- **Iterative improvement** for balance issues (guided by tests)

## Development Workflow

### Adding New Situations

1. **Create content** following schema structure
2. **Run schema validation** - fix any structural issues immediately
3. **Run balance tests** to understand current state
4. **Iterate on content** using balance metrics as guidance
5. **Commit only when schema validation passes** (balance tests guide improvement)

### Content Balancing Process

1. **Schema validation first**: `npm test schema-validation.test.ts`
2. **Fix any schema errors** before proceeding
3. **Run balance suite**: `npm test -- --testPathPattern="game-balance" --verbose`
4. **Review console output** for specific violations and metrics
5. **Make targeted improvements** to address balance issues
6. **Re-run tests** to measure progress
7. **Iterate** until desired balance is achieved

## Common Issues & Solutions

### Schema Validation Failures

Schema validation catches **all structural and business rule violations**. Common issues:

#### Compilation Errors

- **TypeScript errors**: Missing required fields, incorrect enum values
- **Reference errors**: Invalid cabinet members, answer types, static IDs
- **Structure errors**: Missing nested objects, incorrect array types

#### Schema Validation Errors

- **Mathematical constraints**: Outcome weights ≠ 100, outcome modifiers ≠ 0
- **Text length violations**: Character count outside required ranges
- **Entity balance rules**: Entities with more positive than negative impacts
- **Relationship requirements**: Questions missing positive/negative impacts
- **Authorization logic**: Authorized answers without cabinet content

#### Quick Fixes

- **Check character counts** carefully against schema limits
- **Verify mathematical sums** (weights = 100, modifiers = 0)
- **Validate all enum references** against current type definitions
- **Ensure entity balance** (≤ positive vs negative per entity)

### Game Balance Issues

Balance tests identify **statistical and gameplay concerns**:

#### Entity Balance Problems

- **Unbalanced ratios**: Add impacts to achieve 0.30-0.80 positive:negative ratio
- **Poor distribution**: Ensure entities appear in 20%-80% of situations
- **Preference monotony**: Use diverse answer types (≥4 types per entity)

#### Global Pattern Issues

- **Type imbalance**: Add situations for underrepresented situation types
- **Answer homogeneity**: Diversify answer types across all content
- **Missing coverage**: Ensure every entity has both positive and negative effects

## Interpreting Results

### Schema Validation Results

Schema failures **must be fixed immediately**:

- **Error messages** show exact location and required fix
- **Detailed context** helps understand what's wrong
- **Actionable guidance** for immediate resolution

### Balance Test Results

Balance tests **guide iterative improvement**:

- **Console output** shows specific violations with entity/situation details
- **Percentage metrics** indicate distance from target balance
- **Violation counts** help prioritize which areas need most attention
- **Statistical insights** reveal patterns for systematic improvement

Use balance results as a **roadmap for content enhancement** rather than blockers to development progress.

## Schema-First Benefits

This architecture provides substantial advantages:

- ✅ **Faster development** - Issues caught immediately, not in tests
- ✅ **Better developer experience** - IDE integration with real-time feedback
- ✅ **Reduced maintenance** - Single source of truth for validation rules
- ✅ **Type safety** - Full compile-time verification of data structures
- ✅ **Comprehensive validation** - Complex cross-validation handled automatically
- ✅ **Focus on value** - Tests concentrate on game balance, not structure
