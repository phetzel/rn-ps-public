import { writeFile, mkdir, readFile } from "fs/promises";
import { join } from "path";
import {
  SituationType,
  CabinetStaticId,
  SubgroupStaticId,
  PublicationStaticId,
  AnswerType,
  ExchangeImpactWeight,
  OutcomeModifierWeight,
  SituationConsequenceWeight,
  JournalistStaticId,
  type SituationData,
  type SituationOutcome,
  type SituationPreferences,
  type ExchangeData,
} from "~/types";

// Internal utility function (moved from situation-converter.ts)
function extractSituationComponents(situation: SituationData): {
  outcomes: SituationOutcome[];
  preferences: SituationPreferences;
  exchanges: any[];
} {
  return {
    outcomes: situation.content.outcomes,
    preferences: situation.content.preferences,
    // Preserve full ExchangeData objects so we keep publication for filenames
    exchanges: situation.exchanges
  };
}

// ═══════════════════════════════════════════════════════════════════════════════
// SITUATION FILE WRITER - WRITES COMPLETE SITUATIONS TO V2 STRUCTURE
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * Convert camelCase to kebab-case for file names
 */
function toKebabCase(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Convert PascalCase to camelCase for variable names
 */
function toCamelCase(str: string): string {
  return str.charAt(0).toLowerCase() + str.slice(1);
}

/**
 * Convert camelCase to PascalCase for variable names
 */
function toPascalCase(str: string): string {
  return str
    .split(/[-_\s]+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join("");
}

/**
 * Get type directory name from SituationType
 */
function getTypeDirectory(type: SituationType): string {
  switch (type) {
    case SituationType.DomesticPolicy:
      return "domestic-policy";
    case SituationType.ForeignAffairs:
      return "foreign-affairs";
    case SituationType.Economy:
      return "economy";
    case SituationType.Security:
      return "security";
    case SituationType.Environment:
      return "environment";
    case SituationType.Ethics:
      return "ethics";
    case SituationType.Governance:
      return "governance";
    default:
      return "misc";
  }
}

/**
 * Get publication file name from PublicationStaticId
 */
function getPublicationFileName(publication: PublicationStaticId): string {
  switch (publication) {
    case PublicationStaticId.LibPrimary:
      return "libPrimaryExchange";
    case PublicationStaticId.ConPrimary:
      return "conPrimaryExchange";
    case PublicationStaticId.IndependentPrimary:
      return "independentPrimaryExchange";
    case PublicationStaticId.Investigative:
      return "investigativeExchange";
    default:
      return "unknownExchange";
  }
}

const ENUM_VALUE_PREFIX = "__ENUM__";
const ENUM_KEY_PREFIX = "__ENUMKEY__";
const ENUM_PLACEHOLDER_SUFFIX = "__";

function isEnumForwardKey(key: string): boolean {
  return Number.isNaN(Number(key));
}

function findEnumMemberName(
  enumObj: Record<string, string | number>,
  rawValue: unknown
): string | undefined {
  return Object.entries(enumObj)
    .filter(([key]) => isEnumForwardKey(key))
    .find(([, value]) => value === rawValue)?.[0];
}

function ensureEnumMember(
  enumObj: Record<string, string | number>,
  rawValue: unknown,
  enumName: string
): string {
  const member = findEnumMemberName(enumObj, rawValue);
  if (!member) {
    throw new Error(`Value ${String(rawValue)} is not a valid member of ${enumName}`);
  }
  return member;
}

function asEnumValue(
  enumObj: Record<string, string | number>,
  rawValue: unknown,
  enumName: string
): string {
  const member = ensureEnumMember(enumObj, rawValue, enumName);
  return `${ENUM_VALUE_PREFIX}${enumName}.${member}${ENUM_PLACEHOLDER_SUFFIX}`;
}

function asEnumKey(
  enumObj: Record<string, string | number>,
  rawValue: unknown,
  enumName: string
): string {
  const member = ensureEnumMember(enumObj, rawValue, enumName);
  return `${ENUM_KEY_PREFIX}${enumName}.${member}${ENUM_PLACEHOLDER_SUFFIX}`;
}

function mapEnumRecord(
  record: Record<string, any> | undefined,
  keyEnum: Record<string, string | number>,
  keyEnumName: string,
  valueMapper: (value: any) => any
): Record<string, any> | undefined {
  if (!record) return undefined;

  const result: Record<string, any> = {};
  for (const [rawKey, rawValue] of Object.entries(record)) {
    if (rawValue === undefined) continue;
    const enumKey = asEnumKey(keyEnum, rawKey, keyEnumName);
    result[enumKey] = valueMapper(rawValue);
  }

  return Object.keys(result).length > 0 ? result : undefined;
}

function replaceEnumPlaceholders(serialized: string): string {
  return serialized
    .replace(
      new RegExp(`"${ENUM_VALUE_PREFIX}([A-Za-z0-9_.]+)${ENUM_PLACEHOLDER_SUFFIX}"`, "g"),
      "$1"
    )
    .replace(
      new RegExp(`"${ENUM_KEY_PREFIX}([A-Za-z0-9_.]+)${ENUM_PLACEHOLDER_SUFFIX}"`, "g"),
      (_match, group) => `[${group}]`
    );
}

function stripQuotesFromKeys(serialized: string): string {
  return serialized.replace(/"([a-zA-Z_][a-zA-Z0-9_]*)":/g, "$1:");
}

function formatSerialized(value: unknown): string {
  const json = JSON.stringify(value, null, 2);
  const withEnums = replaceEnumPlaceholders(json);
  return stripQuotesFromKeys(withEnums);
}

function mapOutcomeModifiers(
  modifiers: Record<string, OutcomeModifierWeight>,
  context?: string
): Record<string, string> {
  const result: Record<string, string> = {};
  for (const [key, rawValue] of Object.entries(modifiers || {})) {
    result[key] = asEnumValue(
      OutcomeModifierWeight,
      rawValue,
      "OutcomeModifierWeight"
    );
  }
  if (Object.keys(result).length === 0) {
    throw new Error(
      `No outcome modifiers found${context ? ` for ${context}` : ""}`
    );
  }
  return result;
}

/**
 * Generate outcomes file content
 */
function generateOutcomesFile(
  outcomes: SituationOutcome[],
  variableName: string
): string {
  const transformed = outcomes.map((outcome) => {
    const cabinetImpacts = mapEnumRecord(
      outcome.consequences?.approvalChanges?.cabinet,
      CabinetStaticId,
      "CabinetStaticId",
      (value) =>
        asEnumValue(
          SituationConsequenceWeight,
          value,
          "SituationConsequenceWeight"
        )
    );
    const subgroupImpacts = mapEnumRecord(
      outcome.consequences?.approvalChanges?.subgroups,
      SubgroupStaticId,
      "SubgroupStaticId",
      (value) =>
        asEnumValue(
          SituationConsequenceWeight,
          value,
          "SituationConsequenceWeight"
        )
    );

    const approvalChanges: Record<string, any> = {};
    if (cabinetImpacts) {
      approvalChanges.cabinet = cabinetImpacts;
    }
    if (subgroupImpacts) {
      approvalChanges.subgroups = subgroupImpacts;
    }

    if (Object.keys(approvalChanges).length === 0) {
      throw new Error(
        `Outcome ${outcome.id} has no approval changes to serialize`
      );
    }

    const transformedOutcome: Record<string, any> = {
      id: outcome.id,
      title: outcome.title,
      description: outcome.description,
      weight: outcome.weight,
      consequences: {
        approvalChanges,
      },
    };

    if (outcome.followUpId) {
      transformedOutcome.followUpId = outcome.followUpId;
    }

    return transformedOutcome;
  });

  const serialized = formatSerialized(transformed);
  return `import {
  SituationConsequenceWeight,
  CabinetStaticId,
  SubgroupStaticId,
} from "~/types";
import type { SituationOutcome } from "~/lib/schemas/situations";

export const ${variableName}: SituationOutcome[] = ${serialized};
`;
}

/**
 * Generate preferences file content
 */
function generatePreferencesFile(
  preferences: SituationPreferences,
  variableName: string
): string {
  const presidentPreference = preferences.president;
  if (!presidentPreference) {
    throw new Error("President preference is required for serialization");
  }

  const transformed: Record<string, any> = {
    president: {
      answerType: asEnumValue(AnswerType, presidentPreference.answerType, "AnswerType"),
      rationale: presidentPreference.rationale,
    },
  };

  const cabinetPreferences = mapEnumRecord(
    preferences.cabinet,
    CabinetStaticId,
    "CabinetStaticId",
    (value: any) => {
      const preferenceBlock: Record<string, any> = {
        preference: {
          answerType: asEnumValue(
            AnswerType,
            value.preference.answerType,
            "AnswerType"
          ),
          rationale: value.preference.rationale,
        },
      };

      if (value.authorizedContent) {
        preferenceBlock.authorizedContent = value.authorizedContent;
      }

      return preferenceBlock;
    }
  );

  if (cabinetPreferences) {
    transformed.cabinet = cabinetPreferences;
  }

  const serialized = formatSerialized(transformed);
  return `import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/lib/schemas/situations";

export const ${variableName}: SituationPreferences = ${serialized};
`;
}

/**
 * Generate individual exchange file content
 */
function generateExchangeFile(
  exchange: ExchangeData,
  variableName: string
): string {
  const transformImpact = (impact: { weight: ExchangeImpactWeight; reaction?: string }) => {
    const transformedImpact: Record<string, any> = {
      weight: asEnumValue(
        ExchangeImpactWeight,
        impact.weight,
        "ExchangeImpactWeight"
      ),
    };

    if (impact.reaction !== undefined) {
      transformedImpact.reaction = impact.reaction;
    }

    return transformedImpact;
  };

  const transformImpacts = (
    impacts: ExchangeData["content"]["rootQuestion"]["answers"][number]["impacts"]
  ) => {
    const result: Record<string, any> = {};

    if (impacts.president) {
      result.president = transformImpact(impacts.president);
    }

    const cabinetImpacts = mapEnumRecord(
      impacts.cabinet,
      CabinetStaticId,
      "CabinetStaticId",
      (value) => transformImpact(value)
    );
    if (cabinetImpacts) {
      result.cabinet = cabinetImpacts;
    }

    const journalistImpacts = mapEnumRecord(
      impacts.journalists,
      JournalistStaticId,
      "JournalistStaticId",
      (value) => transformImpact(value)
    );
    if (journalistImpacts) {
      result.journalists = journalistImpacts;
    }

    return result;
  };

  const transformAnswer = (
    answer: ExchangeData["content"]["rootQuestion"]["answers"][number]
  ) => {
    const outcomeModifiers = mapOutcomeModifiers(
      answer.outcomeModifiers,
      `answer ${answer.id}`
    );
    const impacts = transformImpacts(answer.impacts);

    if (Object.keys(impacts).length === 0) {
      throw new Error(`Answer ${answer.id} has no impacts to serialize`);
    }

    const transformedAnswer: Record<string, any> = {
      id: answer.id,
      text: answer.text,
      type: asEnumValue(AnswerType, answer.type, "AnswerType"),
      outcomeModifiers,
      impacts,
    };

    if (answer.authorizedCabinetMemberId) {
      transformedAnswer.authorizedCabinetMemberId = asEnumValue(
        CabinetStaticId,
        answer.authorizedCabinetMemberId,
        "CabinetStaticId"
      );
    }

    if (answer.followUpId) {
      transformedAnswer.followUpId = answer.followUpId;
    }

    return transformedAnswer;
  };

  const transformQuestion = (
    question: ExchangeData["content"]["rootQuestion"]
  ) => ({
    id: question.id,
    text: question.text,
    answers: question.answers.map(transformAnswer),
  });

  const transformed = {
    publication: asEnumValue(
      PublicationStaticId,
      exchange.publication,
      "PublicationStaticId"
    ),
    content: {
      rootQuestion: transformQuestion(exchange.content.rootQuestion),
      secondaryQuestions: exchange.content.secondaryQuestions.map(transformQuestion),
      tertiaryQuestions: exchange.content.tertiaryQuestions.map(transformQuestion),
    },
  };

  const serialized = formatSerialized(transformed);

  return `import {
  AnswerType,
  ExchangeImpactWeight,
  OutcomeModifierWeight,
  CabinetStaticId,
  PublicationStaticId,
  JournalistStaticId,
} from "~/types";
import type { ExchangeData } from "~/lib/schemas/exchanges";

export const ${variableName}: ExchangeData = ${serialized};
`;
}

/**
 * Generate exchanges index file content
 */
function generateExchangesIndexFile(
  exchanges: ExchangeData[],
  variableName: string,
  exchangeVariables: string[]
): string {
  const imports = exchangeVariables
    .map((varName, index) => {
      const fileName = getPublicationFileName(exchanges[index].publication);
      return `import { ${varName} } from "./${fileName}";`;
    })
    .join("\n");

  return `import type { ExchangeData } from "~/lib/schemas/exchanges";
${imports}

export const ${variableName}: ExchangeData[] = [
  ${exchangeVariables.join(",\n  ")},
];
`;
}

/**
 * Convert SituationType value to enum name
 */
function getSituationTypeEnumName(type: SituationType): string {
  switch (type) {
    case SituationType.DomesticPolicy:
      return "DomesticPolicy";
    case SituationType.ForeignAffairs:
      return "ForeignAffairs";
    case SituationType.Economy:
      return "Economy";
    case SituationType.Security:
      return "Security";
    case SituationType.Environment:
      return "Environment";
    case SituationType.Ethics:
      return "Ethics";
    case SituationType.Governance:
      return "Governance";
    default:
      return "DomesticPolicy";
  }
}

/**
 * Generate main situation index file
 */
function generateSituationIndexFile(
  situation: SituationData,
  variableName: string,
  outcomesVar: string,
  preferencesVar: string,
  exchangesVar: string
): string {
  const typeEnumName = getSituationTypeEnumName(situation.type);
  const staticKey = situation.trigger.staticKey;

  return `import { SituationType } from "~/types";
import type { SituationDataType } from "~/lib/schemas/situations";
import { ${outcomesVar} } from "./${outcomesVar}";
import { ${preferencesVar} } from "./${preferencesVar}";
import { ${exchangesVar} } from "./exchanges";

export const ${variableName}: SituationDataType = {
  trigger: {
    staticKey: "${staticKey}",
    type: SituationType.${typeEnumName},
    requirements: {},
  },
  type: SituationType.${typeEnumName},
  title: "${situation.title}",
  description: "${situation.description}",
  content: {
    outcomes: ${outcomesVar},
    preferences: ${preferencesVar},
  },
  exchanges: ${exchangesVar},
};
`;
}

/**
 * Convert kebab-case to camelCase
 */
function kebabToCamelCase(str: string): string {
  return str.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
}

/**
 * Parse existing index file to extract imports and exports
 */
function parseIndexFile(content: string): {
  typeImport: string;
  situationImports: Array<{ variable: string; path: string }>;
  exportArray: string[];
} {
  const lines = content.split("\n");

  // Find type import
  const typeImportLine =
    lines.find(
      (line) =>
        line.includes("import type") && line.includes("SituationData")
    ) || "";

  // Find situation imports
  const situationImports: Array<{ variable: string; path: string }> = [];
  for (const line of lines) {
    const importMatch = line.match(
      /import\s*{\s*(\w+)\s*}\s*from\s*["']\.\/([^"']+)["']/
    );
    if (importMatch && !line.includes("type")) {
      situationImports.push({
        variable: importMatch[1],
        path: importMatch[2],
      });
    }
  }

  // Find export array items
  const exportArray: string[] = [];
  let inExportArray = false;
  for (const line of lines) {
    if (line.includes("export const") && line.includes("SituationData[]")) {
      inExportArray = true;
      continue;
    }
    if (inExportArray) {
      if (line.includes("];")) {
        break;
      }
      const trimmed = line.trim();
      if (trimmed && !trimmed.startsWith("//") && trimmed !== "[") {
        // Extract variable name, removing comma
        const variable = trimmed.replace(/,$/, "").trim();
        if (variable) {
          exportArray.push(variable);
        }
      }
    }
  }

  return {
    typeImport: typeImportLine,
    situationImports,
    exportArray,
  };
}

/**
 * Generate updated index file content
 */
function generateUpdatedIndexContent(
  typeImport: string,
  situationImports: Array<{ variable: string; path: string }>,
  exportArrayName: string
): string {
  // Sort imports alphabetically by variable name
  const sortedImports = [...situationImports].sort((a, b) =>
    a.variable.localeCompare(b.variable)
  );

  // Build imports section
  const imports = [
    'import type { SituationDataType } from "~/lib/schemas/situations";',
    ...sortedImports.map(
      (imp) => `import { ${imp.variable} } from "./${imp.path}";`
    ),
  ];

  // Build export array
  const exportItems = sortedImports.map((imp) => `  ${imp.variable},`);

  return `${imports.join("\n")}

export const ${exportArrayName}: SituationDataType[] = [
${exportItems.join("\n")}
];
`;
}

/**
 * Update type index file with new situation
 */
async function updateTypeIndex(
  situationType: SituationType,
  situationDirectory: string,
  situationVariable: string
): Promise<{
  success: boolean;
  indexPath: string;
  error?: string;
}> {
  try {
    const baseDir = join(process.cwd(), "lib", "data", "situations", "v2");
    const typeDir = getTypeDirectory(situationType);
    const indexPath = join(baseDir, typeDir, "index.ts");

    // Get export array name
    const exportArrayName = `${kebabToCamelCase(typeDir)}SituationsData`;

    let content: string;
    let parsed: {
      typeImport: string;
      situationImports: Array<{ variable: string; path: string }>;
      exportArray: string[];
    };

    try {
      // Try to read existing index file
      content = await readFile(indexPath, "utf-8");
      parsed = parseIndexFile(content);
    } catch (error) {
      // Create new index file if it doesn't exist
      parsed = {
        typeImport:
          'import type { SituationDataType } from "~/lib/schemas/situations";',
        situationImports: [],
        exportArray: [],
      };
    }

    // Check if situation already exists
    const existingImport = parsed.situationImports.find(
      (imp) =>
        imp.variable === situationVariable || imp.path === situationDirectory
    );

    if (existingImport) {
      return {
        success: true,
        indexPath,
        error: `Situation ${situationVariable} already exists in index`,
      };
    }

    // Add new situation
    parsed.situationImports.push({
      variable: situationVariable,
      path: situationDirectory,
    });

    // Generate updated content
    const updatedContent = generateUpdatedIndexContent(
      parsed.typeImport,
      parsed.situationImports,
      exportArrayName
    );

    // Write updated index file
    await writeFile(indexPath, updatedContent);

    return {
      success: true,
      indexPath,
    };
  } catch (error) {
    return {
      success: false,
      indexPath: "",
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

/**
 * Write complete situation files to disk using v2 structure
 */
export async function writeSituationFiles(
  situation: SituationData
): Promise<{
  success: boolean;
  directoryPath: string;
  files: string[];
  error?: string;
}> {
  try {
    // Extract components from complete situation
    const { outcomes, preferences, exchanges } = extractSituationComponents(situation);

    const baseDir = join(process.cwd(), "lib", "data", "situations", "v2");
    const typeDir = getTypeDirectory(situation.type);
    const situationDir = toKebabCase(situation.title);
    const fullPath = join(baseDir, typeDir, situationDir);

    // Create directory structure
    await mkdir(fullPath, { recursive: true });
    await mkdir(join(fullPath, "exchanges"), { recursive: true });

    // Generate variable names
    const baseName = toPascalCase(situation.trigger.staticKey);
    const situationVar = toCamelCase(baseName);
    const outcomesVar = `${situationVar}Outcomes`;
    const preferencesVar = `${situationVar}Preferences`;
    const exchangesVar = `${situationVar}Exchanges`;

    const files: string[] = [];

    // Write outcomes file
    const outcomesContent = generateOutcomesFile(outcomes, outcomesVar);
    const outcomesFile = join(fullPath, `${outcomesVar}.ts`);
    await writeFile(outcomesFile, outcomesContent);
    files.push(`${outcomesVar}.ts`);

    // Write preferences file
    const preferencesContent = generatePreferencesFile(preferences, preferencesVar);
    const preferencesFile = join(fullPath, `${preferencesVar}.ts`);
    await writeFile(preferencesFile, preferencesContent);
    files.push(`${preferencesVar}.ts`);

    // Write individual exchange files
    const exchangeVariables: string[] = [];
    for (let i = 0; i < exchanges.length; i++) {
      const exchange = exchanges[i];
      const fileName = getPublicationFileName(exchange.publication);
      const varName = fileName;
      exchangeVariables.push(varName);

      const exchangeContent = generateExchangeFile(exchange, varName);
      const exchangeFile = join(fullPath, "exchanges", `${fileName}.ts`);
      await writeFile(exchangeFile, exchangeContent);
      files.push(`exchanges/${fileName}.ts`);
    }

    // Write exchanges index file
    const exchangesIndexContent = generateExchangesIndexFile(
      exchanges,
      exchangesVar,
      exchangeVariables
    );
    const exchangesIndexFile = join(fullPath, "exchanges", "index.ts");
    await writeFile(exchangesIndexFile, exchangesIndexContent);
    files.push("exchanges/index.ts");

    // Write main situation index file
    const situationIndexContent = generateSituationIndexFile(
      situation,
      situationVar,
      outcomesVar,
      preferencesVar,
      exchangesVar
    );
    const situationIndexFile = join(fullPath, "index.ts");
    await writeFile(situationIndexFile, situationIndexContent);
    files.push("index.ts");

    // Update type index file
    const indexResult = await updateTypeIndex(
      situation.type,
      situationDir,
      situationVar
    );

    if (!indexResult.success && !indexResult.error?.includes("already exists")) {
      console.warn(`⚠️ Failed to update type index: ${indexResult.error}`);
    } else if (indexResult.success) {
      console.log(`✅ Updated type index: ${indexResult.indexPath}`);
    }

    return {
      success: true,
      directoryPath: fullPath,
      files,
    };
  } catch (error) {
    return {
      success: false,
      directoryPath: "",
      files: [],
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}
