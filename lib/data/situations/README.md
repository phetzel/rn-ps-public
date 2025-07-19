# Content Generation Guidelines

Guidelines for creating static situation data for the Press Secretary simulation game.

## 🎯 Tone & Style

- **Satirical newsroom humor** (Veep × Daily Show)
- **Fictional names only** - No real politicians, countries, or organizations
- **Equal-opportunity absurdity** - Mock incompetence, not ideology
- **Use fictional countries** like "Republic of Reallyfarawaystan"
- **Soft-pedal real tragedies** - Keep humor light on serious current events

## 📋 How Situations Work

### Overview

Situations are the core content pieces representing crises or events that the press secretary must navigate during monthly press conferences. The game selects 2-3 situations per level (month) based on complex triggers and requirements, creating a dynamic 4-year campaign where player choices affect relationship networks and approval ratings.

### Data Structure Hierarchy

#### 1. **SituationData** - The Complete Package

Each situation contains:

- **Trigger**: When/how the situation appears in the game
- **Content**: The political preferences and possible outcomes
- **Exchanges**: The actual press conference Q&A sessions

#### 2. **SituationTrigger** - Game Selection Logic

- **staticKey**: Globally unique identifier
- **type**: One of 7 situation types (DomesticPolicy, Economy, etc.)
- **requirements**: Conditional logic (year, month, approval ratings, political leaning)
- **isFollowUp**: True if triggered by previous situation outcome

**Key Rules:**

- One situation per type per level prevents duplicate categories
- Follow-up situations bypass random selection when triggered
- Requirements create conditional availability based on game state

#### 3. **SituationContent** - Political Mechanics

**Preferences** define what answer types political entities want:

- President and cabinet members have preferred answer types
- Cannot use `AnswerType.Authorized` in preferences
- Entities in preferences must have positive impacts available in exchanges

**Outcomes** are possible consequences after press conferences:

- Weights must sum to exactly 100 across all outcomes
- No single outcome can exceed 70% weight
- Can trigger follow-up situations via `followUpId`

#### 4. **ExchangeData** - Press Conference Q&A

**Uniform 5-Question Structure:**

- 1 root question (depth 0) → 2 secondary questions (depth 1) → 2 tertiary questions (depth 2)
- Root: exactly 2 answers with followUpId to secondary questions
- Secondary: exactly 1 answer with followUpId to tertiary questions
- Tertiary: no followUpId (terminal questions)

## 📏 Critical Length Limits (Must Be Exact)

### Text Length Requirements:

- **Situation Title**: 15-50 characters
- **Situation Description**: 80-160 characters
- **Outcome Title**: 20-60 characters
- **Outcome Description**: 60-140 characters
- **Question Text**: 60-150 characters
- **Answer Text**: 80-180 characters
- **Intel/Reaction Text**: 20-100 characters
- **Authorized Content**: 50-300 characters

## 🏛️ Entity References

### Cabinet Members (CabinetStaticId):

- `state` - Secretary of State
- `treasury` - Secretary of Treasury
- `defense` - Secretary of Defense
- `justice` - Attorney General
- `hhs` - Secretary of Health and Human Services
- `homeland` - Secretary of Homeland Security

### Political Subgroups (SubgroupStaticId):

**Political**: `left_wing_base`, `right_wing_base`, `independent_base`
**Demographic**: `youth_voters`, `seniors_citizens`, `rural_residents`, `urban_residents`  
**Economic**: `labor_unions`, `business_leaders`, `tech_industry`

### Publications (PublicationStaticId):

- `lib_primary` - Liberal-leaning primary news
- `con_primary` - Conservative-leaning primary news
- `independent_primary` - Independent/centrist news
- `investigative` - Investigative journalism

### Answer Types (AnswerType):

- `deflect` - Avoid direct answers
- `reassure` - Calm public concerns
- `challenge` - Push back on questions
- `admit` - Acknowledge issues
- `deny` - Reject allegations
- `inform` - Provide factual information
- `authorized` - Use classified intel (requires cabinet relationship)

### Impact Weights (ExchangeImpactWeight):

Range from **StronglyNegative (-8)** to **StronglyPositive (+8)**:

- StronglyNegative: -8
- Negative: -6
- SlightlyNegative: -4
- Neutral: 0
- SlightlyPositive: +4
- Positive: +6
- StronglyPositive: +8

### Outcome Modifier Weights:

Range from **StrongNegative (-8)** to **StrongPositive (+8)**:

- Used to shift situation outcome probabilities
- **Critical Rule**: All modifiers in an answer must sum to 0

## 📊 Exchange Structure & Requirements

### Question Requirements:

- **Minimum 3 answers** per question
- **At least 2 distinct AnswerTypes** per question
- **No single AnswerType dominance** (≤50% of answers)
- **Balanced positive/negative impacts** across all answers for president/cabinet

### Answer Requirements:

- **Impact Balance**: Every entity must have both positive and negative impacts across all situations
- **Modifier Math**: All outcome modifiers in an answer must sum to 0
- **Authorization Logic**: Authorized answers must specify `authorizedCabinetMemberId`
- **Entity Restrictions**: No entity can have more positive than negative impacts across question answers

## 🎮 Game Balance Guidelines

### Global Balance Requirements:

- **Entity Distribution**: Cabinet members appear in 20-80% of situations
- **Answer Type Diversity**: ≥6 distinct types globally, each non-Authorized type ≥8% share
- **Mixed Outcomes**: ≥25% of outcomes have both positive and negative effects
- **Positive:Negative Ratios**: 0.30-0.80 for all entities across all content

### Per-Situation Balance:

- **Preference Consistency**: Entities in preferences must have positive impacts somewhere in exchanges
- **Outcome Weight Distribution**: No single outcome >70% weight
- **Exchange Structure**: 2-4 exchanges per situation
- **Mathematical Constraints**: Outcome weights = 100, modifier sums = 0

## 🔧 Content Creation Workflow

### Validation Philosophy:

- **Schema validation** (must pass): Structural and mathematical constraints
- **Balance tests** (guidance): Statistical analysis for game balance improvement

## 🎯 Impact and Modifier Systems

### Exchange Impacts - Relationship Changes

Affects ongoing relationships with political entities:

- **President**: Direct relationship with press secretary
- **Cabinet**: Individual department head relationships
- **Journalists**: Media relationship affects future question difficulty. This is decided by the players interaction with the journalist in the press conference.

### Outcome Modifiers - Probability Shifts

Changes likelihood of specific situation outcomes:

- Positive modifiers increase outcome probability
- Negative modifiers decrease outcome probability
- **Zero-sum requirement**: All modifiers per answer must total 0

### Game Integration:

1. **Monthly Selection**: Game selects situations based on triggers and requirements
2. **Press Conference**: Player navigates question trees via answer selection
3. **Relationship Updates**: Answer impacts modify entity relationships
4. **Outcome Determination**: Modified probabilities determine actual results
5. **Consequence Application**: Outcomes affect approval ratings and trigger follow-ups
