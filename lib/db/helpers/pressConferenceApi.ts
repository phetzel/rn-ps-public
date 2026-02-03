import { fetchPressExchangesForLevel } from '~/lib/db/helpers/fetchApi';
import { accumulatePressConferenceEffects } from '~/lib/game/press-conference';
import { JournalistStaticId, PressConferenceRawEffects } from '~/types';

import type { ExchangeRecord } from '~/lib/game/press-conference';

// Calculate impacts from press exchanges
export async function calculatePressConferenceRawEffects(
  levelId: string,
): Promise<PressConferenceRawEffects> {
  // 1. Fetch all press exchanges for the level
  const pressExchanges = await fetchPressExchangesForLevel(levelId);

  // 2. Map DB models to plain records for pure processing
  const records: ExchangeRecord[] = await Promise.all(
    pressExchanges.map(async (exchange) => {
      const journalist = await exchange.journalist.fetch();
      const situation = await exchange.situation.fetch();
      return {
        id: exchange.id,
        journalistStaticId: journalist?.staticId as JournalistStaticId,
        situationId: situation?.id ?? null,
        content: exchange.parseContent,
        progress: exchange.parseProgress,
      };
    }),
  );

  // 3. Delegate to pure game engine function
  return accumulatePressConferenceEffects(records);
}
