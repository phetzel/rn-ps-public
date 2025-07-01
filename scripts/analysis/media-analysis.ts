import { situationsData } from "~/lib/data/situations";
import { SituationType } from "~/types";
import { getMetadataSection } from "../util/file-utils";

export interface MediaAnalysisData {
  publicationDistribution: Record<string, number>;
  publicationSituationTypes: Record<
    string,
    Partial<Record<SituationType, number>>
  >;
}

/**
 * Analyzes media-related data from all situations
 */
export function analyzeMediaData(): MediaAnalysisData {
  const publicationDistribution: Record<string, number> = {};
  const publicationSituationTypes: Record<
    string,
    Partial<Record<SituationType, number>>
  > = {};

  situationsData.forEach((situation) => {
    situation.exchanges.forEach((exchange) => {
      if (!publicationDistribution[exchange.publication]) {
        publicationDistribution[exchange.publication] = 0;
        publicationSituationTypes[exchange.publication] = {};
      }
      publicationDistribution[exchange.publication]++;

      // Count situation type distribution per publication
      const pubTypes = publicationSituationTypes[exchange.publication];
      if (!pubTypes[situation.type]) {
        pubTypes[situation.type] = 0;
      }
      pubTypes[situation.type]!++;
    });
  });

  return { publicationDistribution, publicationSituationTypes };
}

/**
 * Generates markdown content for media analysis
 */
export function generateMediaMarkdown(): string {
  const mediaData = analyzeMediaData();
  let content = getMetadataSection(situationsData.length);

  content += `## Media

### General Distribution
`;

  const totalExchanges = Object.values(
    mediaData.publicationDistribution
  ).reduce((sum, count) => sum + count, 0);

  Object.entries(mediaData.publicationDistribution).forEach(
    ([publication, count]) => {
      const percentage = ((count / totalExchanges) * 100).toFixed(1);
      content += `- **${publication}:** ${count} exchanges (${percentage}%)\n`;
    }
  );

  content += `\n`;

  // Individual publication analysis
  Object.entries(mediaData.publicationSituationTypes).forEach(
    ([publication, situationTypes]) => {
      const publicationTotal = mediaData.publicationDistribution[publication];

      content += `### ${publication.toUpperCase()}

#### Situation Type Distribution
`;
      Object.entries(situationTypes).forEach(([situationType, count]) => {
        const percentage =
          publicationTotal > 0
            ? ((count! / publicationTotal) * 100).toFixed(1)
            : "0.0";
        content += `- ${situationType}: ${count} (${percentage}%)\n`;
      });

      content += `\n`;
    }
  );

  return content;
}
