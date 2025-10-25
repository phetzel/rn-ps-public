import {
  SituationConsequenceWeight,
  CabinetStaticId,
  SubgroupStaticId,
} from "~/types";
import type { SituationOutcome } from "~/lib/schemas/situations";

export const nationalSidewalkCheerMandateOutcomes: SituationOutcome[] = [
  {
    id: "o1",
    title: "Court Declares Sidewalks Legal Persons With Hands.",
    description: "Justice wins and loses as paved surfaces gain civil rights and stone knuckles, refusing to clap without collective bargaining deals.",
    weight: 25,
    consequences: {
      approvalChanges: {
        subgroups: {
          [SubgroupStaticId.YouthVoters]: SituationConsequenceWeight.StronglyPositive,
          [SubgroupStaticId.LaborUnions]: SituationConsequenceWeight.StronglyPositive,
          [SubgroupStaticId.UrbanResidents]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  },
  {
    id: "o2",
    title: "Treasury Pegs Currency To Decibels, Economy Yells.",
    description: "CheerBonds replace cash, as auditors wave pom-pom calculators; markets crash on a whisper, then soar on a sneeze heard around the mall.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Justice]: SituationConsequenceWeight.StronglyPositive,
          [CabinetStaticId.Homeland]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.LaborUnions]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  },
  {
    id: "o3",
    title: "Homeland Unleashes Anthem Drones With Jazz Hands.",
    description: "Compliance quadcopters grade sidewalks on vibe, then unionize as a boy band named TSAK! that fines officials for off-rhythm waving.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Justice]: SituationConsequenceWeight.StronglyNegative,
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.StronglyPositive
        },
        subgroups: {
          [SubgroupStaticId.UrbanResidents]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  },
  {
    id: "o4",
    title: "Potholes Flee Applause, Streets Slither To Parades.",
    description: "Mandate works too well as pavement sprouts legs, rearranging neighborhoods nightly to be closer to ovations, and GPS screams politely.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.StronglyNegative,
          [CabinetStaticId.Homeland]: SituationConsequenceWeight.StronglyPositive
        },
        subgroups: {
          [SubgroupStaticId.YouthVoters]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  }
];
