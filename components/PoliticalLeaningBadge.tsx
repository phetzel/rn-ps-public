import { Badge } from "~/components/ui/badge";
import { Text } from "~/components/ui/text";
import { PoliticalLeaning, PoliticalParty } from "~/types";

interface PoliticalLeaningBadgeProps {
  politicalLeaning: PoliticalLeaning | PoliticalParty;
}

export default function PoliticalLeaningBadge({
  politicalLeaning,
}: PoliticalLeaningBadgeProps) {
  const getPoliticalLeaningBGColor = (
    leaning: PoliticalLeaning | PoliticalParty
  ): string => {
    switch (leaning) {
      case PoliticalLeaning.Liberal:
      case PoliticalParty.Democrat:
        return "bg-blue-100";
      case PoliticalLeaning.Conservative:
      case PoliticalParty.Republican:
        return "bg-red-100";
      case PoliticalLeaning.Neutral:
      default:
        return "bg-gray-100";
    }
  };

  const getPoliticalLeaningTextColor = (
    leaning: PoliticalLeaning | PoliticalParty
  ): string => {
    switch (leaning) {
      case PoliticalLeaning.Liberal:
      case PoliticalParty.Democrat:
        return "text-blue-800";
      case PoliticalLeaning.Conservative:
      case PoliticalParty.Republican:
        return "text-red-800";
      case PoliticalLeaning.Neutral:
      default:
        return "text-gray-800";
    }
  };

  const formatPoliticalLeaning = (
    leaning: PoliticalLeaning | PoliticalParty
  ): string => {
    return leaning.charAt(0).toUpperCase() + leaning.slice(1);
  };

  return (
    <Badge className={getPoliticalLeaningBGColor(politicalLeaning)}>
      <Text className={getPoliticalLeaningTextColor(politicalLeaning)}>
        {formatPoliticalLeaning(politicalLeaning)}
      </Text>
    </Badge>
  );
}
