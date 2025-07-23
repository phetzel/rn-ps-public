import { readFile, writeFile } from "fs/promises";
import { join } from "path";
import { SituationType } from "~/types";

// ═══════════════════════════════════════════════════════════════════════════════
// INDEX FILE UPDATE UTILITIES FOR PHASE 5
// ═══════════════════════════════════════════════════════════════════════════════

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
        line.includes("import type") && line.includes("SituationDataType")
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
    if (line.includes("export const") && line.includes("SituationDataType[]")) {
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

export const ${exportArrayName}: SituationDataType[] = [
${exportItems.join("\n")}
];
`;
}

/**
 * Update type index file with new situation
 */
export async function updateTypeIndex(
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
