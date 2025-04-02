import { appSchema, tableSchema } from "@nozbe/watermelondb";

export const myAppSchema = appSchema({
  version: 1, // Start with version 1
  tables: [
    tableSchema({
      name: "games",
      columns: [
        { name: "status", type: "string", isIndexed: true }, // Index status
        { name: "current_year", type: "number" },
        { name: "current_month", type: "number" },
        { name: "overall_public_approval", type: "number" },
        { name: "ps_name", type: "string" },
        { name: "ps_credibility", type: "number" },
        { name: "ps_relationships_json", type: "string", isOptional: true }, // JSON stored as string
        { name: "president_approval", type: "number" },
        { name: "start_timestamp", type: "number" },
        { name: "end_timestamp", type: "number", isOptional: true },
        { name: "created_at", type: "number" }, // WDB handles these
        { name: "updated_at", type: "number" }, // WDB handles these
      ],
    }),
    tableSchema({
      name: "levels",
      columns: [
        { name: "game_id", type: "string", isIndexed: true }, // Foreign keys are strings (IDs) and indexed
        { name: "year", type: "number" },
        { name: "month", type: "number" },
        { name: "scenario_briefing", type: "string", isOptional: true },
        { name: "start_timestamp", type: "number", isOptional: true },
        { name: "end_timestamp", type: "number", isOptional: true },
        { name: "created_at", type: "number" },
        { name: "updated_at", type: "number" },
      ],
    }),
    tableSchema({
      name: "cabinet_members",
      columns: [
        { name: "game_id", type: "string", isIndexed: true },
        { name: "role", type: "string" }, // Consider unique constraint later if needed via logic
        { name: "name", type: "string" },
        { name: "influence_area", type: "string" },
        { name: "approval_rating", type: "number" },
        { name: "is_active", type: "boolean" }, // Use boolean for flags
        { name: "created_at", type: "number" },
        { name: "updated_at", type: "number" },
      ],
    }),
    tableSchema({
      name: "publications",
      columns: [
        { name: "game_id", type: "string", isIndexed: true },
        { name: "name", type: "string" },
        { name: "political_leaning", type: "string" },
        { name: "reach", type: "number" },
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
        { name: "relationship", type: "number" },
        { name: "is_active", type: "boolean" },
        { name: "created_at", type: "number" },
        { name: "updated_at", type: "number" },
      ],
    }),
    tableSchema({
      name: "subgroup_approvals",
      columns: [
        { name: "game_id", type: "string", isIndexed: true },
        { name: "subgroup_key", type: "string", isIndexed: true }, // Index for lookup
        { name: "approval_rating", type: "number" },
        // WDB doesn't directly support multi-column unique constraints in schema
        // Enforce this uniqueness in your application logic when creating/updating records.
        { name: "created_at", type: "number" },
        { name: "updated_at", type: "number" },
      ],
    }),
  ],
});
