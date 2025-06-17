import { Game } from "~/lib/db/models";

export type GameOptions = Partial<Game>;

/**
 * Options for the `createGame` factory.
 * Allows `usedSituations` to be passed as a `string[]` for convenience.
 */
export type GameFactoryOptions = Partial<Omit<Game, "usedSituations">> & {
  usedSituations?: string[];
};
