import fs from "fs";
import path from "path";

/**
 * Ensures that a directory exists, creating it recursively if it doesn't
 */
export function ensureDirectoryExists(dirPath: string): void {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

/**
 * Writes content to a markdown file and logs the operation
 */
export function writeMarkdownFile(filePath: string, content: string): void {
  fs.writeFileSync(filePath, content, "utf8");
  console.log(`📄 Generated: ${filePath}`);
}

/**
 * Gets the standard metadata section for analysis reports
 */
export function getMetadataSection(totalSituations: number): string {
  return `# Entity Analysis Report
**Generated:** ${new Date().toLocaleString()}  
**Total Situations Analyzed:** ${totalSituations}  

---

`;
}

/**
 * Creates the standard analysis output directory structure
 */
export function createAnalysisDirectories(): {
  outputDir: string;
  entityDataDir: string;
  situationDataDir: string;
  situationsDir: string;
} {
  const outputDir = path.join(process.cwd(), "scripts", "analysis-output");
  const entityDataDir = path.join(outputDir, "entity-data");
  const situationDataDir = path.join(outputDir, "situation-data");
  const situationsDir = path.join(outputDir, "situations");

  ensureDirectoryExists(entityDataDir);
  ensureDirectoryExists(situationDataDir);
  ensureDirectoryExists(situationsDir);

  return {
    outputDir,
    entityDataDir,
    situationDataDir,
    situationsDir,
  };
}
