/**
 * Centralized Prompt Constants System
 */

export const ENUM_REFERENCE_GUIDE = `
### Situation Types:
- **domestic_policy**: Internal government policies, regulations, domestic initiatives
- **foreign_affairs**: International relations, diplomacy, trade, foreign conflicts  
- **economy**: Economic policy, budgets, taxation, financial markets, trade
- **security**: National security, military, cybersecurity, terrorism, defense
- **environment**: Climate policy, environmental regulations, natural disasters
- **ethics**: Government ethics, corruption, scandals, institutional integrity

### Cabinet Members:
- **state**: Secretary of State (foreign affairs, diplomacy)
- **treasury**: Secretary of Treasury (economy, finances, budgets)
- **defense**: Secretary of Defense (military, national security)
- **justice**: Attorney General (law enforcement, legal matters)
- **hhs**: Health and Human Services (health, social services)
- **homeland**: Homeland Security (domestic security, border, emergency response)

### Subgroups:
#### Political: 
- **left_wing_base**
- **right_wing_base**
- **independent_base**
#### Demographic:
- **youth_voters**
- **seniors_citizens**
- **rural_residents**
- **urban_residents**
#### Economic:
- **labor_unions**
- **business_leaders**
- **tech_industry**

### Publications:
- **lib_primary**: Liberal-leaning primary news outlet
- **con_primary**: Conservative-leaning primary news outlet  
- **independent_primary**: Independent/centrist news outlet
- **investigative**: Investigative journalism outlet
`.trim();

/**
 * Core creative mood and absurdity level - applied to creative content generation
 */
export const CORE_CREATIVE_DIRECTION = `
CREATIVE MOOD: MAXIMUM ABSURDITY
- Aim for 8/10 on the absurdity scale (where 10 is complete surrealism)
- Create scenarios that would be IMPOSSIBLE or highly improbable in real politics
- Think "The Onion" headlines, not AP News reports
- Embrace ridiculous premises with bizarre stakes or circumstances
- Exaggerate political dynamics to cartoonish, over-the-top levels
- Make the unexpected and outlandish your default approach
`.trim();

/**
 * Core style and tone guidelines - applied across all content types
 */
export const CORE_STYLE_RULES = `
STYLE FOUNDATION
- Satirical newsroom humor (blend of Veep × Daily Show × The Onion)
- Equal-opportunity absurdity - mock incompetence and process, not ideology
- Heightened reality - take real political dynamics and amplify to absurd levels
- Sharp, smart, substantive satire - avoid cheap slapstick
- Witty and surprising - steer away from formulaic or predictable content
`.trim();

/**
 * Content safety and fictional entity requirements - applied universally
 */
export const CORE_CONTENT_CONSTRAINTS = `
CONTENT BOUNDARIES (Authoritative)
- NO real people - No actual politicians, officials, or public figures
- NO real places - No actual countries, cities, or organizations  
- NO real events - No direct references to actual current events
- Use fictional entities that clearly signal their fictional nature
- Soft-pedal tragedies - keep humor light, avoid serious real-world pain
`.trim();

/**
 * Builds a creative prompt for content that needs maximum absurdity and humor.
 * Use for: scenario planning, preferences, outcomes, creative content generation
 */
export function buildCreativePrompt(specificInstructions: string): string {
  return `${CORE_CREATIVE_DIRECTION}

${specificInstructions}

${CORE_STYLE_RULES}

${CORE_CONTENT_CONSTRAINTS}`;
}

/**
 * Builds a technical prompt for structured/planning content with minimal creative guidance.
 * Use for: exchange planning, question generation, impact calculations
 */
export function buildTechnicalPrompt(specificInstructions: string): string {
  return `${specificInstructions}

${CORE_STYLE_RULES}

${CORE_CONTENT_CONSTRAINTS}`;
}

/**
 * Builds an implementation prompt for detailed execution with inherited creative context.
 * Use for: full exchange content, consequence details, implementation tasks
 */
export function buildImplementationPrompt(specificInstructions: string): string {
  return `${specificInstructions}

${CORE_CONTENT_CONSTRAINTS}`;
}
