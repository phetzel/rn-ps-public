import { Platform } from "react-native";
import { Database } from "@nozbe/watermelondb";
import SQLiteAdapter from "@nozbe/watermelondb/adapters/sqlite";

import { myAppSchema } from "./schema";
import { migrations } from "./migrations";
// Models
import {
  CabinetMember,
  Game,
  Journalist,
  Level,
  Publication,
  Situation,
  SubgroupApproval,
  PressSecretary,
  President,
  PressExchange,
} from "./models";

const adapter = new SQLiteAdapter({
  schema: myAppSchema,
  migrations: migrations,
  jsi: Platform.OS === "ios" || Platform.OS === "android",
  onSetUpError: (error) => {
    console.error(`Database setup failed:`, error);
  },
});

export const database = new Database({
  adapter,
  modelClasses: [
    // List ALL your models here
    Game,
    Level,
    CabinetMember,
    Publication,
    Journalist,
    SubgroupApproval,
    PressSecretary,
    President,
    Situation,
    PressExchange,
  ],
});
