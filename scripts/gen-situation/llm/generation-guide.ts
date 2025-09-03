/**
 * DEPRECATED: Most content moved to prompt-constants.ts
 * This guide now focuses on reference data only.
 * Tone, style, and creative direction are handled by prompt composition functions.
 */
export const GENERATION_GUIDE = `
## 📖 Reference Information Only
This guide provides entity lists and type information for prompt composition.
Creative direction, tone, and style are now handled by prompt-constants.ts.
`;

export const PLANNER_TYPE_GUIDE = `
## 📋 Available Situation Types & Entities

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
- **Political**: left_wing_base, right_wing_base, independent_base
- **Demographic**: youth_voters, seniors_citizens, rural_residents, urban_residents
- **Economic**: labor_unions, business_leaders, tech_industry

### Publications:
- **lib_primary**: Liberal-leaning primary news outlet
- **con_primary**: Conservative-leaning primary news outlet  
- **independent_primary**: Independent/centrist news outlet
- **investigative**: Investigative journalism outlet`;
