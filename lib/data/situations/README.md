# Content Generation Guidelines

Guidelines for creating static situation data for the Press Secretary simulation game.

## 🎯 Tone & Style

- **Satirical newsroom humor** (Veep × Daily Show)
- **Fictional names only** - No real politicians, countries, or organizations
- **Equal-opportunity absurdity** - Mock incompetence, not ideology
- **Use fictional countries** like "Republic of Reallyfarawaystan"
- **Soft-pedal real tragedies** - Keep humor light on serious current events

## 📏 Critical Length Limits (Must Be Exact)

### Text Length Requirements:

- **Situation Title**: 15-50 characters
- **Situation Description**: 80-160 characters
- **Outcome Title**: 20-60 characters
- **Outcome Description**: 60-140 characters
- **Question Text**: 60-150 characters
- **Answer Text**: 80-180 characters
- **Rationale**: 40-120 characters
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

## 📊 Exchanges
