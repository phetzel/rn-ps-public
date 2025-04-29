import {
  PoliticalLeaning,
  PublicationStaticId,
  type StaticPublication,
  JournalistStaticId,
  type StaticJournalist,
} from "~/types";

export const staticPublications: Record<
  PublicationStaticId,
  StaticPublication
> = {
  [PublicationStaticId.LibPrimary]: {
    name: "Capital Chronicle",
    politicalLeaning: PoliticalLeaning.Liberal,
  },
  [PublicationStaticId.ConPrimary]: {
    name: "Liberty Ledger",
    politicalLeaning: PoliticalLeaning.Conservative,
  },
  [PublicationStaticId.IndependentPrimary]: {
    name: "Metro Monitor",
    politicalLeaning: PoliticalLeaning.Neutral,
  },
};

export const staticJournalists: Record<JournalistStaticId, StaticJournalist> = {
  [JournalistStaticId.LibPrimaryFirst]: {
    publicationStaticId: PublicationStaticId.LibPrimary,
    name: "Sarah Inquiry",
  },
  [JournalistStaticId.LibPrimarySecond]: {
    publicationStaticId: PublicationStaticId.LibPrimary,
    name: "Chris Coder",
  },
  [JournalistStaticId.ConPrimaryFirst]: {
    publicationStaticId: PublicationStaticId.ConPrimary,
    name: "Mark Statement",
  },
  [JournalistStaticId.ConPrimarySecond]: {
    publicationStaticId: PublicationStaticId.ConPrimary,
    name: "Penny Profit",
  },
  [JournalistStaticId.IndependentPrimaryFirst]: {
    publicationStaticId: PublicationStaticId.IndependentPrimary,
    name: "John News",
  },
};
