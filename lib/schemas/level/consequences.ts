import { z } from 'zod';

import { CabinetStaticId } from '~/types';

export const consequenceResultSchema = z.object({
  gameEnded: z.boolean(),
  gameEndReason: z.enum(['impeached', 'fired', 'completed']).optional(),
  cabinetMembersFired: z.array(z.nativeEnum(CabinetStaticId)),
});
