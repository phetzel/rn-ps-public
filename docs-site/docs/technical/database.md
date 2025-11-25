# Database Schema

Press Office uses **WatermelonDB** on top of SQLite for high-performance local storage.

## Core Tables

### `games`
The root object for a playthrough.
*   `status`: Active/Game Over.
*   `current_year`, `current_month`: In-game time.
*   `pres_name`, `pres_leaning`: Randomized attributes of the President.

### `levels`
Represents a single turn (month) in the game.
*   `cabinet_snapshot`: JSON blob of cabinet approval at start of level.
*   `outcome_snapshot`: JSON blob of changes at end of level.

### `situations`
A specific event occurring within a level.
*   `title`, `description`: Display text.
*   `type`: Crisis, Scandal, Policy, etc.

### `press_exchanges`
The interaction loop for a situation.
*   `journalist_id`: Who is asking.
*   `content`: The question text.
*   `progress`: State of the conversation.

## Entity Tables

*   `cabinet_members`: Tracks relationship with specific cabinet positions.
*   `subgroup_approvals`: Tracks approval rating (0-100) with each voter demographic.
*   `publications` / `journalists`: Tracks relationship scores with media entities.

## Migrations

Schema changes are handled in `lib/db/migrations.ts`. Since this is a local-first app, we use WatermelonDB's migration mechanics to safely upgrade user databases between app versions.

