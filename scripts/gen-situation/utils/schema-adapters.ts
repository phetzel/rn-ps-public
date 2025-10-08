import type { CabinetStaticId } from "~/types";
import {
  generatePreferencesSchema,
  generateOutcomesSchema,
  type GeneratePreferences,
  type GenerateOutcomes,
} from "~/lib/schemas/generate";
import {
  situationPreferencesSchema,
  type SituationPreferences,
} from "~/lib/schemas/situations/preferences";
import {
  situationOutcomeArraySchema,
  type SituationOutcome,
} from "~/lib/schemas/situations/outcomes";
import {
  exchangeDataSchema,
  type ExchangeData,
  type ValidatedExchangeData,
} from "~/lib/schemas/exchanges";

/**
 * Normalize generation-format preferences into core SituationPreferences.
 */
export function toSituationPreferences(
  preferences: GeneratePreferences
): SituationPreferences {
  const parsed = generatePreferencesSchema.parse(preferences);

  const normalizedCabinet = parsed.cabinet
    ? (Object.entries(parsed.cabinet).reduce((acc, [id, value]) => {
        const cabinetId = id as CabinetStaticId;
        acc[cabinetId] = {
          preference: value.preference,
          ...(value.authorizedContent == null
            ? {}
            : { authorizedContent: value.authorizedContent }),
        };
        return acc;
      }, {} as NonNullable<SituationPreferences["cabinet"]>))
    : undefined;

  return situationPreferencesSchema.parse({
    president: parsed.president,
    cabinet: normalizedCabinet,
  });
}

/**
 * Convert core preferences back into generation-format structure for prompts.
 */
export function toGeneratePreferences(
  preferences: SituationPreferences
): GeneratePreferences {
  const normalizedCabinet = preferences.cabinet
    ? Object.entries(preferences.cabinet).reduce((acc, [id, value]) => {
        const cabinetId = id as CabinetStaticId;
        acc[cabinetId] = {
          preference: value.preference,
          authorizedContent: value.authorizedContent ?? null,
        };
        return acc;
      }, {} as NonNullable<GeneratePreferences["cabinet"]>)
    : undefined;

  return generatePreferencesSchema.parse({
    president: preferences.president,
    cabinet: normalizedCabinet,
  });
}

/**
 * Normalize generation-format outcomes into SituationOutcome array.
 */
export function toSituationOutcomes(
  outcomes: GenerateOutcomes
): SituationOutcome[] {
  const parsed = generateOutcomesSchema.parse(outcomes);
  return situationOutcomeArraySchema.parse(parsed.outcomes);
}

/**
 * Wrap core outcomes in the generation-format helper.
 */
export function toGenerateOutcomes(
  outcomes: SituationOutcome[]
): GenerateOutcomes {
  return generateOutcomesSchema.parse({ outcomes });
}

/**
 * Convert validated exchanges into core ExchangeData objects.
 */
export function toExchangeDataArray(
  exchanges: ValidatedExchangeData[]
): ExchangeData[] {
  return exchanges.map((exchange) =>
    exchangeDataSchema.parse({
      publication: exchange.publication,
      content: exchange.content,
    })
  );
}
