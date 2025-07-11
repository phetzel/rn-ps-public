import {
  SituationConsequenceWeight,
  CabinetStaticId,
  SubgroupStaticId,
} from "~/types";
import type { SituationOutcome } from "~/types";

export const fakeAlienAlertOutcomes: SituationOutcome[] = [
  {
    id: "outcome_alert_shelved",
    title: "Fake Alert Plan Immediately Shelved",
    description:
      "After the leak, public and congressional outrage forces the administration to immediately and publicly scrap the 'readiness test' idea.",
    weight: 35,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.HHS]: SituationConsequenceWeight.SlightlyPositive,
        },
        subgroups: {
          [SubgroupStaticId.IndependentBase]:
            SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.SeniorsCitizens]:
            SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.LeftWingBase]:
            SituationConsequenceWeight.SlightlyPositive,
        },
      },
    },
  },
  {
    id: "outcome_alert_panic",
    title: "Leaked Memo Sparks Widespread Panic",
    description:
      "The leaked plan causes real panic. Citizens, believing an invasion is imminent, begin hoarding supplies, causing chaos and hurting trust.",
    weight: 45,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Homeland]: SituationConsequenceWeight.Negative,
          [CabinetStaticId.HHS]: SituationConsequenceWeight.Negative,
          [CabinetStaticId.Defense]:
            SituationConsequenceWeight.SlightlyNegative,
        },
        subgroups: {
          [SubgroupStaticId.IndependentBase]:
            SituationConsequenceWeight.Negative,
          [SubgroupStaticId.SeniorsCitizens]:
            SituationConsequenceWeight.StronglyNegative,
          [SubgroupStaticId.RuralResidents]:
            SituationConsequenceWeight.SlightlyNegative,
          [SubgroupStaticId.YouthVoters]:
            SituationConsequenceWeight.SlightlyNegative,
          [SubgroupStaticId.RightWingBase]:
            SituationConsequenceWeight.SlightlyNegative,
        },
      },
    },
  },
  {
    id: "outcome_alert_funding_pass",
    title: "Fear Mongering Works, Funding Bill Passes",
    description:
      "Despite the unethical nature of the plan, the resulting fear convinces Congress to pass a massive funding bill with bipartisan support.",
    weight: 20,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Defense]: SituationConsequenceWeight.Positive,
          [CabinetStaticId.Treasury]:
            SituationConsequenceWeight.SlightlyNegative,
        },
        subgroups: {
          [SubgroupStaticId.RightWingBase]: SituationConsequenceWeight.Positive,
          [SubgroupStaticId.BusinessLeaders]:
            SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.LeftWingBase]: SituationConsequenceWeight.Negative,
          [SubgroupStaticId.IndependentBase]:
            SituationConsequenceWeight.SlightlyNegative,
        },
      },
    },
  },
];
