import {
  PoliticalLeaning,
  PublicationStaticId,
  type StaticPublication,
  JournalistStaticId,
  type StaticJournalist,
} from '~/types';

export const staticPublications: Record<PublicationStaticId, StaticPublication> = {
  [PublicationStaticId.LibPrimary]: {
    name: 'The Daily Soy',
    description: "News That's Organic, Gluten-Free, and Locally-Sourced",
    politicalLeaning: PoliticalLeaning.Liberal,
  },
  [PublicationStaticId.ConPrimary]: {
    name: 'Freedom Fries Herald',
    description: 'Patriotism Served Fresh Daily',
    politicalLeaning: PoliticalLeaning.Conservative,
  },
  [PublicationStaticId.IndependentPrimary]: {
    name: 'The Moderate Times',
    description: 'We Have No Strong Feelings One Way or Another',
    politicalLeaning: PoliticalLeaning.Neutral,
  },
  [PublicationStaticId.Investigative]: {
    name: 'Integrity Watch',
    description: 'Investigative Journalism at its Finest',
    politicalLeaning: PoliticalLeaning.Neutral,
  },
};

export const staticJournalists: Record<JournalistStaticId, StaticJournalist> = {
  // Conservative
  [JournalistStaticId.ConPrimaryA]: {
    publicationStaticId: PublicationStaticId.ConPrimary,
    name: 'Ronald Rage',
  },
  [JournalistStaticId.ConPrimaryB]: {
    publicationStaticId: PublicationStaticId.ConPrimary,
    name: 'Hawk Stormwell',
  },
  [JournalistStaticId.ConPrimaryC]: {
    publicationStaticId: PublicationStaticId.ConPrimary,
    name: 'Greta Smokescreen',
  },
  // Liberal
  [JournalistStaticId.LibPrimaryA]: {
    publicationStaticId: PublicationStaticId.LibPrimary,
    name: 'Aspen Trustfund',
  },
  [JournalistStaticId.LibPrimaryB]: {
    publicationStaticId: PublicationStaticId.LibPrimary,
    name: 'Zoey Crusade',
  },
  [JournalistStaticId.LibPrimaryC]: {
    publicationStaticId: PublicationStaticId.LibPrimary,
    name: 'Harper Avocado',
  },
  // Independent
  [JournalistStaticId.IndependentA]: {
    publicationStaticId: PublicationStaticId.IndependentPrimary,
    name: 'Norm Center',
  },
  [JournalistStaticId.IndependentB]: {
    publicationStaticId: PublicationStaticId.IndependentPrimary,
    name: 'Sam Neutrality',
  },
  // Investigative
  [JournalistStaticId.InvestigativeA]: {
    publicationStaticId: PublicationStaticId.Investigative,
    name: 'Morgan Leakerton',
  },
  [JournalistStaticId.InvestigativeB]: {
    publicationStaticId: PublicationStaticId.Investigative,
    name: 'Perry Paranoia',
  },
};
