import { database } from "~/lib/db";
// Import models using the new index file
import {
  CabinetMember,
  Game,
  Journalist,
  Level,
  Publication,
  Situation,
  SubgroupApproval,
  PressExchange,
} from "~/lib/db/models";

// Collections
export const cabinetCollection = database.get<CabinetMember>("cabinet_members");
export const gamesCollection = database.get<Game>("games");
export const journalistCollection = database.get<Journalist>("journalists");
export const levelsCollection = database.get<Level>("levels");
export const publicationCollection = database.get<Publication>("publications");
export const situationCollection = database.get<Situation>("situations");
export const subgroupCollection =
  database.get<SubgroupApproval>("subgroup_approvals");
export const pressExchangeCollection =
  database.get<PressExchange>("press_exchanges");
