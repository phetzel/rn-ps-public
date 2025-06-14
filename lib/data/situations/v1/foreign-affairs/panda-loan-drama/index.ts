import { SituationType, SituationData } from "~/types";
import { pandaLoanDramaPreferences } from "./pandaLoanDramaPreferences";
import { pandaLoanDramaOutcomes } from "./pandaLoanDramaOutcomes";
import { pandaLoanDramaExchanges } from "./pandaLoanDramaExchanges";

export const pandaLoanDrama: SituationData = {
  trigger: {
    staticKey: "panda_loan_drama",
    type: SituationType.ForeignAffairs,
    requirements: {},
  },
  type: SituationType.ForeignAffairs,
  title: "Panda Loan Drama",
  description:
    "The administration threatens to return beloved loaned pandas unless the host zoo names them after the First Kids, stirring outcry.",
  content: {
    preferences: pandaLoanDramaPreferences,
    outcomes: pandaLoanDramaOutcomes,
  },
  exchanges: pandaLoanDramaExchanges,
};
