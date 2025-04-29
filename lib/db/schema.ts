import { appSchema, tableSchema } from "@nozbe/watermelondb";

export const myAppSchema = appSchema({
  version: 1, // Start with version 1
  tables: [
    tableSchema({
      name: "games",
      columns: [
        { name: "status", type: "string", isIndexed: true },
        { name: "current_year", type: "number" },
        { name: "current_month", type: "number" },
        { name: "start_timestamp", type: "number" },
        { name: "end_timestamp", type: "number", isOptional: true },
        { name: "ps_name", type: "string" },
        { name: "pres_name", type: "string" },
        { name: "pres_approval_rating", type: "number" },
        { name: "pres_ps_relationship", type: "number" },
        { name: "pres_party", type: "string" },
        { name: "created_at", type: "number" },
        { name: "updated_at", type: "number" },
      ],
    }),

    // Politicians

    tableSchema({
      name: "cabinet_members",
      columns: [
        { name: "game_id", type: "string", isIndexed: true },
        { name: "role", type: "string" },
        { name: "name", type: "string" },
        { name: "influence_area", type: "string" },
        { name: "approval_rating", type: "number" },
        { name: "ps_relationship", type: "number" },
        { name: "is_active", type: "boolean" },
        { name: "created_at", type: "number" },
        { name: "updated_at", type: "number" },
      ],
    }),

    // Media
    tableSchema({
      name: "publications",
      columns: [
        { name: "game_id", type: "string", isIndexed: true },
        { name: "name", type: "string" },
        { name: "political_leaning", type: "string" },
        { name: "reach", type: "number" },
        { name: "approval_rating", type: "number" },
        { name: "created_at", type: "number" },
        { name: "updated_at", type: "number" },
      ],
    }),
    tableSchema({
      name: "journalists",
      columns: [
        { name: "game_id", type: "string", isIndexed: true },
        { name: "publication_id", type: "string", isIndexed: true },
        { name: "name", type: "string" },
        { name: "bias", type: "string", isOptional: true },
        { name: "aggressiveness", type: "number" },
        { name: "reputation", type: "number" },
        { name: "ps_relationship", type: "number" },
        { name: "is_active", type: "boolean" },
        { name: "created_at", type: "number" },
        { name: "updated_at", type: "number" },
      ],
    }),

    // State
    tableSchema({
      name: "subgroup_approvals",
      columns: [
        { name: "game_id", type: "string", isIndexed: true },
        { name: "subgroup_key", type: "string", isIndexed: true }, // Index for lookup
        { name: "approval_rating", type: "number" },
        { name: "category", type: "string" },
        { name: "created_at", type: "number" },
        { name: "updated_at", type: "number" },
      ],
    }),

    // Game content
    tableSchema({
      name: "levels",
      columns: [
        { name: "game_id", type: "string", isIndexed: true },
        { name: "year", type: "number" },
        { name: "month", type: "number" },
        { name: "status", type: "string" },
        { name: "active_situations", type: "string", isOptional: true },
        { name: "outcome_snapshot", type: "string", isOptional: true },
        { name: "created_at", type: "number" },
        { name: "updated_at", type: "number" },
      ],
    }),
    tableSchema({
      name: "situations",
      columns: [
        { name: "game_id", type: "string", isIndexed: true },
        { name: "start_level_id", type: "string", isIndexed: true },
        { name: "type", type: "string" },
        { name: "title", type: "string" },
        { name: "description", type: "string" },
        { name: "status", type: "string" },
        { name: "progress", type: "string", isOptional: true },
        { name: "created_at", type: "number" },
        { name: "updated_at", type: "number" },
      ],
    }),

    tableSchema({
      name: "press_exchanges",
      columns: [
        { name: "level_id", type: "string", isIndexed: true },
        { name: "situation_id", type: "string", isIndexed: true },
        { name: "journalist_id", type: "string", isIndexed: true },
        { name: "content", type: "string" },
        { name: "progress", type: "string" },
        { name: "created_at", type: "number" },
        { name: "updated_at", type: "number" },
      ],
    }),
  ],
});
