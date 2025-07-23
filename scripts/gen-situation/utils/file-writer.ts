import { writeFile, mkdir } from "fs/promises";
import { join } from "path";
import { updateTypeIndex } from "./index-updater";
import {
  SituationType,
  CabinetStaticId,
  SubgroupStaticId,
  PublicationStaticId,
  AnswerType,
  ExchangeImpactWeight,
  OutcomeModifierWeight,
  SituationConsequenceWeight,
} from "~/types";
import type {
  SituationDataType,
  SituationOutcome,
  SituationPreferences,
} from "~/lib/schemas/situations";
import type { ExchangeData } from "~/lib/schemas/exchanges";

// ═══════════════════════════════════════════════════════════════════════════════
// FILE WRITING UTILITIES FOR PHASE 5
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * Convert camelCase to kebab-case for file names
 */
function toKebabCase(str: string): string {
  return str
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");
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
 * Convert PascalCase to camelCase for variable names
 */
function toCamelCase(str: string): string {
  return str.charAt(0).toLowerCase() + str.slice(1);
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
 * Generate outcomes file content
 */
function generateOutcomesFile(
  outcomes: SituationOutcome[],
  variableName: string
): string {
  return `import {
  SituationConsequenceWeight,
  CabinetStaticId,
  SubgroupStaticId,
} from "~/types";
import type { SituationOutcome } from "~/lib/schemas/situations";

export const ${variableName}: SituationOutcome[] = ${JSON.stringify(
    outcomes,
    null,
    2
  )
    .replace(/"([A-Z][a-zA-Z]+)":/g, "$1:")
    .replace(/: "([A-Z][a-zA-Z]+\.[\w]+)"/g, ": $1")
    .replace(/SituationConsequenceWeight\./g, "SituationConsequenceWeight.")
    .replace(/CabinetStaticId\./g, "CabinetStaticId.")
    .replace(/SubgroupStaticId\./g, "SubgroupStaticId.")};
`;
}

/**
 * Generate preferences file content
 */
function generatePreferencesFile(
  preferences: SituationPreferences,
  variableName: string
): string {
  return `import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/lib/schemas/situations";

export const ${variableName}: SituationPreferences = ${JSON.stringify(
    preferences,
    null,
    2
  )
    .replace(/: "([A-Z][a-zA-Z]+\.[\w]+)"/g, ": $1")
    .replace(/AnswerType\./g, "AnswerType.")
    .replace(/CabinetStaticId\./g, "CabinetStaticId.")};
`;
}

/**
 * Generate individual exchange file content
 */
function generateExchangeFile(
  exchange: ExchangeData,
  variableName: string
): string {
  return `import {
  AnswerType,
  ExchangeImpactWeight,
  OutcomeModifierWeight,
  CabinetStaticId,
  PublicationStaticId,
} from "~/types";
import type { ExchangeData } from "~/lib/schemas/exchanges";

export const ${variableName}: ExchangeData = ${JSON.stringify(exchange, null, 2)
    .replace(/: "([A-Z][a-zA-Z]+\.[\w]+)"/g, ": $1")
    .replace(/AnswerType\./g, "AnswerType.")
    .replace(/ExchangeImpactWeight\./g, "ExchangeImpactWeight.")
    .replace(/OutcomeModifierWeight\./g, "OutcomeModifierWeight.")
    .replace(/CabinetStaticId\./g, "CabinetStaticId.")
    .replace(/PublicationStaticId\./g, "PublicationStaticId.")};
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
 * Get publication file name
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
  situationData: SituationDataType,
  variableName: string,
  outcomesVar: string,
  preferencesVar: string,
  exchangesVar: string
): string {
  const typeEnumName = getSituationTypeEnumName(
    situationData.type as SituationType
  );

  return `import { SituationType } from "~/types";
import type { SituationDataType } from "~/lib/schemas/situations";
import { ${outcomesVar} } from "./${outcomesVar}";
import { ${preferencesVar} } from "./${preferencesVar}";
import { ${exchangesVar} } from "./exchanges";

export const ${variableName}: SituationDataType = {
  trigger: {
    staticKey: "${situationData.trigger.staticKey}",
    type: SituationType.${typeEnumName},
    requirements: {},
  },
  type: SituationType.${typeEnumName},
  title: "${situationData.title}",
  description: "${situationData.description}",
  content: {
    outcomes: ${outcomesVar},
    preferences: ${preferencesVar},
  },
  exchanges: ${exchangesVar},
};
`;
}

/**
 * Write complete situation files to disk
 */
export async function writeSituationFiles(
  situationData: SituationDataType,
  outcomes: SituationOutcome[],
  preferences: SituationPreferences,
  exchanges: ExchangeData[]
): Promise<{
  success: boolean;
  directoryPath: string;
  files: string[];
  error?: string;
}> {
  try {
    const baseDir = join(process.cwd(), "lib", "data", "situations", "v2");
    const typeDir = getTypeDirectory(situationData.type as SituationType);
    const situationDir = toKebabCase(situationData.title);
    const fullPath = join(baseDir, typeDir, situationDir);

    // Create directory structure
    await mkdir(fullPath, { recursive: true });
    await mkdir(join(fullPath, "exchanges"), { recursive: true });

    // Generate variable names
    const baseName = toPascalCase(situationData.trigger.staticKey);
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
    const preferencesContent = generatePreferencesFile(
      preferences,
      preferencesVar
    );
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
      situationData,
      situationVar,
      outcomesVar,
      preferencesVar,
      exchangesVar
    );
    const situationIndexFile = join(fullPath, "index.ts");
    await writeFile(situationIndexFile, situationIndexContent);
    files.push("index.ts");

    // Step 6: Update type index file
    const indexResult = await updateTypeIndex(
      situationData.type as SituationType,
      situationDir,
      situationVar
    );

    if (
      !indexResult.success &&
      !indexResult.error?.includes("already exists")
    ) {
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
