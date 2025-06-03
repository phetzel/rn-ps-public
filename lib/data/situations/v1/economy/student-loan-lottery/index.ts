import { SituationType, SituationData } from "~/types";
import { studentLoanLotteryPreferences } from "./studentLoanLotteryPreferences";
import { studentLoanLotteryOutcomes } from "./studentLoanLotteryOutcomes";
import { studentLoanLotteryExchanges } from "./studentLoanLotteryExchanges";

export const studentLoanLottery: SituationData = {
  trigger: {
    staticKey: "student_loan_lottery",
    type: SituationType.Economy,
    requirements: { year: { min: 1, max: 4 } },
  },
  type: SituationType.Economy,
  title: "Student Loan Lottery",
  description:
    "Administration launches a debt-forgiveness lottery, sparking hope for winners and outrage over ‘tuition bingo.’",
  content: {
    preferences: studentLoanLotteryPreferences,
    outcomes: studentLoanLotteryOutcomes,
  },
  exchanges: studentLoanLotteryExchanges,
};
