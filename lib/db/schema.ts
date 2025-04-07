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
        { name: "created_at", type: "number" },
        { name: "updated_at", type: "number" },
      ],
    }),

    // Politicians
    tableSchema({
      name: "press_secretaries",
      columns: [
        { name: "game_id", type: "string", isIndexed: true },
        { name: "name", type: "string" },
        { name: "credibility", type: "number" },
        { name: "approval_rating", type: "number" },
        { name: "created_at", type: "number" },
        { name: "updated_at", type: "number" },
      ],
    }),
    tableSchema({
      name: "presidents",
      columns: [
        { name: "game_id", type: "string", isIndexed: true },
        { name: "name", type: "string" },
        { name: "approval_rating", type: "number" },
        { name: "ps_relationship", type: "number" },
        { name: "created_at", type: "number" },
        { name: "updated_at", type: "number" },
      ],
    }),
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
    // tableSchema({
    //   name: "situations",
    //   columns: [
    //     { name: "game_id", type: "string", isIndexed: true },
    //     { name: "start_level_id", type: "string", isIndexed: true },
    //     {
    //       name: "resolution_level_id",
    //       type: "string",
    //       isIndexed: true,
    //       isOptional: true,
    //     },
    //     { name: "title", type: "string" },
    //     { name: "description", type: "string" },
    //     { name: "category", type: "string" },
    //     { name: "severity", type: "number" },
    //     { name: "resolved", type: "boolean" },
    //     { name: "involvement", type: "string" }, // JSON
    //     { name: "hidden_truth", type: "string", isOptional: true },
    //     { name: "created_at", type: "number" },
    //     { name: "updated_at", type: "number" },
    //   ],
    // }),
    // tableSchema({
    //   name: "outcomes",
    //   columns: [
    //     { name: "game_id", type: "string", isIndexed: true },
    //     { name: "level_id", type: "string", isIndexed: true },
    //     {
    //       name: "situation_id",
    //       type: "string",
    //       isIndexed: true,
    //       isOptional: true,
    //     },
    //     {
    //       name: "journalist_id",
    //       type: "string",
    //       isIndexed: true,
    //       isOptional: true,
    //     },
    //     { name: "question_text", type: "string", isOptional: true },
    //     { name: "player_answer", type: "string" },
    //     { name: "answer_type", type: "string" },
    //     { name: "immediate_effects", type: "string" }, // JSON
    //     { name: "outcome_summary", type: "string" },
    //     { name: "created_at", type: "number" },
    //   ],
    // }),
  ],
});
