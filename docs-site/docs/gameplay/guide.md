---
title: Gameplay Guide
sidebar_label: Gameplay
sidebar_position: 1
slug: /gameplay/guide
---

# Gameplay Guide

## Core Loop

1. **Briefing** – Review situation brief, scan cabinet intel, set expectations.
2. **Press Conference** – Field journalist questions under time pressure. Answers draw from seven tones: Deflect, Reassure, Challenge, Admit, Deny, Inform, and Authorized.
3. **Press Outcomes** – Relationships shift instantly (journalists amplify future swings, cabinet trust gates intel).
4. **Situation Outcomes** – Political, demographic, and economic subgroups react. Approval is the average of all subgroups.
5. **Level Complete** – Monthly wrap-up, rewards, escalation to the next crisis.

## Flow Diagram

```mermaid
flowchart LR
    A[Briefing] --> B[Press Conference]
    B --> C[Press Outcomes]
    C --> D[Situation Outcomes]
    D --> E[Level Complete]
    E --> A
    B -->|Authorized unlocked?| C
    C -->|Journalists amplify?| D
```

## Win / Lose

- **Win:** Survive all 48 months without getting fired or impeached.
- **Lose:** President relationship hits zero (you’re fired) **or** overall approval collapses (impeachment).

## Systems At A Glance

| System | Inputs | Outputs |
| --- | --- | --- |
| **Relationships** | Answer tone, intel usage, journalist personalities | President/cabinet trust, journalist favor |
| **Approval** | Situation modifiers, subgroup predispositions, journalist magnifiers | Aggregate presidential rating |
| **Intel** | Cabinet loyalty, background bonuses | Authorized answer unlocks, risk/reward plays |
| **Content** | Authored situation scripts, random seeds | Unique question sets per month |

## Tone & Narrative Rules

- Satirical newsroom energy; equal-opportunity roasting.
- Fictional governments/agencies, euphemisms for real tragedies.
- Avoid real politicians, parties, or conspiracy theories.

## Tips

- **Bank goodwill early:** improve cabinet trust to unlock intel and safer Authorized answers later.
- **Mind the magnifiers:** high journalist favor amplifies both good and bad subgroup swings.
- **Rotate tones:** repeating the same tone triggers “press fatigue” penalties in later months.
- **Use toggles:** analytics/ads can be disabled in Settings → Privacy for players who prefer a privacy-first run.

Refer to the Technical section for the underlying math, state machines, and data schemas.
---
id: gameplay-guide
title: Gameplay Guide
sidebar_label: Gameplay
sidebar_position: 1
slug: /gameplay/guide
---

# Gameplay Guide

## Core Loop

1. **Briefing** – Review situation brief, scan cabinet intel, set expectations.
2. **Press Conference** – Field journalist questions under time pressure. Answers draw from seven tones: Deflect, Reassure, Challenge, Admit, Deny, Inform, and Authorized.
3. **Press Outcomes** – Relationships shift instantly (journalists amplify future swings, cabinet trust gates intel).
4. **Situation Outcomes** – Political, demographic, and economic subgroups react. Approval is the average of all subgroups.
5. **Level Complete** – Monthly wrap-up, rewards, escalation to the next crisis.

## Flow Diagram

```mermaid
flowchart LR
    A[Briefing] --> B[Press Conference]
    B --> C[Press Outcomes]
    C --> D[Situation Outcomes]
    D --> E[Level Complete]
    E --> A
    B -->|Authorized answer unlocked?| C
    C -->|Journalists amplify?| D
```

## Win / Lose

- **Win:** Survive all 48 months without getting fired or impeached.
- **Lose:** President relationship hits zero (you’re fired) **or** overall approval collapses (impeachment).

## Systems At A Glance

| System            | Inputs                                                               | Outputs                                      |
| ----------------- | -------------------------------------------------------------------- | -------------------------------------------- |
| **Relationships** | Answer tone, intel usage, journalist personalities                   | President/cabinet trust, journalist favor    |
| **Approval**      | Situation modifiers, subgroup predispositions, journalist magnifiers | Aggregate presidential rating                |
| **Intel**         | Cabinet loyalty, background bonuses                                  | Authorized answer unlocks, risk/reward plays |
| **Content**       | Authored situation scripts, random seeds                             | Unique question sets per month               |

## Tone & Narrative Rules

- Satirical newsroom energy; equal-opportunity roasting.
- Fictional governments/agencies, euphemisms for real tragedies.
- Avoid real politicians, parties, or conspiracy theories.

## Tips

- **Bank goodwill early:** improve cabinet trust to unlock intel and safer Authorized answers later.
- **Mind the magnifiers:** high journalist favor amplifies both good and bad subgroup swings.
- **Rotate tones:** repeating the same tone triggers “press fatigue” penalties in later months.
- **Use toggles:** analytics/ads can be disabled in settings for players who prefer a privacy-first run.

Refer to the Technical section for the underlying math, state machines, and data schemas.\*\*\* End Patch
