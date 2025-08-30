import { writeFile, mkdir, readFile } from "fs/promises";
import { join } from "path";
import { z } from "zod";
import {
  SituationType,
  CabinetStaticId,
  SubgroupStaticId,
  PublicationStaticId,
  AnswerType,
  ExchangeImpactWeight,
  OutcomeModifierWeight,
  SituationConsequenceWeight,
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

/**
 * Generate outcomes file content
 */
function generateOutcomesFile(
  outcomes: SituationOutcome[],
  variableName: string
): string {
  const cabKey = (k: string) => {
    const map: Record<string, string> = {
      state: "CabinetStaticId.State",
      treasury: "CabinetStaticId.Treasury",
      defense: "CabinetStaticId.Defense",
      justice: "CabinetStaticId.Justice",
      hhs: "CabinetStaticId.HHS",
      homeland: "CabinetStaticId.Homeland",
    };
    return map[k] ?? `CabinetStaticId.${k}`;
  };
  const subgroupKey = (k: string) => {
    const map: Record<string, string> = {
      left_wing_base: "SubgroupStaticId.LeftWingBase",
      right_wing_base: "SubgroupStaticId.RightWingBase",
      independent_base: "SubgroupStaticId.IndependentBase",
      youth_voters: "SubgroupStaticId.YouthVoters",
      seniors_citizens: "SubgroupStaticId.SeniorsCitizens",
      rural_residents: "SubgroupStaticId.RuralResidents",
      urban_residents: "SubgroupStaticId.UrbanResidents",
      labor_unions: "SubgroupStaticId.LaborUnions",
      business_leaders: "SubgroupStaticId.BusinessLeaders",
      tech_industry: "SubgroupStaticId.TechIndustry",
    };
    return map[k] ?? `SubgroupStaticId.${k}`;
  };
  const consWeight = (n: number) => {
    if (n >= 13) return "SituationConsequenceWeight.StronglyPositive";
    if (n >= 9) return "SituationConsequenceWeight.Positive";
    if (n >= 4) return "SituationConsequenceWeight.SlightlyPositive";
    if (n <= -13) return "SituationConsequenceWeight.StronglyNegative";
    if (n <= -9) return "SituationConsequenceWeight.Negative";
    if (n <= -4) return "SituationConsequenceWeight.SlightlyNegative";
    return "SituationConsequenceWeight.Neutral";
  };

  const items = outcomes
    .map((o) => {
      const cabEntries = o.consequences?.approvalChanges?.cabinet
        ? Object.entries(o.consequences.approvalChanges.cabinet).map(
            ([k, v]) => `          [${cabKey(k)}]: ${consWeight(v as any)},`
          )
        : [];

      const subgroupEntries = o.consequences?.approvalChanges?.subgroups
        ? Object.entries(o.consequences.approvalChanges.subgroups).map(
            ([k, v]) => `          [${subgroupKey(k)}]: ${consWeight(v as any)},`
          )
        : [];

      const cabBlock = cabEntries.length
        ? `        cabinet: {
${cabEntries.join("\n")}
        },\n`
        : "";
      const subgroupBlock = subgroupEntries.length
        ? `        subgroups: {
${subgroupEntries.join("\n")}
        },\n`
        : "";

      return `  {
    id: ${JSON.stringify(o.id)},
    title: ${JSON.stringify(o.title)},
    description: ${JSON.stringify(o.description)},
    weight: ${o.weight},
    consequences: {
      approvalChanges: {
${cabBlock}${subgroupBlock}      },
    },
  }`;
    })
    .join(",\n");

  return `import {
  SituationConsequenceWeight,
  CabinetStaticId,
  SubgroupStaticId,
} from "~/types";
import type { SituationOutcome } from "~/lib/schemas/situations";

export const ${variableName}: SituationOutcome[] = [
${items}
];
`;
}

/**
 * Generate preferences file content
 */
function generatePreferencesFile(
  preferences: SituationPreferences,
  variableName: string
): string {
  const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
  const answerTypeEnum = (s: string) => `AnswerType.${cap(s)}`;
  const cabKey = (k: string) => {
    const map: Record<string, string> = {
      state: "CabinetStaticId.State",
      treasury: "CabinetStaticId.Treasury",
      defense: "CabinetStaticId.Defense",
      justice: "CabinetStaticId.Justice",
      hhs: "CabinetStaticId.HHS",
      homeland: "CabinetStaticId.Homeland",
    };
    return map[k] ?? `CabinetStaticId.${k}`;
  };

  const pres = preferences.president;
  const presBlock = `  president: {
    answerType: ${answerTypeEnum((pres as any).answerType)},
    rationale: ${JSON.stringify(pres ? pres.rationale : null)},
  },`;

  const cab = preferences.cabinet || {};
  const cabEntries = Object.entries(cab).map(([k, v]) => {
    const pref = (v as any).preference;
    const auth = (v as any).authorizedContent;
    const lines = [
      `    [${cabKey(k)}]: {`,
      `      preference: {`,
      `        answerType: ${answerTypeEnum(pref.answerType)},`,
      `        rationale: ${JSON.stringify(pref.rationale)},`,
      `      },`,
    ];
    if (auth) lines.push(`      authorizedContent: ${JSON.stringify(auth)},`);
    lines.push(`    },`);
    return lines.join("\n");
  });

  const cabBlock = cabEntries.length
    ? `  cabinet: {
${cabEntries.join("\n")}  },`
    : "";

  return `import { AnswerType, CabinetStaticId, type SituationPreferences } from "~/types";

export const ${variableName}: SituationPreferences = {
${presBlock}
${cabBlock}
};
`;
}

/**
 * Generate individual exchange file content
 */
function generateExchangeFile(
  exchange: ExchangeData,
  variableName: string
): string {
  // Start from JSON and progressively transform to idiomatic TS with enums
  let body = JSON.stringify(exchange, null, 2);

  // Map publication string to PublicationStaticId enum
  const pubMap: Record<string, string> = {
    lib_primary: "PublicationStaticId.LibPrimary",
    con_primary: "PublicationStaticId.ConPrimary",
    independent_primary: "PublicationStaticId.IndependentPrimary",
    investigative: "PublicationStaticId.Investigative",
  };
  body = body.replace(/"publication"\s*:\s*"(lib_primary|con_primary|independent_primary|investigative)"/g, (_m, p1) => {
    return `publication: ${pubMap[p1]}`;
  });

  // Map answer type strings to AnswerType enum
  const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
  body = body.replace(/"type"\s*:\s*"(deflect|reassure|challenge|admit|deny|inform|authorized)"/g, (_m, p1) => {
    return `type: AnswerType.${cap(p1)}`;
  });

  // Map authorizedCabinetMemberId strings to CabinetStaticId enum
  const cabMap: Record<string, string> = {
    state: "CabinetStaticId.State",
    treasury: "CabinetStaticId.Treasury",
    defense: "CabinetStaticId.Defense",
    justice: "CabinetStaticId.Justice",
    hhs: "CabinetStaticId.HHS",
    homeland: "CabinetStaticId.Homeland",
  };
  body = body.replace(/"authorizedCabinetMemberId"\s*:\s*"(state|treasury|defense|justice|hhs|homeland)"/g, (_m, p1) => {
    return `authorizedCabinetMemberId: ${cabMap[p1]}`;
  });

  // Map impact weights numbers to ExchangeImpactWeight enum when they match exactly known values
  const weightMap: Record<string, string> = {
    "6": "ExchangeImpactWeight.StronglyPositive",
    "4": "ExchangeImpactWeight.Positive",
    "2": "ExchangeImpactWeight.SlightlyPositive",
    "0": "ExchangeImpactWeight.Neutral",
    "-2": "ExchangeImpactWeight.SlightlyNegative",
    "-4": "ExchangeImpactWeight.Negative",
    "-6": "ExchangeImpactWeight.StronglyNegative",
  };
  body = body.replace(/"weight"\s*:\s*(-?\d+)/g, (_m, p1) => {
    return weightMap[p1] ? `weight: ${weightMap[p1]}` : `weight: ${p1}`;
  });

  // Map outcomeModifiers values to OutcomeModifierWeight enum (best-fit buckets)
  const outWeight = (n: number) => {
    if (n >= 11) return "OutcomeModifierWeight.MajorPositive";
    if (n >= 7) return "OutcomeModifierWeight.StrongPositive";
    if (n >= 5) return "OutcomeModifierWeight.ModeratePositive";
    if (n >= 1) return "OutcomeModifierWeight.SlightPositive";
    if (n <= -11) return "OutcomeModifierWeight.MajorNegative";
    if (n <= -7) return "OutcomeModifierWeight.StrongNegative";
    if (n <= -5) return "OutcomeModifierWeight.ModerateNegative";
    if (n <= -1) return "OutcomeModifierWeight.SlightNegative";
    return "OutcomeModifierWeight.Neutral";
  };
  body = body.replace(/("outcomeModifiers"\s*:\s*\{)([\s\S]*?)(\})/g, (_m, p1, p2, p3) => {
    const replaced = p2.replace(/:\s*(-?\d+)/g, (_m2: string, n: string) => `: ${outWeight(parseInt(n, 10))}`);
    return `${p1}${replaced}${p3}`;
  });

  // Finally, remove quotes around object keys for cleaner TS
  body = body.replace(/"([a-zA-Z_][a-zA-Z0-9_]*)":/g, "$1:");

  return `import {
  AnswerType,
  ExchangeImpactWeight,
  OutcomeModifierWeight,
  CabinetStaticId,
  PublicationStaticId,
} from "~/types";
import type { ExchangeData } from "~/lib/schemas/exchanges";

export const ${variableName}: ExchangeData = ${body};
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

  return `import { SituationType, type SituationData } from "~/types";
import { ${outcomesVar} } from "./${outcomesVar}";
import { ${preferencesVar} } from "./${preferencesVar}";
import { ${exchangesVar} } from "./exchanges";

export const ${variableName}: SituationData = {
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
    typeImport,
    ...sortedImports.map(
      (imp) => `import { ${imp.variable} } from "./${imp.path}";`
    ),
  ];

  // Build export array
  const exportItems = sortedImports.map((imp) => `  ${imp.variable},`);

  return `${imports.join("\n")}

export const ${exportArrayName}: SituationData[] = [
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
          'import type { SituationData } from "~/types";',
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
