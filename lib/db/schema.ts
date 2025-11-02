import { appSchema, tableSchema } from "@nozbe/watermelondb";

export const myAppSchema = appSchema({
  version: 1,
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
        { name: "pres_ps_relationship", type: "number" },
        { name: "pres_leaning", type: "string" },
        { name: "ps_background", type: "string", isOptional: true },
        { name: "used_situations", type: "string" },
        { name: "created_at", type: "number" },
        { name: "updated_at", type: "number" },
      ],
    }),

    // Politics
    tableSchema({
      name: "cabinet_members",
      columns: [
        { name: "game_id", type: "string", isIndexed: true },
        { name: "static_id", type: "string", isIndexed: true },
        { name: "name", type: "string" },
        { name: "approval_rating", type: "number" },
        { name: "ps_relationship", type: "number" },
        { name: "is_active", type: "boolean" },
        { name: "created_at", type: "number" },
        { name: "updated_at", type: "number" },
      ],
    }),

    tableSchema({
      name: "subgroup_approvals",
      columns: [
        { name: "game_id", type: "string", isIndexed: true },
        { name: "static_id", type: "string", isIndexed: true },
        { name: "approval_rating", type: "number" },
        { name: "created_at", type: "number" },
        { name: "updated_at", type: "number" },
      ],
    }),

    // Media
    tableSchema({
      name: "publications",
      columns: [
        { name: "game_id", type: "string", isIndexed: true },
        { name: "static_id", type: "string", isIndexed: true },
        { name: "created_at", type: "number" },
        { name: "updated_at", type: "number" },
      ],
    }),
    tableSchema({
      name: "journalists",
      columns: [
        { name: "game_id", type: "string", isIndexed: true },
        { name: "publication_id", type: "string", isIndexed: true },
        { name: "static_id", type: "string", isIndexed: true },
        { name: "ps_relationship", type: "number" },
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
        { name: "cabinet_snapshot", type: "string" },
        { name: "outcome_snapshot", type: "string", isOptional: true },
        { name: "press_ad_watched", type: "boolean" },
        { name: "situation_ad_watched", type: "boolean" },
        { name: "created_at", type: "number" },
        { name: "updated_at", type: "number" },
      ],
    }),
    tableSchema({
      name: "situations",
      columns: [
        { name: "game_id", type: "string", isIndexed: true },
        { name: "level_id", type: "string", isIndexed: true },
        { name: "type", type: "string" },
        { name: "title", type: "string" },
        { name: "description", type: "string" },
        { name: "content", type: "string" },
        { name: "outcome_id", type: "string", isOptional: true },
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

    // App settings / flags
    tableSchema({
      name: "app_settings",
      columns: [
        { name: "has_fiction_disclaimer_ack", type: "boolean" },
        { name: "fiction_disclaimer_acknowledged_at", type: "number", isOptional: true },
        { name: "created_at", type: "number" },
        { name: "updated_at", type: "number" },
      ],
    }),
  ],
});
