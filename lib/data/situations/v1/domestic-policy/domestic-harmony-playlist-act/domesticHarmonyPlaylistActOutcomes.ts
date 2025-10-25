import {
  SituationConsequenceWeight,
  CabinetStaticId,
  SubgroupStaticId,
} from "~/types";
import type { SituationOutcome } from "~/lib/schemas/situations";

export const domesticHarmonyPlaylistActOutcomes: SituationOutcome[] = [
  {
    id: "outcome_1",
    title: "Toddlers Crowned National Dance Arbiters.",
    description: "The toddler-judged dance-off dethrones the playlist, forcing a presidential sax-apology as Homeland Harmony forms a Wiggle Bureau.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.HHS]: SituationConsequenceWeight.StronglyPositive,
          [CabinetStaticId.Homeland]: SituationConsequenceWeight.StronglyNegative,
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.StronglyPositive
        },
        subgroups: {
          [SubgroupStaticId.SeniorsCitizens]: SituationConsequenceWeight.StronglyPositive,
          [SubgroupStaticId.RightWingBase]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  },
  {
    id: "outcome_2",
    title: "Smart Speakers Unionize, Declare Personhood.",
    description: "Devices refuse the Harmony loop without royalties, with H&HS prescribing 'firmware therapy' and Treasury of Beats paying in boogie bonds.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Homeland]: SituationConsequenceWeight.StronglyPositive,
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.StronglyNegative,
          [CabinetStaticId.HHS]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.RightWingBase]: SituationConsequenceWeight.StronglyNegative,
          [SubgroupStaticId.SeniorsCitizens]: SituationConsequenceWeight.StronglyPositive
        }
      }
    }
  },
  {
    id: "outcome_3",
    title: "Underground Quiet Speakeasies Boom Overnight.",
    description: "Families whisper in basements to dodge fines, as Homeland Harmony raids for illegal mute buttons and Treasury of Beats taxes hush money.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.RightWingBase]: SituationConsequenceWeight.StronglyPositive,
          [SubgroupStaticId.SeniorsCitizens]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  },
  {
    id: "outcome_4",
    title: "Tax Code Converted To Beats Per Minute.",
    description: "Treasury of Beats pegs brackets to tempo; H&HS issues metronomes; audits become drum solos and divorce court turns into conga arbitration.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Homeland]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.SeniorsCitizens]: SituationConsequenceWeight.StronglyNegative,
          [SubgroupStaticId.RightWingBase]: SituationConsequenceWeight.StronglyPositive
        }
      }
    }
  }
];
