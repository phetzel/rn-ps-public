import { faker } from '@faker-js/faker';

import { CabinetStaticId } from '~/types';

/**
 * Generate a cabinet member name with appropriate title prefix based on their role.
 */
export function generateCabinetMemberName(staticId: CabinetStaticId): string {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  let prefix = '';

  switch (staticId) {
    case CabinetStaticId.Defense:
      prefix = 'General ';
      break;
    case CabinetStaticId.Justice:
      prefix = 'Judge ';
      break;
  }

  return `${prefix}${firstName} ${lastName}`;
}

/**
 * Create a map of cabinet members keyed by their static ID.
 * Generic version that works with any object that has a staticId.
 */
export function createCabinetMemberMap<T extends { staticId: CabinetStaticId }>(
  members: T[] = [],
): Map<CabinetStaticId, T> {
  const map = new Map<CabinetStaticId, T>();
  if (!members) return map;
  for (const member of members) {
    if (member && member.staticId) {
      map.set(member.staticId, member);
    } else {
      console.warn('Attempted to map an invalid CabinetMember:', member);
    }
  }
  return map;
}
