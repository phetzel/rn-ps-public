import { Badge } from '~/components/ui/badge';
import { Text } from '~/components/ui/text';
import { PoliticalLeaning } from '~/types';

interface PoliticalLeaningBadgeProps {
  politicalLeaning: PoliticalLeaning;
}

export default function PoliticalLeaningBadge({ politicalLeaning }: PoliticalLeaningBadgeProps) {
  const getPoliticalLeaningBGColor = (leaning: PoliticalLeaning): string => {
    switch (leaning) {
      case PoliticalLeaning.Liberal:
        return 'bg-blue-100 border border-blue-300';
      case PoliticalLeaning.Conservative:
        return 'bg-red-100 border border-red-300';
      case PoliticalLeaning.Neutral:
      default:
        return 'bg-gray-100';
    }
  };

  const getPoliticalLeaningTextColor = (leaning: PoliticalLeaning): string => {
    switch (leaning) {
      case PoliticalLeaning.Liberal:
        return 'text-blue-800';
      case PoliticalLeaning.Conservative:
        return 'text-red-800';
      case PoliticalLeaning.Neutral:
      default:
        return 'text-gray-800';
    }
  };

  const formatPoliticalLeaning = (leaning: PoliticalLeaning): string => {
    return leaning.charAt(0).toUpperCase() + leaning.slice(1);
  };

  return (
    <Badge
      className={getPoliticalLeaningBGColor(politicalLeaning)}
      accessibilityLabel={`Political leaning: ${formatPoliticalLeaning(politicalLeaning)}`}
    >
      <Text className={getPoliticalLeaningTextColor(politicalLeaning)}>
        {formatPoliticalLeaning(politicalLeaning)}
      </Text>
    </Badge>
  );
}
