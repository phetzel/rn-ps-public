import {
  SituationConsequenceWeight,
  CabinetStaticId,
  SubgroupStaticId,
} from "~/types";
import type { SituationOutcome } from "~/lib/schemas/situations";

export const sentientEnvelopeScandalOutcomes: SituationOutcome[] = [
  {
    id: "o1",
    title: "President Debates Envelope on Live Shredder Stage.",
    description: "The President challenges the thank-you to a televised ethics duel; focus group snacks win, ratings surge, and both bases boo ironically.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.StronglyPositive,
          [CabinetStaticId.Justice]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.RightWingBase]: SituationConsequenceWeight.StronglyPositive,
          [SubgroupStaticId.LeftWingBase]: SituationConsequenceWeight.StronglyNegative,
          [SubgroupStaticId.UrbanResidents]: SituationConsequenceWeight.StronglyPositive
        }
      }
    }
  },
  {
    id: "o2",
    title: "Ministry of Judgery Cross-Examines Its Postal Accuser.",
    description: "Judgery honchos quiz flap and glue; the envelope pleads 'sealed,' then whispers thank-yous as staplers deputize and police the docket.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Justice]: SituationConsequenceWeight.StronglyPositive,
          [CabinetStaticId.HHS]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.LeftWingBase]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  },
  {
    id: "o3",
    title: "Envelope Unionizes Stationery; Government Papers Strike.",
    description: "Envelope forms a Stationery Guild; files strike, pens down ink, and laws are scribbled on fruit until Health-Humanish bans papercuts.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.HHS]: SituationConsequenceWeight.StronglyPositive,
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.LeftWingBase]: SituationConsequenceWeight.StronglyPositive,
          [SubgroupStaticId.RightWingBase]: SituationConsequenceWeight.StronglyNegative,
          [SubgroupStaticId.UrbanResidents]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  },
  {
    id: "o4",
    title: "Treasury Declares Envelopes Legal Tender for Truth.",
    description: "Treasury-ish officials peg truth to postage; markets trade on lickability futures, and the budget is balanced in commemorative stamps.",
    weight: 25,
    consequences: {
      approvalChanges: {
        subgroups: {
          [SubgroupStaticId.RightWingBase]: SituationConsequenceWeight.StronglyPositive,
          [SubgroupStaticId.LeftWingBase]: SituationConsequenceWeight.StronglyNegative,
          [SubgroupStaticId.UrbanResidents]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  }
];
