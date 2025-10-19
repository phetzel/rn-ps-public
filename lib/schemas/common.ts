import { z } from "zod";

import { CabinetStaticId, SituationType, SubgroupStaticId, PublicationStaticId } from "~/types";

export const idSchema = z
  .string()
  .min(1)
  .regex(/^[a-z0-9_-]+$/, {
    message:
      "ID must contain only lowercase letters, numbers, underscores, and hyphens",
  });

export const textLengthSchema = {
  situationTitle: z.string()
    .min(15)
    .max(32)
    .describe("Satirical news headline for the political situation. Keep it punchy (15–32 chars) and newsworthy."),

  situationDescription: z.string()
    .min(80)
    .max(160)
    .describe("Brief summary of the political situation's context and stakes. Sets up the scenario for press conference questions."),

  outcomeTitle: z.string()
    .min(20)
    .max(60)
    .describe("Short, punchy headline describing this specific outcome of the scenario."),

  outcomeDescription: z.string()
    .min(60)
    .max(140)
    .describe("Detailed explanation of what happens in this outcome, including political consequences and public reaction. Should be substantive yet satirical."),

  questionText: z.string()
    .min(60)
    .max(170)
    .describe("Press conference question from a journalist. Finish the thought cleanly and avoid trailing fragments."),

  answerText: z.string()
    .min(80)
    .max(220)
    .describe("Press Secretary response option. Should reflect the answer type (deflect, reassure, challenge, etc.), feel authentic to the context, and end on a full sentence."),

  rationale: z.string()
    .min(40)
    .max(150)
    .describe("Explanation of why this entity (President/Cabinet member) prefers this answer type. Reflect their political position and departmental interests; use complete sentences within 40–150 characters."),

  authorizedContent: z.string()
    .min(50)
    .max(220)
    .describe("Classified intel the Press Secretary can quote verbatim at the podium. Provide 1–2 complete sentences (50–220 chars) in plain language that spell out a concrete, actionable fact or consequence; never use gossip, nicknames, or code words.")
};

// Enums
export const situationTypeSchema = z.nativeEnum(SituationType).describe("Situation category");
export const cabinetMemberSchema = z.nativeEnum(CabinetStaticId);
export const subgroupSchema = z.nativeEnum(SubgroupStaticId);
export const publicationSchema = z.nativeEnum(PublicationStaticId);
