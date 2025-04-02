// Create Game
export interface NewGameDetails {
  pressSecretaryName: string;
  // Add presidentName, party etc. later
}

export interface PsRelationships {
  president: number;
  cabinet: Record<string, number>;
}
